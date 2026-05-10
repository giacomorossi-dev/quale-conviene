import { Coffee } from "lucide-react";

interface Props {
  username?: string;
}

const ENV_HANDLE = import.meta.env.VITE_BMC_HANDLE as string | undefined;

export default function BuyMeCoffee({ username = ENV_HANDLE }: Props) {
  if (!username) return null;
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
