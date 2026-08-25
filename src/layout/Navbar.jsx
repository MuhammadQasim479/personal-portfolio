import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/Button";
import { cn } from "@/utils/cn";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { navLinks, profile, socials } from "@/data/portfolio";

const SECTION_IDS = navLinks.map((link) => link.id);

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  useLockBodyScroll(isMenuOpen);

  // rAF-throttled + passive: the old handler ran setState on every scroll tick.
  useEffect(() => {
    let frame = null;

    const update = () => {
      frame = null;
      setIsScrolled(window.scrollY > 40);
    };

    const onScroll = () => {
      if (frame === null) frame = window.requestAnimationFrame(update);
    };

    // Deferred to the next frame so mounting does not trigger a second render.
    frame = window.requestAnimationFrame(update);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (frame !== null) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Escape closes the mobile menu — expected of any overlay.
  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        isScrolled || isMenuOpen ? "glass-strong py-3" : "bg-transparent py-5"
      )}
    >
      <nav
        aria-label="Main"
        className="container mx-auto flex items-center justify-between px-4 sm:px-10"
      >
        <a
          href="#top"
          className="font-mono text-lg font-semibold tracking-tight transition-colors hover:text-primary"
        >
          {profile.initials}
          <span className="text-primary">.</span>
        </a>

        {/* Desktop nav — the active pill is driven by scroll position, so the
            nav always reflects where the reader actually is. */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-1 rounded-full glass px-2 py-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "block rounded-full px-4 py-2 text-sm transition-colors duration-300",
                      isActive
                        ? "bg-primary/12 text-primary"
                        : "text-muted-foreground hover:bg-surface hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="hidden md:block">
          <Button href="#contact" size="sm">
            Contact me
          </Button>
        </div>

        <button
          type="button"
          className="p-2 text-foreground md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen((previous) => !previous)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="animate-fade-in border-t border-border md:hidden"
        >
          <div className="container mx-auto flex flex-col gap-1 px-4 py-6 sm:px-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsMenuOpen(false)}
                aria-current={activeSection === link.id ? "true" : undefined}
                className={cn(
                  "rounded-xl px-3 py-3 text-base transition-colors",
                  activeSection === link.id
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-surface hover:text-foreground"
                )}
              >
                {link.label}
              </a>
            ))}

            <Button
              href="#contact"
              className="mt-3 w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact me
            </Button>

            <div className="mt-5 flex items-center gap-2 border-t border-border pt-5">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="rounded-full glass p-2.5 text-muted-foreground transition-colors hover:text-primary"
                >
                  <social.icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
