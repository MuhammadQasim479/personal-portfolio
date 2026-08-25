import { cn } from "@/utils/cn";

/**
 * Small pill for technology names. `size="sm"` is the dense variant used
 * inside timeline cards; the default is used on project cards.
 */
export const Tag = ({ size = "default", className = "", children }) => (
  <span
    className={cn(
      "inline-flex items-center rounded-full border border-border/60 bg-surface/70",
      "font-mono text-muted-foreground transition-colors duration-300",
      "hover:border-primary/50 hover:text-primary",
      size === "sm" ? "px-2.5 py-1 text-[10px]" : "px-3.5 py-1.5 text-[11px]",
      className
    )}
  >
    {children}
  </span>
);
