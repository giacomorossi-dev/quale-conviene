import { useEffect } from "react";
import { initConsent } from "#/lib/consent.ts";

/**
 * Mounts the `vanilla-cookieconsent` banner on the client.
 *
 * Renders nothing — the library injects its own DOM into `document.body`
 * when `initConsent()` runs. Anywhere in the app, a `<button
 * data-cc="show-preferencesModal">` re-opens the preferences modal.
 */
export default function CookieConsent() {
	useEffect(() => {
		initConsent();
	}, []);
	return null;
}
