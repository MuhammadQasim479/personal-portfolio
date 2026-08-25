import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import {
  aboutParagraphs,
  aboutQuote,
  highlights,
  profile,
} from "@/data/portfolio";

export const About = () => {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden py-24 sm:py-28 md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-primary/[0.06] blur-[100px]"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          {/* ------------------------------------------------ Left: the story */}
          <div>
            <SectionHeading
              eyebrow="About me"
              title="Building the future,"
              accent="one endpoint at a time."
            />

            <div className="mt-8 flex items-start gap-5">
              <Reveal className="shrink-0">
                <img
                  src="/profile-photo.jpg"
                  alt={`Portrait of ${profile.name}`}
                  width="88"
                  height="88"
                  loading="lazy"
                  decoding="async"
                  className="h-20 w-20 rounded-2xl object-cover ring-1 ring-border sm:h-22 sm:w-22"
                />
              </Reveal>
              <Reveal delay={80} className="pt-1">
                <p className="font-medium">{profile.name}</p>
                <p className="font-mono text-xs text-primary">{profile.title}</p>
                <p className="mt-1 font-mono text-xs text-subtle-foreground">
                  {profile.location}
                </p>
              </Reveal>
            </div>

            <div className="mt-8 space-y-5 text-muted-foreground text-pretty">
              {aboutParagraphs.map((paragraph, index) => (
                <Reveal key={index} delay={index * 90}>
                  <p className="leading-relaxed">{paragraph}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <blockquote className="mt-9 rounded-2xl glass p-6 glow-border">
                <p className="font-serif text-xl italic leading-relaxed text-foreground sm:text-[1.4rem]">
                  {aboutQuote}
                </p>
              </blockquote>
            </Reveal>
          </div>

          {/* ------------------------------------------- Right: how I work    */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {highlights.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 90}
                className="group card-sheen h-full overflow-hidden rounded-2xl glass p-6 transition-colors duration-500 hover:border-primary/40"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                  <item.icon
                    className="h-5 w-5 text-primary"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
