import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Elowen Threads" },
      { name: "description", content: "Visit the Elowen Threads atelier in Shoreditch, London — or send us a note. We answer every letter personally." },
      { property: "og:title", content: "Contact — Elowen Threads" },
      { property: "og:description", content: "Visit the atelier or send us a note." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="pt-36 md:pt-44 pb-20 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-3">
            <div className="eyebrow-mono">— Correspondence</div>
          </div>
          <div className="md:col-span-9">
            <h1 className="display text-[14vw] md:text-[8vw] lg:text-[7.5rem]">
              Say <span className="italic font-light">hello.</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-10 pb-28">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5">
            <p className="text-lg text-foreground/80 leading-relaxed max-w-md">
              Every note that lands in our inbox is read and answered by a
              real person — usually within two working days.
            </p>

            <dl className="mt-16 space-y-10">
              <div>
                <dt className="eyebrow-mono">N° 01 — Email</dt>
                <dd className="mt-3 font-serif text-3xl md:text-4xl">
                  <a href="mailto:hello@elowenthreads.co.uk" className="link-underline">
                    hello@<span className="italic">elowenthreads</span>.co.uk
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow-mono">N° 02 — The Atelier</dt>
                <dd className="mt-3 font-serif text-2xl italic text-foreground/80 leading-snug">
                  14 Marlow Lane<br />
                  Shoreditch, London E2<br />
                  United Kingdom
                </dd>
              </div>
              <div>
                <dt className="eyebrow-mono">N° 03 — Hours</dt>
                <dd className="mt-3 font-serif text-2xl italic text-foreground/80">
                  Wed — Sat · 11 to 6<br />
                  By appointment
                </dd>
              </div>
              <div>
                <dt className="eyebrow-mono">N° 04 — Press & Stockists</dt>
                <dd className="mt-3 font-serif text-xl italic text-foreground/80">
                  <a href="mailto:press@elowenthreads.co.uk" className="link-underline">
                    press@elowenthreads.co.uk
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="lg:col-span-6 lg:col-start-7 bg-bone/50 p-8 md:p-14 border-t border-border space-y-10"
            aria-label="Contact form"
          >
            <div className="eyebrow-mono">Write to us</div>

            <div className="grid sm:grid-cols-2 gap-10">
              <Field id="name" label="Your name" required />
              <Field id="email" label="Email" type="email" required />
            </div>
            <Field id="subject" label="Subject" />
            <div>
              <label htmlFor="message" className="eyebrow-mono block mb-3">Message</label>
              <textarea
                id="message"
                required
                rows={6}
                className="w-full bg-transparent border-b border-foreground/30 focus:border-sage-deep transition-colors py-2 outline-none resize-none font-serif text-lg italic placeholder:text-foreground/30"
                placeholder="A few thoughtful lines…"
              />
            </div>
            <button
              type="submit"
              className="link-underline text-[0.72rem] uppercase tracking-[0.3em] text-sage-deep pt-2"
            >
              {sent ? "Sent — thank you" : "Send message"} →
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ id, label, type = "text", required }: { id: string; label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={id} className="eyebrow-mono block mb-3">{label}</label>
      <input
        id={id}
        type={type}
        required={required}
        className="w-full bg-transparent border-b border-foreground/30 focus:border-sage-deep transition-colors py-2 outline-none font-serif text-lg italic"
      />
    </div>
  );
}
