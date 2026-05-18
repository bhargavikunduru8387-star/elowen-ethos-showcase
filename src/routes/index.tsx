import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import everydayImg from "@/assets/collection-everyday.jpg";
import outerwearImg from "@/assets/collection-outerwear.jpg";
import eveningImg from "@/assets/collection-evening.jpg";
import aboutImg from "@/assets/about.jpg";
import { Newsletter } from "@/components/site/Newsletter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elowen Threads — Considered, sustainable British fashion" },
      { name: "description", content: "Timeless wardrobes from organic fibres, woven slowly in the United Kingdom. Discover the Elowen Threads collections." },
      { property: "og:title", content: "Elowen Threads — Considered, sustainable British fashion" },
      { property: "og:description", content: "Timeless wardrobes from organic fibres, woven slowly in the United Kingdom." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const marqueeItems = [
  "Spring/Summer 26",
  "Made in the United Kingdom",
  "Organic linen · Peace silk · Yorkshire wool",
  "Edition of 40",
  "Lifetime repair",
];

function Home() {
  return (
    <>
      {/* HERO — editorial layout with side metadata */}
      <section className="relative min-h-[100svh] w-full overflow-hidden grain">
        <img
          src={heroImg}
          alt="Model in a flowing sage green linen dress at golden hour"
          width={1600}
          height={1200}
          className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/65" />

        {/* Vertical edition label */}
        <div className="hidden md:flex absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 z-10 items-center gap-4 text-ivory">
          <span className="vertical-rl text-[0.65rem] uppercase tracking-[0.4em] opacity-80">
            Edition N° 04 — Spring/Summer 26
          </span>
        </div>

        {/* Bottom-right metadata */}
        <div className="hidden md:block absolute right-10 bottom-10 z-10 text-right text-ivory/85 text-[0.7rem] uppercase tracking-[0.28em] leading-relaxed">
          <div>Photographed in</div>
          <div className="italic font-serif normal-case text-base mt-1 tracking-normal">the Cotswolds</div>
          <div className="mt-3 eyebrow-mono text-ivory/55">01 / 24</div>
        </div>

        <div className="relative z-10 h-[100svh] min-h-[640px] flex flex-col justify-end px-6 lg:px-16 pb-16 md:pb-24 max-w-[1400px] mx-auto text-ivory">
          <div className="eyebrow-mono text-ivory/75 animate-fade-up">— A British Atelier, est. MMXXI</div>
          <h1 className="mt-6 display text-[18vw] md:text-[10vw] lg:text-[9rem] animate-fade-up delay-100">
            Quiet <span className="italic font-light">clothes,</span><br />
            slowly made.
          </h1>
          <div className="mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8 animate-fade-up delay-300">
            <p className="max-w-sm text-base text-ivory/80 leading-relaxed">
              An atelier of organic fibres and patient hands — dressing the
              women and men who'd rather own ten things they love than a
              hundred they don't.
            </p>
            <div className="flex flex-wrap gap-x-10 gap-y-3 items-center">
              <Link
                to="/collections"
                className="link-underline text-[0.72rem] uppercase tracking-[0.3em] text-ivory"
              >
                Discover the collection →
              </Link>
              <Link
                to="/about"
                className="link-underline text-[0.72rem] uppercase tracking-[0.3em] text-ivory/70"
              >
                Our philosophy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE — luxury house signal strip */}
      <section className="border-y border-border bg-ivory overflow-hidden">
        <div className="flex marquee-track whitespace-nowrap py-5 gap-12">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((t, i) => (
            <span key={i} className="inline-flex items-center gap-12 eyebrow-mono text-foreground/70">
              {t}
              <span className="text-sage-deep">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* MANIFESTO — bigger, editorial */}
      <section className="py-32 md:py-48 px-6 lg:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-3">
              <div className="eyebrow-mono">N° 01 — Manifesto</div>
            </div>
            <div className="md:col-span-9">
              <p className="display text-[2.4rem] md:text-6xl lg:text-7xl text-foreground">
                A garment should be
                <span className="italic font-light text-sage-deep"> earned </span>
                by its maker and
                <span className="italic font-light text-sage-deep"> loved </span>
                by its wearer. Everything else is excess.
              </p>
              <div className="mt-12 flex items-center gap-4 text-foreground/60">
                <div className="h-px w-12 bg-foreground/40" />
                <span className="font-serif italic text-sm">Imogen Elowen, Founder</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION — split with offset image */}
      <section className="bg-bone/60 py-28 md:py-36 px-6 lg:px-10 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={aboutImg}
                alt="Hands stitching natural linen in the Elowen atelier"
                width={1400}
                height={1000}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden lg:block bg-ivory px-6 py-4">
              <div className="eyebrow-mono text-foreground/50">Atelier — Shoreditch</div>
              <div className="font-serif text-2xl italic mt-1">est. 2021</div>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="eyebrow-mono">N° 02 — Our Mission</div>
            <h2 className="mt-5 display text-5xl md:text-6xl lg:text-7xl">
              Fashion that gives <span className="italic font-light">more</span><br />than it takes.
            </h2>
            <p className="mt-8 text-base md:text-lg text-foreground/75 leading-[1.75] max-w-lg">
              Every Elowen piece begins on a regenerative farm and ends in a
              wardrobe it deserves. We use only traceable organic linen,
              peace silk and undyed British wool — sewn in small ateliers
              paying living wages.
            </p>

            <dl className="mt-14 grid grid-cols-2 gap-y-10 gap-x-8 border-t border-border pt-10">
              {[
                { n: "01", t: "Regenerative fibre", d: "Farmed to restore soil and biodiversity." },
                { n: "02", t: "Living wages", d: "Verified in every atelier we work with." },
                { n: "03", t: "Edition of 40", d: "Capsule runs of forty pieces or fewer." },
                { n: "04", t: "Circular by design", d: "Lifetime repair, take-back, re-loom." },
              ].map((s) => (
                <div key={s.n}>
                  <div className="eyebrow-mono text-sage-deep">{s.n}</div>
                  <dt className="mt-3 font-serif text-xl">{s.t}</dt>
                  <dd className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* COLLECTIONS — asymmetric editorial lookbook */}
      <section className="py-28 md:py-40 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-12 gap-8 items-end mb-20">
            <div className="md:col-span-3">
              <div className="eyebrow-mono">N° 03 — The Edits</div>
            </div>
            <div className="md:col-span-7">
              <h2 className="display text-5xl md:text-7xl">
                Three quiet edits<br />
                <span className="italic font-light">for a considered wardrobe.</span>
              </h2>
            </div>
            <div className="md:col-span-2 md:text-right">
              <Link to="/collections" className="link-underline text-[0.72rem] uppercase tracking-[0.3em] text-sage-deep">
                View all →
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-x-6 gap-y-16 lg:gap-x-10 lg:gap-y-20">
            {/* Card 1 — tall left */}
            <CollectionCard
              num="01"
              name="Daily Linen"
              meta="12 pieces · From £140"
              img={everydayImg}
              alt="Folded organic linen garments in cream and beige tones"
              className="col-span-12 md:col-span-6 lg:col-span-5 lg:row-span-2 lg:mt-0"
            />
            {/* Card 2 — top right, smaller */}
            <CollectionCard
              num="02"
              name="Atelier Outerwear"
              meta="8 pieces · From £420"
              img={outerwearImg}
              alt="Model in oversized beige wool coat"
              className="col-span-12 md:col-span-6 lg:col-span-6 lg:col-start-7 lg:mt-20"
              aspect="aspect-[4/3]"
            />
            {/* Card 3 — bottom right */}
            <CollectionCard
              num="03"
              name="Twilight Silks"
              meta="6 pieces · From £280"
              img={eveningImg}
              alt="Sage green silk evening dress on hanger"
              className="col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-8"
            />
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}

function CollectionCard({
  num, name, meta, img, alt, className = "", aspect = "aspect-[4/5]",
}: {
  num: string; name: string; meta: string; img: string; alt: string;
  className?: string; aspect?: string;
}) {
  return (
    <Link to="/collections" className={`group block ${className}`}>
      <div className={`relative ${aspect} overflow-hidden bg-muted`}>
        <img
          src={img}
          alt={alt}
          width={1200}
          height={1500}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute top-4 left-4 eyebrow-mono text-ivory/90 bg-charcoal/30 backdrop-blur-sm px-3 py-1.5">
          N° {num}
        </div>
      </div>
      <div className="mt-6 flex items-baseline justify-between gap-4">
        <h3 className="font-serif text-2xl md:text-3xl tracking-[-0.02em]">{name}</h3>
        <span className="link-underline text-[0.7rem] uppercase tracking-[0.28em] text-foreground/60 group-hover:text-sage-deep transition-colors">
          Explore →
        </span>
      </div>
      <div className="mt-1 eyebrow-mono text-muted-foreground">{meta}</div>
    </Link>
  );
}
