import { Coffee } from "lucide-react";

interface Props {
  username?: string;
}

/**
 * Lightweight Buy Me a Coffee button (no third-party JS until needed).
 * Replace `username` with your real BMC handle when ready.
 */
export default function BuyMeCoffee({ username = "your-handle" }: Props) {
  return (
    <a
      href={`https://www.buymeacoffee.com/${username}`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-md bg-yellow-400 px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-yellow-300"
    >
      <Coffee className="h-4 w-4" />
      Offrimi un caffè
    </a>
  );
}
