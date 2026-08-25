import { useMemo } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/**
 * Deterministic pseudo-random generator (mulberry32).
 *
 * The original hero called Math.random() inline in the JSX. Because the hero
 * also re-renders every 220ms while the code editor types, all 30 particles
 * teleported to new coordinates five times a second. Seeding it once means the
 * field is stable across re-renders and identical on every load.
 */
const createRandom = (seed) => () => {
  seed = (seed + 0x6d2b79f5) | 0;
  let t = seed;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

const buildParticles = (count) => {
  let seed = 20260824;
  const next = () => {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return createRandom(seed)();
  };

  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${next() * 100}%`,
    top: `${next() * 100}%`,
    duration: `${15 + next() * 20}s`,
    delay: `${next() * 6}s`,
    scale: 0.6 + next() * 0.9,
  }));
};

/**
 * Ambient drifting particles. Purely decorative, so it is hidden from the
 * accessibility tree and skipped entirely under reduced-motion.
 */
export const BackgroundFX = ({ count = 26 }) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const particles = useMemo(() => buildParticles(count), [count]);

  if (prefersReducedMotion) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="absolute block h-1.5 w-1.5 rounded-full bg-primary/50"
          style={{
            left: particle.left,
            top: particle.top,
            transform: `scale(${particle.scale})`,
            animation: `slow-drift ${particle.duration} ease-in-out ${particle.delay} infinite`,
          }}
        />
      ))}
    </div>
  );
};
