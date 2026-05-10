import { Plus, RotateCcw } from "lucide-react";
import { useMemo, useState } from "react";
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

  const reset = () => {
    setEntries(initialEntries(category));
  };

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        {entries.map((entry, i) => (
          <EntryForm
            key={i}
            index={i}
            category={category}
            entry={entry}
            onChange={(next) => updateAt(i, next)}
            onRemove={entries.length > 1 ? () => removeAt(i) : undefined}
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
      </div>

      <div>
        <h2 className="mb-3 text-xl font-semibold">Risultati</h2>
        <ResultsTable category={category} results={results} />
      </div>
    </div>
  );
}
