const KEY = "qc:recent";
const MAX = 5;

/**
 * Push a slug to the front of the recent-categories list. Dedupes (existing
 * entry moves to the top) and caps the list at MAX. No-op on the server.
 */
export function pushRecent(slug: string): void {
	if (typeof window === "undefined") return;
	try {
		const current = readRecent();
		const next = [slug, ...current.filter((s) => s !== slug)].slice(0, MAX);
		window.localStorage.setItem(KEY, JSON.stringify(next));
	} catch {
		/* storage disabled or quota — ignore */
	}
}

export function readRecent(): string[] {
	if (typeof window === "undefined") return [];
	try {
		const raw = window.localStorage.getItem(KEY);
		if (!raw) return [];
		const parsed = JSON.parse(raw);
		return Array.isArray(parsed)
			? parsed.filter((s): s is string => typeof s === "string")
			: [];
	} catch {
		return [];
	}
}
