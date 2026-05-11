import { Link } from "@tanstack/react-router";
import { ArrowRight, History } from "lucide-react";
import { useEffect, useState } from "react";
import { getCategoryBySlug } from "#/data/categories.ts";
import type { CategoryDefinition } from "#/lib/pricing.ts";
import { readRecent } from "#/lib/recent.ts";

interface Props {
	/** Limit shown cards. Default 4. */
	limit?: number;
}

export default function RecentComparisons({ limit = 4 }: Props) {
	const [recent, setRecent] = useState<CategoryDefinition[]>([]);

	useEffect(() => {
		const slugs = readRecent();
		const resolved = slugs
			.map((slug) => getCategoryBySlug(slug))
			.filter((c): c is CategoryDefinition => c !== undefined)
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
				{recent.map((c) => (
					<Link
						key={c.slug}
						to="/$category"
						params={{ category: c.slug }}
						className="group glass flex min-w-[200px] items-center justify-between gap-3 rounded-lg px-4 py-3 text-sm transition-all hover:-translate-y-px hover:shadow-[0_12px_30px_-12px_rgba(168,85,247,0.4)]"
					>
						<span className="truncate font-medium group-hover:brand-gradient-text">
							{c.name}
						</span>
						<ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-foreground" />
					</Link>
				))}
			</div>
		</section>
	);
}
