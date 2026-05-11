import { createFileRoute } from "@tanstack/react-router";
import { SITE_NAME } from "#/lib/seo.ts";

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
				<h1 className="display-title text-4xl font-bold tracking-tight">
					<span className="brand-gradient-text">Cookie policy</span>
				</h1>
				<p className="text-sm text-muted-foreground">
					Ultimo aggiornamento: 11 maggio 2026
				</p>
			</header>

			<p className="text-muted-foreground leading-relaxed">
				{SITE_NAME} adotta un approccio minimalista: <strong className="text-foreground">non utilizziamo cookie di
				profilazione, di marketing o di terze parti</strong>. Questa pagina spiega
				quali tecnologie di archiviazione locale vengono effettivamente
				utilizzate dal sito e con quale finalità.
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
					Il sito <strong className="text-foreground">non utilizza alcun cookie HTTP</strong>: né
					tecnici, né statistici, né di terze parti. Tutte le preferenze e i
					dati di confronto vengono salvati nel <code>localStorage</code> del
					tuo browser, accessibili solo dal tuo dispositivo.
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
				<SectionHeading>4. Analitiche anonime</SectionHeading>
				<p className="text-muted-foreground leading-relaxed">
					Per capire come viene utilizzato il sito ci affidiamo a Cloudflare
					Web Analytics, una soluzione privacy-first che <strong className="text-foreground">non utilizza
					cookie</strong> e non raccoglie identificatori univoci. Le statistiche
					rilevate sono aggregate e anonime.
				</p>
			</section>

			<section>
				<SectionHeading>5. Come gestire lo storage locale</SectionHeading>
				<p className="text-muted-foreground leading-relaxed">
					Puoi cancellare in qualunque momento i dati salvati localmente
					utilizzando il pulsante "Svuota tutto" del calcolatore oppure
					cancellando i dati del sito dalle impostazioni del browser
					(Chrome, Firefox, Safari, Edge tutti supportano la cancellazione
					per singolo sito).
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
