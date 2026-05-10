import type { CategoryDefinition } from "./pricing";

const SITE_NAME = "Quale Conviene";
const SITE_URL = "https://quale-conviene.example"; // TODO: replace at deploy time

export function buildCategoryMeta(category: CategoryDefinition) {
  const title = `${category.name} — quale conviene? · ${SITE_NAME}`;
  const description = category.description;
  const url = `${SITE_URL}/${category.slug}`;
  return [
    { title },
    { name: "description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:locale", content: "it_IT" },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { rel: "canonical", href: url },
  ];
}

export function buildCategoryJsonLd(category: CategoryDefinition) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: `${category.name} — Comparatore prezzi`,
    description: category.description,
    url: `${SITE_URL}/${category.slug}`,
    applicationCategory: "ShoppingApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
    inLanguage: "it",
  };
}

export function buildHomeMeta() {
  const title = `${SITE_NAME} — Confronta prezzi e formati di prodotti`;
  const description =
    "Utility gratuite per scoprire quale prodotto conviene di più: confronta carta igienica, acqua, pasta e altre categorie normalizzando il prezzo all'unità.";
  return [
    { title },
    { name: "description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: SITE_URL },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:locale", content: "it_IT" },
  ];
}

export { SITE_NAME, SITE_URL };
