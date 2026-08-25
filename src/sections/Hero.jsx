import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { Button } from "@/components/Button";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { BackgroundFX } from "@/components/BackgroundFX";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import {
  codeLines,
  heroStats,
  marqueeSkills,
  profile,
  socials,
} from "@/data/portfolio";

const TOKEN_COLORS = {
  keyword: "text-primary",
  var: "text-foreground font-semibold",
  prop: "text-sky-300",
  string: "text-emerald-300",
  plain: "text-muted-foreground",
};

const LINE_DELAY_MS = 200;
const LOOP_PAUSE_MS = 2200;

export const Hero = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [typedLines, setTypedLines] = useState(0);

  // Under reduced motion the snippet is shown complete. Deriving that here
  // rather than pushing it into state keeps the effect purely about the timer.
  const visibleLines = prefersReducedMotion ? codeLines.length : typedLines;
  const isTyping = !prefersReducedMotion && typedLines < codeLines.length;

  // Types the object out line by line, holds on the finished state, restarts.
  useEffect(() => {
    if (prefersReducedMotion) return;

    const isComplete = typedLines >= codeLines.length;
    const timer = setTimeout(
      () => setTypedLines(isComplete ? 0 : typedLines + 1),
      isComplete ? LOOP_PAUSE_MS : LINE_DELAY_MS
    );

    return () => clearTimeout(timer);
  }, [typedLines, prefersReducedMotion]);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <BackgroundFX />

      {/* Ambient wash behind the headline, and the grid it sits on. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,black,transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/[0.07] blur-[120px]"
      />

      <div className="container relative z-10 mx-auto px-4 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          {/* ---------------------------------------------------- Left column */}
          <div className="space-y-7 sm:space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2.5 rounded-full glass px-3.5 py-2 font-mono text-[11px] tracking-wide text-primary sm:text-xs">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                {profile.tagline}
              </span>
            </div>

            <div className="space-y-5">
              {/* <h1 className="animate-fade-in animation-delay-100 text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.03em] text-balance sm:text-6xl lg:text-[4.2rem]">
                I build the
                <br />
                <span className="text-primary glow-text">whole</span> request,
                <br />
                <span className="font-serif text-[1.1em] font-normal italic text-foreground">
                  not half of it.
                </span>
              </h1> */}
              <h1 className="animate-fade-in animation-delay-100 text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.03em] text-balance sm:text-6xl lg:text-[4.2rem]">
  I build
  <br />
  <span className="text-primary glow-text">full-stack</span>
  <br />
  <span className="font-serif text-[1.1em] font-normal italic text-foreground">
    products, end to end.
  </span>
</h1>

              <p className="animate-fade-in animation-delay-200 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
                Hi, I'm {profile.name} — a {profile.title} based in{" "}
                {profile.location}. {profile.summary}
              </p>
            </div>

            {/* CTAs — both of these actually go somewhere now. */}
            <div className="animate-fade-in animation-delay-300 flex flex-wrap gap-3 sm:gap-4">
              <Button href="#contact" size="lg">
                Contact me
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Button>
              <AnimatedBorderButton
                href={profile.resumeUrl}
                download
                aria-label="Download my CV as a PDF"
              >
                <Download className="h-5 w-5" aria-hidden="true" />
                Download CV
              </AnimatedBorderButton>
            </div>

            {/* Stats — the numbers a recruiter scans for, in the mono face so
                they read as data rather than prose. */}
            <dl className="animate-fade-in animation-delay-400 grid max-w-lg grid-cols-3 gap-3 border-t border-border pt-7">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block font-mono text-2xl font-semibold text-primary sm:text-3xl">
                      {stat.value}
                    </span>
                    <span className="mt-1.5 block text-[11px] leading-snug text-subtle-foreground sm:text-xs">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>

            <div className="animate-fade-in animation-delay-500 flex items-center gap-3">
              {/* <span className="font-mono text-sm sm:text-base uppercase tracking-[0.18em] text-subtle-foreground">
                Find me
              </span> */}
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 font-mono text-sm uppercase tracking-[0.18em] text-subtle-foreground backdrop-blur-sm sm:text-base">
  <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)]" />
  Find me
