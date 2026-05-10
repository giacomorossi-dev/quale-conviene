import { describe, expect, it } from "vitest";
import {
  buildEmptyEntry,
  CONTEXTS,
  compute,
  computeEntry,
  getCategoryBaseLabel,
  getCategoryBaseLabelPlural,
  getCategoryUnits,
  type CategoryDefinition,
  type ProductEntry,
} from "./pricing";

// ---------------------------------------------------------------------------
// Fixtures (kept inline so tests don't depend on the live `categories.ts`)
// ---------------------------------------------------------------------------

const liquidCat: CategoryDefinition = {
  slug: "liquid-fixture",
  name: "Liquid",
  description: "",
  context: "liquid",
  levels: [
    { id: "box", label: "fardello", pluralLabel: "fardelli", optional: true, default: 0 },
    { id: "bottle", label: "bottiglia", pluralLabel: "bottiglie", default: 1 },
  ],
};

const weightCat: CategoryDefinition = {
  slug: "weight-fixture",
  name: "Weight",
  description: "",
  context: "weight",
  levels: [
    { id: "box", label: "cartone", pluralLabel: "cartoni", optional: true, default: 0 },
    { id: "pack", label: "confezione", pluralLabel: "confezioni", default: 1 },
  ],
};

const unitCat: CategoryDefinition = {
  slug: "unit-fixture",
  name: "Unit",
  description: "",
  context: "unit",
  baseLabel: "tab",
  baseLabelPlural: "tab",
  levels: [
    { id: "box", label: "confezione", pluralLabel: "confezioni", optional: true, default: 0 },
    { id: "pack", label: "scatola", pluralLabel: "scatole", default: 1 },
  ],
};

const dosageCat: CategoryDefinition = {
  slug: "dosage-fixture",
  name: "Dosage",
  description: "",
  context: "dosage",
  levels: [
    { id: "box", label: "confezione", pluralLabel: "confezioni", optional: true, default: 0 },
    { id: "bottle", label: "flacone", pluralLabel: "flaconi", default: 1 },
  ],
};

// ---------------------------------------------------------------------------
// CONTEXTS shape
// ---------------------------------------------------------------------------

describe("CONTEXTS", () => {
  it("exposes all four contexts", () => {
    expect(Object.keys(CONTEXTS).sort()).toEqual([
      "dosage",
      "liquid",
      "unit",
      "weight",
    ]);
  });

  it("liquid input units convert to litres", () => {
    const liquid = CONTEXTS.liquid;
    expect(liquid.inputUnits.find((u) => u.id === "L")?.toBase).toBe(1);
    expect(liquid.inputUnits.find((u) => u.id === "cl")?.toBase).toBe(0.01);
    expect(liquid.inputUnits.find((u) => u.id === "ml")?.toBase).toBe(0.001);
  });

  it("weight input units convert to kg", () => {
    const weight = CONTEXTS.weight;
    expect(weight.inputUnits.find((u) => u.id === "kg")?.toBase).toBe(1);
    expect(weight.inputUnits.find((u) => u.id === "g")?.toBase).toBe(0.001);
  });
});

// ---------------------------------------------------------------------------
// Category helpers
// ---------------------------------------------------------------------------

describe("category helpers", () => {
  it("falls back to context default labels when none overridden", () => {
    expect(getCategoryBaseLabel(liquidCat)).toBe("litro");
    expect(getCategoryBaseLabelPlural(liquidCat)).toBe("litri");
  });

  it("uses overrides when category provides them", () => {
    expect(getCategoryBaseLabel(unitCat)).toBe("tab");
    expect(getCategoryBaseLabelPlural(unitCat)).toBe("tab");
  });

  it("returns the units for the chosen context", () => {
    expect(getCategoryUnits(weightCat)).toBe(CONTEXTS.weight.inputUnits);
  });
});

// ---------------------------------------------------------------------------
// computeEntry math
// ---------------------------------------------------------------------------

