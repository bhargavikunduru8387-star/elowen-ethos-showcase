import { Link } from "@tanstack/react-router";
import { Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-32 bg-charcoal text-ivory">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 pt-24 pb-12">
        <div className="font-serif text-[14vw] md:text-[10vw] leading-[0.85] tracking-[-0.04em] font-light">
          Elowen<span className="italic text-sage"> Threads.</span>
        </div>

        <div className="mt-20 grid gap-14 md:grid-cols-12 border-t border-ivory/15 pt-14">
          <div className="md:col-span-5">
            <p className="text-base md:text-lg leading-relaxed text-ivory/75 max-w-md">
              A British atelier crafting considered wardrobes from organic
              fibres and regenerative practices. Made slowly, in small
              numbers, to last a long time.
            </p>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.25em] text-ivory/60">
              {[
                ["Instagram", "https://instagram.com", Instagram],
                ["Pinterest", "https://pinterest.com"],
                ["Substack", "https://substack.com"],
                ["hello@elowenthreads.co.uk", "mailto:hello@elowenthreads.co.uk", Mail],
              ].map(([label, href, Icon]) => {
                const I = Icon as typeof Instagram | undefined;
                return (
                  <a
                    key={label as string}
                    href={href as string}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 hover:text-ivory transition-colors"
                  >
                    {I && <I size={13} strokeWidth={1.4} />} {label as string}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <div className="font-serif italic text-sm text-ivory/55 mb-5">Visit</div>
            <ul className="space-y-3 text-sm">
              {[
                ["/collections", "Collections"],
                ["/about", "The Atelier"],
                ["/community", "Journal"],
                ["/contact", "Contact"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="hover:text-sage transition-colors link-underline">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="font-serif italic text-sm text-ivory/55 mb-5">Atelier</div>
            <address className="not-italic text-sm text-ivory/80 leading-relaxed">
              14 Marlow Lane<br />
              Shoreditch, London E2<br />
              United Kingdom
            </address>
            <div className="mt-5 text-xs eyebrow-mono text-ivory/45">
              By appointment · Wed — Sat
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="font-serif italic text-sm text-ivory/55 mb-5">Established</div>
            <div className="font-serif text-3xl">MMXXI</div>
            <div className="mt-2 text-xs eyebrow-mono text-ivory/45">London · GB</div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-ivory/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-ivory/40 eyebrow-mono">
          <div>© {new Date().getFullYear()} Elowen Threads Ltd · Reg. 13427891</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-ivory transition-colors">Privacy</a>
            <a href="#" className="hover:text-ivory transition-colors">Terms</a>
            <a href="#" className="hover:text-ivory transition-colors">Modern Slavery</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
