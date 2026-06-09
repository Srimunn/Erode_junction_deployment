import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useState, useEffect, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SplashIntro } from "../components/site/SplashIntro";

import appCss from "../styles.css?url";
import logoImg from "../assets/logo.webp";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";
import { useLocation } from "@tanstack/react-router";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Junior Junction Play School — Erode" },
      {
        name: "description",
        content:
          "A joyful preschool in Erode nurturing creativity, confidence and happy learning for little minds.",
      },
      { name: "author", content: "Junior Junction Play School" },
      { property: "og:title", content: "Junior Junction Play School — Erode" },
      {
        property: "og:description",
        content: "Where Little Minds Learn, Play & Grow. Admissions Open 2026.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
    ],
    links: [
      {
        rel: "icon",
        type: "image/jpeg",
        href: logoImg,
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:wght@300;400;500;600;700&family=Caveat:wght@400;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const location = useLocation();
  const isContact = location.pathname === "/contact";

  // Only show the splash when the page was loaded via a full reload.
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Prefer the modern Navigation Timing Level 2 API
    try {
      const navs = window.performance.getEntriesByType("navigation");
      if (navs.length > 0 && (navs[0] as any).type === "reload" && window.location.pathname === "/") {
        setShowSplash(true);
      } else if ((window.performance as any).navigation) {
        // Fallback for older browsers
        // performance.navigation.type === 1 indicates a reload
        if (((window.performance as any).navigation.type as number) === 1 && window.location.pathname === "/") {
          setShowSplash(true);
        }
      }
    } catch (e) {
      // If anything goes wrong, do not show the splash by default.
      // This preserves the behavior of not showing it on client navigation.
    }
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <AnimatePresence mode="wait">
        {showSplash ? (
          <SplashIntro key="splash" onComplete={handleSplashComplete} />
        ) : (
          <>
            <Navbar />
            <motion.div
              key="app-content"
              initial={{ opacity: 0, filter: "blur(20px)", scale: 1.04 }}
              animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className={`min-h-screen flex flex-col ${
                isContact ? "bg-gradient-to-tr from-[#EEF8FF] via-white to-[#F5FBFF]" : ""
              }`}
            >
              <main className="flex-1">
                <Outlet />
              </main>
              <Footer />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </QueryClientProvider>
  );
}
