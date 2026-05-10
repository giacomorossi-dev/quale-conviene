import { Calculator } from "lucide-react";
import { useState } from "react";
import { Input } from "#/components/ui/input.tsx";
import { Label } from "#/components/ui/label.tsx";
import {
  getCategoryBaseLabel,
  getCategoryBaseLabelPlural,
  type CategoryDefinition,
  type ComputedEntry,
} from "#/lib/pricing.ts";

interface Props {
  category: CategoryDefinition;
  results: ComputedEntry[];
}

type Mode = "cost-for-qty" | "qty-for-budget";

const eur = new Intl.NumberFormat("it-IT", {
  style: "currency",
  currency: "EUR",
});

const num = new Intl.NumberFormat("it-IT", {
  maximumFractionDigits: 1,
});

export default function PurchasePlanner({ category, results }: Props) {
  const valid = results.filter((r) => !r.invalid);
  const [mode, setMode] = useState<Mode>("cost-for-qty");
  const [value, setValue] = useState("");
  const baseLabel = getCategoryBaseLabel(category);
  const baseLabelPlural = getCategoryBaseLabelPlural(category);

  if (valid.length === 0) return null;

  const parsed = Number(value.replace(",", "."));
  const hasInput = value.trim() !== "" && Number.isFinite(parsed) && parsed > 0;

  return (
    <section
      aria-labelledby="planner-heading"
      className="space-y-3 rounded-lg border bg-card p-4"
    >
      <div className="flex items-center gap-2">
        <Calculator className="h-4 w-4 text-muted-foreground" />
        <h3 id="planner-heading" className="font-semibold">
          Pianifica un acquisto
        </h3>
      </div>

      <fieldset className="space-y-2">
        <legend className="sr-only">Modalità di calcolo</legend>
        <label className="flex items-center gap-2 text-sm">
          <input
            type="radio"
            name="planner-mode"
            value="cost-for-qty"
            checked={mode === "cost-for-qty"}
            onChange={() => setMode("cost-for-qty")}
          />
          Quanto costano <strong>X {baseLabelPlural}</strong>?
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input
            type="radio"
            name="planner-mode"
            value="qty-for-budget"
            checked={mode === "qty-for-budget"}
            onChange={() => setMode("qty-for-budget")}
          />
          Quanti <strong>{baseLabelPlural}</strong> con <strong>X €</strong>?
        </label>
      </fieldset>

      <div className="flex items-end gap-2">
        <div className="flex-1 space-y-1">
          <Label htmlFor="planner-input">
            {mode === "cost-for-qty"
              ? `Numero di ${baseLabelPlural}`
              : "Budget (€)"}
          </Label>
          <Input
            id="planner-input"
            type="number"
            inputMode="decimal"
            min={0}
            step="any"
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)}
          />
        </div>
      </div>

      {hasInput && (
        <ul className="space-y-1 text-sm" aria-live="polite">
          {valid.map((r, i) => {
            const projected =
              mode === "cost-for-qty"
                ? parsed * r.pricePerBase
                : parsed / r.pricePerBase;
            return (
              <li key={i} className="flex items-baseline justify-between gap-3">
                <span className="truncate">
                  {r.entry.name?.trim() || `Prodotto ${i + 1}`}
                </span>
                <span className="font-medium tabular-nums">
                  {mode === "cost-for-qty"
                    ? eur.format(projected)
                    : `${num.format(projected)} ${
                        projected === 1 ? baseLabel : baseLabelPlural
                      }`}
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
