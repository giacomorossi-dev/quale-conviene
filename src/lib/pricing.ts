/**
 * Generic unit-price comparison primitives.
 *
 * Three reusable comparison contexts (`liquid`, `weight`, `unit`) define the
 * math (input units + base unit). Categories inject the labels (level names,
 * base label) but inherit the math from a context. So "carta igienica" and
 * "tabs lavastoviglie" are both `unit` contexts that just relabel the chain.
 */

// =====================================================================
// Comparison contexts (math): liquid / weight / unit
// =====================================================================

export type ContextId = "liquid" | "weight" | "unit" | "dosage";

export interface MeasureUnit {
  id: string;
  /** Label shown in the unit selector (e.g. "L", "g"). Empty when irrelevant. */
  label: string;
  /** Conversion factor toward the base unit (e.g. cl→L: 0.01). */
  toBase: number;
}

export interface ComparisonContext {
  id: ContextId;
  /** Default singular base label used in "€/X" headers, overridable. */
  defaultBaseLabel: string;
  /** Default plural form, used in "X per Y" labels in the form. */
  defaultBaseLabelPlural: string;
  /** Input units the user can pick. First one is the default. */
  inputUnits: MeasureUnit[];
}

export const CONTEXTS: Record<ContextId, ComparisonContext> = {
  liquid: {
    id: "liquid",
    defaultBaseLabel: "litro",
    defaultBaseLabelPlural: "litri",
    inputUnits: [
      { id: "L", label: "L", toBase: 1 },
      { id: "cl", label: "cl", toBase: 0.01 },
      { id: "ml", label: "ml", toBase: 0.001 },
    ],
  },
  weight: {
    id: "weight",
    defaultBaseLabel: "kg",
    defaultBaseLabelPlural: "kg",
    inputUnits: [
      { id: "kg", label: "kg", toBase: 1 },
      { id: "g", label: "g", toBase: 0.001 },
    ],
  },
  unit: {
    id: "unit",
    defaultBaseLabel: "pezzo",
    defaultBaseLabelPlural: "pezzi",
    inputUnits: [{ id: "count", label: "", toBase: 1 }],
  },
  // Dosage = liquid product whose actionable metric is per-dose, not per-litre
  // (e.g. "44 washes per bottle"). The user types both the bottle volume (info
  // only) and the dose count; the math ranks on €/dose.
  dosage: {
    id: "dosage",
    defaultBaseLabel: "lavaggio",
    defaultBaseLabelPlural: "lavaggi",
    inputUnits: [
      { id: "L", label: "L", toBase: 1 },
      { id: "cl", label: "cl", toBase: 0.01 },
      { id: "ml", label: "ml", toBase: 0.001 },
    ],
  },
};

// =====================================================================
// Categories (labels): inject context-specific names
// =====================================================================

export interface UnitLevel {
  /** Stable identifier used as key in `ProductEntry.counts`. */
  id: string;
  /** Singular Italian label (e.g. "rotolo"). */
  label: string;
  /** Plural Italian label (e.g. "rotoli"). */
  pluralLabel: string;
  /** When `true` the level can be skipped: missing/zero counts default to 1. */
  optional?: boolean;
  /** Initial value for the input field. */
  default?: number;
}

export interface CategoryDefinition {
  /** Italian, SEO-friendly URL slug. */
  slug: string;
  /** Italian human-friendly name. */
  name: string;
  /** Short description used for meta tags and intro copy. */
  description: string;
  /** Optional longer copy rendered above the comparator. */
  intro?: string;
  /** Comparison context (math axis). */
  context: ContextId;
  /** Override the context default (always meaningful for `unit`). */
  baseLabel?: string;
  /** Override the context default plural. */
  baseLabelPlural?: string;
  /** Hierarchy of wrapper levels; the last one wraps the base unit. */
  levels: UnitLevel[];
  /**
   * Synonyms and related products for the search box on the home.
   * Include brand names, alternative formats, related items the user might
   * search for (e.g. "panna" should surface `latte-uht`).
   */
  keywords?: string[];
  /** 3-5 Q&A surfaced as FAQPage schema and rendered at the bottom of the page. */
  faq?: Array<{ q: string; a: string }>;
  /** Slugs of related categories used for internal linking + SEO. */
  related?: string[];
  /** Sample entries pre-loaded in the comparator on first render. */
  sampleEntries?: ProductEntry[];
}

export function getCategoryBaseLabel(c: CategoryDefinition): string {
  return c.baseLabel ?? CONTEXTS[c.context].defaultBaseLabel;
}

export function getCategoryBaseLabelPlural(c: CategoryDefinition): string {
  return c.baseLabelPlural ?? CONTEXTS[c.context].defaultBaseLabelPlural;
}

export function getCategoryUnits(c: CategoryDefinition): MeasureUnit[] {
  return CONTEXTS[c.context].inputUnits;
}

