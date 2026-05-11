import { Link } from "@tanstack/react-router";
import { ArrowRight, History, Wand2 } from "lucide-react";
import { useEffect, useState } from "react";
import { getCategoryBySlug } from "#/data/categories.ts";
import { type RecentEntry, readRecent } from "#/lib/recent.ts";

interface Props {
	/** Limit shown cards. Default 4. */
	limit?: number;
}

type ResolvedEntry =
	| { kind: "category"; slug: string; name: string }
	| { kind: "custom"; name: string };

export default function RecentComparisons({ limit = 4 }: Props) {
	const [recent, setRecent] = useState<ResolvedEntry[]>([]);

	useEffect(() => {
		const entries = readRecent();
		const resolved = entries
			.map((e): ResolvedEntry | null => resolveEntry(e))
			.filter((e): e is ResolvedEntry => e !== null)
			.slice(0, limit);
		setRecent(resolved);
	}, [limit]);

	if (recent.length === 0) return null;

	return (
		<section aria-labelledby="recent-heading" className="space-y-3">
			<div className="flex items-center gap-2">
				<History className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
				<h2
					id="recent-heading"
					className="text-sm font-semibold uppercase tracking-widest text-muted-foreground"
				>
					Le tue ultime comparazioni
				</h2>
			</div>
			<div className="flex gap-3 overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4">
				{recent.map((entry, i) =>
					entry.kind === "category" ? (
						<Link
							key={`cat-${entry.slug}`}
							to="/$category"
							params={{ category: entry.slug }}
							className="group glass flex min-w-[200px] items-center justify-between gap-3 rounded-lg px-4 py-3 text-sm transition-all hover:-translate-y-px hover:shadow-[0_12px_30px_-12px_rgba(168,85,247,0.4)]"
						>
							<span className="truncate font-medium group-hover:brand-gradient-text">
								{entry.name}
							</span>
							<ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-foreground" />
						</Link>
					) : (
						<Link
							key={`custom-${i}-${entry.name}`}
							to="/confronta"
							className="group glass flex min-w-[200px] items-center justify-between gap-3 rounded-lg px-4 py-3 text-sm transition-all hover:-translate-y-px hover:shadow-[0_12px_30px_-12px_rgba(168,85,247,0.4)]"
						>
							<span className="flex items-center gap-2 truncate font-medium group-hover:brand-gradient-text">
								<Wand2
									className="h-3.5 w-3.5 shrink-0 text-muted-foreground group-hover:text-foreground"
									aria-hidden="true"
								/>
								<span className="truncate">{entry.name}</span>
							</span>
							<ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-foreground" />
						</Link>
					),
				)}
			</div>
		</section>
	);
}

function resolveEntry(entry: RecentEntry): ResolvedEntry | null {
	if (entry.kind === "category") {
		const def = getCategoryBySlug(entry.slug);
		if (!def) return null;
		return { kind: "category", slug: def.slug, name: def.name };
	}
	return { kind: "custom", name: entry.name };
}
