import { useEffect, useState } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

const getInitialPreference = () =>
  typeof window !== "undefined" && typeof window.matchMedia === "function"
    ? window.matchMedia(QUERY).matches
    : false;

/**
 * Tracks the reduced-motion preference, including changes made mid-session.
 *
 * The initial value is read lazily during the first render rather than set
 * from inside an effect, which would cost an extra render pass on every mount.
 */
export const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] =
    useState(getInitialPreference);

  useEffect(() => {
    const mediaQuery = window.matchMedia(QUERY);
    const onChange = (event) => setPrefersReducedMotion(event.matches);

    mediaQuery.addEventListener("change", onChange);
    return () => mediaQuery.removeEventListener("change", onChange);
  }, []);

  return prefersReducedMotion;
};
