import { createFileRoute } from "@tanstack/react-router";
import everydayImg from "@/assets/collection-everyday.jpg";
import outerwearImg from "@/assets/collection-outerwear.jpg";
import eveningImg from "@/assets/collection-evening.jpg";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Collections — Elowen Threads" },
      { name: "description", content: "Three considered edits for a slow wardrobe — Daily Linen, Atelier Outerwear, and Twilight Silks." },
      { property: "og:title", content: "Collections — Elowen Threads" },
      { property: "og:description", content: "Three considered edits for a slow wardrobe." },
      { property: "og:url", content: "/collections" },
    ],
    links: [{ rel: "canonical", href: "/collections" }],
  }),
  component: Collections,
});

const collections = [
  {
    name: "Daily Linen",
    season: "Edit 01",
    desc:
      "Loose-cut shirting, drawstring trousers and easy dresses in organic European flax. Pieces meant for Tuesdays as much as for travel.",
    cover: everydayImg,
    pieces: [everydayImg, heroImg, aboutImg],
  },
  {
    name: "Atelier Outerwear",
    season: "Edit 02",
    desc:
      "Hand-finished wool coats and overshirts woven in the Yorkshire Dales. Heavy enough for an English winter, soft enough to keep forever.",
    cover: outerwearImg,
    pieces: [outerwearImg, eveningImg, everydayImg],
  },
  {
    name: "Twilight Silks",
    season: "Edit 03",
    desc:
      "Bias-cut peace silk dresses and slips in plant-dyed sage, ochre and bone. For long dinners and quiet entrances.",
    cover: eveningImg,
    pieces: [eveningImg, heroImg, outerwearImg],
  },
];

function Collections() {
  return (
    <>
      <section className="pt-40 pb-20 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="eyebrow">The Collections</div>
          <h1 className="mt-6 text-5xl md:text-7xl font-serif leading-[1.05]">
            Three edits, made slowly.
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto">
            Every Elowen capsule is woven, cut and finished within the United
            Kingdom and Western Europe. Numbers are intentionally small.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-32 pb-12">
        {collections.map((c, i) => (
          <article key={c.name}>
            <div className={`grid md:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <div className="aspect-[4/5] overflow-hidden group">
                <img
                  src={c.cover}
                  alt={c.name}
                  width={1200}
                  height={1500}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
              </div>
              <div>
                <div className="eyebrow">{c.season}</div>
                <h2 className="mt-4 text-4xl md:text-5xl font-serif">{c.name}</h2>
                <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">{c.desc}</p>
                <button className="mt-10 text-xs uppercase tracking-[0.25em] border border-foreground px-7 py-3 hover:bg-foreground hover:text-background transition-colors">
                  Explore the edit
                </button>
              </div>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-3 md:gap-6">
              {c.pieces.map((p, idx) => (
                <div key={idx} className="aspect-[3/4] overflow-hidden bg-muted">
                  <img
                    src={p}
                    alt={`${c.name} piece ${idx + 1}`}
                    width={800}
                    height={1000}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1200ms]"
                  />
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
