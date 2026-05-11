import { createFileRoute } from "@tanstack/react-router";
import { SITE_NAME } from "#/lib/seo.ts";

export const Route = createFileRoute("/privacy")({
	head: () => ({
		meta: [
			{ title: `Privacy policy · ${SITE_NAME}` },
			{
				name: "description",
				content: `Informativa sul trattamento dei dati personali per il sito ${SITE_NAME}.`,
			},
			{ name: "robots", content: "index, follow" },
		],
	}),
	component: PrivacyPage,
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

function PrivacyPage() {
	return (
		<div className="container mx-auto max-w-3xl px-4 py-10 space-y-10">
			<header className="space-y-2">
				<h1 className="display-title text-4xl font-bold tracking-tight">
					<span className="brand-gradient-text">Privacy policy</span>
				</h1>
				<p className="text-sm text-muted-foreground">
					Ultimo aggiornamento: 11 maggio 2026
				</p>
			</header>

			<p className="text-muted-foreground leading-relaxed">
				{SITE_NAME} è progettato per funzionare con il minimo possibile di dati
				personali. Questa informativa descrive in modo trasparente quali dati
				trattiamo, perché e per quanto tempo, in conformità con il
				Regolamento UE 2016/679 (GDPR).
			</p>

			<section>
				<SectionHeading>1. Titolare del trattamento</SectionHeading>
				<p className="text-muted-foreground leading-relaxed">
					Il titolare del trattamento è il gestore del sito, contattabile
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

			<section>
				<SectionHeading>2. Dati raccolti</SectionHeading>
				<p className="text-muted-foreground leading-relaxed">
					Il sito non richiede registrazione e non raccoglie dati personali
					identificativi. In particolare:
				</p>
				<ul className="mt-3 space-y-2 text-muted-foreground leading-relaxed list-disc list-inside">
					<li>
						<strong className="text-foreground">Dati di confronto</strong>:
						prezzi, formati e nomi prodotto inseriti restano sul tuo
						dispositivo (memorizzati in <code>localStorage</code>) e non
						vengono trasmessi ai nostri server.
					</li>
					<li>
						<strong className="text-foreground">Analitiche aggregate</strong>:
						utilizziamo Cloudflare Web Analytics, un sistema di rilevazione
						anonimo e privacy-first che non utilizza cookie né raccoglie
						identificatori univoci.
					</li>
					<li>
						<strong className="text-foreground">Log tecnici</strong>: il
						provider di hosting può registrare per brevi periodi indirizzi IP
						e user-agent per finalità di sicurezza, prevenzione frodi e
						garanzia del servizio.
					</li>
				</ul>
			</section>

			<section>
				<SectionHeading>3. Finalità e base giuridica</SectionHeading>
				<p className="text-muted-foreground leading-relaxed">
					I dati tecnici e analitici vengono trattati per garantire il
					corretto funzionamento del sito, prevenire abusi e capire come
					migliorarne i contenuti. La base giuridica è il legittimo interesse
					del titolare a erogare un servizio sicuro ed efficiente
					(art. 6.1.f GDPR).
				</p>
			</section>

			<section>
				<SectionHeading>4. Conservazione dei dati</SectionHeading>
				<p className="text-muted-foreground leading-relaxed">
					I dati di confronto restano sul tuo dispositivo finché non li
					cancelli (puoi farlo dal pulsante "Svuota tutto" o cancellando la
					cache del browser). I log tecnici del provider sono conservati per
					il tempo strettamente necessario alle finalità sopra descritte e
					comunque non oltre 90 giorni.
				</p>
			</section>

			<section>
				<SectionHeading>5. Comunicazione a terzi</SectionHeading>
				<p className="text-muted-foreground leading-relaxed">
					Non vendiamo, cediamo o condividiamo dati con terze parti per
					finalità di marketing. I fornitori tecnici utilizzati (Cloudflare
					per hosting e analitiche) agiscono come responsabili esterni e
					trattano i dati esclusivamente per erogare il servizio richiesto.
				</p>
			</section>

			<section>
				<SectionHeading>6. Trasferimento extra-UE</SectionHeading>
				<p className="text-muted-foreground leading-relaxed">
					Alcuni fornitori tecnici potrebbero trattare dati al di fuori
					dell'Unione Europea. In tali casi vengono adottate garanzie
					adeguate (Clausole Contrattuali Standard della Commissione
					Europea) per assicurare un livello di protezione equivalente a
					quello previsto dal GDPR.
				</p>
			</section>

			<section>
				<SectionHeading>7. I tuoi diritti</SectionHeading>
				<p className="text-muted-foreground leading-relaxed">
					In qualunque momento puoi esercitare i diritti previsti dagli artt.
					15-22 GDPR: accesso, rettifica, cancellazione, limitazione,
					portabilità e opposizione al trattamento. Per esercitarli scrivi
					a{" "}
					<a
						href="mailto:giacomorossi.dev@gmail.com"
						className="brand-gradient-text font-semibold underline-offset-4 hover:underline"
					>
						giacomorossi.dev@gmail.com
					</a>
					. Hai anche il diritto di proporre reclamo al Garante per la
					protezione dei dati personali (www.garanteprivacy.it).
				</p>
			</section>

			<section>
				<SectionHeading>8. Modifiche alla policy</SectionHeading>
				<p className="text-muted-foreground leading-relaxed">
					Eventuali aggiornamenti a questa informativa verranno pubblicati
					su questa pagina, con indicazione della data dell'ultima revisione.
					Ti invitiamo a consultarla periodicamente.
				</p>
			</section>
		</div>
	);
}
