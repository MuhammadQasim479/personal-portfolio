import { useEffect } from "react";

/**
 * Freezes background scrolling while a mobile menu or modal is open.
 *
 * Compensates for the disappearing scrollbar by padding the body, otherwise
 * the whole layout shifts sideways the moment the menu opens.
 */
export const useLockBodyScroll = (isLocked) => {
  useEffect(() => {
    if (!isLocked) return;

    const { overflow, paddingRight } = document.body.style;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
    };
  }, [isLocked]);
};
