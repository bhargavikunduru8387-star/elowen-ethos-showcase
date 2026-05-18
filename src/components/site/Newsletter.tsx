import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <section className="bg-sage-deep text-primary-foreground">
      <div className="mx-auto max-w-4xl px-6 py-24 text-center">
        <div className="eyebrow text-primary-foreground/70">Field Notes</div>
        <h2 className="mt-4 text-4xl md:text-5xl font-serif">
          Letters from the atelier
        </h2>
        <p className="mt-5 text-primary-foreground/80 max-w-xl mx-auto">
          Quiet dispatches on new collections, the makers behind them, and the
          slow craft of dressing well. Sent occasionally, never in excess.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (email) setSent(true);
          }}
          className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <label htmlFor="newsletter-email" className="sr-only">Email address</label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 bg-transparent border-b border-primary-foreground/40 px-1 py-3 text-sm placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground transition-colors"
          />
          <button
            type="submit"
            className="text-xs uppercase tracking-[0.25em] border border-primary-foreground/60 px-7 py-3 hover:bg-primary-foreground hover:text-sage-deep transition-colors"
          >
            {sent ? "Thank you" : "Subscribe"}
          </button>
        </form>
      </div>
    </section>
  );
}
