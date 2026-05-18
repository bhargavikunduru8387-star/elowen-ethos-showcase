import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import everydayImg from "@/assets/collection-everyday.jpg";
import outerwearImg from "@/assets/collection-outerwear.jpg";
import eveningImg from "@/assets/collection-evening.jpg";
import aboutImg from "@/assets/about.jpg";
import { Newsletter } from "@/components/site/Newsletter";
import { Leaf, Scissors, Sprout } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elowen Threads — Considered, sustainable British fashion" },
      { name: "description", content: "Timeless wardrobes from organic fibres, woven slowly in the United Kingdom. Discover the Elowen Threads collections." },
      { property: "og:title", content: "Elowen Threads — Considered, sustainable British fashion" },
      { property: "og:description", content: "Timeless wardrobes from organic fibres, woven slowly in the United Kingdom." },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "/og.jpg" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Model in a flowing sage green linen dress at sunset"
          width={1600}
          height={1200}
          className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/55" />
        <div className="relative z-10 h-full flex flex-col items-start justify-end pb-24 md:pb-32 px-6 lg:px-16 max-w-7xl mx-auto text-cream">
          <div className="eyebrow text-cream/90 animate-fade-up">Spring · Summer 26</div>
          <h1 className="mt-5 max-w-3xl text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.02] animate-fade-up delay-100">
            Quiet clothes,<br />slowly made.
          </h1>
          <p className="mt-6 max-w-md text-base md:text-lg text-cream/85 animate-fade-up delay-200">
            A British atelier weaving organic fibres into wardrobes meant to
            outlast the season — and the next one too.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up delay-300">
            <Link
              to="/collections"
              className="text-xs uppercase tracking-[0.25em] bg-cream text-charcoal px-8 py-4 hover:bg-cream/90 transition-colors"
            >
              Discover Collections
            </Link>
            <Link
              to="/about"
              className="text-xs uppercase tracking-[0.25em] border border-cream/70 px-8 py-4 hover:bg-cream hover:text-charcoal transition-colors"
            >
              Our Philosophy
            </Link>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-28 md:py-40 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="eyebrow">Manifesto</div>
          <p className="mt-8 text-3xl md:text-5xl font-serif leading-[1.2] text-foreground">
            We believe a garment should be earned by its maker and
            loved by its wearer. Everything else is excess.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-secondary/50 py-28 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="eyebrow">Our Mission</div>
            <h2 className="mt-5 text-4xl md:text-5xl font-serif">
              Fashion that gives more than it takes.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Every Elowen piece begins on a regenerative farm and ends in a
              wardrobe it deserves. We work only with traceable organic
              linen, peace silk and undyed British wool — sewn in small
              ateliers paying fair wages.
            </p>
            <div className="mt-10 grid sm:grid-cols-3 gap-8">
              {[
                { Icon: Sprout, t: "Regenerative", d: "Fibres farmed to restore soil and biodiversity." },
                { Icon: Scissors, t: "Slow-made", d: "Hand-finished in capsule runs of forty or fewer." },
                { Icon: Leaf, t: "Circular", d: "Lifetime repair, take-back and re-loom programme." },
              ].map(({ Icon, t, d }) => (
                <div key={t}>
                  <Icon className="text-sage-deep" size={22} strokeWidth={1.4} />
                  <h3 className="mt-4 text-lg font-serif">{t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={aboutImg}
              alt="Artisan hand-stitching natural linen in a sunlit atelier"
              width={1400}
              height={1000}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Collections preview */}
      <section className="py-28 md:py-36 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="eyebrow">The Collections</div>
              <h2 className="mt-4 text-4xl md:text-5xl font-serif max-w-xl">
                Three quiet edits for a considered wardrobe.
              </h2>
            </div>
            <Link
              to="/collections"
              className="text-xs uppercase tracking-[0.25em] text-sage-deep hover:text-foreground transition-colors"
            >
              View all →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
            {[
              { img: everydayImg, name: "Daily Linen", count: "12 pieces" },
              { img: outerwearImg, name: "Atelier Outerwear", count: "8 pieces" },
              { img: eveningImg, name: "Twilight Silks", count: "6 pieces" },
            ].map((c) => (
              <Link
                to="/collections"
                key={c.name}
                className="group block"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                  <img
                    src={c.img}
                    alt={c.name}
                    width={1200}
                    height={1500}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                </div>
                <div className="mt-5 flex justify-between items-baseline">
                  <h3 className="font-serif text-xl">{c.name}</h3>
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{c.count}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