// =====================================================================
// Entries + computation
// =====================================================================

export interface ProductEntry {
  name?: string;
  price: number;
  counts: Record<string, number>;
  /** Quantity expressed in the chosen `MeasureUnit`. */
  measureValue: number;
  measureUnitId: string;
  /** Dose count per innermost level (e.g. washes per bottle). `dosage` only. */
  doseCount?: number;
}

export interface ComputedEntry {
  entry: ProductEntry;
  /** Total amount expressed in the category base unit. */
  totalBase: number;
  /** Price per level keyed by level id. */
  pricePerLevel: Record<string, number>;
  /** Price per single base unit. */
  pricePerBase: number;
  /** 1 = cheapest. Ties keep their input order. */
  rank: number;
  /** Percentage difference vs the cheapest entry (0 for the winner). */
  diffPctFromBest: number;
  /** True when at least one input is missing or non-positive. */
  invalid: boolean;
}

const EPSILON = 1e-9;

function resolveCount(level: UnitLevel, counts: Record<string, number>): number {
  const raw = counts[level.id];
  if (raw === undefined || raw === null || Number.isNaN(raw)) {
    return level.optional ? 1 : 0;
  }
  if (raw === 0 && level.optional) return 1;
  return raw;
}

function resolveMeasureUnit(
  category: CategoryDefinition,
  id: string,
): MeasureUnit {
  const units = getCategoryUnits(category);
  return units.find((u) => u.id === id) ?? units[0];
}

export function computeEntry(
  category: CategoryDefinition,
  entry: ProductEntry,
): Omit<ComputedEntry, "rank" | "diffPctFromBest"> {
  const counts = category.levels.map((l) => resolveCount(l, entry.counts));
  const totalItems = counts.reduce((acc, c) => acc * c, 1);

  let totalBase: number;
  let invalid: boolean;

  if (category.context === "dosage") {
    const doseCount = entry.doseCount ?? 0;
    totalBase = totalItems * doseCount;
    invalid =
      entry.price <= 0 ||
      doseCount <= 0 ||
      totalBase <= 0 ||
      counts.some((c) => c <= 0);
  } else {
    const measureUnit = resolveMeasureUnit(category, entry.measureUnitId);
    totalBase = totalItems * entry.measureValue * measureUnit.toBase;
    invalid =
      entry.price <= 0 ||
      entry.measureValue <= 0 ||
      totalBase <= 0 ||
      counts.some((c) => c <= 0);
  }

  const pricePerLevel: Record<string, number> = {};
  if (!invalid) {
    // €/level X = price / (count[0] × ... × count[X])
    // For optional levels, an empty/zero input means "no outer wrapper": the
    // math treats it as 1 but we omit the price/level so the UI shows "—"
    // instead of duplicating the inner level's value.
    for (let i = 0; i < category.levels.length; i++) {
      const level = category.levels[i];
      const raw = entry.counts[level.id];
      const isPresent =
        !level.optional || (raw !== undefined && raw !== null && raw > 0);
      if (!isPresent) continue;
      const divisor = counts.slice(0, i + 1).reduce((acc, c) => acc * c, 1);
      if (divisor > 0) pricePerLevel[level.id] = entry.price / divisor;
    }
  }

  const pricePerBase = invalid
    ? Number.POSITIVE_INFINITY
    : entry.price / totalBase;

  return { entry, totalBase, pricePerLevel, pricePerBase, invalid };
}

export function compute(
  category: CategoryDefinition,
  entries: ProductEntry[],
): ComputedEntry[] {
  const computed = entries.map((e) => computeEntry(category, e));
  const indexed = computed.map((c, i) => ({ c, i }));

  indexed.sort((a, b) => {
    if (a.c.invalid && !b.c.invalid) return 1;
    if (!a.c.invalid && b.c.invalid) return -1;
    if (a.c.invalid && b.c.invalid) return a.i - b.i;
    const diff = a.c.pricePerBase - b.c.pricePerBase;
    if (Math.abs(diff) < EPSILON) return a.i - b.i;
    return diff;
  });

  const validBest = indexed.find(({ c }) => !c.invalid)?.c.pricePerBase;

  return indexed.map(({ c }, idx) => {
    const diffPctFromBest =
      c.invalid || validBest === undefined || validBest <= 0
        ? Number.POSITIVE_INFINITY
        : ((c.pricePerBase - validBest) / validBest) * 100;
    return { ...c, rank: idx + 1, diffPctFromBest };
  });
}

export function buildEmptyEntry(category: CategoryDefinition): ProductEntry {
  const counts: Record<string, number> = {};
  for (const level of category.levels) {
    counts[level.id] = level.default ?? 1;
  }
  const entry: ProductEntry = {
    price: 0,
    counts,
    measureValue: 0,
    measureUnitId: getCategoryUnits(category)[0].id,
  };
  if (category.context === "dosage") entry.doseCount = 0;
  return entry;
}
