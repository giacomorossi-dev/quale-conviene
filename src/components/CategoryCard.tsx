import { ArrowRight } from "lucide-react";
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
}

export default function CategoryCard({ category }: Props) {
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
        </CardHeader>
      </Card>
    </Link>
  );
}
