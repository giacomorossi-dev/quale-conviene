import { cn } from "#/lib/utils.ts";

interface Props {
  className?: string;
  label?: string;
}

const ADS_ENABLED = import.meta.env.VITE_ADS_ENABLED === "true";

/**
 * Renders nothing unless VITE_ADS_ENABLED=true. Keeps a slot reservation in
 * the layout so the page doesn't reflow once a real ad provider is wired in.
 */
export default function AdSlot({ className, label = "Spazio pubblicitario" }: Props) {
  if (!ADS_ENABLED) return null;
  return (
    <aside
      aria-label={label}
      className={cn(
        "flex min-h-[90px] items-center justify-center rounded-lg border bg-muted/30 text-xs text-muted-foreground",
        className,
      )}
    >
      {label}
    </aside>
  );
}
