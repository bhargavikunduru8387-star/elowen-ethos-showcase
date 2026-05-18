import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "Atelier" },
  { to: "/community", label: "Journal" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-ivory/85 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 h-16 md:h-20 grid grid-cols-3 items-center">
        <div className="hidden md:flex items-center gap-10">
          {nav.slice(0, 2).map((n) => (
            <NavItem key={n.to} {...n} />
          ))}
        </div>

        <Link
          to="/"
          className="font-serif text-lg md:text-xl tracking-[0.04em] text-foreground col-start-1 md:col-start-2 justify-self-start md:justify-self-center"
        >
          ELOWEN<span className="text-sage-deep mx-2 font-sans text-xs align-middle">·</span>THREADS
        </Link>

        <div className="hidden md:flex items-center gap-10 justify-end">
          {nav.slice(2).map((n) => (
            <NavItem key={n.to} {...n} />
          ))}
        </div>

        <button
          className="md:hidden p-2 -mr-2 text-foreground justify-self-end col-start-3"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} strokeWidth={1.4} /> : <Menu size={20} strokeWidth={1.4} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-ivory/95 backdrop-blur animate-fade-in">
          <nav className="px-6 py-8 flex flex-col gap-6" aria-label="Mobile">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-base font-serif text-foreground/90"
                activeProps={{ className: "text-sage-deep italic" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function NavItem({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      className="text-[0.7rem] uppercase tracking-[0.28em] text-foreground/75 hover:text-sage-deep transition-colors link-underline"
      activeProps={{ className: "text-sage-deep" }}
    >
      {label}
    </Link>
  );
}
