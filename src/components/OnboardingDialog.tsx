import {
	ArrowLeft,
	ArrowRight,
	Heart,
	Scale,
	Sparkles,
	Trophy,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "#/components/app/button.tsx";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogTitle,
} from "#/components/app/dialog.tsx";

const STORAGE_KEY = "qc:onboarding-seen";
const OPEN_EVENT = "qc:open-onboarding";

const KOFI_URL = "https://ko-fi.com/giacomorossidev";

const TOTAL_STEPS = 3;

// Delay the first-visit auto-open so the user gets a moment to read the page
// before a modal pops up; also avoids visual conflict with the cookie banner.
const AUTO_OPEN_DELAY_MS = 10_000;

// vanilla-cookieconsent sets `show--consent` on <html> while the banner is
// visible, and dispatches `cc:onConsent` once the user accepts or rejects.
const CONSENT_VISIBLE_CLASS = "show--consent";
const CONSENT_DONE_EVENT = "cc:onConsent";

export default function OnboardingDialog() {
	const [open, setOpen] = useState(false);
	const [step, setStep] = useState(0);

	// Auto-open on first visit + listen for explicit "open" events from triggers.
	useEffect(() => {
		if (typeof window === "undefined") return;

		const openOnboarding = () => {
			setStep(0);
			setOpen(true);
		};

		// Manual trigger (Aiuto button, footer link) — always allowed, never deferred.
		window.addEventListener(OPEN_EVENT, openOnboarding);

		let alreadySeen = false;
		try {
			alreadySeen = !!window.localStorage.getItem(STORAGE_KEY);
		} catch {
			/* storage disabled — treat as not-seen, but auto-open still runs below */
		}
		if (alreadySeen) {
			return () => window.removeEventListener(OPEN_EVENT, openOnboarding);
		}

		let timerId: number | null = null;
		let consentListener: (() => void) | null = null;

		const tryAutoOpen = () => {
			timerId = null;
			const bannerUp = document.documentElement.classList.contains(
				CONSENT_VISIBLE_CLASS,
			);
			if (!bannerUp) {
				openOnboarding();
				return;
			}
			// Cookie banner is still on screen — wait for the user to dismiss it
			// (accept or reject) and only then surface the tutorial.
			consentListener = () => {
				if (!consentListener) return;
				window.removeEventListener(CONSENT_DONE_EVENT, consentListener);
				consentListener = null;
				openOnboarding();
			};
			window.addEventListener(CONSENT_DONE_EVENT, consentListener);
		};

		timerId = window.setTimeout(tryAutoOpen, AUTO_OPEN_DELAY_MS);

		return () => {
			window.removeEventListener(OPEN_EVENT, openOnboarding);
			if (timerId !== null) window.clearTimeout(timerId);
			if (consentListener)
				window.removeEventListener(CONSENT_DONE_EVENT, consentListener);
		};
	}, []);

	const markSeen = useCallback(() => {
		try {
			window.localStorage.setItem(STORAGE_KEY, "1");
		} catch {
			/* storage disabled — ignore */
		}
	}, []);

	const handleOpenChange = useCallback(
		(next: boolean) => {
			setOpen(next);
			if (!next) markSeen();
		},
		[markSeen],
	);

	const isLast = step === TOTAL_STEPS - 1;
	const isFirst = step === 0;

	const next = () => {
		if (isLast) {
			handleOpenChange(false);
		} else {
			setStep((s) => s + 1);
		}
	};
	const prev = () => {
		if (!isFirst) setStep((s) => s - 1);
	};

	return (
		<Dialog open={open} onOpenChange={handleOpenChange}>
			<DialogContent className="overflow-hidden p-0 sm:max-w-md">
				<div className="relative space-y-6 p-6 sm:p-8">
					<StepHeader step={step} />
					<div className="min-h-[180px]">
						{step === 0 && <StepIntro />}
						{step === 1 && <StepHowto />}
						{step === 2 && <StepSupport />}
					</div>
					<StepFooter
						step={step}
						isFirst={isFirst}
						isLast={isLast}
						onPrev={prev}
						onNext={next}
					/>
				</div>
			</DialogContent>
		</Dialog>
	);
}

function StepHeader({ step }: { step: number }) {
	const Icon = step === 0 ? Sparkles : step === 1 ? Scale : Heart;
	const title =
		step === 0
			? "Benvenuto su Quale Conviene"
			: step === 1
				? "Come si usa"
				: "Ti è piaciuta?";
	const subtitle =
		step === 0
			? "Capire al volo quale prodotto del supermercato conviene davvero."
			: step === 1
				? "Tre passaggi e hai il vincitore in mano."
				: "L'app è gratis e senza pubblicità invadenti.";
	return (
		<div className="flex items-start gap-3">
			<div className="brand-gradient-bg flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white shadow-[0_8px_24px_-10px_rgba(99,102,241,0.55)]">
				<Icon className="h-5 w-5" />
			</div>
			<div className="space-y-1">
				<DialogTitle className="text-xl">{title}</DialogTitle>
				<DialogDescription>{subtitle}</DialogDescription>
			</div>
		</div>
	);
}

