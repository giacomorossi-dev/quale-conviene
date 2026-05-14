import { AlertCircle, ChevronDown, Trash2 } from "lucide-react";
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
  computeEntry,
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

  const isInvalid = computeEntry(category, entry).invalid;

  // Per-field invalidity — mirrors the rules in `computeEntry`. Empty/non-positive
  // values mark the specific input as invalid so the user sees exactly which
  // field needs filling, instead of a card-wide red flood.
  const priceInvalid = !Number.isFinite(entry.price) || entry.price <= 0;
  const measureInvalid =
    category.context !== "dosage" &&
    (!Number.isFinite(entry.measureValue) || entry.measureValue <= 0);
  const doseCountInvalid =
    category.context === "dosage" &&
    (!Number.isFinite(entry.doseCount) || (entry.doseCount ?? 0) <= 0);
  const isCountInvalid = (levelId: string, optional?: boolean): boolean => {
    if (optional) return false;
    const raw = entry.counts[levelId];
    return !Number.isFinite(raw) || raw <= 0;
  };

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

      {/* Top-right cluster: invalid warning + remove button */}
      <div className="absolute top-2 right-2 z-10 flex items-center gap-0.5">
        {isInvalid && (
          <span
            role="img"
            aria-label="Prodotto non valido"
            title="Prodotto non valido"
            className="flex h-9 w-9 items-center justify-center text-destructive"
          >
            <AlertCircle className="h-5 w-5" />
          </span>
        )}
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

      <div
        className={cn(
          "rounded-lg border bg-card p-4 pt-8 space-y-3",
          isInvalid ? "pr-[5.25rem]" : "pr-12",
        )}
      >
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
                  aria-invalid={isCountInvalid(level.id, level.optional)}
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
                  aria-invalid={measureInvalid}
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
                  aria-invalid={doseCountInvalid}
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
                aria-invalid={priceInvalid}
                value={Number.isFinite(entry.price) ? entry.price : ""}
                onChange={(e) =>
                  onChange({ ...entry, price: numericValue(e.currentTarget.value) })
                }
              />
            </div>
          </div>
        </div>

        {isInvalid && (
          <p className="flex items-center gap-1.5 text-sm font-medium text-destructive">
            <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
            Prodotto non valido
          </p>
        )}
      </div>
    </div>
  );
}
