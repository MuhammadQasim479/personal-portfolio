import { useMemo, useState } from "react";
import { ArrowUpRight, Github, Lock } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Tag } from "@/components/Tag";
import { cn } from "@/utils/cn";
import { projects, socials } from "@/data/portfolio";

const ALL = "All";

/**
 * The tags were entered by hand over time, so the same technology appears as
 * "Nextjs", "Next.js" and "NextJs". Normalising here means the filter groups
 * them correctly while each card still shows exactly what was typed.
 */
const canonicalise = (tag) => {
  const key = tag.toLowerCase().replace(/[^a-z]/g, "");
  const aliases = {
    next: "Next.js",
    nextjs: "Next.js",
    react: "React",
    reactjs: "React",
    node: "Node.js",
    nodejs: "Node.js",
    mongodb: "MongoDB",
    mongo: "MongoDB",
    typescript: "TypeScript",
    tailwind: "Tailwind CSS",
    tailwindcss: "Tailwind CSS",
    monorepo: "Monorepo",
  };
  return aliases[key] || tag;
};

const githubProfile = socials.find((social) => social.label === "GitHub")?.href;

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState(ALL);

  const filters = useMemo(() => {
    const unique = new Set(projects.flatMap((p) => p.tags.map(canonicalise)));
    return [ALL, ...[...unique].sort()];
  }, []);

  const visibleProjects = useMemo(() => {
    if (activeFilter === ALL) return projects;
    return projects.filter((project) =>
      project.tags.map(canonicalise).includes(activeFilter)
    );
  }, [activeFilter]);

  return (
    <section
      id="projects"
      className="relative scroll-mt-24 overflow-hidden py-24 sm:py-28 md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-primary/[0.05] blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/4 left-0 h-64 w-64 rounded-full bg-highlight/[0.05] blur-[120px]"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Featured work"
          title="Projects that"
          accent="make an impact."
          description="A selection of my recent work, from complex web applications to innovative tools that solve real-world problems."
          align="center"
        />

        {/* Filters */}
        <Reveal delay={200} className="mt-12">
          <div
            role="group"
            aria-label="Filter projects by technology"
            className="flex flex-wrap justify-center gap-2"
          >
            {filters.map((filter) => {
              const isActive = filter === activeFilter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={isActive}
                  className={cn(
                    "rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.1em] transition-all duration-300",
                    isActive
                      ? "border-primary/60 bg-primary/10 text-primary"
                      : "border-border bg-surface/50 text-muted-foreground hover:border-border-strong hover:text-foreground"
                  )}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {visibleProjects.map((project, index) => {
            const hasLinks = Boolean(project.link || project.github);

            return (
              <Reveal
                key={project.title}
                as="article"
                delay={index * 100}
                className="group card-sheen overflow-hidden rounded-2xl glass transition-colors duration-500 hover:border-primary/40"
              >
                <div className="relative aspect-video overflow-hidden bg-surface">
                  <img
                    src={project.image}
                    alt={`${project.title} interface screenshot`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent opacity-70"
                  />

                  {/* Overlay actions only render for links that exist — the
                      old version always showed two buttons pointing at "#". */}
                  {hasLinks && (
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 focus-within:opacity-100">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open the ${project.title} live site`}
                          className="rounded-full glass p-3 transition-all hover:bg-primary hover:text-primary-foreground"
                        >
                          <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View the ${project.title} source on GitHub`}
                          className="rounded-full glass p-3 transition-all hover:bg-primary hover:text-primary-foreground"
                        >
                          <Github className="h-5 w-5" aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  )}
                </div>

                <div className="space-y-4 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold tracking-tight transition-colors group-hover:text-primary">
                      {project.title}
                    </h3>
                    {hasLinks ? (
                      <ArrowUpRight
                        className="h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary"
                        aria-hidden="true"
                      />
                    ) : (
                      <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-subtle-foreground">
                        <Lock className="h-3 w-3" aria-hidden="true" />
                        Private
                      </span>
                    )}
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <ul className="flex flex-wrap gap-2 pt-1">
                    {project.tags.map((tag) => (
                      <li key={tag}>
                        <Tag>{tag}</Tag>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        {visibleProjects.length === 0 && (
          <p className="mt-12 text-center text-sm text-muted-foreground">
            No projects tagged {activeFilter} yet. Try another filter.
          </p>
        )}

        <Reveal delay={200} className="mt-12 text-center">
          <AnimatedBorderButton
            href={githubProfile}
            target="_blank"
            rel="noopener noreferrer"
          >
            More on GitHub
            <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
          </AnimatedBorderButton>
        </Reveal>
      </div>
    </section>
  );
};
