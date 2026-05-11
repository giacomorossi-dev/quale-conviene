import { Coffee } from "lucide-react";
import { Button } from "#/components/app/button.tsx";

const KOFI_URL = "https://ko-fi.com/giacomorossidev";

interface Props {
	/** Hide the label on screens narrower than `sm` — useful in tight headers. */
	compact?: boolean;
}

export default function BuyMeCoffee({ compact = false }: Props) {
	return (
		<Button asChild variant="gradient" size="sm">
			<a href={KOFI_URL} target="_blank" rel="noopener noreferrer">
				<Coffee className="h-4 w-4" />
				<span className={compact ? "hidden sm:inline" : undefined}>
					Offrimi un caffè
				</span>
			</a>
		</Button>
	);
}