</span>
              <div className="flex items-center gap-2">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="rounded-full glass p-2 text-muted-foreground transition-all duration-300 border border-primary/40 hover:bg-primary/10 hover:text-primary"
                  >
                    <social.icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* --------------------------------------------------- Right column */}
          <div className="animate-fade-in animation-delay-300 relative">
            <div className="relative mx-auto max-w-md">
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/25 via-transparent to-primary/10 blur-2xl"
              />

              <div className="relative rounded-2xl glass p-1.5 glow-border sm:rounded-3xl sm:p-2">
                <div className="overflow-hidden rounded-xl border border-white/5 bg-[#0b1015] sm:rounded-2xl">
                  {/* Title bar */}
                  <div className="flex items-center gap-2 border-b border-white/5 bg-white/[0.02] px-4 py-3">
                    <span className="h-3 w-3 rounded-full bg-red-500/70" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                    <span className="h-3 w-3 rounded-full bg-green-500/70" />
                    <span className="ml-3 font-mono text-xs text-subtle-foreground">
                      developer.js
                    </span>
                  </div>

                  {/* Code body. Fixed min-height so the card never resizes as
                      lines appear — that jitter was the tell on the old one. */}
                  <div className="min-h-[268px] p-4 font-mono text-xs leading-7 sm:min-h-[320px] sm:p-6 sm:text-sm">
                    {codeLines.slice(0, visibleLines).map((line, index) => (
                      <div
                        key={index}
                        style={{ paddingLeft: `${line.indent * 1.25}rem` }}
                      >
                        <span className="mr-3 select-none text-muted-foreground/25 sm:mr-4">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {line.content.map((token, tokenIndex) => (
                          <span key={tokenIndex} className={TOKEN_COLORS[token.c]}>
                            {token.t}
                          </span>
                        ))}
                      </div>
                    ))}
                    {isTyping && (
                      <span className="ml-1 inline-block h-4 w-2 animate-blink bg-primary align-middle" />
                    )}
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-3 rounded-xl glass px-4 py-3 animate-float sm:-right-4">
                  <div className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-medium">
                      {profile.availability}
                    </span>
                  </div>
                </div>

                <div className="absolute -left-3 -top-4 rounded-xl glass px-4 py-3 animate-float animation-delay-500 sm:-left-4">
                  <div className="font-mono text-xl font-semibold text-primary">
                    {profile.yearsExperience}
                  </div>
                  <div className="text-[11px] text-subtle-foreground">
                    Years exp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills marquee — pauses on hover so it can actually be read. */}
        <div className="animate-fade-in animation-delay-600 mt-16 sm:mt-20">
          <p className="text-center font-mono text-[11px] uppercase tracking-[0.18em] text-subtle-foreground">
            Technologies I work with
          </p>
          <div className="marquee-paused relative mt-6 overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-0 top-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-32"
            />
            <div
              aria-hidden="true"
              className="absolute bottom-0 right-0 top-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-32"
            />
            <ul className="flex w-max animate-marquee">
              {/* The list is duplicated for a seamless loop; the copy is hidden
                  from assistive tech so skills are not announced twice. */}
              {[...marqueeSkills, ...marqueeSkills].map((skill, index) => (
                <li
                  key={`${skill}-${index}`}
                  aria-hidden={index >= marqueeSkills.length || undefined}
                  className="flex-shrink-0 px-6 py-4 sm:px-8"
                >
                  <span className="text-lg font-medium text-muted-foreground/70 transition-colors hover:text-muted-foreground sm:text-xl">
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-subtle-foreground transition-colors hover:text-primary sm:bottom-8"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
          Scroll
        </span>
        <ChevronDown className="h-5 w-5 animate-bounce" aria-hidden="true" />
      </a>
    </section>
  );
};
