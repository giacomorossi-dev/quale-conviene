import type * as React from "react";
import { cn } from "#/lib/utils.ts";

export function Textarea({
	className,
	...props
}: React.ComponentProps<"textarea">) {
	return (
		<textarea
			data-slot="textarea"
			className={cn(
				"w-full min-w-0 rounded-md border border-input bg-background/40 px-3 py-2 text-sm shadow-xs outline-none backdrop-blur-sm",
				"placeholder:text-muted-foreground",
				"focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/40",
				"disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
				"aria-invalid:border-destructive aria-invalid:ring-destructive/20",
				"dark:bg-input/30",
				className,
			)}
			{...props}
		/>
	);
}
