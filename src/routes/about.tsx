import { createFileRoute } from "@tanstack/react-router";
import aboutImg from "@/assets/about.jpg";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "The Atelier — Elowen Threads" },
      { name: "description", content: "Founded in Shoreditch in 2021, Elowen Threads is a small British atelier rebuilding fashion from the soil up." },
      { property: "og:title", content: "The Atelier — Elowen Threads" },
      { property: "og:description", content: "A small British atelier rebuilding fashion from the soil up." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="pt-36 md:pt-44 pb-20 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-3">
            <div className="eyebrow-mono animate-fade-up">— The Atelier</div>
          </div>
          <div className="md:col-span-9">
            <h1 className="display text-[14vw] md:text-[8vw] lg:text-[7.5rem] animate-fade-up delay-100">
              A return to <span className="italic font-light">making</span><br />
              things that last.
            </h1>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto aspect-[16/9] overflow-hidden">
          <img
            src={aboutImg}
            alt="Hand-stitching natural linen in the Elowen atelier"
            width={1400}
            height={1000}
            className="w-full h-full object-cover animate-fade-in"
          />
        </div>
        <div className="max-w-[1400px] mx-auto mt-4 flex justify-between text-xs eyebrow-mono text-muted-foreground">
          <span>Fig. 01 — The Shoreditch atelier</span>
          <span>Photographed by Cara Hewitt</span>
        </div>
      </section>

      <section className="py-32 md:py-40 px-6 lg:px-10">
        <div className="max-w-3xl mx-auto">
          <p className="display text-3xl md:text-5xl text-foreground leading-[1.15]">
            <span className="italic font-light text-sage-deep">"</span>We wanted to know every hand that touched
            the cloth, every field that grew the fibre, and every
            wash it would survive.<span className="italic font-light text-sage-deep">"</span>
          </p>
          <div className="mt-10 eyebrow-mono">— Imogen Elowen, founder</div>

          <div className="mt-20 space-y-8 text-foreground/80 leading-[1.9] text-[1.05rem]">
            <p>
              From a single linen shirt cut on a borrowed kitchen table in
              2021, Elowen Threads has grown into a quiet collective of
              British weavers, seamstresses and natural dyers. Our garments
              are produced in capsule runs of forty pieces or fewer — never
              more than a season can honestly absorb.
            </p>
            <p>
              We work exclusively with organic European flax, peace silk from
              certified family farms in Karnataka, and undyed wool from
              regenerative flocks in the Yorkshire Dales. Every off-cut is
              re-loomed; every garment carries a lifetime repair guarantee.
            </p>
            <p className="font-serif italic text-2xl md:text-3xl text-foreground">
              We are small on purpose. We will stay that way.
            </p>
          </div>
        </div>
      </section>

      {/* IMPACT STATS — editorial */}
      <section className="bg-charcoal text-ivory py-28 md:py-36 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-12 gap-8 mb-20">
            <div className="md:col-span-3">
              <div className="eyebrow-mono text-ivory/50">— By the Numbers</div>
            </div>
            <div className="md:col-span-9">
              <h2 className="display text-5xl md:text-6xl lg:text-7xl">
                Measured <span className="italic font-light text-sage">impact,</span><br />
                not measured words.
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-ivory/15 border-y border-ivory/15">
            {[
              { n: "94%", t: "Less water", d: "vs conventional cotton, end-to-end." },
              { n: "Zero", t: "Synthetic dyes", d: "Plant- and mineral-based colour, only." },
              { n: "100%", t: "Living wages", d: "Audited across every partner atelier." },
            ].map((s, i) => (
              <div key={s.t} className="py-12 md:py-16 md:px-10 first:md:pl-0 last:md:pr-0">
                <div className="eyebrow-mono text-ivory/40">N° 0{i + 1}</div>
                <div className="mt-6 display text-[5.5rem] md:text-[7rem] leading-none text-ivory">{s.n}</div>
                <div className="mt-6 font-serif text-2xl italic text-sage">{s.t}</div>
                <p className="mt-3 text-sm text-ivory/65 max-w-xs">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER PORTRAIT BLOCK */}
      <section className="py-28 md:py-36 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 aspect-[4/3] overflow-hidden">
            <img
              src={heroImg}
              alt="Imogen Elowen in the field"
              width={1600}
              height={1200}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <div className="eyebrow-mono">— Founder's Note</div>
            <h3 className="mt-5 display text-4xl md:text-5xl">
              The slow road, <span className="italic">always.</span>
            </h3>
            <p className="mt-6 text-foreground/75 leading-relaxed">
              I started Elowen because I couldn't find clothes I wanted to
              keep. Five years on, our promise is the same — to make a small
              number of beautiful, lasting things, the right way.
            </p>
            <div className="mt-8 font-serif italic text-foreground/70">— Imogen</div>
          </div>
        </div>
      </section>
    </>
  );
}
