import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <section className="relative bg-sage-deep text-ivory overflow-hidden">
      <div className="absolute inset-0 grain opacity-50" aria-hidden />
      <div className="relative mx-auto max-w-3xl px-6 py-28 md:py-36 text-center">
        <div className="eyebrow-mono text-ivory/60">N° 04 — Correspondence</div>
        <h2 className="mt-8 display text-5xl md:text-7xl">
          Letters from <span className="italic font-normal">the atelier.</span>
        </h2>
        <p className="mt-8 text-ivory/75 max-w-lg mx-auto leading-relaxed">
          Quiet dispatches on new editions, the makers behind them, and the
          slow craft of dressing well. Sent occasionally — never in excess.
        </p>
        <form
          onSubmit={(e) => { e.preventDefault(); if (email) setSent(true); }}
          className="mt-12 flex flex-col sm:flex-row gap-0 max-w-md mx-auto border-b border-ivory/40 focus-within:border-ivory transition-colors"
        >
          <label htmlFor="newsletter-email" className="sr-only">Email address</label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your.name@email.com"
            className="flex-1 bg-transparent px-1 py-4 text-sm placeholder:text-ivory/45 focus:outline-none"
          />
          <button
            type="submit"
            className="text-[0.7rem] uppercase tracking-[0.28em] py-4 px-4 hover:text-sage transition-colors"
          >
            {sent ? "Thank you →" : "Subscribe →"}
          </button>
        </form>
        <div className="mt-6 text-xs eyebrow-mono text-ivory/40">
          No more than once a month. Unsubscribe in a click.
        </div>
      </div>
    </section>
  );
}
