import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Clock } from "lucide-react";

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
    <section className="pt-40 pb-24 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20">
        <div>
          <div className="eyebrow">Contact</div>
          <h1 className="mt-6 text-5xl md:text-6xl font-serif leading-[1.05]">
            Say hello.
          </h1>
          <p className="mt-6 text-muted-foreground max-w-md">
            Every note that lands in our inbox is read and answered by a real
            person — usually within two working days.
          </p>

          <dl className="mt-12 space-y-6 text-sm">
            <div className="flex gap-4">
              <Mail size={18} className="text-sage-deep shrink-0 mt-0.5" strokeWidth={1.4} />
              <div>
                <dt className="eyebrow">Email</dt>
                <dd className="mt-1"><a className="hover:text-sage-deep transition-colors" href="mailto:hello@elowenthreads.co.uk">hello@elowenthreads.co.uk</a></dd>
              </div>
            </div>
            <div className="flex gap-4">
              <MapPin size={18} className="text-sage-deep shrink-0 mt-0.5" strokeWidth={1.4} />
              <div>
                <dt className="eyebrow">The Atelier</dt>
                <dd className="mt-1 not-italic text-muted-foreground">14 Marlow Lane, Shoreditch<br />London E2, United Kingdom</dd>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock size={18} className="text-sage-deep shrink-0 mt-0.5" strokeWidth={1.4} />
              <div>
                <dt className="eyebrow">Visit</dt>
                <dd className="mt-1 text-muted-foreground">Wednesday – Saturday · 11 to 6 · by appointment</dd>
              </div>
            </div>
          </dl>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="bg-secondary/40 p-8 md:p-12 border border-border space-y-6"
          aria-label="Contact form"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <Field id="name" label="Name" required />
            <Field id="email" label="Email" type="email" required />
          </div>
          <Field id="subject" label="Subject" />
          <div>
            <label htmlFor="message" className="eyebrow block mb-2">Message</label>
            <textarea
              id="message"
              required
              rows={6}
              className="w-full bg-transparent border-b border-border focus:border-sage-deep transition-colors py-2 outline-none resize-none"
            />
          </div>
          <button
            type="submit"
            className="text-xs uppercase tracking-[0.25em] bg-foreground text-background px-8 py-4 hover:bg-sage-deep transition-colors"
          >
            {sent ? "Message sent — thank you" : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ id, label, type = "text", required }: { id: string; label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={id} className="eyebrow block mb-2">{label}</label>
      <input
        id={id}
        type={type}
        required={required}
        className="w-full bg-transparent border-b border-border focus:border-sage-deep transition-colors py-2 outline-none"
      />
    </div>
  );
}
