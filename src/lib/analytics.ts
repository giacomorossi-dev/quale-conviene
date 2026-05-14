/**
 * GA4 loader — invoked by the consent manager only after the user has
 * accepted the `analytics` category.
 *
 * If `VITE_GA_MEASUREMENT_ID` is not set at build time the function is
 * a silent no-op, so dev/staging deploys don't accidentally ship a GA
 * beacon.
 */

declare global {
	interface Window {
		dataLayer?: Array<unknown>;
		gtag?: (...args: Array<unknown>) => void;
		_gaLoaded?: boolean;
	}
}

export const loadGA4 = (): void => {
	const id = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;
	if (!id || window._gaLoaded) return;
	window._gaLoaded = true;

	// Update Consent Mode v2 (default is "denied", set inline in __root.tsx).
	window.gtag?.("consent", "update", { analytics_storage: "granted" });

	const script = document.createElement("script");
	script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
	script.async = true;
	document.head.appendChild(script);

	window.dataLayer = window.dataLayer ?? [];
	window.gtag =
		window.gtag ??
		function gtag(...args: Array<unknown>) {
			window.dataLayer?.push(args);
		};
	window.gtag("js", new Date());
	window.gtag("config", id);
};

export const revokeGA4 = (): void => {
	window.gtag?.("consent", "update", { analytics_storage: "denied" });
};
