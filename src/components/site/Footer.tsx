import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-serif text-2xl">Elowen Threads</div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
            A British atelier crafting considered wardrobes from organic fibres
            and regenerative practices. Made slowly, in small numbers, to last
            a long time.
          </p>
          <div className="mt-6 flex gap-4">
            {[
              { Icon: Instagram, label: "Instagram", href: "https://instagram.com" },
              { Icon: Facebook, label: "Facebook", href: "https://facebook.com" },
              { Icon: Twitter, label: "Twitter", href: "https://twitter.com" },
              { Icon: Mail, label: "Email", href: "mailto:hello@elowenthreads.co.uk" },
            ].map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 grid place-items-center rounded-full border border-border text-foreground/70 hover:text-sage-deep hover:border-sage-deep transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="eyebrow mb-4">Explore</div>
          <ul className="space-y-3 text-sm">
            {[
              ["/collections", "Collections"],
              ["/about", "Our Story"],
              ["/community", "Community"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-sage-deep transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="eyebrow mb-4">Atelier</div>
          <address className="not-italic text-sm text-muted-foreground leading-relaxed">
            14 Marlow Lane<br />
            Shoreditch, London E2<br />
            United Kingdom
          </address>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Elowen Threads Ltd. All rights reserved.</div>
          <div>Crafted with intention in the United Kingdom.</div>
        </div>
      </div>
    </footer>
  );
}
