import { ChevronDown, Trash2 } from "lucide-react";
import { useState } from "react";
import { Button } from "#/components/app/button.tsx";
import { Input } from "#/components/app/input.tsx";
import { Label } from "#/components/app/label.tsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "#/components/app/select.tsx";
import { cn } from "#/lib/utils.ts";
import {
  getCategoryBaseLabelPlural,
  getCategoryUnits,
  type CategoryDefinition,
  type ProductEntry,
} from "#/lib/pricing.ts";

const eur = new Intl.NumberFormat("it-IT", {
  style: "currency",
  currency: "EUR",
});

function summarise(entry: ProductEntry, fallback: string): string {
  const parts: string[] = [];
  if (Number.isFinite(entry.price) && entry.price > 0) {
    parts.push(eur.format(entry.price));
  }
  if (Number.isFinite(entry.measureValue) && entry.measureValue > 0) {
    parts.push(`${entry.measureValue}${entry.measureUnitId !== "count" ? entry.measureUnitId : ""}`);
  }
  if (parts.length === 0) return fallback;
  return parts.join(" · ");
}

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
      : category.context === "dosage"
        ? `Volume per ${lastLevel.label}`
        : `Quantità per ${lastLevel.label}`;
  const doseFieldLabel =
    category.context === "dosage"
      ? `${getCategoryBaseLabelPlural(category)} per ${lastLevel.label}`
      : null;

  const updateCount = (levelId: string, value: number) => {
    onChange({ ...entry, counts: { ...entry.counts, [levelId]: value } });
  };

  // Default to expanded for empty rows, collapsed on mobile for rows that already
  // have a price (so the user sees the comparison list, not 20cm of forms).
  const hasData = Number.isFinite(entry.price) && entry.price > 0;
  const [collapsed, setCollapsed] = useState(hasData);
  const bodyId = `entry-${index}-body`;

  return (
    <div className="relative">
      {/* Floating name chip — straddles the card's top border (left-aligned)
          so it reads as the product label. `bg-background` matches the page
          surface and creates a "notch" cut through the card border;
          `brand-gradient-border` rings the input with the brand gradient. */}
      <div className="absolute left-4 top-0 z-10 -translate-y-1/2 w-[min(18rem,calc(100%-4rem))]">
        <div className="brand-gradient-border rounded-md">
          <Input
            aria-label="Nome prodotto"
            placeholder={`Prodotto ${index + 1}`}
            value={entry.name ?? ""}
            onChange={(e) =>
              onChange({ ...entry, name: e.currentTarget.value })
            }
            className="border-0 bg-background font-medium"
          />
        </div>
      </div>

      {/* Remove button — top-right corner */}
      {onRemove && (
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={onRemove}
          aria-label="Rimuovi prodotto"
          className="absolute top-2 right-2 z-10"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      )}

      <div className="rounded-lg border bg-card p-4 pt-8 pr-12 space-y-3">
        {/* Mobile-only collapse summary. Name is already visible in the
            floating chip above, so we just surface the price/measure here. */}
        <button
          type="button"
          onClick={() => setCollapsed((c) => !c)}
          className="flex w-full items-center gap-2 text-left sm:hidden rounded outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          aria-expanded={!collapsed}
          aria-controls={bodyId}
        >
          <ChevronDown
            className={cn(
              "h-4 w-4 shrink-0 transition-transform",
              collapsed && "-rotate-90",
            )}
          />
          <span className="text-xs text-muted-foreground truncate">
            {summarise(entry, "Da compilare")}
          </span>
        </button>

        <div
          id={bodyId}
          className={cn(
            "space-y-3 sm:block",
            collapsed ? "hidden" : "block",
          )}
        >
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {category.levels.map((level) => (
              <div key={level.id} className="space-y-1">
                <Label htmlFor={`entry-${index}-${level.id}`}>
                  {level.pluralLabel}
                  {level.optional && (
                    <span className="ml-1 text-xs text-muted-foreground">
                      (opz.)
                    </span>
                  )}
                </Label>
                <Input
                  id={`entry-${index}-${level.id}`}
                  type="number"
                  inputMode="numeric"
                  min={0}
                  step={1}
                  value={
                    Number.isFinite(entry.counts[level.id])
                      ? entry.counts[level.id]
                      : ""
                  }
                  onChange={(e) =>
                    updateCount(level.id, numericValue(e.currentTarget.value))
                  }
                />
              </div>
            ))}

            <div className="space-y-1">
              <Label htmlFor={`entry-${index}-measure`}>
                {measureFieldLabel}
              </Label>
              <div className="flex gap-1">
                <Input
                  id={`entry-${index}-measure`}
                  type="number"
                  inputMode="decimal"
                  min={0}
                  step="any"
                  value={
                    Number.isFinite(entry.measureValue) ? entry.measureValue : ""
                  }
                  onChange={(e) =>
                    onChange({
                      ...entry,
                      measureValue: numericValue(e.currentTarget.value),
                    })
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

            {doseFieldLabel && (
              <div className="space-y-1">
                <Label htmlFor={`entry-${index}-doses`}>{doseFieldLabel}</Label>
                <Input
                  id={`entry-${index}-doses`}
                  type="number"
                  inputMode="numeric"
                  min={0}
                  step={1}
                  value={Number.isFinite(entry.doseCount) ? entry.doseCount : ""}
                  onChange={(e) =>
                    onChange({
                      ...entry,
                      doseCount: numericValue(e.currentTarget.value),
                    })
                  }
                />
              </div>
            )}

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
      </div>
    </div>
  );
}
