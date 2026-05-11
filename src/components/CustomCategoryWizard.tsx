import { ChevronDown, ChevronUp, Droplet, Hash, Scale, Sparkles, SprayCan } from "lucide-react";
import { useState } from "react";
import { Button } from "#/components/app/button.tsx";
import { Input } from "#/components/app/input.tsx";
import { Label } from "#/components/app/label.tsx";
import {
	buildCustomCategory,
	type CustomCategoryInput,
} from "#/lib/custom-category.ts";
import type { CategoryDefinition, ContextId } from "#/lib/pricing.ts";
import { cn } from "#/lib/utils.ts";

interface Props {
	/** Pre-fills the name field (e.g. from `?q=` search query). */
	initialName?: string;
	onComplete: (category: CategoryDefinition) => void;
}

interface ContextOption {
	id: ContextId;
	icon: typeof Droplet;
	title: string;
	tagline: string;
	example: string;
}

const CONTEXTS: ContextOption[] = [
	{
		id: "liquid",
		icon: Droplet,
		title: "Volumi (€/L)",
		tagline: "Per liquidi",
		example: "Succo, latte, olio, detersivi liquidi",
	},
	{
		id: "weight",
		icon: Scale,
		title: "Pesi (€/kg)",
		tagline: "Per solidi a peso",
		example: "Pasta, riso, biscotti, formaggi",
	},
	{
		id: "unit",
		icon: Hash,
		title: "Pezzi singoli (€/pezzo)",
		tagline: "Per oggetti contabili",
		example: "Capsule, tovaglioli, sacchi, pannolini",
	},
	{
		id: "dosage",
		icon: SprayCan,
		title: "Dosi (€/dose)",
		tagline: "Quando contano i lavaggi",
		example: "Detersivo lavatrice, tabs lavastoviglie",
	},
];

