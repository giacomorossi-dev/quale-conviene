import {
  createFileRoute,
  getRouteApi,
  notFound,
} from "@tanstack/react-router";
import Comparator from "#/components/Comparator.tsx";
import AdSlot from "#/components/AdSlot.tsx";
import { getCategoryBySlug } from "#/data/categories.ts";
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
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(buildCategoryJsonLd(loaderData)),
        },
      ],
    };
  },
  component: CategoryPage,
});

const route = getRouteApi("/$category");

function CategoryPage() {
  const category = route.useLoaderData();

  return (
    <div className="container mx-auto max-w-5xl px-4 py-10 space-y-8">
      <article className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">{category.name}</h1>
        <p className="text-lg text-muted-foreground">{category.description}</p>
        {category.intro && (
          <p className="text-base text-muted-foreground">{category.intro}</p>
        )}
      </article>

      <Comparator category={category} />

      <AdSlot className="mt-12" />
    </div>
  );
}
