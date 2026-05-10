import { Eraser, Plus, RotateCcw } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Button } from "#/components/ui/button.tsx";
import EntryForm from "./EntryForm.tsx";
import ResultsTable from "./ResultsTable.tsx";
import {
  buildEmptyEntry,
  compute,
  type CategoryDefinition,
  type ProductEntry,
} from "#/lib/pricing.ts";

interface Props {
  category: CategoryDefinition;
}

const STORAGE_PREFIX = "qc:entries:";

const initialEntries = (category: CategoryDefinition): ProductEntry[] => {
  if (category.sampleEntries && category.sampleEntries.length > 0) {
    return category.sampleEntries.map((e) => ({ ...e, counts: { ...e.counts } }));
  }
  return [buildEmptyEntry(category), buildEmptyEntry(category)];
};

export default function Comparator({ category }: Props) {
  const [entries, setEntries] = useState<ProductEntry[]>(() =>
    initialEntries(category),
  );
  // Marks the moment we've finished reading localStorage so we don't persist
  // the SSR-initialized sample values on top of the user's saved data.
  const [hydrated, setHydrated] = useState(false);

  // U1 — restore from localStorage after mount (client-only).
  useEffect(() => {
    if (typeof window === "undefined") {
      setHydrated(true);
      return;
    }
    try {
      const stored = window.localStorage.getItem(
        `${STORAGE_PREFIX}${category.slug}`,
      );
      if (stored) {
        const parsed = JSON.parse(stored) as ProductEntry[];
        if (Array.isArray(parsed)) setEntries(parsed);
      }
    } catch {
      /* corrupt JSON or unavailable — ignore */
    }
    setHydrated(true);
  }, [category.slug]);

  // Persist after hydration only (otherwise we'd overwrite saved data with
  // the SSR-initialised sample entries on every page load).
  useEffect(() => {
    if (!hydrated || typeof window === "undefined") return;
    try {
      window.localStorage.setItem(
        `${STORAGE_PREFIX}${category.slug}`,
        JSON.stringify(entries),
      );
    } catch {
      /* quota exceeded or storage disabled — ignore */
    }
  }, [entries, category.slug, hydrated]);

  const results = useMemo(() => compute(category, entries), [category, entries]);

  const updateAt = (i: number, next: ProductEntry) => {
    setEntries((prev) => prev.map((e, idx) => (idx === i ? next : e)));
  };

  const removeAt = (i: number) => {
    setEntries((prev) => prev.filter((_, idx) => idx !== i));
  };

  const addEntry = () => {
    setEntries((prev) => [...prev, buildEmptyEntry(category)]);
  };

  const reset = () => setEntries(initialEntries(category));
  const clear = () => setEntries([]);

  return (
    <div className="space-y-6">
      {entries.length === 0 ? (
        <div className="rounded-lg border border-dashed bg-muted/40 py-12 px-4 text-center space-y-4">
          <p className="text-muted-foreground">
            Nessun prodotto in confronto. Aggiungi i tuoi oppure carica gli
            esempi.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Button type="button" onClick={addEntry}>
              <Plus className="h-4 w-4" />
              Aggiungi prodotto
            </Button>
            <Button type="button" variant="outline" onClick={reset}>
              <RotateCcw className="h-4 w-4" />
              Mostra esempi
            </Button>
          </div>
        </div>
      ) : (
        <>
          <div className="space-y-3">
            {entries.map((entry, i) => (
              <EntryForm
                key={i}
                index={i}
                category={category}
                entry={entry}
                onChange={(next) => updateAt(i, next)}
                onRemove={() => removeAt(i)}
              />
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Button type="button" variant="outline" onClick={addEntry}>
              <Plus className="h-4 w-4" />
              Aggiungi prodotto
            </Button>
            <Button type="button" variant="ghost" onClick={reset}>
              <RotateCcw className="h-4 w-4" />
              Reimposta esempi
            </Button>
            <Button type="button" variant="ghost" onClick={clear}>
              <Eraser className="h-4 w-4" />
              Svuota tutto
            </Button>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold">Risultati</h2>
            <ResultsTable category={category} results={results} />
          </div>
        </>
      )}
    </div>
  );
}