function StepIntro() {
	return (
		<div className="space-y-3 text-sm leading-relaxed text-foreground/90">
			<p>
				Confronti due o più prodotti della stessa categoria — acqua, pasta,
				detersivi, capsule del caffè — e per ognuno scopri il{" "}
				<span className="brand-gradient-text font-semibold">prezzo reale</span>{" "}
				per litro, chilo, pezzo o lavaggio.
			</p>
			<p className="text-muted-foreground">
				Niente login, niente cookie, niente schede prodotto da cercare.
				Inserisci prezzo e formato e l'app fa la matematica per te.
			</p>
		</div>
	);
}

function StepHowto() {
	return (
		<ol className="space-y-3 text-sm leading-relaxed">
			<HowtoItem
				index={1}
				title="Scegli una categoria"
				body="Dalla home, scegli la categoria del prodotto che stai confrontando. Non c'è? Usa /confronta per crearne una al volo."
			/>
			<HowtoItem
				index={2}
				title="Inserisci 2-5 prodotti"
				body="Per ogni prodotto digita il prezzo, il formato (bottiglia, fardello, scatola…) e la quantità. Sì, anche con il copia-incolla."
			/>
			<HowtoItem
				index={3}
				title="Leggi il vincitore"
				body={
					<>
						Compare la tabella ordinata per prezzo a unità: la riga con{" "}
						<Trophy className="inline h-3.5 w-3.5 text-amber-500" /> è quella
						che conviene davvero.
					</>
				}
			/>
		</ol>
	);
}

function HowtoItem({
	index,
	title,
	body,
}: {
	index: number;
	title: string;
	body: React.ReactNode;
}) {
	return (
		<li className="flex gap-3">
			<span className="brand-gradient-bg flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white">
				{index}
			</span>
			<div className="space-y-0.5">
				<p className="font-semibold">{title}</p>
				<p className="text-muted-foreground">{body}</p>
			</div>
		</li>
	);
}

function StepSupport() {
	return (
		<div className="space-y-4 text-sm leading-relaxed">
			<p className="text-foreground/90">
				Quale Conviene è un progetto indipendente, mantenuto nei ritagli di
				tempo. Se ti ha fatto risparmiare anche solo una spesa, un piccolo
				contributo aiuta a tenerlo online e senza pubblicità invadenti.
			</p>
			<div className="flex justify-center pt-2">
				<Button asChild variant="gradient" size="lg">
					<a href={KOFI_URL} target="_blank" rel="noopener noreferrer">
						<Heart className="h-4 w-4" />
						Supporta il progetto
					</a>
				</Button>
			</div>
			<p className="text-center text-xs text-muted-foreground">
				Anche solo un grazie da{" "}
				<a
					href="/contatti"
					className="brand-gradient-text font-semibold underline-offset-4 hover:underline"
				>
					/contatti
				</a>{" "}
				è benissimo.
			</p>
		</div>
	);
}

function StepFooter({
	step,
	isFirst,
	isLast,
	onPrev,
	onNext,
}: {
	step: number;
	isFirst: boolean;
	isLast: boolean;
	onPrev: () => void;
	onNext: () => void;
}) {
	return (
		<div className="flex items-center justify-between gap-2 border-t border-border pt-4">
			<Button
				type="button"
				variant="ghost"
				size="sm"
				onClick={onPrev}
				disabled={isFirst}
				aria-label="Vai allo step precedente"
			>
				<ArrowLeft className="h-4 w-4" />
				Indietro
			</Button>
			<div className="flex items-center gap-1.5" aria-hidden="true">
				{Array.from({ length: TOTAL_STEPS }).map((_, i) => (
					<span
						// biome-ignore lint/suspicious/noArrayIndexKey: fixed-length dot indicator
						key={i}
						className={
							i === step
								? "brand-gradient-bg h-2 w-6 rounded-full transition-all"
								: "h-2 w-2 rounded-full bg-muted transition-all"
						}
					/>
				))}
			</div>
			<span className="sr-only" aria-live="polite">
				Step {step + 1} di {TOTAL_STEPS}
			</span>
			<Button
				type="button"
				variant="gradient"
				size="sm"
				onClick={onNext}
				aria-label={isLast ? "Chiudi il tutorial" : "Vai allo step successivo"}
			>
				{isLast ? "Inizia" : "Avanti"}
				{!isLast && <ArrowRight className="h-4 w-4" />}
			</Button>
		</div>
	);
}
