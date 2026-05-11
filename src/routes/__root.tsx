import { TanStackDevtools } from "@tanstack/react-devtools";
import {
	createRootRoute,
	HeadContent,
	Link,
	Outlet,
	Scripts,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import BuyMeCoffee from "#/components/BuyMeCoffee.tsx";
import Logo from "#/components/Logo.tsx";
import ServiceWorkerRegister from "#/components/ServiceWorkerRegister.tsx";
import ThemeToggle from "#/components/ThemeToggle.tsx";
import { CLOUDFLARE_ANALYTICS_TOKEN, SITE_NAME } from "#/lib/seo.ts";
import appCss from "../styles.css?url";

// Runs synchronously before hydration so the .dark class is applied before
// first paint — no white-flash for users with the dark theme saved.
const THEME_BOOTSTRAP = `(function(){try{var t=localStorage.getItem('qc:theme');var isDark;if(t==='dark'){isDark=true;}else if(t==='light'){isDark=false;}else{isDark=matchMedia('(prefers-color-scheme: dark)').matches;}if(isDark)document.documentElement.classList.add('dark');}catch(e){}})();`;

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ name: "theme-color", content: "#6366f1" },
			{
				name: "description",
				content:
					"Utility gratuite per scoprire quale prodotto conviene di più: confronta prezzi e formati di prodotti della stessa categoria.",
			},
			{ title: `${SITE_NAME} — Confronta prezzi e formati di prodotti` },
		],
		links: [
			{ rel: "stylesheet", href: appCss },
			// SVG favicon for modern browsers — scales perfectly at any DPI.
			{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
			// Bitmap fallbacks for legacy browsers and Windows tiles.
			{ rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
			{ rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
			// iOS home-screen icon.
			{ rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
			// PWA manifest.
			{ rel: "manifest", href: "/manifest.json" },
		],
	}),
	notFoundComponent: NotFound,
	errorComponent: ErrorBoundary,
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="it" suppressHydrationWarning>
			<head>
				<HeadContent />
				{/* biome-ignore lint/security/noDangerouslySetInnerHtml: theme bootstrap must run before hydration */}
				<script dangerouslySetInnerHTML={{ __html: THEME_BOOTSTRAP }} />
			</head>
			<body className="min-h-screen flex flex-col bg-background text-foreground antialiased">
				<header className="topbar-surface fixed inset-x-0 top-0 z-50">
					<div className="container mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
						<Logo />
						<ThemeToggle />
					</div>
				</header>

				{/* Spacer matches the fixed topbar height so content starts below it. */}
				<main className="flex-1 pt-[64px]">{children}</main>

				<SiteFooter />

				{CLOUDFLARE_ANALYTICS_TOKEN && (
					<script
						defer
						src="https://static.cloudflareinsights.com/beacon.min.js"
						data-cf-beacon={JSON.stringify({
							token: CLOUDFLARE_ANALYTICS_TOKEN,
						})}
					/>
				)}

				{import.meta.env.DEV && (
					<TanStackDevtools
						config={{ position: "bottom-right" }}
						plugins={[
							{
								name: "Tanstack Router",
								render: <TanStackRouterDevtoolsPanel />,
							},
						]}
					/>
				)}
				<Scripts />
				<ServiceWorkerRegister />
			</body>
		</html>
	);
}

