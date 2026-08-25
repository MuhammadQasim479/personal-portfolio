import { cn } from "@/utils/cn";
import { Reveal } from "@/components/Reveal";

/**
 * The eyebrow + headline + lede block every section opens with.
 *
 * `accent` is the phrase set in the serif italic display face; splitting it out
 * as a prop keeps that treatment consistent instead of hand-written per section.
 */
export const SectionHeading = ({
  eyebrow,
  title,
  accent,
  description,
  align = "left",
  className = "",
}) => {
  const isCentered = align === "center";

  return (
    <div
      className={cn(
        "max-w-3xl",
        isCentered && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <span className={cn("eyebrow", isCentered && "justify-center")}>
            {eyebrow}
          </span>
        </Reveal>
      )}

      <Reveal delay={80}>
        <h2 className="mt-5 text-3xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-4xl md:text-5xl">
          {title}{" "}
          {accent && (
            <span className="font-serif text-[1.12em] font-normal italic text-primary">
              {accent}
            </span>
          )}
        </h2>
      </Reveal>

      {description && (
        <Reveal delay={160}>
          <p
            className={cn(
              "mt-5 text-base leading-relaxed text-muted-foreground text-pretty",
              isCentered && "mx-auto"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
};
