/*
 * Quale Conviene — service worker
 *
 * Strategy:
 *  - HTML: network-first, fall back to cached shell when offline (so users
 *    keep using the comparator on a flaky connection).
 *  - Hashed Vite assets (/_build/, /assets/, fingerprinted .js/.css):
 *    cache-first. Filenames carry the content hash, so a deploy invalidates
 *    the cache via the URL — no manual versioning needed for these.
 *  - Static brand assets (icons, og-image, manifest): cache-first too.
 *
 * Bump CACHE_VERSION whenever you change SW logic (not assets) — old caches
 * are dropped on activate.
 */

const CACHE_VERSION = "qc-v1";
const SHELL_URLS = ["/", "/manifest.json", "/favicon.svg"];

self.addEventListener("install", (event) => {
	event.waitUntil(
		caches.open(CACHE_VERSION).then((cache) => cache.addAll(SHELL_URLS)),
	);
	self.skipWaiting();
});

self.addEventListener("activate", (event) => {
	event.waitUntil(
		caches.keys().then((keys) =>
			Promise.all(
				keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k)),
			),
		),
	);
	self.clients.claim();
});

function isHashedAsset(url) {
	// Vite emits files like `/assets/index-A1B2C3D4.js` with an 8+ char hash.
	return /\/assets\/.+-[A-Za-z0-9_]{6,}\.(js|css|woff2?|svg|png|webp|avif)$/.test(
		url.pathname,
	);
}

function isStaticBrandAsset(url) {
	return /^\/(favicon\.svg|favicon-\d+x\d+\.png|apple-touch-icon\.png|icon-\d+(-maskable)?\.png|og-image\.png|manifest\.json)$/.test(
		url.pathname,
	);
}

self.addEventListener("fetch", (event) => {
	const req = event.request;
	if (req.method !== "GET") return;

	const url = new URL(req.url);
	// Only handle same-origin requests; let fonts/Cloudflare beacons fall through.
	if (url.origin !== self.location.origin) return;

	const isHtml = req.headers.get("accept")?.includes("text/html");

	if (isHtml) {
		event.respondWith(
			fetch(req)
				.then((res) => {
					const clone = res.clone();
					caches.open(CACHE_VERSION).then((c) => c.put("/", clone));
					return res;
				})
				.catch(() => caches.match("/").then((r) => r || Response.error())),
		);
		return;
	}

	if (isHashedAsset(url) || isStaticBrandAsset(url)) {
		event.respondWith(
			caches.match(req).then(
				(cached) =>
					cached ||
					fetch(req).then((res) => {
						if (res.ok) {
							const clone = res.clone();
							caches.open(CACHE_VERSION).then((c) => c.put(req, clone));
						}
						return res;
					}),
			),
		);
	}
});
