import { useEffect, useState } from "react";

/**
 * Scroll-spy: returns the id of the section currently filling the viewport.
 *
 * A single observer watches every section. When several are intersecting at
 * once we pick the one with the largest visible ratio, which keeps the nav
 * from flickering between neighbours at section boundaries.
 */
export const useActiveSection = (sectionIds) => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
};
