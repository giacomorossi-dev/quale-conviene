import { useEffect } from "react";

/**
 * Registers /sw.js once on mount. Dev-disabled: the Vite dev server is fine
 * without a SW and a stale precache would just confuse hot reload.
 */
export default function ServiceWorkerRegister() {
	useEffect(() => {
		if (typeof window === "undefined") return;
		if (!("serviceWorker" in navigator)) return;
		if (import.meta.env.DEV) return;

		const onLoad = () => {
			navigator.serviceWorker.register("/sw.js").catch((err) => {
				// Non-fatal — the app works without it, the user just loses offline.
				// biome-ignore lint/suspicious/noConsole: surface SW registration failures only
				console.warn("SW registration failed:", err);
			});
		};

		if (document.readyState === "complete") {
			onLoad();
		} else {
			window.addEventListener("load", onLoad, { once: true });
			return () => window.removeEventListener("load", onLoad);
		}
	}, []);

	return null;
}
