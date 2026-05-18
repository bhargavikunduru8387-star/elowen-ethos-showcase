import { createFileRoute } from "@tanstack/react-router";
import communityImg from "@/assets/community.jpg";
import { Newsletter } from "@/components/site/Newsletter";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Journal — Elowen Threads" },
      { name: "description", content: "Workshops, repair cafés and dispatches from the Elowen Threads community of slow-fashion wearers and makers." },
      { property: "og:title", content: "Journal — Elowen Threads" },
      { property: "og:description", content: "Workshops, repair cafés and dispatches from our community." },
      { property: "og:url", content: "/community" },
    ],
    links: [{ rel: "canonical", href: "/community" }],
  }),
  component: Community,
});

const events = [
  { date: "12 Jun", city: "London", title: "Mending Circle at the Atelier", spots: "12 seats" },
  { date: "28 Jun", city: "Bristol", title: "Natural Dye Workshop with Imogen Hart", spots: "8 seats" },
  { date: "19 Jul", city: "Edinburgh", title: "Wool & Walk — A Yorkshire Fibre Story", spots: "20 seats" },
  { date: "03 Aug", city: "Online", title: "Care, Repair, Re-loom — A Live Q&A", spots: "Open" },
];

const stories = [
  { q: "My linen shirt is on its fourth summer and still looks like the day it arrived.", a: "Mira", c: "Lewes" },
  { q: "The repair café turned my mother's wool coat into mine. I cried.", a: "Hannah", c: "Glasgow" },
  { q: "Buying once, properly, has changed how I think about everything I own.", a: "Olu", c: "London" },
];

function Community() {
  return (
    <>
      <section className="pt-36 md:pt-44 pb-20 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-3">
            <div className="eyebrow-mono">— Journal & Circle</div>
          </div>
          <div className="md:col-span-9">
            <h1 className="display text-[14vw] md:text-[8vw] lg:text-[7.5rem]">
              A circle of <span className="italic font-light">slow makers.</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto aspect-[16/9] overflow-hidden">
          <img
            src={communityImg}
            alt="A gathering of the Elowen Threads community in the English countryside"
            width={1400}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-[1400px] mx-auto mt-4 flex justify-between text-xs eyebrow-mono text-muted-foreground">
          <span>Fig. 02 — Spring gathering, Cotswolds</span>
          <span>May, 2026</span>
        </div>
      </section>

      <section className="py-32 md:py-40 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-3">
            <div className="eyebrow-mono">N° 01 — Programme</div>
          </div>
          <div className="md:col-span-9">
            <h2 className="display text-5xl md:text-6xl lg:text-7xl">
              This season's <span className="italic font-light">gatherings.</span>
            </h2>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto">
          <ul className="border-t border-border">
            {events.map((e, i) => (
              <li
                key={e.title}
                className="grid grid-cols-[5rem_1fr_auto] md:grid-cols-[6rem_8rem_1fr_auto] items-center gap-6 py-8 md:py-10 border-b border-border group hover:bg-bone/40 transition-colors px-2 md:px-4"
              >
                <div className="font-serif text-2xl md:text-3xl text-sage-deep">{e.date}</div>
                <div className="hidden md:block eyebrow-mono">{e.city}</div>
                <div>
                  <div className="eyebrow-mono text-foreground/40 mb-2">N° 0{i + 1}</div>
                  <h3 className="font-serif text-xl md:text-3xl tracking-[-0.02em]">{e.title}</h3>
                  <div className="md:hidden mt-1 eyebrow-mono text-muted-foreground">{e.city}</div>
                </div>
                <div className="text-right">
                  <div className="eyebrow-mono text-muted-foreground">{e.spots}</div>
                  <button className="mt-2 link-underline text-[0.7rem] uppercase tracking-[0.28em] text-sage-deep">
                    Reserve →
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-bone/60 py-28 md:py-36 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-12 gap-8 mb-20">
            <div className="md:col-span-3">
              <div className="eyebrow-mono">N° 02 — Wearers</div>
            </div>
            <div className="md:col-span-9">
              <h2 className="display text-5xl md:text-6xl lg:text-7xl">
                In their <span className="italic font-light">own words.</span>
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
            {stories.map((s, i) => (
              <figure key={s.a} className="bg-ivory p-10 md:p-12 border border-border">
                <div className="eyebrow-mono text-sage-deep">N° 0{i + 1}</div>
                <blockquote className="mt-8 font-serif text-2xl leading-[1.35] text-foreground">
                  <span className="text-sage-deep italic">"</span>{s.q}<span className="text-sage-deep italic">"</span>
                </blockquote>
                <figcaption className="mt-10 flex items-center gap-3 eyebrow-mono">
                  <span className="h-px w-6 bg-foreground/40" />
                  {s.a}, {s.c}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
