import {
  createFileRoute,
  getRouteApi,
  Link,
  notFound,
} from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import AdSlot from "#/components/AdSlot.tsx";
import CategoryCard from "#/components/CategoryCard.tsx";
import CategoryPager from "#/components/CategoryPager.tsx";
import Comparator from "#/components/Comparator.tsx";
import {
  getAdjacentCategories,
  getCategoryBySlug,
  getRelatedCategories,
} from "#/data/categories.ts";
import { buildCategoryJsonLd, buildCategoryMeta } from "#/lib/seo.ts";

export const Route = createFileRoute("/$category")({
  loader: ({ params }) => {
    const category = getCategoryBySlug(params.category);
    if (!category) throw notFound();
    return category;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    return {
      meta: buildCategoryMeta(loaderData),
      scripts: buildCategoryJsonLd(loaderData).map((item) => ({
        type: "application/ld+json",
        children: JSON.stringify(item),
      })),
    };
  },
  component: CategoryPage,
});

const route = getRouteApi("/$category");

function CategoryPage() {
  const category = route.useLoaderData();
  const related = getRelatedCategories(category);
  const { prev, next } = getAdjacentCategories(category);

  return (
    <div className="container mx-auto max-w-5xl px-4 py-10 space-y-10">
      <nav
        aria-label="breadcrumb"
        className="flex items-center gap-1 text-sm text-muted-foreground"
      >
        <Link to="/" className="hover:underline hover:text-foreground">
          Home
        </Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-foreground">{category.name}</span>
      </nav>

      <article className="space-y-3">
        <h1 className="display-title text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1]">
          <span className="brand-gradient-text">{category.name}</span>
        </h1>
        <p className="text-lg text-muted-foreground">{category.description}</p>
        {category.intro && (
          <p className="text-base text-muted-foreground">{category.intro}</p>
        )}
      </article>

      <Comparator category={category} />

      {category.faq && category.faq.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Domande frequenti</h2>
          <dl className="space-y-4">
            {category.faq.map((qa, i) => (
              <div key={i} className="rounded-lg border bg-card p-4">
                <dt className="font-semibold mb-2">{qa.q}</dt>
                <dd className="text-muted-foreground leading-relaxed">{qa.a}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {related.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Categorie correlate</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {related.map((c) => (
              <CategoryCard key={c.slug} category={c} />
            ))}
          </div>
        </section>
      )}

      <CategoryPager prev={prev} next={next} />

      <AdSlot className="mt-12" />
    </div>
  );
}
