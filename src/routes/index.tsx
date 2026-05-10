import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import CategoryCard from "#/components/CategoryCard.tsx";
import CategorySearch, {
  matchesCategory,
} from "#/components/CategorySearch.tsx";
import { CATEGORIES } from "#/data/categories.ts";
import { buildHomeMeta, SITE_NAME } from "#/lib/seo.ts";

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
    <div className="container mx-auto max-w-5xl px-4 py-12 space-y-12">
      <section className="space-y-5">
        <p className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/50 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm">
          <span className="brand-gradient-bg h-1.5 w-1.5 rounded-full" />
          Confronta. Calcola. Risparmia.
        </p>
        <h1 className="display-title text-5xl sm:text-6xl font-bold tracking-tight leading-[1.05]">
          <span className="brand-gradient-text">{SITE_NAME}</span>
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          Confronta prodotti della stessa categoria normalizzando il prezzo
          all'unità — scoprirai a colpo d'occhio quale conviene davvero, anche
          fra formati diversi.
        </p>
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-baseline gap-3">
          <h2 className="text-2xl font-semibold">Categorie disponibili</h2>
          <span className="text-sm text-muted-foreground ml-auto">
            {filtered.length === CATEGORIES.length
              ? `${CATEGORIES.length} totali`
              : `${filtered.length} di ${CATEGORIES.length}`}
          </span>
        </div>

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
