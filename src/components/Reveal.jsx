import { cn } from "@/utils/cn";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/**
 * Wraps children so they fade up when scrolled into view.
 *
 * Replaces the old `animate-fade-in animation-delay-*` pattern, which fired on
 * page load — every section below the fold had already finished animating
 * before the user ever scrolled to it.
 */
export const Reveal = ({
  as,
  delay = 0,
  className = "",
  children,
  ...props
}) => {
  const Component = as || "div";
  const { ref, isRevealed } = useScrollReveal();

  return (
    <Component
      ref={ref}
      data-revealed={isRevealed}
      style={{ "--reveal-delay": `${delay}ms` }}
      className={cn("reveal", className)}
      {...props}
    >
      {children}
    </Component>
  );
};
