const KEY = "qc:recent";
const MAX = 5;

export type RecentEntry =
	| { kind: "category"; slug: string }
	| { kind: "custom"; name: string };

/**
 * Push a category slug to the front of the recent list.
 * Dedupes (existing entry moves to the top) and caps the list at MAX.
 * No-op on the server.
 */
export function pushRecent(slug: string): void {
	pushEntry({ kind: "category", slug });
}

/**
 * Push a custom-comparison name to the front. Custom entries dedupe by name.
 */
export function pushRecentCustom(name: string): void {
	const trimmed = name.trim();
	if (!trimmed) return;
	pushEntry({ kind: "custom", name: trimmed });
}

function pushEntry(entry: RecentEntry): void {
	if (typeof window === "undefined") return;
	try {
		const current = readRecent();
		const filtered = current.filter((e) => !sameEntry(e, entry));
		const next = [entry, ...filtered].slice(0, MAX);
		window.localStorage.setItem(KEY, JSON.stringify(next));
	} catch {
		/* storage disabled or quota — ignore */
	}
}

function sameEntry(a: RecentEntry, b: RecentEntry): boolean {
	if (a.kind !== b.kind) return false;
	if (a.kind === "category" && b.kind === "category") return a.slug === b.slug;
	if (a.kind === "custom" && b.kind === "custom") return a.name === b.name;
	return false;
}

/**
 * Read the recent list. Migrates the legacy `string[]` payload (pre-custom
 * comparisons) by treating each string as a category slug.
 */
export function readRecent(): RecentEntry[] {
	if (typeof window === "undefined") return [];
	try {
		const raw = window.localStorage.getItem(KEY);
		if (!raw) return [];
		const parsed = JSON.parse(raw);
		if (!Array.isArray(parsed)) return [];
		const out: RecentEntry[] = [];
		for (const item of parsed) {
			if (typeof item === "string") {
				out.push({ kind: "category", slug: item });
			} else if (item && typeof item === "object") {
				if (item.kind === "category" && typeof item.slug === "string") {
					out.push({ kind: "category", slug: item.slug });
				} else if (item.kind === "custom" && typeof item.name === "string") {
					out.push({ kind: "custom", name: item.name });
				}
			}
		}
		return out;
	} catch {
		return [];
	}
}
