import { Trash2 } from "lucide-react";
import { Button } from "#/components/ui/button.tsx";
import { Input } from "#/components/ui/input.tsx";
import { Label } from "#/components/ui/label.tsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "#/components/ui/select.tsx";
import {
  getCategoryBaseLabelPlural,
  getCategoryUnits,
  type CategoryDefinition,
  type ProductEntry,
} from "#/lib/pricing.ts";

interface Props {
  index: number;
  category: CategoryDefinition;
  entry: ProductEntry;
  onChange: (next: ProductEntry) => void;
  onRemove?: () => void;
}

const numericValue = (raw: string): number => {
  if (raw.trim() === "") return Number.NaN;
  const parsed = Number(raw.replace(",", "."));
  return Number.isFinite(parsed) ? parsed : Number.NaN;
};

export default function EntryForm({
  index,
  category,
  entry,
  onChange,
  onRemove,
}: Props) {
  const units = getCategoryUnits(category);
  const lastLevel = category.levels[category.levels.length - 1];
  const measureFieldLabel =
    category.context === "unit"
      ? `${getCategoryBaseLabelPlural(category)} per ${lastLevel.label}`
      : `Quantità per ${lastLevel.label}`;

  const updateCount = (levelId: string, value: number) => {
    onChange({ ...entry, counts: { ...entry.counts, [levelId]: value } });
  };

  return (
    <div className="space-y-3 rounded-lg border bg-card p-4">
      <div className="flex items-center justify-between gap-2">
        <Input
          aria-label="Nome prodotto"
          placeholder={`Prodotto ${index + 1}`}
          value={entry.name ?? ""}
          onChange={(e) => onChange({ ...entry, name: e.currentTarget.value })}
          className="max-w-xs"
        />
        {onRemove && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={onRemove}
            aria-label="Rimuovi prodotto"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        )}
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {category.levels.map((level) => (
          <div key={level.id} className="space-y-1">
            <Label htmlFor={`entry-${index}-${level.id}`}>
              {level.pluralLabel}
              {level.optional && (
                <span className="ml-1 text-xs text-muted-foreground">(opz.)</span>
              )}
            </Label>
            <Input
              id={`entry-${index}-${level.id}`}
              type="number"
              inputMode="numeric"
              min={0}
              step={1}
              value={Number.isFinite(entry.counts[level.id]) ? entry.counts[level.id] : ""}
              onChange={(e) => updateCount(level.id, numericValue(e.currentTarget.value))}
            />
          </div>
        ))}

        <div className="space-y-1">
          <Label htmlFor={`entry-${index}-measure`}>{measureFieldLabel}</Label>
          <div className="flex gap-1">
            <Input
              id={`entry-${index}-measure`}
              type="number"
              inputMode="decimal"
              min={0}
              step="any"
              value={Number.isFinite(entry.measureValue) ? entry.measureValue : ""}
              onChange={(e) =>
                onChange({ ...entry, measureValue: numericValue(e.currentTarget.value) })
              }
              className="flex-1"
            />
            {units.length > 1 ? (
              <Select
                value={entry.measureUnitId}
                onValueChange={(v) => onChange({ ...entry, measureUnitId: v })}
              >
                <SelectTrigger className="w-20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {units.map((u) => (
                    <SelectItem key={u.id} value={u.id}>
                      {u.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ) : units[0].label ? (
              <span className="flex items-center px-3 text-sm text-muted-foreground">
                {units[0].label}
              </span>
            ) : null}
          </div>
        </div>

        <div className="space-y-1">
          <Label htmlFor={`entry-${index}-price`}>Prezzo (€)</Label>
          <Input
            id={`entry-${index}-price`}
            type="number"
            inputMode="decimal"
            min={0}
            step="0.01"
            value={Number.isFinite(entry.price) ? entry.price : ""}
            onChange={(e) =>
              onChange({ ...entry, price: numericValue(e.currentTarget.value) })
            }
          />
        </div>
      </div>
    </div>
  );
}
