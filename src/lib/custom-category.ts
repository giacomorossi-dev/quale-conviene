import type {
	CategoryDefinition,
	ContextId,
	ProductEntry,
	UnitLevel,
} from "./pricing.ts";

/** Marker slug used in CategoryDefinition.slug for ad-hoc categories built by
 *  the /confronta wizard. Real categories never use double underscores. */
export const CUSTOM_SLUG = "__custom__";

/** Defaults applied when the wizard advanced fields are left blank. */
const CONTEXT_DEFAULTS: Record<
	ContextId,
	{
		baseLabel: string;
		baseLabelPlural: string;
		innerLabel: string;
		innerPluralLabel: string;
	}
> = {
	liquid: {
		baseLabel: "litro",
		baseLabelPlural: "litri",
		innerLabel: "bottiglia",
		innerPluralLabel: "bottiglie",
	},
	weight: {
		baseLabel: "kg",
		baseLabelPlural: "kg",
		innerLabel: "confezione",
		innerPluralLabel: "confezioni",
	},
	unit: {
		baseLabel: "pezzo",
		baseLabelPlural: "pezzi",
		innerLabel: "confezione",
		innerPluralLabel: "confezioni",
	},
	dosage: {
		baseLabel: "lavaggio",
		baseLabelPlural: "lavaggi",
		innerLabel: "flacone",
		innerPluralLabel: "flaconi",
	},
};

const OUTER_LEVEL_DEFAULTS = {
	label: "multipack",
	pluralLabel: "multipack",
};

export interface CustomCategoryInput {
	name: string;
	context: ContextId;
	/** Override base unit names. Empty strings fall back to context default. */
	baseLabel?: string;
	baseLabelPlural?: string;
	/** Override inner-level names (the "pack" containing the base unit). */
	innerLabel?: string;
	innerPluralLabel?: string;
	/** When true, expose an optional outer wrapper level (multipack, cartone…). */
	hasOuterLevel?: boolean;
	outerLabel?: string;
	outerPluralLabel?: string;
}

function pick(value: string | undefined, fallback: string): string {
	const trimmed = value?.trim();
	return trimmed && trimmed.length > 0 ? trimmed : fallback;
}

/** Translates wizard input into a runtime `CategoryDefinition` reusable by the
 *  existing Comparator/EntryForm/PurchasePlanner pipeline. */
export function buildCustomCategory(
	input: CustomCategoryInput,
): CategoryDefinition {
	const defaults = CONTEXT_DEFAULTS[input.context];
	const baseLabel = pick(input.baseLabel, defaults.baseLabel);
	const baseLabelPlural = pick(input.baseLabelPlural, defaults.baseLabelPlural);
	const innerLabel = pick(input.innerLabel, defaults.innerLabel);
	const innerPluralLabel = pick(input.innerPluralLabel, defaults.innerPluralLabel);

	const levels: UnitLevel[] = [];
	if (input.hasOuterLevel) {
		levels.push({
			id: "box",
			label: pick(input.outerLabel, OUTER_LEVEL_DEFAULTS.label),
			pluralLabel: pick(
				input.outerPluralLabel,
				OUTER_LEVEL_DEFAULTS.pluralLabel,
			),
			optional: true,
			default: 0,
		});
	}
	levels.push({
		id: "pack",
		label: innerLabel,
		pluralLabel: innerPluralLabel,
		default: 1,
	});

	return {
		slug: CUSTOM_SLUG,
		name: input.name.trim(),
		description: `Confronto personalizzato — ${input.name.trim()}.`,
		context: input.context,
		baseLabel,
		baseLabelPlural,
		levels,
	};
}

// =====================================================================
// Share-URL encode/decode for custom comparisons
// =====================================================================

const VERSION = 1;

interface ShareablePayload {
	v: number;
	c: {
		name: string;
		context: ContextId;
		baseLabel: string;
		baseLabelPlural: string;
		levels: Array<{
			id: string;
			label: string;
			pluralLabel: string;
			optional?: boolean;
			default?: number;
		}>;
	};
	e: ProductEntry[];
}

function toBase64Url(str: string): string {
	const b64 =
		typeof window !== "undefined"
			? window.btoa(unescape(encodeURIComponent(str)))
			: Buffer.from(str, "utf8").toString("base64");
	return b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function fromBase64Url(token: string): string {
	const pad = "===".slice((token.length + 3) % 4);
	const b64 = token.replace(/-/g, "+").replace(/_/g, "/") + pad;
	return typeof window !== "undefined"
		? decodeURIComponent(escape(window.atob(b64)))
		: Buffer.from(b64, "base64").toString("utf8");
}

export function encodeCustomShare(
	category: CategoryDefinition,
	entries: ProductEntry[],
): string {
	const payload: ShareablePayload = {
		v: VERSION,
		c: {
			name: category.name,
			context: category.context,
			baseLabel: category.baseLabel ?? "",
			baseLabelPlural: category.baseLabelPlural ?? "",
			levels: category.levels.map((l) => ({
				id: l.id,
				label: l.label,
				pluralLabel: l.pluralLabel,
				...(l.optional ? { optional: true } : {}),
				...(l.default !== undefined ? { default: l.default } : {}),
			})),
		},
		e: entries,
	};
	return toBase64Url(JSON.stringify(payload));
}

export function decodeCustomShare(
	token: string,
): { category: CategoryDefinition; entries: ProductEntry[] } | null {
	try {
		const data = JSON.parse(fromBase64Url(token)) as ShareablePayload;
		if (!data || typeof data !== "object") return null;
		if (!data.c || !Array.isArray(data.e)) return null;
		if (!Array.isArray(data.c.levels) || data.c.levels.length === 0) return null;
		const category: CategoryDefinition = {
			slug: CUSTOM_SLUG,
			name: data.c.name,
			description: `Confronto personalizzato — ${data.c.name}.`,
			context: data.c.context,
			baseLabel: data.c.baseLabel || undefined,
			baseLabelPlural: data.c.baseLabelPlural || undefined,
			levels: data.c.levels,
		};
		return { category, entries: data.e };
	} catch {
		return null;
	}
}

export function buildCustomShareUrl(
	category: CategoryDefinition,
	entries: ProductEntry[],
): string {
	if (typeof window === "undefined") return "";
	const url = new URL("/confronta", window.location.origin);
	url.searchParams.set("d", encodeCustomShare(category, entries));
	return url.toString();
}
