import { Search, X } from "lucide-react";
import type { ChangeEvent } from "react";
import { Input } from "#/components/ui/input.tsx";
import { Button } from "#/components/ui/button.tsx";
import type { CategoryDefinition } from "#/lib/pricing.ts";

interface Props {
  query: string;
  onQueryChange: (next: string) => void;
}

export default function CategorySearch({ query, onQueryChange }: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onQueryChange(e.currentTarget.value);
  };

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
      <Input
        type="search"
        value={query}
        onChange={handleChange}
        placeholder="Cerca un prodotto: 'panna', 'patatine', 'cola', 'capsule'…"
        className="pl-9 pr-10"
      />
      {query && (
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label="Cancella ricerca"
          onClick={() => onQueryChange("")}
          className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
        >
          <X className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}

const normalize = (s: string): string =>
  s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

/**
 * Returns true when every space-separated token in `query` appears somewhere
 * in the category's name, description or keywords. Empty query → matches.
 */
export function matchesCategory(
  category: CategoryDefinition,
  query: string,
): boolean {
  const normalized = normalize(query.trim());
  if (!normalized) return true;
  const tokens = normalized.split(/\s+/).filter(Boolean);
  if (tokens.length === 0) return true;
  const haystack = normalize(
    [category.name, category.description, ...(category.keywords ?? [])].join(" "),
  );
  return tokens.every((t) => haystack.includes(t));
}
