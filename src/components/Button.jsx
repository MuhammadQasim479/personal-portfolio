import { forwardRef } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/utils/cn";

const VARIANTS = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-primary/30",
  outline:
    "bg-transparent text-foreground border border-border-strong hover:border-primary/60 hover:bg-primary/5",
  ghost:
    "bg-transparent text-muted-foreground hover:text-foreground hover:bg-surface",
};

const SIZES = {
  sm: "px-4 py-2 text-sm",
  default: "px-6 py-3 text-base",
  lg: "px-7 py-3.5 text-base sm:px-8 sm:py-4 sm:text-lg",
};

const GAPS = {
  sm: "gap-1.5",
  default: "gap-2",
  lg: "gap-2",
};

/**
 * One button for the whole site.
 *
 * Polymorphic: pass `href` and it renders an anchor instead of a <button>, so
 * links stay links (middle-click, open in a new tab, and screen readers all
 * keep working) without duplicating the styles.
 */
export const Button = forwardRef(
  (
    {
      as,
      href,
      variant = "primary",
      size = "default",
      isLoading = false,
      disabled = false,
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    const Component = as || (href ? "a" : "button");
    const isDisabled = disabled || isLoading;

    // Anchors have no `disabled` attribute; mark them for assistive tech.
    const stateProps =
      Component === "button"
        ? { disabled: isDisabled, type: props.type || "button" }
        : { href, "aria-disabled": isDisabled || undefined };

    return (
      <Component
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center overflow-hidden rounded-full font-medium",
          "transition-[background-color,box-shadow,border-color,transform] duration-300",
          "active:scale-[0.98] disabled:pointer-events-none disabled:opacity-55",
          VARIANTS[variant],
          SIZES[size],
          className
        )}
        {...stateProps}
        {...props}
      >
        <span className={cn("relative flex items-center justify-center", GAPS[size])}>
          {isLoading && (
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          )}
          {children}
        </span>
      </Component>
    );
  }
);

Button.displayName = "Button";
