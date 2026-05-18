import { createFileRoute } from "@tanstack/react-router";
import communityImg from "@/assets/community.jpg";
import { Newsletter } from "@/components/site/Newsletter";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community — Elowen Threads" },
      { name: "description", content: "Workshops, repair cafés and dispatches from the Elowen Threads community of slow-fashion wearers and makers." },
      { property: "og:title", content: "Community — Elowen Threads" },
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
  { date: "19 Jul", city: "Edinburgh", title: "Wool & Walk: A Yorkshire Fibre Story", spots: "20 seats" },
  { date: "03 Aug", city: "Online", title: "Care, Repair, Re-loom — A Live Q&A", spots: "Open" },
];

const stories = [
  { q: "My linen shirt is on its fourth summer and still looks like the day it arrived.", a: "Mira, Lewes" },
  { q: "The repair café turned my mother's wool coat into mine. I cried.", a: "Hannah, Glasgow" },
  { q: "Buying once, properly, has changed how I think about everything I own.", a: "Olu, London" },
];

function Community() {
  return (
    <>
      <section className="pt-40 pb-16 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="eyebrow">Community</div>
          <h1 className="mt-6 text-5xl md:text-7xl font-serif leading-[1.05]">
            A circle of slow makers.
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto">
            Workshops, repair cafés and field walks across the UK — a space
            for people who want to know their clothes a little better.
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-10">
        <div className="max-w-6xl mx-auto aspect-[16/9] overflow-hidden">
          <img
            src={communityImg}
            alt="A gathering of the Elowen Threads community in the English countryside"
            width={1400}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="py-28 px-6 lg:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="eyebrow text-center">Upcoming Gatherings</div>
          <h2 className="mt-4 text-4xl md:text-5xl font-serif text-center">This season</h2>
          <ul className="mt-16 divide-y divide-border border-y border-border">
            {events.map((e) => (
              <li key={e.title} className="grid grid-cols-[auto_1fr_auto] md:grid-cols-[6rem_8rem_1fr_auto] items-center gap-6 py-7 group hover:bg-secondary/50 transition-colors px-2">
                <div className="font-serif text-2xl text-sage-deep">{e.date}</div>
                <div className="hidden md:block eyebrow">{e.city}</div>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl">{e.title}</h3>
                  <div className="md:hidden mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">{e.city}</div>
                </div>
                <button className="text-xs uppercase tracking-[0.25em] text-foreground/70 group-hover:text-sage-deep transition-colors">
                  {e.spots} →
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-secondary/50 py-28 px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="eyebrow text-center">From the circle</div>
          <h2 className="mt-4 text-4xl md:text-5xl font-serif text-center">Wearers' words</h2>
          <div className="mt-16 grid md:grid-cols-3 gap-10">
            {stories.map((s) => (
              <figure key={s.a} className="bg-background p-10 border border-border">
                <blockquote className="font-serif text-xl leading-relaxed italic text-foreground">
                  "{s.q}"
                </blockquote>
                <figcaption className="mt-6 eyebrow">— {s.a}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
