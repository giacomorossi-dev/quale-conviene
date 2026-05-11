import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "#/components/app/card.tsx";
import type { CategoryDefinition } from "#/lib/pricing.ts";

interface Props {
  category: CategoryDefinition;
  /** Surfaced when a search query matched via this keyword (synonym hint). */
  matchedKeyword?: string;
}

export default function CategoryCard({ category, matchedKeyword }: Props) {
  return (
    <Link
      to="/$category"
      params={{ category: category.slug }}
      className="block group"
    >
      <Card
        variant="glass"
        className="relative h-full overflow-hidden transition-shadow duration-200 group-hover:shadow-[0_18px_50px_-18px_rgba(168,85,247,0.55)]"
      >
        {/* Gradient overlay — fades via opacity so the transition is smooth in
            both directions (background-image alone isn't animatable). */}
        <div
          aria-hidden="true"
          className="brand-gradient-bg pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        />
        <CardHeader className="relative">
          <CardTitle className="flex items-center justify-between gap-2">
            <span className="transition-colors duration-200 group-hover:text-white">
              {category.name}
            </span>
            <ArrowRight className="h-6 w-6 shrink-0 text-muted-foreground transition-all duration-200 group-hover:translate-x-1.5 group-hover:text-white" />
          </CardTitle>
          <CardDescription className="line-clamp-3 transition-colors duration-200 group-hover:text-white/90">
            {category.description}
          </CardDescription>
          {matchedKeyword && (
            <p className="mt-2 inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 w-fit group-hover:bg-white/20 group-hover:text-white transition-colors duration-200">
              <Sparkles className="h-3 w-3" />
              include <strong className="font-semibold">«{matchedKeyword}»</strong>
            </p>
          )}
        </CardHeader>
      </Card>
    </Link>
  );
}
