import { useEffect, useRef, useState } from "react";

/**
 * Decides up front whether revealing should be skipped entirely: without
 * IntersectionObserver, or with reduced motion requested, content must start
 * visible rather than waiting for an event that will never be useful.
 */
const shouldRevealImmediately = () => {
  if (typeof window === "undefined") return true;
  if (typeof IntersectionObserver === "undefined") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

/**
 * Reveals an element the first time it scrolls into view.
 *
 * The observer disconnects after the first intersection — reveals are one-way,
 * so there is no reason to keep firing as the user scrolls back up.
 */
export const useScrollReveal = ({
  threshold = 0.15,
  rootMargin = "0px 0px -80px 0px",
} = {}) => {
  const ref = useRef(null);
  const [isRevealed, setIsRevealed] = useState(shouldRevealImmediately);

  useEffect(() => {
    const node = ref.current;
    if (!node || isRevealed) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsRevealed(true);
        observer.disconnect();
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isRevealed, threshold, rootMargin]);

  return { ref, isRevealed };
};
