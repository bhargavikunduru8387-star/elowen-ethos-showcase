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
    num: "01",
    name: "Daily Linen",
    season: "Spring/Summer 26",
    desc:
      "Loose-cut shirting, drawstring trousers and easy dresses in organic European flax. Pieces meant for Tuesdays as much as for travel.",
    fibre: "100% organic flax",
    price: "From £140",
    cover: everydayImg,
    pieces: [everydayImg, heroImg, aboutImg],
  },
  {
    num: "02",
    name: "Atelier Outerwear",
    season: "Autumn/Winter 26",
    desc:
      "Hand-finished wool coats and overshirts, woven in the Yorkshire Dales. Heavy enough for an English winter, soft enough to keep forever.",
    fibre: "Undyed British wool",
    price: "From £420",
    cover: outerwearImg,
    pieces: [outerwearImg, eveningImg, everydayImg],
  },
  {
    num: "03",
    name: "Twilight Silks",
    season: "Resort 26",
    desc:
      "Bias-cut peace silk dresses and slips in plant-dyed sage, ochre and bone. For long dinners and quiet entrances.",
    fibre: "Peace silk · plant-dyed",
    price: "From £280",
    cover: eveningImg,
    pieces: [eveningImg, heroImg, outerwearImg],
  },
];

function Collections() {
  return (
    <>
      <section className="pt-36 md:pt-44 pb-20 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-3">
            <div className="eyebrow-mono">— The Edits</div>
          </div>
          <div className="md:col-span-9">
            <h1 className="display text-[14vw] md:text-[8vw] lg:text-[7.5rem]">
              Three edits, <span className="italic font-light">slowly made.</span>
            </h1>
            <p className="mt-10 text-lg text-foreground/70 max-w-xl">
              Every Elowen capsule is woven, cut and finished within the
              United Kingdom and Western Europe. Numbers are intentionally
              small — when they're gone, they're gone.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 space-y-32 md:space-y-48 pb-12">
        {collections.map((c, i) => (
          <article key={c.name}>
            <div className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="lg:col-span-7 relative">
                <div className="aspect-[4/5] overflow-hidden group">
                  <img
                    src={c.cover}
                    alt={c.name}
                    width={1200}
                    height={1500}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.04]"
                  />
                </div>
                <div className="absolute top-6 left-6 eyebrow-mono text-ivory/90 bg-charcoal/40 backdrop-blur-sm px-3 py-1.5">
                  Edit N° {c.num}
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="eyebrow-mono">{c.season}</div>
                <h2 className="mt-5 display text-5xl md:text-6xl lg:text-7xl">
                  {c.name.split(" ").map((w, idx) => (
                    <span key={idx} className={idx === 1 ? "italic font-light" : ""}>{w} </span>
                  ))}
                </h2>
                <p className="mt-8 text-foreground/75 leading-[1.85] max-w-md">{c.desc}</p>

                <dl className="mt-10 grid grid-cols-2 gap-6 border-y border-border py-6 max-w-md">
                  <div>
                    <dt className="eyebrow-mono text-foreground/50">Fibre</dt>
                    <dd className="mt-2 font-serif text-base italic">{c.fibre}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow-mono text-foreground/50">Investment</dt>
                    <dd className="mt-2 font-serif text-base italic">{c.price}</dd>
                  </div>
                </dl>

                <button className="mt-10 link-underline text-[0.72rem] uppercase tracking-[0.3em] text-sage-deep">
                  Request the lookbook →
                </button>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-3 md:gap-6">
              {c.pieces.map((p, idx) => (
                <figure key={idx} className="group">
                  <div className="aspect-[3/4] overflow-hidden bg-muted">
                    <img
                      src={p}
                      alt={`${c.name} look ${idx + 1}`}
                      width={800}
                      height={1000}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="mt-3 flex justify-between eyebrow-mono text-muted-foreground">
                    <span>Look {c.num}.{idx + 1}</span>
                    <span>£{(140 + idx * 60).toString()}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