describe("computeEntry — liquid", () => {
  it("normalises 6 × 1.5 L bottles to 9 L total and €/L", () => {
    const entry: ProductEntry = {
      price: 4.5,
      counts: { box: 1, bottle: 6 },
      measureValue: 1.5,
      measureUnitId: "L",
    };
    const c = computeEntry(liquidCat, entry);
    expect(c.totalBase).toBe(9);
    expect(c.pricePerBase).toBeCloseTo(0.5, 6);
    expect(c.pricePerLevel.box).toBe(4.5);
    expect(c.pricePerLevel.bottle).toBeCloseTo(0.75, 6);
  });

  it("treats optional outer level missing as 1 (no double-divide)", () => {
    const entry: ProductEntry = {
      price: 4.5,
      counts: { box: 0, bottle: 6 },
      measureValue: 1.5,
      measureUnitId: "L",
    };
    const c = computeEntry(liquidCat, entry);
    expect(c.totalBase).toBe(9);
    expect(c.pricePerBase).toBeCloseTo(0.5, 6);
    // box was skipped → omitted from pricePerLevel
    expect(c.pricePerLevel.box).toBeUndefined();
    expect(c.pricePerLevel.bottle).toBeCloseTo(0.75, 6);
  });

  it("compares cross-scale formats (cl vs L) correctly", () => {
    const cans: ProductEntry = {
      price: 3,
      counts: { box: 1, bottle: 6 },
      measureValue: 33,
      measureUnitId: "cl",
    };
    const bottle: ProductEntry = {
      price: 1,
      counts: { box: 0, bottle: 1 },
      measureValue: 1.5,
      measureUnitId: "L",
    };
    const cansResult = computeEntry(liquidCat, cans);
    const bottleResult = computeEntry(liquidCat, bottle);
    // 6 × 33 cl = 1.98 L → €/L = 3 / 1.98 ≈ 1.515
    expect(cansResult.totalBase).toBeCloseTo(1.98, 6);
    expect(cansResult.pricePerBase).toBeCloseTo(3 / 1.98, 6);
    // 1 × 1.5 L = 1.5 L → €/L = 1 / 1.5 ≈ 0.667
    expect(bottleResult.totalBase).toBeCloseTo(1.5, 6);
    expect(bottleResult.pricePerBase).toBeCloseTo(1 / 1.5, 6);
    // The single bottle is cheaper per litre even with a much smaller volume
    expect(bottleResult.pricePerBase).toBeLessThan(cansResult.pricePerBase);
  });
});

describe("computeEntry — weight", () => {
  it("normalises 6 × 500 g cartone to 3 kg total", () => {
    const entry: ProductEntry = {
      price: 6.99,
      counts: { box: 1, pack: 6 },
      measureValue: 500,
      measureUnitId: "g",
    };
    const c = computeEntry(weightCat, entry);
    expect(c.totalBase).toBeCloseTo(3, 6);
    expect(c.pricePerBase).toBeCloseTo(2.33, 2);
  });

  it("ranks 1 kg pack against 500 g pack at correct €/kg", () => {
    const small: ProductEntry = {
      price: 1.29,
      counts: { box: 0, pack: 1 },
      measureValue: 500,
      measureUnitId: "g",
    };
    const big: ProductEntry = {
      price: 2.49,
      counts: { box: 0, pack: 1 },
      measureValue: 1,
      measureUnitId: "kg",
    };
    expect(computeEntry(weightCat, small).pricePerBase).toBeCloseTo(2.58, 2);
    expect(computeEntry(weightCat, big).pricePerBase).toBeCloseTo(2.49, 2);
  });
});

describe("computeEntry — unit", () => {
  it("ranks tabs by €/tab independent of pack size", () => {
    const small: ProductEntry = {
      price: 7.99,
      counts: { box: 0, pack: 1 },
      measureValue: 30,
      measureUnitId: "count",
    };
    const big: ProductEntry = {
      price: 24.99,
      counts: { box: 1, pack: 3 },
      measureValue: 40,
      measureUnitId: "count",
    };
    expect(computeEntry(unitCat, small).pricePerBase).toBeCloseTo(7.99 / 30, 4);
    expect(computeEntry(unitCat, big).pricePerBase).toBeCloseTo(24.99 / 120, 4);
  });
});

