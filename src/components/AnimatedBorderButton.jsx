import { cn } from "@/utils/cn";

/**
 * Outline button with an SVG stroke that chases the border on hover.
 *
 * Same polymorphic treatment as Button — the original version swallowed every
 * prop, so it could not be clicked or linked anywhere.
 */
export const AnimatedBorderButton = ({
  as,
  href,
  className = "",
  children,
  ...props
}) => {
  const Component = as || (href ? "a" : "button");
  const stateProps =
    Component === "button" ? { type: props.type || "button" } : { href };

  return (
    <Component
      className={cn(
        "group animated-border relative inline-flex items-center justify-center",
        "overflow-visible rounded-full border border-border-strong bg-transparent",
        "px-7 py-3.5 text-base font-medium text-foreground sm:px-8 sm:py-4 sm:text-lg",
        "transition-colors duration-500 hover:border-primary/50",
        "active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...stateProps}
      {...props}
    >
      <svg
        className="pointer-events-none absolute left-0 top-0 h-full w-full"
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
        style={{ overflow: "visible" }}
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M 30,1 A 29,29 0 0 0 1,30 L 1,30 A 29,29 0 0 0 30,59 L 170,59 A 29,29 0 0 0 199,30 L 199,30 A 29,29 0 0 0 170,1 Z"
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="2"
          strokeDasharray="400 550"
          strokeDashoffset="400"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animated-border-path"
        />
      </svg>
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </Component>
  );
};