function SiteFooter() {
	const year = new Date().getFullYear();
	return (
		<footer className="relative mt-20 w-full overflow-hidden bg-background/40 backdrop-blur-sm">
			{/* Top gradient separator — bumped from 1px to 3px for a stronger split. */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-x-0 top-0 h-[3px] brand-gradient-bg"
			/>
			{/* Bottom glow — pushed well below the footer + dimmed so it never bleeds
			    into the copyright/text area. */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute -bottom-72 left-1/2 h-72 w-[min(1100px,90%)] -translate-x-1/2 rounded-full opacity-30 blur-3xl brand-gradient-bg"
			/>
			<div className="relative container mx-auto max-w-6xl px-4 py-20 sm:py-24">
				<div className="grid gap-12 md:grid-cols-4">
					<div className="space-y-4 md:col-span-2 max-w-xl">
						<Logo />
						<p className="text-sm leading-relaxed text-muted-foreground">
							{SITE_NAME} è una raccolta di utility gratuite per confrontare i
							prodotti del supermercato e capire quale conviene davvero, anche
							fra formati e marche diversi. Nessun tracciamento invadente,
							nessun login.
						</p>
						<div className="pt-2">
							<BuyMeCoffee />
						</div>
					</div>

					<nav aria-label="Navigazione footer" className="space-y-4">
						<h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
							Esplora
						</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									to="/"
									className="hover:brand-gradient-text transition-colors text-muted-foreground"
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									to="/$category"
									params={{ category: "acqua" }}
									className="hover:brand-gradient-text transition-colors text-muted-foreground"
								>
									Acqua
								</Link>
							</li>
							<li>
								<Link
									to="/$category"
									params={{ category: "detersivo-lavatrice" }}
									className="hover:brand-gradient-text transition-colors text-muted-foreground"
								>
									Detersivo lavatrice
								</Link>
							</li>
							<li>
								<Link
									to="/$category"
									params={{ category: "capsule-caffe" }}
									className="hover:brand-gradient-text transition-colors text-muted-foreground"
								>
									Capsule caffè
								</Link>
							</li>
						</ul>
					</nav>

					<nav aria-label="Pagine informative" className="space-y-4">
						<h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
							Informazioni
						</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									to="/contatti"
									className="hover:brand-gradient-text transition-colors text-muted-foreground"
								>
									Feedback e contatti
								</Link>
							</li>
							<li>
								<Link
									to="/terms"
									className="hover:brand-gradient-text transition-colors text-muted-foreground"
								>
									Termini e condizioni
								</Link>
							</li>
							<li>
								<Link
									to="/privacy"
									className="hover:brand-gradient-text transition-colors text-muted-foreground"
								>
									Privacy policy
								</Link>
							</li>
							<li>
								<Link
									to="/cookie"
									className="hover:brand-gradient-text transition-colors text-muted-foreground"
								>
									Cookie policy
								</Link>
							</li>
						</ul>
					</nav>
				</div>

				<div className="mt-16 flex flex-col gap-4 border-t-2 border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
					<p className="text-xs text-muted-foreground">
						© {year} {SITE_NAME}. Tutti i marchi citati appartengono ai
						rispettivi proprietari.
					</p>
					<p className="text-xs text-muted-foreground">
						Realizzato da{" "}
						<a
							href="mailto:giacomorossi.dev@gmail.com"
							className="brand-gradient-text font-semibold underline-offset-4 hover:underline"
						>
							giacomorossi.dev
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
}

function NotFound() {
	return (
		<div className="container mx-auto max-w-3xl px-4 py-20 text-center space-y-4">
			<h1 className="display-title text-5xl font-bold tracking-tight">
				<span className="brand-gradient-text">404</span>
			</h1>
			<p className="text-xl font-medium">Pagina non trovata</p>
			<p className="text-muted-foreground">
				La categoria che stai cercando non esiste o è stata spostata.
			</p>
			<Link
				to="/"
				className="brand-gradient-bg inline-block rounded-md px-4 py-2 text-sm font-medium text-white hover:opacity-90"
			>
				Torna alla home
			</Link>
		</div>
	);
}

function ErrorBoundary({ error }: { error: Error }) {
	return (
		<div className="container mx-auto max-w-3xl px-4 py-20 text-center space-y-4">
			<h1 className="display-title text-4xl font-bold tracking-tight">
				Qualcosa è andato storto
			</h1>
			<p className="text-muted-foreground">
				Si è verificato un errore caricando questa pagina. Prova a ricaricare,
				oppure torna alla home.
			</p>
			{import.meta.env.DEV && (
				<pre className="text-left text-xs bg-muted p-4 rounded-md overflow-auto">
					{error.message}
					{error.stack && `\n\n${error.stack}`}
				</pre>
			)}
			<Link
				to="/"
				className="brand-gradient-bg inline-block rounded-md px-4 py-2 text-sm font-medium text-white hover:opacity-90"
			>
				Torna alla home
			</Link>
		</div>
	);
}

void Outlet;
