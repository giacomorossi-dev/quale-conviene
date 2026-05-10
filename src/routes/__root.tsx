import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";

import appCss from "../styles.css?url";
import BuyMeCoffee from "#/components/BuyMeCoffee.tsx";
import ThemeToggle from "#/components/ThemeToggle.tsx";
import { CLOUDFLARE_ANALYTICS_TOKEN, SITE_NAME } from "#/lib/seo.ts";

// Runs synchronously before hydration so the .dark class is applied before
// first paint — no white-flash for users with the dark theme saved.
const THEME_BOOTSTRAP = `(function(){try{var t=localStorage.getItem('qc:theme');if(!t){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}if(t==='dark')document.documentElement.classList.add('dark');}catch(e){}})();`;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#ffffff" },
      {
        name: "description",
        content:
          "Utility gratuite per scoprire quale prodotto conviene di più: confronta prezzi e formati di prodotti della stessa categoria.",
      },
      { title: `${SITE_NAME} — Confronta prezzi e formati di prodotti` },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  notFoundComponent: NotFound,
  errorComponent: ErrorBoundary,
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <head>
        <HeadContent />
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: theme bootstrap must run before hydration */}
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOTSTRAP }} />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased">
        <header className="border-b">
          <div className="container mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4">
            <Link to="/" className="text-lg font-bold tracking-tight">
              {SITE_NAME}
            </Link>
            <ThemeToggle />
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t bg-muted/30">
          <div className="container mx-auto max-w-5xl px-4 py-10 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                {SITE_NAME} è un set di utility gratuite per confrontare i prodotti
                e capire quale conviene davvero.
              </p>
              <BuyMeCoffee />
            </div>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} {SITE_NAME}
            </p>
          </div>
        </footer>

        {/* Cloudflare Web Analytics: privacy-first, no cookie banner. */}
        {CLOUDFLARE_ANALYTICS_TOKEN && (
          // biome-ignore lint/security/noDangerouslySetInnerHtml: official CF beacon snippet
          <script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={JSON.stringify({ token: CLOUDFLARE_ANALYTICS_TOKEN })}
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
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-20 text-center space-y-4">
      <h1 className="text-4xl font-bold tracking-tight">Pagina non trovata</h1>
      <p className="text-muted-foreground">
        La categoria che stai cercando non esiste o è stata spostata.
      </p>
      <Link
        to="/"
        className="inline-block rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90"
      >
        Torna alla home
      </Link>
    </div>
  );
}

function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-20 text-center space-y-4">
      <h1 className="text-4xl font-bold tracking-tight">Qualcosa è andato storto</h1>
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
        className="inline-block rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90"
      >
        Torna alla home
      </Link>
    </div>
  );
}

void Outlet;
