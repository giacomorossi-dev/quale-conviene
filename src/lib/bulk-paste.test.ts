import { describe, expect, it } from "vitest";
import { parseBulkPaste } from "./bulk-paste.ts";
import type { CategoryDefinition } from "./pricing.ts";

const tpUnit: CategoryDefinition = {
	slug: "carta-igienica",
	name: "Carta igienica",
	description: "x",
	context: "unit",
	baseLabel: "strappo",
	baseLabelPlural: "strappi",
	levels: [
		{
			id: "box",
			label: "confezione",
			pluralLabel: "confezioni",
			optional: true,
			default: 0,
		},
		{ id: "roll", label: "rotolo", pluralLabel: "rotoli", default: 4 },
	],
};

const water: CategoryDefinition = {
	slug: "acqua",
	name: "Acqua",
	description: "x",
	context: "liquid",
	levels: [
		{
			id: "pack",
			label: "confezione",
			pluralLabel: "confezioni",
			optional: true,
			default: 1,
		},
		{ id: "bottle", label: "bottiglia", pluralLabel: "bottiglie", default: 6 },
	],
};

const detergent: CategoryDefinition = {
	slug: "detersivo-lavatrice",
	name: "Detersivo lavatrice",
	description: "x",
	context: "dosage",
	levels: [
		{
			id: "pack",
			label: "confezione",
			pluralLabel: "confezioni",
			optional: true,
			default: 0,
		},
		{ id: "bottle", label: "flacone", pluralLabel: "flaconi", default: 1 },
	],
};

describe("parseBulkPaste", () => {
	it("parses semicolon-separated rows into entries", () => {
		const rows = parseBulkPaste(tpUnit, "Maxi 4 rotoli; 3.99; 200");
		expect(rows).toHaveLength(1);
		expect(rows[0].error).toBeUndefined();
		expect(rows[0].entry.name).toBe("Maxi 4 rotoli");
		expect(rows[0].entry.price).toBe(3.99);
		expect(rows[0].entry.measureValue).toBe(200);
	});

	it("accepts Italian decimal comma in numbers", () => {
		const rows = parseBulkPaste(water, "Naturale 1.5L; 2,49; 1,5; L");
		expect(rows[0].entry.price).toBeCloseTo(2.49);
		expect(rows[0].entry.measureValue).toBeCloseTo(1.5);
		expect(rows[0].entry.measureUnitId).toBe("L");
	});

	it("matches units case-insensitively", () => {
		const rows = parseBulkPaste(water, "Test; 1; 500; ML");
		expect(rows[0].entry.measureUnitId).toBe("ml");
	});

	it("falls back to default unit when label is unknown", () => {
		const rows = parseBulkPaste(water, "Test; 1; 1; hectolitres");
		// keeps the default measureUnitId from buildEmptyEntry, not the bad label
		expect(rows[0].entry.measureUnitId).toBe("L");
	});

	it("flags rows missing a price", () => {
		const rows = parseBulkPaste(tpUnit, "Solo nome");
		expect(rows[0].error).toMatch(/almeno nome e prezzo/);
	});

	it("flags rows with non-numeric prices", () => {
		const rows = parseBulkPaste(tpUnit, "x; gratis; 100");
		expect(rows[0].error).toMatch(/Prezzo non valido/);
	});

	it("skips blank lines", () => {
		const rows = parseBulkPaste(tpUnit, "\n\nMaxi 4; 3.99; 200\n\n");
		expect(rows).toHaveLength(1);
	});

	it("captures the dose count for dosage categories", () => {
		const rows = parseBulkPaste(
			detergent,
			"Concentrato 44 lavaggi; 6.99; 750; ml; 44",
		);
		expect(rows[0].entry.doseCount).toBe(44);
	});

	it("supports tab- and semicolon-separated rows", () => {
		const rows = parseBulkPaste(tpUnit, "Tab\t3.99\t200\nSemi;1.99;100");
		expect(rows).toHaveLength(2);
		expect(rows[0].entry.measureValue).toBe(200);
		expect(rows[1].entry.measureValue).toBe(100);
	});

	it("does NOT split on commas (Italian decimal preserved)", () => {
		const rows = parseBulkPaste(tpUnit, "Maxi 4 rotoli; 3,99; 200");
		expect(rows[0].entry.price).toBeCloseTo(3.99);
		expect(rows[0].entry.measureValue).toBe(200);
	});

	it("returns a 1-based line number on errors", () => {
		const rows = parseBulkPaste(tpUnit, "ok; 1; 1\nbroken");
		expect(rows[0].lineNumber).toBe(1);
		expect(rows[1].lineNumber).toBe(2);
		expect(rows[1].error).toBeDefined();
	});
});