export default function CustomCategoryWizard({
	initialName = "",
	onComplete,
}: Props) {
	const [name, setName] = useState(initialName);
	const [context, setContext] = useState<ContextId | null>(null);
	const [advancedOpen, setAdvancedOpen] = useState(false);
	const [baseLabel, setBaseLabel] = useState("");
	const [baseLabelPlural, setBaseLabelPlural] = useState("");
	const [innerLabel, setInnerLabel] = useState("");
	const [innerPluralLabel, setInnerPluralLabel] = useState("");
	const [hasOuterLevel, setHasOuterLevel] = useState(false);
	const [outerLabel, setOuterLabel] = useState("");
	const [outerPluralLabel, setOuterPluralLabel] = useState("");

	const submit = () => {
		if (!context || name.trim().length < 2) return;
		const input: CustomCategoryInput = {
			name: name.trim(),
			context,
			baseLabel,
			baseLabelPlural,
			innerLabel,
			innerPluralLabel,
			hasOuterLevel,
			outerLabel,
			outerPluralLabel,
		};
		onComplete(buildCustomCategory(input));
	};

	const canSubmit = context !== null && name.trim().length >= 2;

	return (
		<form
			className="space-y-8"
			onSubmit={(e) => {
				e.preventDefault();
				submit();
			}}
		>
			{/* Nome */}
			<div className="space-y-2">
				<Label htmlFor="custom-name" className="text-base">
					Cosa stai confrontando?
				</Label>
				<Input
					id="custom-name"
					placeholder="es. Pannolini taglia 4, Salviette umide, Birra IPA…"
					value={name}
					onChange={(e) => setName(e.currentTarget.value)}
					autoFocus
				/>
				<p className="text-sm text-muted-foreground">
					Un nome breve che descriva il tipo di prodotto. Sarà visibile in cima
					alla pagina del confronto.
				</p>
			</div>

			{/* Contesto */}
			<div className="space-y-3">
				<Label className="text-base">Tipo di confronto</Label>
				<div className="grid gap-3 sm:grid-cols-2">
					{CONTEXTS.map((opt) => {
						const Icon = opt.icon;
						const active = context === opt.id;
						return (
							<button
								key={opt.id}
								type="button"
								onClick={() => setContext(opt.id)}
								className={cn(
									"group text-left rounded-lg border bg-card p-4 transition-all cursor-pointer",
									"hover:-translate-y-px hover:shadow-[0_12px_30px_-12px_rgba(168,85,247,0.4)]",
									active &&
										"border-primary ring-2 ring-primary/30 shadow-[0_12px_30px_-12px_rgba(168,85,247,0.5)]",
								)}
								aria-pressed={active}
							>
								<div className="flex items-start gap-3">
									<span
										aria-hidden="true"
										className={cn(
											"inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md transition-colors",
											active
												? "brand-gradient-bg text-white"
												: "bg-muted text-muted-foreground group-hover:bg-accent",
										)}
									>
										<Icon className="h-4 w-4" />
									</span>
									<div className="flex-1 min-w-0">
										<div className="font-semibold leading-tight">
											{opt.title}
										</div>
										<div className="text-sm text-muted-foreground mt-0.5">
											{opt.tagline}
										</div>
										<div className="text-xs text-muted-foreground mt-1 italic">
											{opt.example}
										</div>
									</div>
								</div>
							</button>
						);
					})}
				</div>
			</div>

			{/* Advanced */}
			<div className="rounded-lg border bg-card">
				<button
					type="button"
					onClick={() => setAdvancedOpen((v) => !v)}
					className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium cursor-pointer hover:bg-accent/50 transition-colors rounded-lg"
				>
					<span className="flex items-center gap-2">
						<Sparkles className="h-4 w-4 text-muted-foreground" />
						Personalizza etichette
						<span className="text-muted-foreground font-normal">
							(opzionale)
						</span>
					</span>
					{advancedOpen ? (
						<ChevronUp className="h-4 w-4 text-muted-foreground" />
					) : (
						<ChevronDown className="h-4 w-4 text-muted-foreground" />
					)}
				</button>

				{advancedOpen && (
					<div className="space-y-4 border-t p-4">
						<p className="text-sm text-muted-foreground">
							Lascia vuoto per usare le etichette di default in base al tipo
							scelto.
						</p>

						<div className="grid gap-3 sm:grid-cols-2">
							<div className="space-y-1">
								<Label htmlFor="custom-base">Unità base (singolare)</Label>
								<Input
									id="custom-base"
									placeholder="es. pannolino, capsula, litro"
									value={baseLabel}
									onChange={(e) => setBaseLabel(e.currentTarget.value)}
								/>
							</div>
							<div className="space-y-1">
								<Label htmlFor="custom-base-plural">
									Unità base (plurale)
								</Label>
								<Input
									id="custom-base-plural"
									placeholder="es. pannolini, capsule, litri"
									value={baseLabelPlural}
									onChange={(e) =>
										setBaseLabelPlural(e.currentTarget.value)
									}
								/>
							</div>
							<div className="space-y-1">
								<Label htmlFor="custom-inner">Confezione (singolare)</Label>
								<Input
									id="custom-inner"
									placeholder="es. confezione, scatola, flacone"
									value={innerLabel}
									onChange={(e) => setInnerLabel(e.currentTarget.value)}
								/>
							</div>
							<div className="space-y-1">
								<Label htmlFor="custom-inner-plural">
									Confezione (plurale)
								</Label>
								<Input
									id="custom-inner-plural"
									placeholder="es. confezioni, scatole, flaconi"
									value={innerPluralLabel}
									onChange={(e) =>
										setInnerPluralLabel(e.currentTarget.value)
									}
								/>
							</div>
						</div>

						<div className="space-y-3 border-t pt-4">
							<label className="flex items-center gap-2 cursor-pointer">
								<input
									type="checkbox"
									checked={hasOuterLevel}
									onChange={(e) => setHasOuterLevel(e.currentTarget.checked)}
									className="h-4 w-4"
								/>
								<span className="text-sm">
									I prodotti possono essere venduti anche in formato multipack
									/ cartone
								</span>
							</label>

							{hasOuterLevel && (
								<div className="grid gap-3 sm:grid-cols-2 pl-6">
									<div className="space-y-1">
										<Label htmlFor="custom-outer">
											Multipack (singolare)
										</Label>
										<Input
											id="custom-outer"
											placeholder="es. multipack, cartone, fardello"
											value={outerLabel}
											onChange={(e) => setOuterLabel(e.currentTarget.value)}
										/>
									</div>
									<div className="space-y-1">
										<Label htmlFor="custom-outer-plural">
											Multipack (plurale)
										</Label>
										<Input
											id="custom-outer-plural"
											placeholder="es. multipack, cartoni, fardelli"
											value={outerPluralLabel}
											onChange={(e) =>
												setOuterPluralLabel(e.currentTarget.value)
											}
										/>
									</div>
								</div>
							)}
						</div>
					</div>
				)}
			</div>

			<div className="flex justify-end">
				<Button
					type="submit"
					variant="gradient"
					size="lg"
					disabled={!canSubmit}
				>
					Inizia confronto
				</Button>
			</div>
		</form>
	);
}
