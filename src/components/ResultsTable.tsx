import { Crown } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "#/components/ui/table.tsx";
import { cn } from "#/lib/utils.ts";
import {
  getCategoryBaseLabel,
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

  return (
    <div className="overflow-x-auto rounded-lg border">
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
              €/{getCategoryBaseLabel(category)}
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
                {r.entry.name?.trim() || `Prodotto ${i + 1}`}
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
                {r.invalid ? "—" : eurPrecise.format(r.pricePerBase)}
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
