/**
 * Joins class names, dropping anything falsy.
 *
 * Keeps conditional Tailwind classes readable at call sites:
 *   cn("px-4", isActive && "bg-primary", className)
 */
export const cn = (...classes) => classes.filter(Boolean).join(" ");
