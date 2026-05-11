import type { ReactNode } from "react";

export default function SectionIcon({ children }: { children: ReactNode }) {
	return (
		<span
			aria-hidden="true"
			className="brand-gradient-bg inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md shadow-[0_6px_20px_-6px_rgba(168,85,247,0.55)] [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-white"
		>
			{children}
		</span>
	);
}
