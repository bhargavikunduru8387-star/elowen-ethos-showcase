import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="eyebrow">404</div>
        <h1 className="mt-3 text-5xl font-serif">Page not found</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The page you're looking for has wandered off. Let's get you back.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block text-xs uppercase tracking-[0.25em] border border-foreground px-7 py-3 hover:bg-foreground hover:text-background transition-colors"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-serif">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">Please try again.</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 text-xs uppercase tracking-[0.25em] border border-foreground px-7 py-3 hover:bg-foreground hover:text-background transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Elowen Threads — Sustainable British Fashion Atelier" },
      { name: "description", content: "Elowen Threads is a UK-based sustainable fashion atelier crafting timeless, considered wardrobes from organic fibres and regenerative practices." },
      { name: "author", content: "Elowen Threads" },
      { property: "og:site_name", content: "Elowen Threads" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#f5efe2" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,200..500;1,9..144,200..500&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Elowen Threads",
          url: "/",
          description: "UK-based sustainable fashion atelier.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "14 Marlow Lane",
            addressLocality: "London",
            postalCode: "E2",
            addressCountry: "GB",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
