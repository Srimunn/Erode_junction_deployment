import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { T as TestimonialsSection } from "./Sections-DE3cbYLA.mjs";
import { S as Sparkles, H as Heart, e as ArrowRight } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
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
import "./router-CURQ5ZzS.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const img1 = "/assets/hero-1-learning-C56EZwe4.webp";
const img2 = "/assets/hero-2-play-gM-uWUif.webp";
const img3 = "/assets/hero-3-art-Cul1_JYX.webp";
const img4 = "/assets/hero-4-dance-BPDD11Bu.webp";
const img5 = "/assets/hero-5-outdoor-CCM6ea0C.webp";
const img6 = "/assets/hero-6-story-DekGfnd2.webp";
const img7 = "/assets/hero-7-digital--ldzN1Uc.webp";
const img8 = "/assets/hero-8-sports-PHncmOTC.webp";
const cardImg1 = "/assets/one-CAH-fXdV.webp";
const cardImg2 = "/assets/two-BSF6x6QH.webp";
const cardImg3 = "/assets/three-BhoH9gFA.webp";
const slides = [
  { src: img1, label: "Diwali Delight" },
  { src: img2, label: "Messy Play Magic" },
  { src: img3, label: "Happy Beginnings" },
  { src: img4, label: "Confident Voices" },
  { src: img5, label: "Creative Play Time" },
  { src: img6, label: "Joyful Moves" },
  { src: img7, label: "Little Learners" },
  { src: img8, label: "Pretty in Pink" }
];
function Hero() {
  const [mousePos, setMousePos] = reactExports.useState({ x: 0, y: 0 });
  reactExports.useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 12;
      const y = (e.clientY / window.innerHeight - 0.5) * 12;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  const loop = [...slides, ...slides];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15
      }
    }
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 18
      }
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden px-4 pt-24 pb-12 sm:pt-36 sm:pb-20 bg-white min-h-[85vh] lg:min-h-screen flex flex-col justify-center items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0 -z-10 bg-gradient-to-tr from-accent-blue/[0.015] via-white to-accent-red/[0.015] animate-pulse",
        style: { animationDuration: "10s" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 pointer-events-none overflow-hidden -z-10 select-none opacity-40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-[22%] left-[10%] animate-float text-accent-blue/15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-8 w-8" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-[26%] right-[12%] animate-float-slow text-accent-red/15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-9 w-9" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/4 left-1/4 h-[350px] w-[350px] rounded-full bg-accent-blue/[0.02] blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-1/4 right-1/4 h-[350px] w-[350px] rounded-full bg-accent-red/[0.02] blur-3xl" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        variants: containerVariants,
        initial: "hidden",
        animate: "visible",
        className: "mx-auto max-w-[1280px] w-full px-2.5 md:px-8 flex flex-col items-center justify-center transition-transform duration-300 ease-out",
        style: {
          transform: `perspective(1000px) rotateY(${mousePos.x * 0.05}deg) rotateX(${mousePos.y * -0.05}deg)`
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center w-full mb-12 sm:mb-16", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.h1,
                {
                  variants: itemVariants,
                  className: "text-[34px] min-[375px]:text-[40px] min-[450px]:text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.15] tracking-tight font-sans mb-4 sm:mb-6 text-foreground/95 select-none",
                  children: [
                    "Where Little Minds ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative mt-2 inline-block font-extrabold bg-gradient-to-r from-accent-blue via-indigo-600 to-accent-red bg-clip-text text-transparent", children: "Love & Learning" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.p,
                {
                  variants: itemVariants,
                  className: "text-base sm:text-xl text-muted-foreground/80 leading-relaxed tracking-wide mb-6 sm:mb-8 font-light max-w-xl",
                  children: [
                    "A ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/90 font-medium", children: "joyful" }),
                    " preschool nurturing",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/90 font-medium", children: "creativity" }),
                    ",",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/90 font-medium", children: "confidence" }),
                    " and",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/90 font-medium", children: "happy learning" }),
                    " — every single day."
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  variants: itemVariants,
                  className: "flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center lg:justify-start",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: "/contact",
                      className: "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-accent-red px-8 py-4 text-base font-bold text-primary-foreground shadow-soft hover:shadow-float transition-all duration-300 hover:scale-[1.04] hover:bg-accent-red/95 cursor-pointer w-full sm:w-auto",
                      children: [
                        "Enquire Now",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" })
                      ]
                    }
                  )
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 relative w-full h-[300px] min-[400px]:h-[360px] sm:h-[450px] md:h-[500px] lg:h-[520px] flex items-center justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  variants: itemVariants,
                  whileHover: { scale: 1.05, rotate: -2, zIndex: 10, y: -5 },
                  className: "absolute left-[10%] sm:left-[4%] top-[8%] sm:top-[10%] w-[130px] min-[400px]:w-[155px] sm:w-[210px] md:w-[240px] lg:w-[260px] aspect-[3/4] rounded-3xl overflow-hidden border-[3px] sm:border-[6px] golden-border shadow-card rotate-[-8deg] bg-white cursor-pointer origin-center transition-all duration-300 hover:shadow-float z-0",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: cardImg3,
                      alt: "Happy Beginnings",
                      width: 260,
                      height: 347,
                      loading: "eager",
                      className: "w-full h-full object-cover"
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  variants: itemVariants,
                  whileHover: { scale: 1.05, rotate: 2, zIndex: 10, y: -5 },
                  className: "absolute right-[10%] sm:right-[4%] top-[16%] sm:top-[18%] w-[130px] min-[400px]:w-[155px] sm:w-[210px] md:w-[240px] lg:w-[260px] aspect-[3/4] rounded-3xl overflow-hidden border-[3px] sm:border-[6px] golden-border shadow-card rotate-[6deg] bg-white cursor-pointer origin-center transition-all duration-300 hover:shadow-float z-1",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: cardImg2,
                      alt: "Messy Play Magic",
                      width: 260,
                      height: 347,
                      loading: "eager",
                      className: "w-full h-full object-cover"
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  variants: itemVariants,
                  whileHover: { scale: 1.05, rotate: -1, zIndex: 10, y: -5 },
                  className: "absolute left-[calc(50%-65px)] min-[400px]:left-[calc(50%-77.5px)] sm:left-[calc(50%-105px)] md:left-[calc(50%-120px)] lg:left-[calc(50%-130px)] bottom-[6%] w-[130px] min-[400px]:w-[155px] sm:w-[210px] md:w-[240px] lg:w-[260px] aspect-[3/4] rounded-3xl overflow-hidden border-[3px] sm:border-[6px] golden-border shadow-float rotate-[-2deg] bg-white cursor-pointer origin-center transition-all duration-300 hover:shadow-float z-2",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: cardImg1,
                      alt: "Graduation Day",
                      width: 260,
                      height: 347,
                      loading: "eager",
                      fetchPriority: "high",
                      className: "w-full h-full object-cover"
                    }
                  )
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              variants: itemVariants,
              className: "relative w-full overflow-hidden border-t border-border/20 pt-8",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white via-white/80 to-transparent" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white via-white/80 to-transparent" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-marquee flex w-max gap-6 px-4", children: loop.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "figure",
                  {
                    className: "group relative w-[180px] sm:w-[220px] shrink-0 overflow-hidden rounded-[24px] border-[4px] golden-border shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-float",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "img",
                        {
                          src: s.src,
                          alt: s.label,
                          loading: "lazy",
                          width: 220,
                          height: 293,
                          className: "aspect-[3/4] h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("figcaption", { className: "absolute inset-x-3 bottom-3 rounded-full bg-white/95 px-3 py-1.5 text-center text-[10px] font-bold tracking-wide text-foreground backdrop-blur-md border border-white/40 shadow-soft", children: s.label })
                    ]
                  },
                  i
                )) }) })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TestimonialsSection, {})
  ] });
}
export {
  Index as component
};
