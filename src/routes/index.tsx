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
    () => CATEGORIES.filter((c) => matchesCategory(c, query)),
    [query],
  );

  return (
    <div className="container mx-auto max-w-5xl px-4 py-10 space-y-10">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">{SITE_NAME}</h1>
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
            {filtered.map((c) => (
              <CategoryCard key={c.slug} category={c} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
