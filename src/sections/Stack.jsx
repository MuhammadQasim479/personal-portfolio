import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Tag } from "@/components/Tag";
import { stackLayers, toolingGroups } from "@/data/portfolio";

/**
 * The stack, laid out as the path a single request actually takes.
 *
 * A generic skills grid says which logos I recognise. Tracing one request from
 * a React click through Express, Node and MongoDB says which parts of the round
 * trip I own — which is the whole claim of a full-stack engineer. The numbering
 * is meaningful here because the order is the sequence.
 */
export const Stack = () => {
  return (
    <section
      id="stack"
      className="relative scroll-mt-24 overflow-hidden py-24 sm:py-28 md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 h-64 -translate-y-1/2 bg-primary/[0.04] blur-[120px]"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="The stack"
          title="One request,"
          accent="end to end."
          description="This is the path a single request takes through the apps I build — and the tools I use at each stop along the way."
          align="center"
        />

        {/* ------------------------------------------- The trace rail (lg up) */}
        <Reveal delay={200} className="mt-16 hidden lg:block">
          <div className="mb-3 flex items-center justify-between font-mono text-[11px]">
            <span className="text-primary">GET /api/projects</span>
            <span className="text-subtle-foreground">200 OK · 34 ms</span>
          </div>

          <div className="relative py-3">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-border-strong to-transparent"
            />
            {/* The packet. Decorative, so hidden from assistive tech; CSS kills
                the animation under prefers-reduced-motion. */}
            <span
              aria-hidden="true"
              className="animate-packet-x absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_14px_4px_rgba(34,193,180,0.55)]"
            />

            <ol className="relative grid grid-cols-4">
              {stackLayers.map((layer) => (
                <li key={layer.id} className="flex justify-center">
                  <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: `var(${layer.colorVar})` }}
                    />
                    {layer.step}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        {/* -------------------------------------------------- The layer cards */}
        {/* The vertical rail lives on the wrapper, not inside the <ol> — an
            ordered list may only contain <li> children. */}
        <div className="relative mt-10 lg:mt-6">
          <span
            aria-hidden="true"
            className="absolute bottom-6 left-[1.35rem] top-6 w-px bg-gradient-to-b from-primary/50 via-border-strong to-transparent sm:hidden"
          />

          <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stackLayers.map((layer, index) => (
            <Reveal
              key={layer.id}
              as="li"
              delay={index * 100}
              className="group card-sheen relative h-full overflow-hidden rounded-2xl glass p-6 pl-14 transition-colors duration-500 hover:border-primary/40 sm:pl-6"
            >
              {/* Step marker, doubling as the dot on the mobile rail. */}
              <span
                className="absolute left-[0.6rem] top-6 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-background font-mono text-[10px] text-subtle-foreground sm:static sm:mb-4 sm:flex"
                style={{ borderColor: `color-mix(in srgb, var(${layer.colorVar}) 45%, transparent)` }}
              >
                {index + 1}
              </span>

              <div className="flex items-baseline gap-2">
                <h3 className="text-lg font-semibold tracking-tight">
                  {layer.name}
                </h3>
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: `var(${layer.colorVar})` }}
                  aria-hidden="true"
                />
              </div>

              <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.12em] text-subtle-foreground">
                {layer.role}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {layer.detail}
              </p>

              <p className="mt-4 truncate rounded-lg border border-border/60 bg-background/60 px-2.5 py-1.5 font-mono text-[11px] text-muted-foreground/80">
                {layer.file}
              </p>

              <ul className="mt-5 flex flex-wrap gap-1.5">
                {layer.skills.map((skill) => (
                  <li key={skill}>
                    <Tag size="sm">{skill}</Tag>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
          </ol>
        </div>

        {/* ------------------------------------------- Everything around it   */}
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {toolingGroups.map((group, index) => (
            <Reveal
              key={group.title}
              delay={index * 100}
              className="rounded-2xl glass p-6"
            >
              <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li key={item}>
                    <Tag size="sm">{item}</Tag>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
