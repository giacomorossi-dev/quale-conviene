import { useEffect, useState } from "react";
import { CATEGORIES } from "#/data/categories.ts";
import { SITE_NAME } from "#/lib/seo.ts";

const STATS: { to: number; suffix?: string; label: string }[] = [
	{ to: CATEGORIES.length, label: "categorie" },
	{ to: 4, label: "contesti di calcolo" },
	{ to: 100, suffix: "%", label: "gratis · senza login" },
];

const COUNT_UP_DURATION = 1400;

// Ease-out cubic — fast start, gentle finish, looks more "natural" than linear.
const easeOutCubic = (t: number) => 1 - (1 - t) ** 3;

function useCountUp(target: number, duration: number) {
	// Initial state is 0 on both server and client so hydration matches; the
	// animation starts in the effect below right after mount. No flash from
	// "final → 0 → animate", because the user only ever sees post-mount frames.
	const [value, setValue] = useState(0);

	useEffect(() => {
		if (
			typeof window !== "undefined" &&
			window.matchMedia("(prefers-reduced-motion: reduce)").matches
		) {
			setValue(target);
			return;
		}

		let raf = 0;
		const start = performance.now();
		const tick = (now: number) => {
			const t = Math.min(1, (now - start) / duration);
			setValue(Math.round(target * easeOutCubic(t)));
			if (t < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [target, duration]);

	return value;
}

function Stat({
	to,
	suffix,
	label,
}: {
	to: number;
	suffix?: string;
	label: string;
}) {
	const n = useCountUp(to, COUNT_UP_DURATION);
	return (
		<li className="flex items-baseline gap-1.5">
			<span className="text-lg font-bold tabular-nums">
				{n}
				{suffix}
			</span>
			<span className="text-white/85">{label}</span>
		</li>
	);
}

export default function HeroBanner() {
	return (
		<section
			aria-label={`${SITE_NAME} — banner`}
			className="relative isolate flex min-h-[340px] sm:min-h-[380px] items-center justify-center overflow-hidden rounded-2xl px-6 py-12 sm:px-12 sm:py-14"
		>
			{/* Base gradient — adapts to theme via brand variables */}
			<div className="brand-gradient-bg absolute inset-0" aria-hidden="true" />

			{/* Drifting colour blobs */}
			<div
				aria-hidden="true"
				className="animate-drift-slow absolute -left-20 -top-24 h-80 w-80 rounded-full bg-cyan-300/55 blur-3xl dark:bg-cyan-400/60"
			/>
			<div
				aria-hidden="true"
				className="animate-drift-medium absolute -bottom-28 -right-12 h-96 w-96 rounded-full bg-pink-400/55 blur-3xl dark:bg-pink-500/60"
			/>
			<div
				aria-hidden="true"
				className="animate-drift-fast absolute right-1/3 top-1/4 h-56 w-56 rounded-full bg-indigo-300/45 blur-3xl dark:bg-indigo-400/45"
			/>

			{/* Saas grid overlay — masked to centre */}
			<div aria-hidden="true" className="hero-grid-overlay absolute inset-0" />

			{/* Subtle darken so white type stays legible on every blend */}
			<div
				aria-hidden="true"
				className="absolute inset-0 bg-black/10 dark:bg-black/25"
			/>

			{/* Content */}
			<div className="relative z-10 max-w-3xl space-y-4 text-center text-white">
				<p className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur-sm">
					<span className="relative flex h-1.5 w-1.5">
						<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
						<span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
					</span>
					Confronta. Calcola. Risparmia.
				</p>

				<h1 className="display-title text-4xl sm:text-5xl font-bold tracking-tight leading-[1.05] drop-shadow-sm">
					Scopri quale prodotto
					<br />
					conviene davvero
				</h1>

				<p className="mx-auto max-w-xl text-sm sm:text-base text-white/90">
					Normalizza il prezzo all'unità — fra formati, marche e confezioni
					diverse — e leggi il verdetto in un colpo d'occhio.
				</p>

				<ul className="mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-2 text-sm">
					{STATS.map((s) => (
						<Stat
							key={s.label}
							to={s.to}
							suffix={s.suffix}
							label={s.label}
						/>
					))}
				</ul>
			</div>
		</section>
	);
}
