import type * as React from "react";
import {
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
	Card as ShadcnCard,
} from "#/components/ui/card.tsx";
import { cn } from "#/lib/utils.ts";

type Variant = "default" | "glass" | "gradient-border";

export interface CardProps extends React.ComponentProps<"div"> {
	variant?: Variant;
}

/**
 * Branded Card wrapper. `variant`:
 *  - default   – shadcn baseline (bg-card + subtle shadow)
 *  - glass     – frosted glassmorphism (translucent over body gradient mesh)
 *  - gradient-border – brand gradient outline (no fill change)
 */
export function Card({ className, variant = "default", ...props }: CardProps) {
	if (variant === "glass") {
		return (
			<div
				data-slot="card"
				data-variant="glass"
				className={cn(
					"glass flex flex-col gap-6 rounded-xl py-6 text-card-foreground",
					className,
				)}
				{...props}
			/>
		);
	}
	if (variant === "gradient-border") {
		return (
			<div
				data-slot="card"
				data-variant="gradient-border"
				className={cn(
					"brand-gradient-border flex flex-col gap-6 rounded-xl bg-card py-6 text-card-foreground shadow-sm",
					className,
				)}
				{...props}
			/>
		);
	}
	return <ShadcnCard className={className} {...props} />;
}

export {
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
};
