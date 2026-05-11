import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import CategoryCard from "#/components/CategoryCard.tsx";
import CategorySearch, {
  matchesCategory,
} from "#/components/CategorySearch.tsx";
import HeroBanner from "#/components/HeroBanner.tsx";
import RecentComparisons from "#/components/RecentComparisons.tsx";
import { CATEGORIES } from "#/data/categories.ts";
import { buildHomeMeta } from "#/lib/seo.ts";

export const Route = createFileRoute("/")({
  head: () => ({ meta: buildHomeMeta() }),
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

      <RecentComparisons />

      <section className="space-y-4">
        <div className="flex flex-wrap items-baseline gap-3">
          <h2 className="text-2xl font-semibold">Categorie disponibili</h2>
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
          <div className="py-10 text-center text-sm text-muted-foreground">
            Nessuna categoria trovata per <strong>«{query}»</strong>. Prova con
            un sinonimo o una marca.
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
    </div>
  );
}
