import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, LayoutGrid, Wand2 } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "#/components/app/button.tsx";
import CategoryCard from "#/components/CategoryCard.tsx";
import CategorySearch, {
  matchesCategory,
} from "#/components/CategorySearch.tsx";
import HeroBanner from "#/components/HeroBanner.tsx";
import RecentComparisons from "#/components/RecentComparisons.tsx";
import SectionIcon from "#/components/SectionIcon.tsx";
import { CATEGORIES } from "#/data/categories.ts";
import { buildCanonicalLinks, buildHomeMeta } from "#/lib/seo.ts";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: buildHomeMeta(),
    links: buildCanonicalLinks("/"),
  }),
  component: Home,
});

function Home() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(
    () =>
      CATEGORIES.map((category) => ({
        category,
        match: matchesCategory(category, query),
      })).filter((r) => r.match.matched),
    [query],
  );

  return (
    <div className="container mx-auto max-w-5xl px-4 py-8 sm:py-12 space-y-12">
      <HeroBanner />

      {/* `content-visibility: auto` lets the browser skip painting these
          below-the-fold sections during the initial render. `contain-intrinsic-size`
          reserves a placeholder height to avoid scroll jump when they come into view. */}
      <div style={{ contentVisibility: "auto", containIntrinsicSize: "auto 200px" }}>
        <RecentComparisons />
      </div>

      <section
        className="space-y-4"
        style={{ contentVisibility: "auto", containIntrinsicSize: "auto 1400px" }}
      >
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="flex items-center gap-3 text-xl font-semibold">
            <SectionIcon>
              <LayoutGrid />
            </SectionIcon>
            Categorie disponibili
          </h2>
          <span className="text-sm text-muted-foreground ml-auto">
            {filtered.length === CATEGORIES.length
              ? `${CATEGORIES.length} totali`
              : `${filtered.length} di ${CATEGORIES.length}`}
          </span>
        </div>
        <div
          aria-hidden="true"
          className="brand-gradient-bg -mt-2 h-[2px] w-full"
        />

        <CategorySearch query={query} onQueryChange={setQuery} />

        {filtered.length === 0 ? (
          <div className="space-y-4 py-10 text-center">
            <p className="text-sm text-muted-foreground">
              Nessuna categoria trovata per <strong>«{query}»</strong>. Prova
              con un sinonimo o crea un confronto su misura.
            </p>
            <Button asChild variant="gradient">
              <Link
                to="/confronta"
                search={{ q: query } as never}
              >
                <Wand2 className="h-4 w-4" />
                Crea un confronto per «{query}»
              </Link>
            </Button>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {filtered.map(({ category, match }) => (
              <CategoryCard
                key={category.slug}
                category={category}
                matchedKeyword={match.viaKeyword}
              />
            ))}
          </div>
        )}
      </section>

      <section
        aria-labelledby="custom-cta-heading"
        className="relative isolate overflow-hidden rounded-2xl border bg-card p-6 sm:p-8"
        style={{ contentVisibility: "auto", containIntrinsicSize: "auto 220px" }}
      >
        <div
          aria-hidden="true"
          className="brand-gradient-bg pointer-events-none absolute -top-24 -right-12 h-48 w-48 rounded-full opacity-30 blur-2xl"
        />
        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <h2
              id="custom-cta-heading"
              className="flex items-center gap-3 text-xl font-semibold"
            >
              <SectionIcon>
                <Wand2 />
              </SectionIcon>
              Non trovi quello che cerchi?
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl">
              Crea un confronto personalizzato in pochi click: scegli come
              misurare i prodotti, dai un nome alle unità, e parti. Funziona
              per qualunque cosa.
            </p>
          </div>
          <Button asChild variant="gradient" size="lg">
            <Link to="/confronta">
              Crea confronto
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
