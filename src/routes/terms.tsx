import { createFileRoute } from "@tanstack/react-router";
import { buildCanonicalLinks, SITE_NAME } from "#/lib/seo.ts";

export const Route = createFileRoute("/terms")({
	head: () => ({
		meta: [
			{ title: `Termini e condizioni · ${SITE_NAME}` },
			{
				name: "description",
				content: `Termini e condizioni d'uso del sito ${SITE_NAME}.`,
			},
			{ name: "robots", content: "index, follow" },
		],
		links: buildCanonicalLinks("/terms"),
	}),
	component: TermsPage,
});

function SectionHeading({ children }: { children: React.ReactNode }) {
	return (
		<>
			<h2 className="text-xl font-semibold">{children}</h2>
			<div
				aria-hidden="true"
				className="brand-gradient-bg mt-2 mb-4 h-[2px] w-full"
			/>
		</>
	);
}

function TermsPage() {
	return (
		<div className="container mx-auto max-w-3xl px-4 py-10 space-y-10">
			<header className="space-y-2">
				<h1 className="display-title text-4xl font-bold tracking-tight">
					<span className="brand-gradient-text">Termini e condizioni</span>
				</h1>
				<p className="text-sm text-muted-foreground">
					Ultimo aggiornamento: 11 maggio 2026
				</p>
			</header>

			<p className="text-muted-foreground leading-relaxed">
				Benvenuto su <strong className="text-foreground">{SITE_NAME}</strong>.
				Utilizzando questo sito accetti integralmente i termini d'uso descritti
				qui di seguito. Se non sei d'accordo con uno qualsiasi dei punti, ti
				invitiamo a non utilizzare il servizio.
			</p>

			<section>
				<SectionHeading>1. Oggetto del servizio</SectionHeading>
				<p className="text-muted-foreground leading-relaxed">
					{SITE_NAME} è una raccolta di utility gratuite per confrontare prezzi
					e formati di prodotti del supermercato, normalizzando il costo
					all'unità di misura. Il servizio è offerto a titolo informativo e
					non sostituisce alcuna consulenza commerciale o professionale.
				</p>
			</section>

			<section>
				<SectionHeading>2. Uso consentito</SectionHeading>
				<p className="text-muted-foreground leading-relaxed">
					Sei libero di utilizzare il sito per finalità personali e non
					commerciali. In particolare ti chiediamo di:
				</p>
				<ul className="mt-3 space-y-2 text-muted-foreground leading-relaxed list-disc list-inside">
					<li>
						Non utilizzare il sito per scopi illegali, fraudolenti o lesivi di
						diritti altrui.
					</li>
					<li>
						Non effettuare scraping massivo, attacchi DoS o tentativi di
						compromettere l'infrastruttura.
					</li>
					<li>
						Non aggirare eventuali limitazioni tecniche o misure di sicurezza.
					</li>
					<li>
						Non utilizzare strumenti automatizzati per generare carico anomalo
						sui server.
					</li>
				</ul>
			</section>

			<section>
				<SectionHeading>3. Proprietà intellettuale</SectionHeading>
				<p className="text-muted-foreground leading-relaxed">
					Il design, i testi, il codice, i marchi e tutti gli elementi grafici
					di {SITE_NAME} sono protetti dalle leggi sul diritto d'autore. È
					vietato copiare, duplicare, ripubblicare o redistribuire — in tutto o
					in parte — i contenuti del sito senza autorizzazione scritta. I
					marchi commerciali eventualmente citati appartengono ai rispettivi
					proprietari e sono richiamati solo a scopo descrittivo.
				</p>
			</section>

			<section>
				<SectionHeading>4. Accuratezza dei dati</SectionHeading>
				<p className="text-muted-foreground leading-relaxed">
					I calcoli forniti dal sito sono il risultato di formule matematiche
					applicate ai dati inseriti dall'utente. Pur facendo del nostro meglio
					per garantire la correttezza degli algoritmi, non possiamo garantire
					l'assenza di errori, imprecisioni o malfunzionamenti. L'uso delle
					informazioni è a tuo esclusivo rischio.
				</p>
			</section>

			<section>
				<SectionHeading>5. Limitazione di responsabilità</SectionHeading>
				<p className="text-muted-foreground leading-relaxed">
					Nella misura massima consentita dalla legge, {SITE_NAME} e i suoi
					autori non saranno responsabili per danni diretti, indiretti,
					incidentali o consequenziali derivanti dall'uso del sito, comprese
					— a titolo esemplificativo — perdite economiche, decisioni di
					acquisto basate sui risultati mostrati, indisponibilità del
					servizio.
				</p>
			</section>

			<section>
				<SectionHeading>6. Modifiche ai termini</SectionHeading>
				<p className="text-muted-foreground leading-relaxed">
					Ci riserviamo il diritto di aggiornare in qualunque momento questi
					termini. Le modifiche entrano in vigore dalla pubblicazione su
					questa pagina. Continuando a utilizzare il sito dopo un
					aggiornamento, accetti la nuova versione.
				</p>
			</section>

			<section>
				<SectionHeading>7. Legge applicabile</SectionHeading>
				<p className="text-muted-foreground leading-relaxed">
					I presenti termini sono regolati dalla legge italiana. Per ogni
					controversia è competente in via esclusiva il foro del luogo di
					residenza del consumatore, ove applicabile.
				</p>
			</section>
		</div>
	);
}
