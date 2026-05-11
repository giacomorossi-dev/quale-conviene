import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, RotateCcw, Wand2 } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Button } from "#/components/app/button.tsx";
import Comparator from "#/components/Comparator.tsx";
import CustomCategoryWizard from "#/components/CustomCategoryWizard.tsx";
import SectionIcon from "#/components/SectionIcon.tsx";
import {
	buildCustomShareUrl,
	CUSTOM_SLUG,
	decodeCustomShare,
} from "#/lib/custom-category.ts";
import type { CategoryDefinition, ProductEntry } from "#/lib/pricing.ts";
import { pushRecentCustom } from "#/lib/recent.ts";
import { SITE_NAME } from "#/lib/seo.ts";

const STORAGE_CATEGORY_KEY = "qc:custom-category";
const STORAGE_ENTRIES_KEY = "qc:custom-entries";

export const Route = createFileRoute("/confronta")({
	head: () => ({
		meta: [
			{ title: `Confronto personalizzato · ${SITE_NAME}` },
			{
				name: "description",
				content: `Crea un confronto su misura per qualunque prodotto, anche quelli non ancora coperti dalle categorie di ${SITE_NAME}.`,
			},
			// Each rendered instance is user-generated; we don't want it indexed.
			{ name: "robots", content: "noindex, follow" },
		],
	}),
	component: CustomComparePage,
});

function CustomComparePage() {
	const [category, setCategory] = useState<CategoryDefinition | null>(null);
	const [hydrated, setHydrated] = useState(false);
	const [initialName, setInitialName] = useState("");
	const sharedRef = useRef(false);

	useEffect(() => {
		if (typeof window === "undefined") {
			setHydrated(true);
			return;
		}
		const params = new URLSearchParams(window.location.search);

		// 1. Shared link wins over local state.
		const token = params.get("d");
		if (token) {
			const decoded = decodeCustomShare(token);
			if (decoded) {
				sharedRef.current = true;
				try {
					window.localStorage.setItem(
						STORAGE_CATEGORY_KEY,
						JSON.stringify(decoded.category),
					);
					window.localStorage.setItem(
						STORAGE_ENTRIES_KEY,
						JSON.stringify(decoded.entries),
					);
				} catch {
					/* storage disabled — fine */
				}
				pushRecentCustom(decoded.category.name);
				setCategory(decoded.category);
				params.delete("d");
				const query = params.toString();
				const url =
					window.location.pathname +
					(query ? `?${query}` : "") +
					window.location.hash;
				window.history.replaceState(window.history.state, "", url);
				setHydrated(true);
				return;
			}
		}

		// 2. Resume previous custom comparison if present.
		try {
			const stored = window.localStorage.getItem(STORAGE_CATEGORY_KEY);
			if (stored) {
				const parsed = JSON.parse(stored) as CategoryDefinition;
				if (parsed && parsed.slug === CUSTOM_SLUG && parsed.context) {
					setCategory(parsed);
				}
			}
		} catch {
			/* corrupt JSON — ignore */
		}

		// 3. Pre-fill the wizard with `?q=` query (from home empty-search hook).
		const q = params.get("q");
		if (q) setInitialName(q);

		setHydrated(true);
	}, []);

	const handleWizardComplete = useCallback((cat: CategoryDefinition) => {
		setCategory(cat);
		if (typeof window === "undefined") return;
		try {
			window.localStorage.setItem(STORAGE_CATEGORY_KEY, JSON.stringify(cat));
			// Reset entries so the Comparator starts with fresh empty rows
			// rather than recycling whatever was in qc:custom-entries.
			window.localStorage.removeItem(STORAGE_ENTRIES_KEY);
		} catch {
			/* ignore */
		}
		pushRecentCustom(cat.name);
	}, []);

	const handleStartNew = useCallback(() => {
		setCategory(null);
		if (typeof window === "undefined") return;
		try {
			window.localStorage.removeItem(STORAGE_CATEGORY_KEY);
			window.localStorage.removeItem(STORAGE_ENTRIES_KEY);
		} catch {
			/* ignore */
		}
	}, []);

	const shareBuilder = useCallback(
		(entries: ProductEntry[]) =>
			category ? buildCustomShareUrl(category, entries) : "",
		[category],
	);

	const headerContent = useMemo(() => {
		if (!category) {
			return (
				<>
					<h1 className="display-title text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1]">
						<span className="brand-gradient-text">Confronto personalizzato</span>
					</h1>
					<p className="text-lg text-muted-foreground">
						Non trovi la categoria giusta? Crea un confronto su misura: scegli
						come misurare i prodotti, dai un nome alle unità, inizia a
						confrontare in un minuto.
					</p>
				</>
			);
		}
		return (
			<>
				<div className="flex flex-wrap items-start justify-between gap-3">
					<div className="space-y-2">
						<p className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
							<Wand2 className="h-3.5 w-3.5" aria-hidden="true" />
							Confronto personalizzato
						</p>
						<h1 className="display-title text-3xl sm:text-4xl font-bold tracking-tight leading-[1.1]">
							<span className="brand-gradient-text">{category.name}</span>
						</h1>
					</div>
					<Button
						type="button"
						variant="outline"
						size="sm"
						onClick={handleStartNew}
					>
						<RotateCcw className="h-4 w-4" />
						Nuova comparazione
					</Button>
				</div>
			</>
		);
	}, [category, handleStartNew]);

	return (
		<div className="container mx-auto max-w-5xl px-4 py-10 space-y-8">
			<nav
				aria-label="breadcrumb"
				className="flex items-center gap-1 text-sm text-muted-foreground"
			>
				<Link to="/" className="hover:underline hover:text-foreground">
					Home
				</Link>
				<span aria-hidden="true">·</span>
				<span className="text-foreground">Confronto personalizzato</span>
			</nav>

			<header className="space-y-3">{headerContent}</header>

			{!hydrated ? (
				<div
					aria-hidden="true"
					className="h-64 animate-pulse rounded-lg border bg-card"
				/>
			) : !category ? (
				<section aria-labelledby="wizard-heading" className="space-y-4">
					<h2
						id="wizard-heading"
						className="flex items-center gap-3 text-xl font-semibold"
					>
						<SectionIcon>
							<Wand2 />
						</SectionIcon>
						Configura
					</h2>
					<div
						aria-hidden="true"
						className="brand-gradient-bg mt-2 mb-4 h-[2px] w-full"
					/>
					<CustomCategoryWizard
						initialName={initialName}
						onComplete={handleWizardComplete}
					/>
				</section>
			) : (
				<Comparator
					category={category}
					storageKey={STORAGE_ENTRIES_KEY}
					shareBuilder={shareBuilder}
				/>
			)}

			<div className="border-t pt-6">
				<Link
					to="/"
					className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
				>
					<ArrowLeft className="h-4 w-4" />
					Torna alle categorie pronte
				</Link>
			</div>
		</div>
	);
}
