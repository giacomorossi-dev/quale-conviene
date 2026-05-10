import { createFileRoute } from "@tanstack/react-router";
import CategoryCard from "#/components/CategoryCard.tsx";
import { CATEGORIES } from "#/data/categories.ts";
import { buildHomeMeta, SITE_NAME } from "#/lib/seo.ts";

export const Route = createFileRoute("/")({
  head: () => ({ meta: buildHomeMeta() }),
  component: Home,
});

function Home() {
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
        <h2 className="text-2xl font-semibold">Categorie disponibili</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {CATEGORIES.map((c) => (
            <CategoryCard key={c.slug} category={c} />
          ))}
        </div>
      </section>
    </div>
  );
}
