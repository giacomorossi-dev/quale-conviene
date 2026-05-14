import { HelpCircle } from "lucide-react";
import { Button } from "#/components/app/button.tsx";

const OPEN_EVENT = "qc:open-onboarding";

export default function HelpButton() {
	return (
		<Button
			type="button"
			variant="outline"
			size="sm"
			aria-label="Apri il tour guidato"
			onClick={() => {
				if (typeof window === "undefined") return;
				window.dispatchEvent(new Event(OPEN_EVENT));
			}}
		>
			<HelpCircle className="h-4 w-4" />
			<span className="hidden sm:inline">Aiuto</span>
		</Button>
	);
}
