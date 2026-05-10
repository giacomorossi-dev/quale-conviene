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
import { SITE_NAME } from "#/lib/seo.ts";

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
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased">
        <header className="border-b">
          <div className="container mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4">
            <Link to="/" className="text-lg font-bold tracking-tight">
              {SITE_NAME}
            </Link>
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

// Outlet is rendered inside `children` from shellComponent. Re-export not needed
// since `RootDocument` already gets `children` (the Outlet) from TanStack Router.
void Outlet;
