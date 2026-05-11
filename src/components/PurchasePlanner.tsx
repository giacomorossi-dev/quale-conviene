import { Calculator, RotateCcw } from "lucide-react";
import SectionIcon from "#/components/SectionIcon.tsx";
import { useState } from "react";
import { Button } from "#/components/app/button.tsx";
import { Input } from "#/components/app/input.tsx";
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

const eur = new Intl.NumberFormat("it-IT", {
  style: "currency",
  currency: "EUR",
});

const num = new Intl.NumberFormat("it-IT", {
  maximumFractionDigits: 1,
});

interface PlannerCardProps {
  titlePrefix: string;
  titleSuffix: string;
  inputAriaLabel: string;
  valid: ComputedEntry[];
  format: (parsed: number, r: ComputedEntry) => string;
}

function PlannerCard({
  titlePrefix,
  titleSuffix,
  inputAriaLabel,
  valid,
  format,
}: PlannerCardProps) {
  const [value, setValue] = useState("");
  const parsed = Number(value.replace(",", "."));
  const hasInput = value.trim() !== "" && Number.isFinite(parsed) && parsed > 0;

  return (
    <section className="space-y-3 rounded-lg border bg-card p-4">
      <h3 className="flex flex-wrap items-center gap-2 font-semibold">
        <span>{titlePrefix}</span>
        <Input
          type="number"
          inputMode="decimal"
          min={0}
          step="any"
          placeholder="0"
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
          aria-label={inputAriaLabel}
          className="h-8 w-24 px-2 text-sm font-normal"
        />
        <span>{titleSuffix}</span>
      </h3>

      {hasInput && (
        <>
          <ul className="space-y-1 text-sm" aria-live="polite">
            {valid.map((r, i) => (
              <li
                key={i}
                className="flex items-baseline justify-between gap-3"
              >
                <span className="truncate">
                  {r.entry.name?.trim() || `Prodotto ${i + 1}`}
                </span>
                <span className="font-medium tabular-nums">
                  {format(parsed, r)}
                </span>
              </li>
            ))}
          </ul>
          <div className="flex justify-end">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setValue("")}
            >
              <RotateCcw className="h-4 w-4" />
              Reimposta
            </Button>
          </div>
        </>
      )}
    </section>
  );
}

export default function PurchasePlanner({ category, results }: Props) {
  const valid = results.filter((r) => !r.invalid);
  const baseLabel = getCategoryBaseLabel(category);
  const baseLabelPlural = getCategoryBaseLabelPlural(category);

  if (valid.length === 0) return null;

  return (
    <section aria-labelledby="planner-heading">
      <h2
        id="planner-heading"
        className="flex items-center gap-3 text-xl font-semibold"
      >
        <SectionIcon>
          <Calculator />
        </SectionIcon>
        Pianifica
      </h2>
      <div
        aria-hidden="true"
        className="brand-gradient-bg mt-2 mb-4 h-[2px] w-full"
      />
      <div className="grid gap-4 md:grid-cols-2">
        <PlannerCard
          titlePrefix="Quanto costano"
          titleSuffix={baseLabelPlural}
          inputAriaLabel={`Numero di ${baseLabelPlural}`}
          valid={valid}
          format={(parsed, r) => eur.format(parsed * r.pricePerBase)}
        />
        <PlannerCard
          titlePrefix={`Quanti ${baseLabelPlural} con`}
          titleSuffix="€"
          inputAriaLabel="Budget in euro"
          valid={valid}
          format={(parsed, r) => {
            const projected = parsed / r.pricePerBase;
            return `${num.format(projected)} ${
              projected === 1 ? baseLabel : baseLabelPlural
            }`;
          }}
        />
      </div>
    </section>
  );
}
