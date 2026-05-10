import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "#/components/ui/card.tsx";
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
      className="block"
    >
      <Card className="h-full transition-colors hover:bg-accent/40">
        <CardHeader>
          <CardTitle className="flex items-center justify-between gap-2">
            {category.name}
            <ArrowRight className="h-4 w-4 text-muted-foreground" />
          </CardTitle>
          <CardDescription className="line-clamp-3">
            {category.description}
          </CardDescription>
          {matchedKeyword && (
            <p className="mt-2 inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 w-fit">
              <Sparkles className="h-3 w-3" />
              include <strong className="font-semibold">«{matchedKeyword}»</strong>
            </p>
          )}
        </CardHeader>
      </Card>
    </Link>
  );
}
