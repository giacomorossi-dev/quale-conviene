import type * as React from "react";
import { cn } from "#/lib/utils.ts";

export function Input({
	className,
	type,
	...props
}: React.ComponentProps<"input">) {
	return (
		<input
			type={type}
			data-slot="input"
			className={cn(
				"h-10 w-full min-w-0 rounded-md border border-input bg-background/40 px-3 py-1 text-base shadow-xs outline-none backdrop-blur-sm",
				"placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground",
				"focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/40",
				"disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
				"aria-invalid:border-destructive aria-invalid:ring-destructive/20",
				"md:text-sm dark:bg-input/30",
				className,
			)}
			{...props}
		/>
	);
}
