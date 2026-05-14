/**
 * Cookie consent bootstrap.
 *
 * Configura `vanilla-cookieconsent` con 2 categorie:
 * - `necessary`: tecnici di prima parte (cookie del consent manager stesso), readOnly
 * - `analytics`: GA4 (caricato post-consent via loadGA4)
 *
 * Conforme alle Linee Guida del Garante Privacy 10/06/2021:
 * - Bottoni "Accetta tutti" e "Rifiuta tutti" ugualmente prominenti
 * - Nessun dark pattern
 * - Re-apertura preferenze sempre disponibile dal footer via `data-cc="show-preferencesModal"`
 */

import * as CookieConsent from "vanilla-cookieconsent";
import { loadGA4, revokeGA4 } from "#/lib/analytics.ts";

export const consentConfig: CookieConsent.CookieConsentConfig = {
	guiOptions: {
		consentModal: {
			layout: "bar",
			position: "bottom",
			equalWeightButtons: true,
			flipButtons: false,
		},
		preferencesModal: {
			layout: "box",
			position: "right",
			equalWeightButtons: true,
			flipButtons: false,
		},
	},

	categories: {
		necessary: {
			enabled: true,
			readOnly: true,
		},
		analytics: {
			autoClear: {
				cookies: [{ name: /^_ga/ }, { name: "_gid" }],
			},
			services: {
				ga4: {
					label: "Google Analytics 4",
					onAccept: () => loadGA4(),
					onReject: () => revokeGA4(),
					cookies: [{ name: /^_ga/ }, { name: "_gid" }],
				},
			},
		},
	},

	language: {
		default: "it",
		translations: {
			it: {
				consentModal: {
					title: "Cookie e privacy",
					description:
						'Quale Conviene utilizza cookie tecnici necessari al funzionamento del sito e, previo consenso, cookie di terze parti per misurare in forma aggregata l\'utilizzo del sito. Per maggiori dettagli consulta la nostra <a href="/privacy">privacy policy</a> e la <a href="/cookie">cookie policy</a>. Puoi modificare le tue scelte in qualsiasi momento dalla voce "Preferenze cookie" nel footer.',
					acceptAllBtn: "Accetta tutti",
					acceptNecessaryBtn: "Rifiuta tutti",
					showPreferencesBtn: "Personalizza",
				},
				preferencesModal: {
					title: "Preferenze cookie",
					acceptAllBtn: "Accetta tutti",
					acceptNecessaryBtn: "Rifiuta tutti",
					savePreferencesBtn: "Salva preferenze",
					closeIconLabel: "Chiudi",
					serviceCounterLabel: "Servizio|Servizi",
					sections: [
						{
							title: "Le tue preferenze",
							description:
								"Qui puoi controllare ogni categoria di cookie. I cookie strettamente necessari non si possono disattivare perché servono al corretto funzionamento del sito.",
						},
						{
							title: "Cookie strettamente necessari",
							description:
								"Cookie tecnici di prima parte usati per ricordare le tue preferenze sul banner stesso. Non raccolgono dati personali identificativi.",
							linkedCategory: "necessary",
						},
						{
							title: "Statistiche",
							description:
								"Cookie di Google Analytics 4 (terze parti) per capire come gli utenti usano il sito. I dati sono raccolti in forma aggregata e anonima.",
							linkedCategory: "analytics",
						},
						{
							title: "Maggiori informazioni",
							description:
								'Per qualunque domanda relativa al trattamento dei tuoi dati personali consulta la <a href="/privacy">privacy policy</a> oppure scrivici dalla pagina <a href="/contatti">contatti</a>.',
						},
					],
				},
			},
		},
	},
};

export function initConsent(): void {
	CookieConsent.run(consentConfig);
}