describe("computeEntry — dosage", () => {
  it("ranks by €/lavaggio (volume is informational only)", () => {
    const concentrated: ProductEntry = {
      price: 4.99,
      counts: { box: 0, bottle: 1 },
      measureValue: 750,
      measureUnitId: "ml",
      doseCount: 44,
    };
    const standard: ProductEntry = {
      price: 4.49,
      counts: { box: 0, bottle: 1 },
      measureValue: 1.5,
      measureUnitId: "L",
      doseCount: 24,
    };
    const c1 = computeEntry(dosageCat, concentrated);
    const c2 = computeEntry(dosageCat, standard);
    expect(c1.pricePerBase).toBeCloseTo(4.99 / 44, 5);
    expect(c2.pricePerBase).toBeCloseTo(4.49 / 24, 5);
    // Concentrated wins on €/wash even though pricier nominally
    expect(c1.pricePerBase).toBeLessThan(c2.pricePerBase);
  });

  it("flags entries missing doseCount as invalid", () => {
    const noDoses: ProductEntry = {
      price: 5,
      counts: { box: 0, bottle: 1 },
      measureValue: 1,
      measureUnitId: "L",
      // no doseCount
    };
    expect(computeEntry(dosageCat, noDoses).invalid).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// compute() — ranking + diff %
// ---------------------------------------------------------------------------

describe("compute()", () => {
  it("ranks 1=cheapest and reports diffPctFromBest", () => {
    const a: ProductEntry = {
      price: 6.99,
      counts: { box: 1, pack: 6 },
      measureValue: 500,
      measureUnitId: "g",
    };
    const b: ProductEntry = {
      price: 2.49,
      counts: { box: 0, pack: 1 },
      measureValue: 1,
      measureUnitId: "kg",
    };
    const c: ProductEntry = {
      price: 1.29,
      counts: { box: 0, pack: 1 },
      measureValue: 500,
      measureUnitId: "g",
    };
    const ranked = compute(weightCat, [a, b, c]);
    // expected order: a (€2.33/kg) < b (€2.49/kg) < c (€2.58/kg)
    expect(ranked.map((r) => r.entry)).toEqual([a, b, c]);
    expect(ranked[0].rank).toBe(1);
    expect(ranked[0].diffPctFromBest).toBe(0);
    expect(ranked[1].diffPctFromBest).toBeGreaterThan(0);
    expect(ranked[2].diffPctFromBest).toBeGreaterThan(ranked[1].diffPctFromBest);
  });

  it("pushes invalid entries to the bottom and preserves their input order", () => {
    const valid: ProductEntry = {
      price: 1,
      counts: { box: 0, bottle: 1 },
      measureValue: 1,
      measureUnitId: "L",
    };
    const invalid1: ProductEntry = {
      price: 0,
      counts: { box: 0, bottle: 1 },
      measureValue: 1,
      measureUnitId: "L",
    };
    const invalid2: ProductEntry = {
      price: 5,
      counts: { box: 0, bottle: 1 },
      measureValue: 0,
      measureUnitId: "L",
    };
    const ranked = compute(liquidCat, [invalid1, valid, invalid2]);
    expect(ranked[0].entry).toBe(valid);
    expect(ranked[0].invalid).toBe(false);
    expect(ranked[1].entry).toBe(invalid1);
    expect(ranked[2].entry).toBe(invalid2);
    // diff from best is +Infinity for invalid rows
    expect(ranked[1].diffPctFromBest).toBe(Number.POSITIVE_INFINITY);
  });
});

// ---------------------------------------------------------------------------
// buildEmptyEntry
// ---------------------------------------------------------------------------

describe("buildEmptyEntry", () => {
  it("seeds counts from level defaults", () => {
    const e = buildEmptyEntry(liquidCat);
    expect(e.counts).toEqual({ box: 0, bottle: 1 });
    expect(e.measureUnitId).toBe("L");
  });

  it("seeds doseCount only for dosage context", () => {
    expect(buildEmptyEntry(dosageCat).doseCount).toBe(0);
    expect(buildEmptyEntry(liquidCat).doseCount).toBeUndefined();
  });
});
