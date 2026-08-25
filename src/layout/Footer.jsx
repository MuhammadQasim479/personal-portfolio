import { ArrowUp } from "lucide-react";
import { navLinks, profile, socials } from "@/data/portfolio";

const footerLinks = [...navLinks, { id: "contact", label: "Contact" }];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="text-center md:text-left">
            <a
              href="#top"
              className="font-mono text-lg font-semibold tracking-tight"
            >
              {profile.initials}
              <span className="text-primary">.</span>
            </a>
            <p className="mt-2 text-sm text-muted-foreground">
              © {currentYear} {profile.name}. All rights reserved.
            </p>
            <p className="mt-1 font-mono text-xs text-subtle-foreground">
              Built with React, Vite and Tailwind CSS.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={social.label}
                className="rounded-full glass p-2.5 text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
              >
                <social.icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
            <a
              href="#top"
              aria-label="Back to top"
              className="rounded-full glass p-2.5 text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
            >
              <ArrowUp className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
