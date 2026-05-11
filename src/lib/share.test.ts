import { describe, expect, it } from "vitest";
import type { ProductEntry } from "./pricing.ts";
import { decodeEntries, encodeEntries } from "./share.ts";

const sample = (): ProductEntry[] => [
	{
		name: "Maxi 4 rotoli",
		price: 3.99,
		counts: { box: 0, roll: 4 },
		measureValue: 200,
		measureUnitId: "count",
	},
	{
		name: "Pacco 12 rotoli",
		price: 9.49,
		counts: { box: 0, roll: 12 },
		measureValue: 180,
		measureUnitId: "count",
	},
];

describe("encodeEntries / decodeEntries", () => {
	it("round-trips a typical payload", () => {
		const entries = sample();
		const token = encodeEntries(entries);
		const decoded = decodeEntries(token);
		expect(decoded).toEqual(entries);
	});

	it("produces a URL-safe base64 (no +, /, or = padding)", () => {
		const token = encodeEntries(sample());
		expect(token).not.toMatch(/[+/=]/);
	});

	it("returns null for garbage input", () => {
		expect(decodeEntries("not-base64-at-all!!!")).toBeNull();
	});

	it("returns null when the payload is JSON but the wrong shape", () => {
		const bad = btoa(JSON.stringify({ hello: "world" }))
			.replace(/\+/g, "-")
			.replace(/\//g, "_")
			.replace(/=+$/, "");
		expect(decodeEntries(bad)).toBeNull();
	});

	it("preserves unicode in product names", () => {
		const entries: ProductEntry[] = [
			{
				name: "Caffè 100% arabica · €",
				price: 4.5,
				counts: { box: 1, capsule: 16 },
				measureValue: 5.5,
				measureUnitId: "g",
			},
		];
		expect(decodeEntries(encodeEntries(entries))).toEqual(entries);
	});

	it("handles empty arrays", () => {
		expect(decodeEntries(encodeEntries([]))).toEqual([]);
	});
});
