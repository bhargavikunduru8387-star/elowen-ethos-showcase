import { createFileRoute } from "@tanstack/react-router";
import aboutImg from "@/assets/about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Elowen Threads" },
      { name: "description", content: "Founded in Shoreditch in 2021, Elowen Threads is a small British atelier rebuilding fashion from the soil up." },
      { property: "og:title", content: "Our Story — Elowen Threads" },
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
      <section className="pt-40 pb-16 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="eyebrow animate-fade-up">Our Story</div>
          <h1 className="mt-6 text-5xl md:text-7xl font-serif leading-[1.05] animate-fade-up delay-100">
            A return to making things that last.
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up delay-200">
            Elowen Threads began in 2021 in a small Shoreditch studio with a
            single belief — that the best clothes are made slowly, by people
            who are paid well, from fibres a field can be proud of.
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-10">
        <div className="max-w-6xl mx-auto aspect-[16/9] overflow-hidden">
          <img
            src={aboutImg}
            alt="Hand-stitching natural linen in the Elowen atelier"
            width={1400}
            height={1000}
            className="w-full h-full object-cover animate-fade-in"
          />
        </div>
      </section>

      <section className="py-28 px-6 lg:px-10">
        <div className="max-w-3xl mx-auto space-y-10 text-foreground/85 leading-[1.85]">
          <p className="text-xl md:text-2xl font-serif italic text-foreground">
            "We wanted to know every hand that touched the cloth, every field
            that grew the fibre, and every wash it would survive."
          </p>
          <p>
            From a single linen shirt cut on a borrowed kitchen table, Elowen
            Threads has grown into a quiet collective of British weavers,
            seamstresses and natural dyers. Our garments are produced in
            capsule runs of forty or fewer — never more than a season can
            honestly absorb.
          </p>
          <p>
            We work exclusively with organic European flax, peace silk from
            certified family farms in Karnataka, and undyed wool from
            regenerative flocks in the Yorkshire Dales. Every off-cut is
            re-loomed; every garment carries a lifetime repair guarantee.
          </p>
          <p>
            We are small on purpose. We will stay that way.
          </p>
        </div>
      </section>

      <section className="bg-secondary/50 py-28 px-6 lg:px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          {[
            { n: "94%", t: "Lower water use", d: "vs conventional cotton across our supply chain." },
            { n: "0", t: "Synthetic dyes", d: "Only plant- and mineral-based colour, ever." },
            { n: "100%", t: "Living wages", d: "Verified across every atelier we partner with." },
          ].map((s) => (
            <div key={s.t}>
              <div className="font-serif text-6xl text-sage-deep">{s.n}</div>
              <div className="mt-4 eyebrow">{s.t}</div>
              <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
