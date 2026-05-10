import { Crown } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "#/components/app/table.tsx";
import { cn } from "#/lib/utils.ts";
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

const eurPrecise = new Intl.NumberFormat("it-IT", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 5,
});

const pct = new Intl.NumberFormat("it-IT", {
  maximumFractionDigits: 1,
  signDisplay: "exceptZero",
});

const pctMagnitude = new Intl.NumberFormat("it-IT", {
  maximumFractionDigits: 1,
});

/**
 * For very small €/base values (< 0.01 €), switch to a "€/100 X" display so
 * the number is comfortably readable (e.g. 0,366 € / 100 fogli rather than
 * 0,00366 € / foglio).
 */
function chooseBaseDisplay(
  category: CategoryDefinition,
  results: ComputedEntry[],
): { label: string; multiplier: number } {
  const validBest = results.find((r) => !r.invalid)?.pricePerBase;
  if (validBest && validBest > 0 && validBest < 0.01) {
    return {
      label: `100 ${getCategoryBaseLabelPlural(category)}`,
      multiplier: 100,
    };
  }
  return { label: getCategoryBaseLabel(category), multiplier: 1 };
}

export default function ResultsTable({ category, results }: Props) {
  if (results.length === 0) {
    return (
      <div className="py-8 text-center text-sm text-muted-foreground">
        Aggiungi almeno un prodotto per vedere il confronto.
      </div>
    );
  }

  const allInvalid = results.every((r) => r.invalid);

  // Hide a level column when no row has it set (optional levels left empty).
  const visibleLevels = category.levels.filter((level) =>
    results.some((r) => r.pricePerLevel[level.id] !== undefined),
  );

  const baseDisplay = chooseBaseDisplay(category, results);

  // Largest gap → "Risparmi fino al X%" badge on the winner.
  const maxDiff = results
    .filter((r) => !r.invalid && Number.isFinite(r.diffPctFromBest))
    .reduce((m, r) => Math.max(m, r.diffPctFromBest), 0);

  return (
    <div
      className="overflow-x-auto rounded-lg border"
      role="region"
      aria-label="Risultati del confronto"
      aria-live="polite"
    >
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">#</TableHead>
            <TableHead>Prodotto</TableHead>
            <TableHead className="text-right">Prezzo</TableHead>
            {visibleLevels.map((level) => (
              <TableHead key={level.id} className="text-right">
                €/{level.label}
              </TableHead>
            ))}
            <TableHead className="text-right font-semibold">
              €/{baseDisplay.label}
            </TableHead>
            <TableHead className="text-right">vs migliore</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {results.map((r, i) => (
            <TableRow
              key={i}
              className={cn(
                r.invalid && "opacity-50",
                !r.invalid && r.rank === 1 && "bg-emerald-50 dark:bg-emerald-950/20",
              )}
            >
              <TableCell className="font-medium">
                {!r.invalid && r.rank === 1 ? (
                  <span className="inline-flex items-center gap-1 text-emerald-700 dark:text-emerald-400">
                    <Crown className="h-4 w-4" />
                    {r.rank}
                  </span>
                ) : (
                  r.rank
                )}
              </TableCell>
              <TableCell className="font-medium">
                <div className="flex flex-col gap-0.5">
                  <span>{r.entry.name?.trim() || `Prodotto ${i + 1}`}</span>
                  {!r.invalid && r.rank === 1 && maxDiff > 0 && (
                    <span className="text-xs font-normal text-emerald-700 dark:text-emerald-400">
                      Risparmi fino al {pctMagnitude.format(maxDiff)}%
                    </span>
                  )}
                </div>
              </TableCell>
              <TableCell className="text-right">
                {r.invalid ? "—" : eur.format(r.entry.price)}
              </TableCell>
              {visibleLevels.map((level) => (
                <TableCell key={level.id} className="text-right tabular-nums">
                  {r.invalid || r.pricePerLevel[level.id] === undefined
                    ? "—"
                    : eurPrecise.format(r.pricePerLevel[level.id])}
                </TableCell>
              ))}
              <TableCell className="text-right font-semibold tabular-nums">
                {r.invalid
                  ? "—"
                  : eurPrecise.format(r.pricePerBase * baseDisplay.multiplier)}
              </TableCell>
              <TableCell className="text-right tabular-nums text-sm text-muted-foreground">
                {r.invalid
                  ? "—"
                  : r.rank === 1
                    ? "—"
                    : `${pct.format(r.diffPctFromBest)} %`}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {allInvalid && (
        <div className="border-t p-3 text-center text-sm text-muted-foreground">
          Inserisci prezzo, quantità e i count di tutti i livelli per ottenere
          il confronto.
        </div>
      )}
    </div>
  );
}
