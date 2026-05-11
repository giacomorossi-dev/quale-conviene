import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import type * as React from "react";

import { cn } from "#/lib/utils.ts";

const appButtonVariants = cva(
	"inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
	{
		variants: {
			variant: {
				gradient:
					"brand-gradient-bg text-white shadow-[0_8px_24px_-8px_rgba(99,102,241,0.45)] hover:shadow-[0_12px_32px_-10px_rgba(168,85,247,0.55)] hover:-translate-y-px active:translate-y-0",
				default:
					"bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
				outline:
					"border border-border bg-background/50 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground dark:border-white/30 dark:hover:border-white/50",
				secondary:
					"bg-secondary text-secondary-foreground hover:bg-secondary/80",
				ghost: "hover:bg-accent hover:text-accent-foreground",
				link: "brand-gradient-text underline-offset-4 hover:underline",
				destructive: "bg-destructive text-white hover:bg-destructive/90",
			},
			size: {
				default: "h-9 px-4 py-2 has-[>svg]:px-3",
				xs: "h-6 gap-1 rounded-md px-2 text-xs [&_svg:not([class*='size-'])]:size-3",
				sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
				lg: "h-11 rounded-md px-6 text-base has-[>svg]:px-4",
				icon: "size-9",
				"icon-sm": "size-8",
				"icon-lg": "size-10",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

export interface ButtonProps
	extends React.ComponentProps<"button">,
		VariantProps<typeof appButtonVariants> {
	asChild?: boolean;
}

export function Button({
	className,
	variant = "default",
	size = "default",
	asChild = false,
	...props
}: ButtonProps) {
	const Comp = asChild ? Slot.Root : "button";
	return (
		<Comp
			data-slot="button"
			data-variant={variant}
			data-size={size}
			className={cn(appButtonVariants({ variant, size, className }))}
			{...props}
		/>
	);
}

export { appButtonVariants };
