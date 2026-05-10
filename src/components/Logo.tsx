import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { SITE_NAME } from "#/lib/seo.ts";

interface Props {
	/** Hide the wordmark on very narrow screens; the gradient mark stays visible. */
	compactBelow?: "sm" | "md" | "lg";
}

const HIDE_CLASS: Record<NonNullable<Props["compactBelow"]>, string> = {
	sm: "hidden sm:inline",
	md: "hidden md:inline",
	lg: "hidden lg:inline",
};

export default function Logo({ compactBelow = "sm" }: Props) {
	return (
		<Link
			to="/"
			className="inline-flex items-center gap-2 group"
			aria-label={`${SITE_NAME} — home`}
		>
			<span
				className="brand-gradient-bg flex h-9 w-9 items-center justify-center rounded-lg shadow-[0_6px_20px_-6px_rgba(168,85,247,0.55)] transition-transform group-hover:scale-105"
				aria-hidden="true"
			>
				<Sparkles className="h-4 w-4 text-white" />
			</span>
			<span
				className={`${HIDE_CLASS[compactBelow]} text-base font-bold tracking-tight`}
			>
				<span className="brand-gradient-text">{SITE_NAME}</span>
			</span>
		</Link>
	);
}
