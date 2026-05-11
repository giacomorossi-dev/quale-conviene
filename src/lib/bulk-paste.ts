import {
  buildEmptyEntry,
  getCategoryUnits,
  type CategoryDefinition,
  type ProductEntry,
} from "./pricing.ts";

const num = (raw: string): number => {
  const cleaned = raw.replace(",", ".").trim();
  if (cleaned === "") return Number.NaN;
  const parsed = Number(cleaned);
  return Number.isFinite(parsed) ? parsed : Number.NaN;
};

export interface ParsedRow {
  entry: ProductEntry;
  /** Line was non-empty but could not be parsed into a valid entry. */
  error?: string;
  /** 1-based for error reporting. */
  lineNumber: number;
}

/**
 * Parse free-form text into product entries. One row per line. Fields are
 * separated by tabs (Excel paste) or semicolons:
 *
 *   name; price; measureValue[; unit][; doseCount]
 *
 * Comma is reserved for Italian decimals ("2,49") and is NOT a field
 * separator, so users can paste numbers in either "2,49" or "2.49" form.
 */
export function parseBulkPaste(
  category: CategoryDefinition,
  raw: string,
): ParsedRow[] {
  const units = getCategoryUnits(category);
  const out: ParsedRow[] = [];

  raw
    .split(/\r?\n/)
    .map((line, idx) => ({ line: line.trim(), lineNumber: idx + 1 }))
    .filter(({ line }) => line.length > 0)
    .forEach(({ line, lineNumber }) => {
      const fields = line.split(/[;\t]/).map((f) => f.trim());
      if (fields.length < 2) {
        out.push({
          entry: buildEmptyEntry(category),
          error: "Servono almeno nome e prezzo",
          lineNumber,
        });
        return;
      }

      const [name, priceRaw, measureRaw, unitRaw, doseRaw] = fields;
      const price = num(priceRaw);
      if (!Number.isFinite(price)) {
        out.push({
          entry: buildEmptyEntry(category),
          error: `Prezzo non valido: "${priceRaw}"`,
          lineNumber,
        });
        return;
      }

      const entry = buildEmptyEntry(category);
      entry.name = name;
      entry.price = price;

      if (measureRaw !== undefined) {
        const measure = num(measureRaw);
        if (Number.isFinite(measure)) entry.measureValue = measure;
      }

      if (unitRaw) {
        const normalized = unitRaw.toLowerCase();
        const match = units.find(
          (u) => u.id.toLowerCase() === normalized || u.label.toLowerCase() === normalized,
        );
        if (match) entry.measureUnitId = match.id;
      }

      if (category.context === "dosage" && doseRaw !== undefined) {
        const dose = num(doseRaw);
        if (Number.isFinite(dose)) entry.doseCount = dose;
      }

      out.push({ entry, lineNumber });
    });

  return out;
}
