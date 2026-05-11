import { Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "#/components/app/button.tsx";

type Theme = "light" | "dark" | "system";
const STORAGE_KEY = "qc:theme";

function readInitialTheme(): Theme {
	if (typeof window === "undefined") return "system";
	const stored = window.localStorage.getItem(STORAGE_KEY);
	if (stored === "dark" || stored === "light" || stored === "system") {
		return stored;
	}
	return "system";
}

function resolveAppliedTheme(theme: Theme): "light" | "dark" {
	if (theme !== "system") return theme;
	if (typeof window === "undefined") return "light";
	return window.matchMedia("(prefers-color-scheme: dark)").matches
		? "dark"
		: "light";
}

function applyTheme(theme: Theme) {
	if (typeof document === "undefined") return;
	const applied = resolveAppliedTheme(theme);
	document.documentElement.classList.toggle("dark", applied === "dark");
}

const NEXT: Record<Theme, Theme> = {
	light: "dark",
	dark: "system",
	system: "light",
};

const ICON: Record<Theme, typeof Sun> = {
	light: Sun,
	dark: Moon,
	system: Monitor,
};

const LABEL: Record<Theme, string> = {
	light: "Tema chiaro · clicca per scuro",
	dark: "Tema scuro · clicca per sistema",
	system: "Tema di sistema · clicca per chiaro",
};

export default function ThemeToggle() {
	const [theme, setTheme] = useState<Theme>("system");
	const [mounted, setMounted] = useState(false);

	// Initial read + live update when user switches OS theme while we're on "system".
	useEffect(() => {
		const initial = readInitialTheme();
		setTheme(initial);
		applyTheme(initial);
		setMounted(true);

		const mql = window.matchMedia("(prefers-color-scheme: dark)");
		const onChange = () => {
			const current = readInitialTheme();
			if (current === "system") applyTheme("system");
		};
		mql.addEventListener("change", onChange);
		return () => mql.removeEventListener("change", onChange);
	}, []);

	const cycle = () => {
		const next = NEXT[theme];
		setTheme(next);
		applyTheme(next);
		try {
			window.localStorage.setItem(STORAGE_KEY, next);
		} catch {
			/* storage disabled — ignore */
		}
	};

	const Icon = ICON[theme];

	return (
		<Button
			type="button"
			variant="ghost"
			size="icon"
			onClick={cycle}
			aria-label={LABEL[theme]}
			title={LABEL[theme]}
			suppressHydrationWarning
		>
			{mounted ? <Icon className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
		</Button>
	);
}
