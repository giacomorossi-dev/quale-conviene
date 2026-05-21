import { createFileRoute } from "@tanstack/react-router";
import { buildCanonicalLinks, SITE_NAME } from "#/lib/seo.ts";

export const Route = createFileRoute("/cookie")({
	head: () => ({
		meta: [
			{ title: `Cookie policy · ${SITE_NAME}` },
			{
				name: "description",
				content: `Informativa sull'uso di cookie e tecnologie analoghe sul sito ${SITE_NAME}.`,
			},
			{ name: "robots", content: "index, follow" },
		],
		links: buildCanonicalLinks("/cookie"),
	}),
	component: CookiePage,
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

function CookiePage() {
	return (
		<div className="container mx-auto max-w-3xl px-4 py-10 space-y-10">
			<header className="space-y-2">
				<h1 className="display-title text-4xl font-semibold tracking-tight">
					<span className="brand-gradient-text">Cookie policy</span>
				</h1>
				<p className="text-sm text-muted-foreground">
					Ultimo aggiornamento: 14 maggio 2026
				</p>
			</header>

			<p className="text-muted-foreground leading-relaxed">
				{SITE_NAME} adotta un approccio minimalista: <strong className="text-foreground">nessun cookie di
				profilazione o marketing</strong>. Utilizziamo un solo cookie tecnico per ricordare
				le tue preferenze sul banner di consenso e, esclusivamente previo tuo
				consenso esplicito, cookie statistici di terze parti per misurazioni
				aggregate.
			</p>

			<section>
				<SectionHeading>1. Cosa sono i cookie</SectionHeading>
				<p className="text-muted-foreground leading-relaxed">
					I cookie sono piccoli file di testo che i siti web salvano sul tuo
					dispositivo. Servono a memorizzare preferenze, mantenere sessioni
					attive o tracciare il comportamento di navigazione. Tecnologie
					simili sono <code>localStorage</code> e <code>sessionStorage</code>,
					che funzionano in modo analogo ma sono accessibili solo dallo
					stesso sito che le ha create.
				</p>
			</section>

			<section>
				<SectionHeading>2. Cookie utilizzati da {SITE_NAME}</SectionHeading>
				<p className="text-muted-foreground leading-relaxed">
					Gestiamo i cookie tramite un banner di consenso conforme alle Linee
					Guida del Garante Privacy del 10 giugno 2021. Le categorie disponibili
					sono:
				</p>
				<ul className="mt-3 space-y-3 text-muted-foreground leading-relaxed">
					<li>
						<strong className="text-foreground">Strettamente necessari</strong> (sempre
						attivi): un cookie tecnico di prima parte memorizza la scelta che
						hai espresso nel banner. Durata: 6 mesi. Non raccoglie dati
						personali identificativi.
					</li>
					<li>
						<strong className="text-foreground">Statistiche</strong> (opt-in): cookie di Google
						Analytics 4 (<code>_ga</code>, <code>_ga_&lt;container-id&gt;</code>),
						durata 24 mesi, che misurano in forma aggregata e anonima
						l'utilizzo del sito (pagine viste, durata sessione, dispositivo,
						paese di provenienza). Vengono installati soltanto se acconsenti
						esplicitamente alla categoria "Statistiche"; in caso contrario non
						vengono mai impostati. Maggiori informazioni:{" "}
						<a
							href="https://policies.google.com/privacy"
							target="_blank"
							rel="noopener noreferrer"
							className="brand-gradient-text font-semibold underline-offset-4 hover:underline"
						>
							privacy policy di Google
						</a>
						.
					</li>
				</ul>
				<p className="mt-3 text-muted-foreground leading-relaxed">
					Puoi modificare le tue scelte in qualsiasi momento cliccando su{" "}
					<strong className="text-foreground">"Preferenze cookie"</strong> nel
					footer del sito.
				</p>
			</section>

			<section>
				<SectionHeading>3. Storage locale</SectionHeading>
				<p className="text-muted-foreground leading-relaxed">
					Utilizziamo il <code>localStorage</code> del browser per:
				</p>
				<ul className="mt-3 space-y-2 text-muted-foreground leading-relaxed list-disc list-inside">
					<li>
						<strong className="text-foreground">Preferenza tema</strong> (chiaro/scuro), per
						ricordare la tua scelta tra le sessioni.
					</li>
					<li>
						<strong className="text-foreground">Cronologia confronti</strong>, per
						mostrarti le ultime categorie consultate nella sezione "Le tue
						ultime comparazioni".
					</li>
					<li>
						<strong className="text-foreground">Dati di lavoro</strong>: prodotti, prezzi e
						formati che stai confrontando, per non perderli al refresh della
						pagina.
					</li>
				</ul>
				<p className="mt-3 text-muted-foreground leading-relaxed">
					Questi dati restano sul tuo dispositivo e non vengono trasmessi a
					nessun server.
				</p>
			</section>

			<section>
				<SectionHeading>4. Analitiche di base senza cookie</SectionHeading>
				<p className="text-muted-foreground leading-relaxed">
					In aggiunta ai cookie statistici opt-in, ci affidiamo a Cloudflare
					Web Analytics, una soluzione privacy-first che <strong className="text-foreground">non utilizza
					cookie</strong> e non raccoglie identificatori univoci. Queste
					statistiche di base sono aggregate, anonime e operano lato edge
					senza interagire con il tuo browser.
				</p>
			</section>

			<section>
				<SectionHeading>5. Come gestire cookie e storage locale</SectionHeading>
				<p className="text-muted-foreground leading-relaxed">
					Per i cookie del consenso utilizza il pulsante{" "}
					<strong className="text-foreground">"Preferenze cookie"</strong>{" "}
					presente nel footer di ogni pagina: puoi rifiutare, accettare o
					revocare il consenso in qualunque momento. Per i dati salvati nel
					<code> localStorage</code> usa il pulsante "Svuota tutto" del
					calcolatore oppure cancella i dati del sito dalle impostazioni del
					browser (Chrome, Firefox, Safari, Edge supportano tutti la
					cancellazione per singolo sito).
				</p>
			</section>

			<section>
				<SectionHeading>6. Aggiornamenti</SectionHeading>
				<p className="text-muted-foreground leading-relaxed">
					Eventuali variazioni a questa cookie policy verranno pubblicate
					su questa pagina. Per qualunque domanda puoi contattarci
					all'indirizzo{" "}
					<a
						href="mailto:giacomorossi.dev@gmail.com"
						className="brand-gradient-text font-semibold underline-offset-4 hover:underline"
					>
						giacomorossi.dev@gmail.com
					</a>
					.
				</p>
			</section>
		</div>
	);
}
