import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { cn } from "@/utils/cn";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { testimonials } from "@/data/portfolio";

const AUTOPLAY_MS = 7000;

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  const goTo = useCallback((index) => {
    const count = testimonials.length;
    setActiveIndex(((index % count) + count) % count);
  }, []);

  const next = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const previous = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  // Advances on its own, but stops the moment a pointer or keyboard focus
  // enters the carousel so it never moves out from under someone reading it.
  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;
    const timer = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [isPaused, prefersReducedMotion, next]);

  const onKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      next();
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      previous();
    }
  };

  const active = testimonials[activeIndex];

  return (
    <section
      id="testimonials"
      className="relative scroll-mt-24 overflow-hidden py-24 sm:py-28 md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.05] blur-[130px]"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="What people say"
          title="Kind words from"
          accent="amazing people."
          align="center"
        />

        <Reveal delay={150} className="mx-auto mt-14 max-w-4xl">
          <div
            role="group"
            aria-roledescription="carousel"
            aria-label="Testimonials"
            tabIndex={0}
            onKeyDown={onKeyDown}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
            className="relative rounded-3xl"
          >
            <div className="relative rounded-3xl glass p-7 glow-border sm:p-10 md:p-12">
              <span
                aria-hidden="true"
                className="absolute -top-5 left-8 flex h-11 w-11 items-center justify-center rounded-full bg-primary"
              >
                <Quote className="h-5 w-5 text-primary-foreground" />
              </span>

              {/* aria-live so the change is announced when it auto-advances. */}
              <div aria-live="polite" aria-atomic="true">
                <p className="sr-only">
                  Testimonial {activeIndex + 1} of {testimonials.length}
                </p>
                <blockquote className="pt-5">
                  <p className="font-serif text-2xl leading-snug text-foreground text-pretty sm:text-3xl md:text-[2.1rem]">
                    “{active.quote}”
                  </p>
                  <footer className="mt-8 flex items-center gap-4">
                    <img
                      src={active.avatar}
                      alt=""
                      width="56"
                      height="56"
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="h-14 w-14 rounded-full object-cover ring-2 ring-primary/25"
                    />
                    <div>
                      <cite className="block font-medium not-italic">
                        {active.author}
                      </cite>
                      <span className="font-mono text-xs text-subtle-foreground">
                        {active.role}
                      </span>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={previous}
                aria-label="Previous testimonial"
                className="rounded-full glass p-3 text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>

              <div className="flex items-center gap-2">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.id}
                    type="button"
                    onClick={() => goTo(index)}
                    aria-label={`Show testimonial from ${testimonial.author}`}
                    aria-current={index === activeIndex}
                    className={cn(
                      "h-2 rounded-full transition-all duration-300",
                      index === activeIndex
                        ? "w-8 bg-primary"
                        : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                    )}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="rounded-full glass p-3 text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
