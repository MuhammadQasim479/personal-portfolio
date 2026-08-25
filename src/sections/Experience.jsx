import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Tag } from "@/components/Tag";
import { cn } from "@/utils/cn";
import { experiences } from "@/data/portfolio";

/**
 * Career timeline. Rendered as an ordered list because the order is the
 * information — reverse chronology is what makes it a career rather than a
 * collection of jobs.
 */
export const Experience = () => {
  return (
    <section
      id="experience"
      className="relative scroll-mt-24 overflow-hidden py-24 sm:py-28 md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/4 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/[0.05] blur-[120px]"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Career journey"
          title="Experience that"
          accent="speaks volumes."
          description="A timeline of my professional growth, from curious beginner to senior engineer leading teams and building products at scale."
        />

        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="timeline-glow absolute bottom-0 left-[7px] top-0 w-px bg-gradient-to-b from-primary/70 via-primary/25 to-transparent md:left-1/2 md:-translate-x-1/2"
          />

          <ol className="space-y-10 md:space-y-12">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <li
                  key={`${exp.company}-${exp.period}`}
                  className="relative grid grid-cols-1 gap-8 md:grid-cols-2"
                >
                  {/* Node */}
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 z-10 h-3.5 w-3.5 rounded-full bg-primary ring-4 ring-background md:left-1/2 md:-translate-x-1/2"
                  >
                    {exp.current && (
                      <span className="absolute inset-0 animate-ping rounded-full bg-primary opacity-70" />
                    )}
                  </span>

                  <Reveal
                    delay={index * 120}
                    className={cn(
                      "pl-9 md:pl-0",
                      isLeft ? "md:pr-14 md:text-right" : "md:col-start-2 md:pl-14"
                    )}
                  >
                    <div className="card-sheen group rounded-2xl glass p-6 transition-colors duration-500 hover:border-primary/45">
                      <div
                        className={cn(
                          "flex flex-wrap items-center gap-2.5",
                          isLeft && "md:justify-end"
                        )}
                      >
                        <span className="font-mono text-xs tracking-wide text-primary">
                          {exp.period}
                        </span>
                        {exp.current && (
                          <span className="rounded-full bg-primary/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-primary">
                            Current
                          </span>
                        )}
                      </div>

                      <h3 className="mt-3 text-lg font-semibold tracking-tight">
                        {exp.role}
                      </h3>
                      <p className="mt-0.5 text-sm text-muted-foreground">
                        {exp.company}
                      </p>
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                        {exp.description}
                      </p>

                      <ul
                        className={cn(
                          "mt-5 flex flex-wrap gap-1.5",
                          isLeft && "md:justify-end"
                        )}
                      >
                        {exp.technologies.map((tech) => (
                          <li key={tech}>
                            <Tag size="sm">{tech}</Tag>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};
