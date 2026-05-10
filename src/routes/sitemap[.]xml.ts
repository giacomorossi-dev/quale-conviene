import { createFileRoute } from "@tanstack/react-router";
import { CATEGORIES } from "#/data/categories.ts";
import { SITE_URL } from "#/lib/seo.ts";

function buildSitemap(): string {
  const today = new Date().toISOString().slice(0, 10);
  const urls = [
    { loc: SITE_URL, priority: "1.0", changefreq: "weekly" },
    ...CATEGORIES.map((c) => ({
      loc: `${SITE_URL}/${c.slug}`,
      priority: "0.8",
      changefreq: "weekly",
    })),
  ];
  const body = urls
    .map(
      (u) =>
        `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`,
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () =>
        new Response(buildSitemap(), {
          headers: {
            "content-type": "application/xml; charset=utf-8",
            "cache-control": "public, max-age=3600",
          },
        }),
    },
  },
});
