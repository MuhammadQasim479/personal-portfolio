import { useEffect, useState } from "react";

/**
 * Hairline progress bar pinned to the top of the viewport.
 *
 * The scroll handler is rAF-throttled and passive, so it never blocks
 * scrolling, and it writes a transform rather than a width to stay off the
 * layout path.
 */
export const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = null;

    const update = () => {
      frame = null;
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const scrollable = scrollHeight - clientHeight;
      setProgress(scrollable > 0 ? scrollTop / scrollable : 0);
    };

    const onScroll = () => {
      if (frame === null) frame = window.requestAnimationFrame(update);
    };

    // Scheduled rather than called inline so the first measurement happens
    // after paint instead of forcing an extra render during mount.
    frame = window.requestAnimationFrame(update);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      if (frame !== null) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-primary via-primary to-highlight"
      style={{ transform: `scaleX(${progress})` }}
    />
  );
};
