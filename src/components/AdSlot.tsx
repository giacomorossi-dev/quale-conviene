import { cn } from "#/lib/utils.ts";

interface Props {
  className?: string;
  label?: string;
}

/**
 * Visual placeholder for ad units. Real AdSense integration is intentionally
 * deferred until traffic justifies the approval flow.
 */
export default function AdSlot({ className, label = "Spazio pubblicitario" }: Props) {
  return (
    <div
      role="complementary"
      aria-label={label}
      className={cn(
        "flex min-h-24 items-center justify-center rounded-lg border border-dashed bg-muted/40 text-xs text-muted-foreground",
        className,
      )}
    >
      {label}
    </div>
  );
}
