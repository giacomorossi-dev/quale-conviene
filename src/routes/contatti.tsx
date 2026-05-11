import { createFileRoute } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { SITE_NAME } from "#/lib/seo.ts";

const CONTACT_EMAIL = "giacomorossi.dev@gmail.com";

export const Route = createFileRoute("/contatti")({
	head: () => ({
		meta: [
			{ title: `Feedback e contatti · ${SITE_NAME}` },
			{
				name: "description",
				content: `Mettiti in contatto con il team di ${SITE_NAME}: segnala bug, proponi una categoria o lascia un feedback.`,
			},
			{ name: "robots", content: "index, follow" },
		],
	}),
	component: ContactPage,
});

function ContactPage() {
	return (
		<div className="container mx-auto max-w-3xl px-4 py-10 space-y-8">
			<header className="space-y-2">
				<h1 className="display-title text-4xl font-bold tracking-tight">
					<span className="brand-gradient-text">Feedback e contatti</span>
				</h1>
				<p className="text-sm text-muted-foreground">
					Hai domande, suggerimenti o segnalazioni? Scrivimi pure.
				</p>
			</header>

			<section className="space-y-4 text-muted-foreground leading-relaxed">
				<p>
					{SITE_NAME} è un progetto sviluppato e mantenuto da una singola
					persona. Ogni feedback è prezioso — soprattutto se hai trovato un
					bug, vorresti vedere una nuova categoria di prodotti o hai un'idea
					per migliorare il calcolatore.
				</p>
				<p>
					Rispondo personalmente a tutte le email, di solito entro qualche
					giorno lavorativo.
				</p>
			</section>

			{/* Hero-style gradient card with email */}
			<section
				aria-label="Email di contatto"
				className="relative isolate overflow-hidden rounded-2xl px-6 py-10 sm:px-12 sm:py-14"
			>
				<div
					className="brand-gradient-bg absolute inset-0"
					aria-hidden="true"
				/>
				<div
					aria-hidden="true"
					className="animate-drift-slow absolute -left-16 -top-20 h-72 w-72 rounded-full bg-cyan-300/55 blur-3xl dark:bg-cyan-400/60"
				/>
				<div
					aria-hidden="true"
					className="animate-drift-medium absolute -bottom-24 -right-10 h-80 w-80 rounded-full bg-pink-400/55 blur-3xl dark:bg-pink-500/60"
				/>
				<div
					aria-hidden="true"
					className="hero-grid-overlay absolute inset-0"
				/>
				<div
					aria-hidden="true"
					className="absolute inset-0 bg-black/10 dark:bg-black/25"
				/>

				<div className="relative z-10 text-center text-white space-y-4">
					<div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/15 backdrop-blur-sm">
						<Mail className="h-6 w-6" aria-hidden="true" />
					</div>
					<p className="text-sm uppercase tracking-widest text-white/85">
						Scrivimi a
					</p>
					<a
						href={`mailto:${CONTACT_EMAIL}`}
						className="display-title block break-all text-2xl sm:text-3xl font-bold tracking-tight underline-offset-4 hover:underline"
					>
						{CONTACT_EMAIL}
					</a>
					<a
						href={`mailto:${CONTACT_EMAIL}`}
						className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur-sm transition hover:bg-white/25"
					>
						<Mail className="h-4 w-4" aria-hidden="true" />
						Apri il client di posta
					</a>
				</div>
			</section>

			<section className="space-y-3 text-muted-foreground leading-relaxed">
				<p>
					Per richieste relative alla privacy o alla cancellazione di dati,
					consulta la <a href="/privacy" className="brand-gradient-text font-semibold underline-offset-4 hover:underline">Privacy policy</a>. Per
					questioni legate al funzionamento del sito, dai un'occhiata ai{" "}
					<a href="/terms" className="brand-gradient-text font-semibold underline-offset-4 hover:underline">Termini e condizioni</a>.
				</p>
			</section>
		</div>
	);
}
