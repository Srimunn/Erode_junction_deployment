import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, b as useLocation, O as Outlet, H as HeadContent, S as Scripts, d as createFileRoute, l as lazyRouteComponent, e as useRouterState } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import { X, M as Menu, I as Instagram, F as Facebook, Y as Youtube, a as MapPin, P as Phone, b as Mail } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const logoImg = "/assets/logo-BbF0WjH3.webp";
function SplashIntro({ onComplete }) {
  reactExports.useEffect(() => {
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 5e3);
    return () => clearTimeout(completeTimer);
  }, [onComplete]);
  const particles = Array.from({ length: 15 });
  const sparkles = [
    { top: "15%", left: "20%", delay: 0.5, size: 16, color: "text-amber-400/40" },
    { top: "25%", left: "80%", delay: 1.2, size: 20, color: "text-accent-blue/30" },
    { top: "75%", left: "15%", delay: 0.8, size: 18, color: "text-accent-red/30" },
    { top: "68%", left: "85%", delay: 1.6, size: 24, color: "text-amber-400/40" },
    { top: "10%", left: "60%", delay: 2, size: 14, color: "text-accent-blue/25" },
    { top: "85%", left: "45%", delay: 2.4, size: 16, color: "text-accent-red/25" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0, scale: 0.98, filter: "blur(8px)" },
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
      className: "fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white select-none overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute right-1/4 bottom-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-accent-red/[0.04] blur-3xl animate-float" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-35 pointer-events-none" }),
        sparkles.map((sp, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "svg",
          {
            style: {
              position: "absolute",
              top: sp.top,
              left: sp.left,
              animationDelay: `${sp.delay}s`,
              width: sp.size,
              height: sp.size
            },
            className: `animate-sparkle-twinkle ${sp.color} pointer-events-none fill-current`,
            viewBox: "0 0 24 24",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" })
          },
          idx
        )),
        particles.map((_, i) => {
          const size = Math.random() * 4 + 2;
          const left = Math.random() * 100;
          const delay = Math.random() * 5;
          const duration = Math.random() * 4 + 4;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                position: "absolute",
                bottom: "-20px",
                left: `${left}%`,
                width: `${size}px`,
                height: `${size}px`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`
              },
              className: "rounded-full bg-gradient-to-t from-accent-blue/10 to-accent-red/10 animate-particle-drift pointer-events-none"
            },
            i
          );
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            animate: { y: [0, -5, 0] },
            transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            className: "flex flex-col items-center justify-center text-center relative z-10 px-6 max-w-lg",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "svg",
                {
                  className: "absolute -top-16 -left-16 w-32 h-32 text-accent-blue/10 pointer-events-none stroke-current fill-none stroke-2",
                  viewBox: "0 0 100 100",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M10,90 Q50,50 90,90" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "svg",
                {
                  className: "absolute -bottom-16 -right-16 w-32 h-32 text-accent-red/10 pointer-events-none stroke-current fill-none stroke-2",
                  viewBox: "0 0 100 100",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M10,10 Q50,50 90,10" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, scale: 0.5 },
                  animate: { opacity: 1, scale: 1 },
                  transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
                  className: "relative h-44 w-44 sm:h-56 sm:w-56 rounded-full p-1 bg-white border-[5px] border-white shadow-xl flex items-center justify-center overflow-hidden",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: logoImg,
                        alt: "Junior Junction Logo",
                        loading: "eager",
                        width: 224,
                        height: 224,
                        fetchpriority: "high",
                        className: "h-full w-full rounded-full object-contain"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shine" })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 text-[14px] min-[375px]:text-[17px] min-[450px]:text-xl sm:text-3xl md:text-4xl font-black tracking-[0.1em] min-[375px]:tracking-[0.18em] min-[450px]:tracking-[0.25em] flex justify-center items-center select-none leading-none whitespace-nowrap", children: "JUNIOR JUNCTION".split("").map((char, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.span,
                {
                  initial: { opacity: 0, filter: "blur(12px)", scale: 0.8 },
                  animate: { opacity: 1, filter: "blur(0px)", scale: 1 },
                  transition: {
                    duration: 0.6,
                    delay: 1 + index * 0.04,
                    ease: [0.16, 1, 0.3, 1]
                  },
                  className: char === " " ? "w-1.5 min-[375px]:w-2 sm:w-3 md:w-4" : "inline-block bg-gradient-to-r from-accent-blue to-indigo-700 bg-clip-text text-transparent",
                  children: char
                },
                index
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 15 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.8, delay: 1.8, ease: [0.16, 1, 0.3, 1] },
                  className: "text-accent-red font-bold tracking-[0.4em] text-xs sm:text-sm mt-4 uppercase select-none leading-none opacity-90",
                  children: "Play School"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, scale: 0.95, y: 10 },
                  animate: { opacity: 1, scale: 1, y: 0 },
                  transition: { duration: 1, delay: 2.4, ease: "easeOut" },
                  className: "font-script text-3xl sm:text-4xl text-amber-500 mt-5 select-none leading-none font-normal italic filter drop-shadow-[0_2px_4px_rgba(251,191,36,0.15)]",
                  children: "Love & Learning"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { x: "-150%" },
                  animate: { x: "150%" },
                  transition: { duration: 1.8, delay: 3.2, ease: "easeInOut" },
                  className: "absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-accent-blue/[0.08] to-transparent skew-x-12 pointer-events-none"
                }
              )
            ]
          }
        )
      ]
    }
  );
}
const appCss = "/assets/styles-BNhDVwR2.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/staff", label: "Staff" },
  { to: "/events", label: "Events" },
  { to: "/celebrations", label: "Celebration" }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  const { location } = useRouterState();
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  reactExports.useEffect(() => setOpen(false), [location.pathname]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "fixed inset-x-0 top-3 sm:top-4 z-50 flex justify-center px-2.5 sm:px-4 animate-nav-slide", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "nav",
      {
        className: `glass flex w-full max-w-7xl items-center justify-between rounded-full border px-3.5 sm:px-6 transition-all duration-500 animate-navbar-breath ${scrolled ? "shadow-float py-1.5 sm:py-2 bg-white/95 md:bg-white/80 border-white/90 md:border-white/85 scale-[0.99] backdrop-blur-2xl" : "shadow-soft py-2.5 sm:py-3.5 border-white/60"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "flex items-center gap-2 sm:gap-3 hover:opacity-100 transition-opacity group", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              whileHover: { scale: 1.03, x: 2 },
              whileTap: { scale: 0.98 },
              transition: { type: "spring", stiffness: 450, damping: 20 },
              className: "flex items-center gap-2 sm:gap-3",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: logoImg,
                    alt: "Junior Junction Logo",
                    loading: "eager",
                    width: 72,
                    height: 72,
                    className: "h-12 w-12 sm:h-16 sm:w-16 bg-white rounded-full object-contain border-2 border-white shadow-soft transition-transform duration-500 hover:scale-[1.06] animate-logo-float-premium"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center items-start text-left select-none", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "text-base sm:text-xl font-extrabold tracking-tight text-accent-blue leading-none opacity-0 animate-fade-in-left",
                      style: { animationDelay: "150ms", animationFillMode: "forwards" },
                      children: "Junior Junction"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "text-[8px] sm:text-[10px] font-bold tracking-[0.2em] sm:tracking-[0.25em] text-accent-red uppercase mt-1 ml-0.5 sm:ml-1 leading-none opacity-0 animate-fade-in-left hidden min-[375px]:block",
                      style: { animationDelay: "450ms", animationFillMode: "forwards" },
                      children: "PLAYSCHOOL, ERODE"
                    }
                  )
                ] })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "hidden items-center gap-6 md:flex", children: links.map((l) => {
            const active = location.pathname === l.to;
            return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: l.to, className: "block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                whileHover: { y: -2, scale: 1.05 },
                whileTap: { scale: 0.95 },
                transition: { type: "spring", stiffness: 400, damping: 17 },
                className: `relative text-sm font-semibold tracking-tight px-4 py-2.5 transition-all duration-300 underline-grow-center hover:text-shadow-glow ${active ? "text-accent-blue" : "text-foreground/75 hover:text-accent-blue"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: l.label }),
                  active && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.span,
                    {
                      layoutId: "activeUnderline",
                      transition: { type: "spring", stiffness: 380, damping: 30 },
                      className: "absolute bottom-0 left-4 right-4 h-[2.5px] rounded-full bg-accent-blue overflow-hidden shadow-soft",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/80 to-transparent -translate-x-full animate-shine",
                          style: { animationDuration: "1.5s" }
                        }
                      )
                    }
                  )
                ]
              }
            ) }) }, l.to);
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                animate: { y: [0, -2, 0] },
                transition: { repeat: Infinity, duration: 4, ease: "easeInOut" },
                className: "hidden md:block",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: "/contact",
                    className: "rounded-full bg-accent-red px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-500 hover:translate-y-[-2px] hover:shadow-card md:inline-flex cursor-pointer relative overflow-hidden group animate-red-pulse",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10", children: "Admissions Open" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shine" })
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setOpen((v) => !v),
                className: "grid h-11 w-11 place-items-center rounded-full bg-foreground/5 md:hidden cursor-pointer active:scale-95 transition-transform",
                "aria-label": "Toggle menu",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    animate: { rotate: open ? 180 : 0, scale: open ? 0.9 : 1 },
                    transition: { type: "spring", stiffness: 350, damping: 18 },
                    children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
                  }
                )
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: -15, scale: 0.95 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: -15, scale: 0.95 },
        transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
        className: "absolute top-20 mx-4 w-[calc(100%-2rem)] max-w-7xl rounded-3xl glass border border-white/60 p-5 shadow-float md:hidden",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "flex flex-col gap-3", children: [
          links.map((l) => {
            const active = location.pathname === l.to;
            return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: l.to,
                className: `block rounded-xl px-4 py-3 text-base font-semibold transition-colors ${active ? "bg-accent-blue/10 text-accent-blue" : "hover:bg-foreground/5 text-foreground/80"}`,
                children: l.label
              }
            ) }, l.to);
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/contact",
              className: "mt-1 block rounded-full bg-accent-red px-4 py-3 text-center text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]",
              children: "Admissions Open - Enquire Now"
            }
          ) })
        ] })
      }
    ) })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative bg-gradient-to-b from-[#EEF7FF] via-[#F4F9FD] to-[#E9F4FF] pt-12 sm:pt-16 pb-0 overflow-visible mt-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 w-full overflow-visible -translate-y-[99%] pointer-events-none select-none z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 1440 100", preserveAspectRatio: "none", className: "w-full h-16 overflow-visible", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "footer-grad", x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#EEF7FF", stopOpacity: "0.1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#EEF7FF" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "neon-line-grad", x1: "0%", y1: "0%", x2: "100%", y2: "0%", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#3b82f6", stopOpacity: "0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "50%", stopColor: "#0F7EBC", stopOpacity: "1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#06b6d4", stopOpacity: "0" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0,100 C480,20 960,20 1440,100 L1440,101 L0,101 Z", fill: "url(#footer-grad)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.path,
        {
          d: "M0,100 C480,20 960,20 1440,100",
          fill: "none",
          stroke: "url(#neon-line-grad)",
          strokeWidth: "3",
          strokeLinecap: "round",
          animate: {
            strokeDashoffset: [0, -1440]
          },
          transition: {
            duration: 9,
            repeat: Infinity,
            ease: "linear"
          },
          style: {
            strokeDasharray: "200 1240",
            filter: "blur(0.5px) drop-shadow(0 0 6px rgba(15, 126, 188, 0.8))"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "path",
        {
          d: "M0,100 C480,20 960,20 1440,100",
          fill: "none",
          stroke: "#0F7EBC",
          strokeOpacity: "0.12",
          strokeWidth: "1.5"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: "absolute left-[15%] top-[25%] h-56 w-56 bg-accent-blue/5 rounded-full blur-3xl pointer-events-none",
        animate: {
          y: [0, -15, 0],
          scale: [0.9, 1.1, 0.9]
        },
        transition: {
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 md:px-8 grid grid-cols-12 gap-y-8 gap-x-4 md:gap-8 lg:gap-12 relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 md:col-span-5 space-y-4 flex flex-col items-start text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row items-center justify-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.img,
            {
              whileHover: { rotate: 10, scale: 1.05 },
              transition: { type: "spring", stiffness: 300, damping: 10 },
              src: logoImg,
              alt: "Junior Junction Logo",
              loading: "lazy",
              width: 44,
              height: 44,
              className: "h-11 w-11 rounded-full object-contain border border-accent-blue/20 bg-card shadow-soft"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-bold tracking-tight text-accent-blue font-sans leading-none", children: "Junior Junction" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 100 16", className: "w-[76px] h-3 text-accent-red mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M 6,3 Q 50,13 94,3", fill: "none", stroke: "currentColor", strokeWidth: "3.5", strokeLinecap: "round" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-sm text-xs sm:text-sm leading-relaxed text-muted-foreground/90 font-medium text-left", children: "A joyful preschool in Erode where little minds learn, play, and grow with confidence. Providing a premium, modern, and caring environment." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-start gap-3 pt-1", children: [
          { Icon: Instagram, href: "https://www.instagram.com/junior_junction_preschool/", color: "hover:bg-pink-500 hover:shadow-pink-500/25", label: "Instagram" },
          { Icon: Facebook, href: "https://www.facebook.com/p/junior_junction_erode-100089342184125/", color: "hover:bg-blue-600 hover:shadow-blue-600/25", label: "Facebook" },
          { Icon: Youtube, href: "https://www.youtube.com/@juniorjunction2907", color: "hover:bg-red-600 hover:shadow-red-600/25", label: "YouTube" },
          { Icon: MapPin, href: "https://maps.google.com/?q=Junior+Junction+Kids+Care+and+Play+Group+Erode", color: "hover:bg-emerald-600 hover:shadow-emerald-600/25", label: "Google Maps Location" }
        ].map(({ Icon, href, color, label }, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.a,
          {
            href,
            target: "_blank",
            rel: "noopener noreferrer",
            whileHover: { y: -4, scale: 1.15 },
            className: `grid h-10 w-10 place-items-center rounded-full bg-white/60 border border-accent-blue/10 text-accent-blue/80 shadow-[0_4px_12px_rgba(15,126,188,0.04)] transition-all duration-300 cursor-pointer ${color} hover:text-white hover:border-transparent`,
            "aria-label": label,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" })
          },
          i
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-3 md:col-span-2 space-y-3 flex flex-col items-start text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-accent-blue/70 mb-2.5 sm:mb-4 block", children: "Quick Links" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-[11px] sm:text-sm font-medium text-foreground/75 w-full", children: [
          { to: "/", label: "Home" },
          { to: "/about", label: "About" },
          { to: "/staff", label: "Staff" },
          { to: "/events", label: "Events" },
          { to: "/celebrations", label: "Celebrations" },
          { to: "/contact", label: "Contact Us" }
        ].map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: l.to,
            className: "hover:text-accent-blue transition-colors duration-200 py-0.5 inline-block",
            children: l.label
          }
        ) }, l.to)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-3 md:col-span-2 space-y-3 flex flex-col items-start text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-accent-blue/70 mb-2.5 sm:mb-4 block", children: "Programs" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-[11px] sm:text-sm font-medium text-foreground/75 w-full", children: ["Toddler", "Play Group", "Pre-KG", "LKG", "UKG"].map((prog) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hover:text-accent-blue transition-colors duration-200 py-0.5 inline-block cursor-default", children: prog }) }, prog)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-6 md:col-span-3 space-y-3 flex flex-col items-start text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-accent-blue/70 mb-2.5 sm:mb-4 block", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full flex flex-col items-start", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2.5 text-xs sm:text-sm font-medium text-foreground/75 flex flex-col items-start justify-start text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5 py-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 text-accent-blue/80 shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+914244204777", className: "hover:text-accent-blue transition-colors duration-200", children: "0424 420 4777" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5 py-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "svg",
              {
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: "h-4 w-4 text-accent-blue/80 shrink-0 mt-0.5",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://wa.me/919788209034", target: "_blank", rel: "noopener noreferrer", className: "hover:text-accent-blue transition-colors duration-200", children: "+91 97882 09034" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5 py-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 text-accent-blue/80 shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:juniorjunctionerode@gmail.com", className: "hover:text-accent-blue transition-colors duration-200 break-all", children: "juniorjunctionerode@gmail.com" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5 py-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 text-accent-blue/80 shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://www.google.com/maps/search/?api=1&query=83%2F1%2C+2nd+Cross+Street%2C+VIP+Colony%2C+Palakattu+Thottam%2C+Perundurai+Road%2C+Erode+-+638011",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "hover:text-accent-blue transition-colors duration-200 leading-relaxed",
                children: "83/1, 2nd Cross Street, VIP Colony, Palakattu Thottam, Perundurai Road, Erode - 638011"
              }
            )
          ] })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-accent-blue/10 mt-8 sm:mt-12 px-6 py-5 sm:py-6 text-center text-[10px] sm:text-xs text-muted-foreground/80 font-medium relative z-10 bg-white/30 backdrop-blur-sm", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Junior Junction Play School · Erode. All rights reserved."
    ] })
  ] });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$7 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Junior Junction Play School — Erode" },
      {
        name: "description",
        content: "A joyful preschool in Erode nurturing creativity, confidence and happy learning for little minds."
      },
      { name: "author", content: "Junior Junction Play School" },
      { property: "og:title", content: "Junior Junction Play School — Erode" },
      {
        property: "og:description",
        content: "Where Little Minds Learn, Play & Grow. Admissions Open 2026."
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" }
    ],
    links: [
      {
        rel: "icon",
        type: "image/jpeg",
        href: logoImg
      },
      {
        rel: "stylesheet",
        href: appCss
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:wght@300;400;500;600;700&family=Caveat:wght@400;700&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$7.useRouteContext();
  const location = useLocation();
  const isContact = location.pathname === "/contact";
  const [showSplash, setShowSplash] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const navs = window.performance.getEntriesByType("navigation");
      if (navs.length > 0 && navs[0].type === "reload" && window.location.pathname === "/") {
        setShowSplash(true);
      } else if (window.performance.navigation) {
        if (window.performance.navigation.type === 1 && window.location.pathname === "/") {
          setShowSplash(true);
        }
      }
    } catch (e) {
    }
  }, []);
  const handleSplashComplete = () => {
    setShowSplash(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: showSplash ? /* @__PURE__ */ jsxRuntimeExports.jsx(SplashIntro, { onComplete: handleSplashComplete }, "splash") : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, filter: "blur(20px)", scale: 1.04 },
        animate: { opacity: 1, filter: "blur(0px)", scale: 1 },
        transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
        className: `min-h-screen flex flex-col ${isContact ? "bg-gradient-to-tr from-[#EEF8FF] via-white to-[#F5FBFF]" : ""}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
        ]
      },
      "app-content"
    )
  ] }) }) });
}
const $$splitComponentImporter$5 = () => import("./staff-C4ByEYmE.mjs");
const Route$6 = createFileRoute("/staff")({
  head: () => ({
    meta: [{
      title: "Our Staff — Junior Junction Play School, Erode"
    }, {
      name: "description",
      content: "Meet our dedicated founders, administrators, and Montessori guides at Junior Junction, Erode."
    }, {
      property: "og:title",
      content: "Our Staff — Junior Junction Play School"
    }, {
      property: "og:description",
      content: "Nurturing educators, directors, and administrators guiding little minds in Erode."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const BASE_URL = "";
const Route$5 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths = ["/", "/about", "/events", "/contact"];
        const urls = paths.map(
          (p) => `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`
        ).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600"
          }
        });
      }
    }
  }
});
const $$splitComponentImporter$4 = () => import("./events-ti0x_tQ7.mjs");
const Route$4 = createFileRoute("/events")({
  head: () => ({
    meta: [{
      title: "Events & Milestones — Junior Junction Play School, Erode"
    }, {
      name: "description",
      content: "Explore how learning, celebrations, and play come together to shape preschool minds at Junior Junction, Erode."
    }, {
      property: "og:title",
      content: "Events & Milestones — Junior Junction Play School"
    }, {
      property: "og:description",
      content: "A premium portfolio showcasing preschool events, celebrations, and key learning milestones."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./contact-CJsHr_ti.mjs");
const Route$3 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — Junior Junction Play School, Erode"
    }, {
      name: "description",
      content: "Get in touch with Junior Junction Play School in Erode. Call, email or send an enquiry."
    }, {
      property: "og:title",
      content: "Contact — Junior Junction Play School"
    }, {
      property: "og:description",
      content: "Reach out to enquire or schedule a campus visit in Erode."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./celebrations-C9FW3s-l.mjs");
const Route$2 = createFileRoute("/celebrations")({
  head: () => ({
    meta: [{
      title: "Celebrations Exhibition — Junior Junction Play School, Erode"
    }, {
      name: "description",
      content: "Explore the joyful festivals, cultural celebrations, and special milestones celebrated at Junior Junction, Erode."
    }, {
      property: "og:title",
      content: "Celebrations Exhibition — Junior Junction Play School"
    }, {
      property: "og:description",
      content: "A premium interactive gallery of preschool cultural celebrations and festive events."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-Cfdtc8Gv.mjs");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — Junior Junction Play School, Erode"
    }, {
      name: "description",
      content: "Meet Junior Junction — a safe, nurturing, activity-based preschool in Erode for little minds to learn, play and grow."
    }, {
      property: "og:title",
      content: "About — Junior Junction Play School"
    }, {
      property: "og:description",
      content: "A nurturing preschool in Erode built around joyful, activity-based learning."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-BpEONvuS.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Junior Junction Play School — Erode"
    }, {
      name: "description",
      content: "A premium, joyful preschool in Erode where little minds learn, play and grow. Admissions Open 2026."
    }, {
      property: "og:title",
      content: "Junior Junction Play School — Erode"
    }, {
      property: "og:description",
      content: "Where Little Minds Learn, Play & Grow. Admissions Open 2026."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const StaffRoute = Route$6.update({
  id: "/staff",
  path: "/staff",
  getParentRoute: () => Route$7
});
const SitemapDotxmlRoute = Route$5.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$7
});
const EventsRoute = Route$4.update({
  id: "/events",
  path: "/events",
  getParentRoute: () => Route$7
});
const ContactRoute = Route$3.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$7
});
const CelebrationsRoute = Route$2.update({
  id: "/celebrations",
  path: "/celebrations",
  getParentRoute: () => Route$7
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$7
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$7
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  CelebrationsRoute,
  ContactRoute,
  EventsRoute,
  SitemapDotxmlRoute,
  StaffRoute
};
const routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  logoImg as l,
  router as r
};
