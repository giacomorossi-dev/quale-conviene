import { Search, X } from "lucide-react";
import type { ChangeEvent } from "react";
import { Input } from "#/components/app/input.tsx";
import { Button } from "#/components/app/button.tsx";
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

export interface CategoryMatch {
  matched: boolean;
  /** Set when the match wouldn't have been found via name/description alone. */
  viaKeyword?: string;
}

/**
 * Returns whether the query matches the category, plus a hint when the match
 * came only through a keyword (so the UI can explain "why this card appeared").
 * Empty query → matches everything with no hint.
 */
export function matchesCategory(
  category: CategoryDefinition,
  query: string,
): CategoryMatch {
  const normalized = normalize(query.trim());
  if (!normalized) return { matched: true };
  const tokens = normalized.split(/\s+/).filter(Boolean);
  if (tokens.length === 0) return { matched: true };
  const primary = normalize([category.name, category.description].join(" "));
  const matchesPrimary = tokens.every((t) => primary.includes(t));
  if (matchesPrimary) return { matched: true };
  const keywords = category.keywords ?? [];
  const haystack = normalize([primary, ...keywords].join(" "));
  const matchesWithKeywords = tokens.every((t) => haystack.includes(t));
  if (!matchesWithKeywords) return { matched: false };
  const hint = keywords.find((kw) => {
    const normKw = normalize(kw);
    return tokens.some((t) => normKw.includes(t));
  });
  return { matched: true, viaKeyword: hint };
}
