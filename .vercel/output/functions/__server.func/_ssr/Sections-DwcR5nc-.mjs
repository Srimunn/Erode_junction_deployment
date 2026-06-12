import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { l as logoImg } from "./router-BwY9dehs.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { G as GraduationCap, H as Heart, o as ShieldCheck, e as ArrowRight, S as Sparkles, a as MapPin, P as Phone, N as Navigation, E as ExternalLink, p as Monitor, V as Video, q as HeartHandshake, r as Star, s as ArrowLeft } from "../_libs/lucide-react.mjs";
const aboutImg = "/assets/about-play-sand-pmR9c_b-.jpg";
const pencileImg = "/assets/pencile-BInX2rPR.webp";
function WhatsAppIcon({ className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" })
      ]
    }
  );
}
const aboutPoints = [
  {
    icon: GraduationCap,
    color: "text-accent-blue bg-accent-blue/[0.07] border-accent-blue/15",
    title: "Curiosity-Led Curriculum",
    desc: "Activity-first learning built around natural wonder and exploration."
  },
  {
    icon: Heart,
    color: "text-accent-red bg-accent-red/[0.07] border-accent-red/15",
    title: "Caring & Attentive Educators",
    desc: "Trained teachers dedicating individual attention with low student ratios."
  },
  {
    icon: ShieldCheck,
    color: "text-emerald-600 bg-emerald-500/[0.07] border-emerald-500/15",
    title: "Secure & Child-First Campus",
    desc: "A safe, CCTV-monitored environment custom-tailored for little feet."
  }
];
function AboutSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative overflow-hidden px-4 py-8 sm:py-20 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl items-center gap-10 md:gap-16 grid-cols-1 md:grid-cols-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group w-full max-w-md md:max-w-none mx-auto min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -left-10 -top-10 -z-10 h-72 w-72 rounded-full bg-accent-blue/10 blur-3xl animate-float-slow" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -right-10 -bottom-10 -z-10 h-72 w-72 rounded-full bg-accent-red/10 blur-3xl animate-float" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-2xl sm:rounded-[40px] shadow-float border-2 sm:border-[6px] golden-border bg-white p-1 sm:p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: aboutImg,
          alt: "Bright modern preschool classroom",
          width: 1024,
          height: 1024,
          loading: "lazy",
          className: "aspect-square w-full object-cover rounded-xl sm:rounded-[32px] transition-transform duration-700 hover:scale-[1.03]"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          whileHover: { scale: 1.04, rotate: 1 },
          className: "absolute -bottom-2 -right-1 flex rounded-xl border golden-border bg-white/90 backdrop-blur-md p-1 shadow-soft items-center gap-1.5 max-w-[120px] min-[400px]:max-w-[140px] sm:-bottom-8 sm:-right-4 sm:rounded-[28px] sm:border-2 sm:p-3.5 sm:gap-4 sm:max-w-[285px] z-10 cursor-pointer",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-6 w-6 sm:h-16 sm:w-16 rounded-full overflow-hidden shrink-0 shadow-soft border sm:border-2 golden-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: logoImg,
                alt: "Junior Junction Logo",
                width: 64,
                height: 64,
                loading: "lazy",
                className: "h-full w-full object-contain"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs sm:text-3xl font-extrabold text-accent-red font-sans leading-none", children: "04+" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[6px] min-[400px]:text-[7px] sm:text-[11px] font-bold text-muted-foreground mt-0.5 sm:mt-1.5 leading-tight", children: "Years of joyful learning & growth" })
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start text-left w-full min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl min-[400px]:text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.15] text-foreground/95", children: [
        "About ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-accent-blue font-sans", children: "Junior Junction" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent-red block sm:inline-block sm:ml-2", children: "Playschool, Erode" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 sm:mt-6 text-sm sm:text-lg text-muted-foreground/80 leading-relaxed font-light", children: "A safe, nurturing, and activity-based preschool in the heart of Erode. We blend play, exploration, and gentle structure so every child discovers their unique spark." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 sm:mt-8 space-y-3 sm:space-y-4 w-full", children: aboutPoints.map((point) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex gap-3.5 sm:gap-4 p-3 sm:p-4.5 rounded-xl sm:rounded-2xl border border-border/50 bg-card/40 hover:bg-card hover:border-border transition-all duration-300 hover:shadow-soft group cursor-default",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-xl shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 border ${point.color}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(point.icon, { className: "h-5 w-5" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-foreground/90 text-sm sm:text-base leading-snug", children: point.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-muted-foreground/80 mt-0.5 leading-relaxed", children: point.desc })
            ] })
          ]
        },
        point.title
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/about",
          className: "group mt-6 sm:mt-10 inline-flex items-center gap-2 rounded-full bg-foreground hover:bg-foreground/90 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-bold text-background transition-all duration-300 hover:scale-[1.03] shadow-soft hover:shadow-card cursor-pointer",
          children: [
            "Learn more about us",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" })
          ]
        }
      )
    ] })
  ] }) });
}
const features = [
  {
    icon: Monitor,
    title: "Digital Classroom",
    desc: "Interactive smart boards bring visual lessons to life.",
    color: "text-accent-blue bg-accent-blue/[0.08] border-accent-blue/15",
    hoverGlow: "hover:shadow-accent-blue/10"
  },
  {
    icon: Sparkles,
    title: "Activity-Based Learning",
    desc: "Hands-on play and exploration tasks built around curiosity.",
    color: "text-accent-red bg-accent-red/[0.08] border-accent-red/15",
    hoverGlow: "hover:shadow-accent-red/10"
  },
  {
    icon: ShieldCheck,
    title: "Safe Environment",
    desc: "Child-proofed indoor and outdoor facilities designed with care.",
    color: "text-emerald-600 bg-emerald-500/[0.08] border-emerald-500/15",
    hoverGlow: "hover:shadow-emerald-500/10"
  },
  {
    icon: Video,
    title: "CCTV Security",
    desc: "Full-campus security camera monitoring for parents' peace of mind.",
    color: "text-indigo-600 bg-indigo-500/[0.08] border-indigo-500/15",
    hoverGlow: "hover:shadow-indigo-500/10"
  },
  {
    icon: HeartHandshake,
    title: "Individual Attention",
    desc: "Low teacher-student ratios ensuring every child is seen and heard.",
    color: "text-rose-500 bg-rose-500/[0.08] border-rose-500/15",
    hoverGlow: "hover:shadow-rose-500/10"
  },
  {
    icon: GraduationCap,
    title: "Experienced Teachers",
    desc: "Warm, qualified, and joyful educators passionate about early years.",
    color: "text-amber-600 bg-amber-500/[0.08] border-amber-500/15",
    hoverGlow: "hover:shadow-amber-500/10"
  }
];
function WhyChooseSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-4 py-12 sm:py-20 md:py-24 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-accent-blue/[0.015] blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-2xl text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-4xl leading-tight sm:text-5xl font-extrabold tracking-tight", children: [
        "Built with ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-accent-red font-sans", children: "care" }),
        ", for little hearts"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          whileHover: { y: -8, scale: 1.01 },
          transition: { type: "spring", stiffness: 120, damping: 18 },
          className: `group relative rounded-3xl border border-border/70 bg-white/70 backdrop-blur-md p-8 shadow-soft transition-all duration-300 hover:bg-white hover:border-border hover:shadow-float ${f.hoverGlow}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-accent-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `grid h-12 w-12 place-items-center rounded-2xl border transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${f.color}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "h-5 w-5" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 text-xl font-bold tracking-tight text-foreground/90", children: f.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2.5 text-sm leading-relaxed text-muted-foreground/85 font-light", children: f.desc }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 right-4 h-1.5 w-1.5 rounded-full bg-border group-hover:bg-accent-blue group-hover:scale-125 transition-all duration-300" })
          ]
        },
        f.title
      )) })
    ] })
  ] });
}
const testimonials = [
  {
    name: "Yuva Raj",
    role: "Parent · 4 months ago",
    text: "We are very satisfied. Our child always gets good opportunities to explore and progress in all aspects. The school has been successful in striking an appropriate balance between Academic and Co-Curricular activities.",
    rating: 5,
    initials: "YR",
    badgeColor: "text-accent-blue bg-accent-blue/[0.08] border-accent-blue/15"
  },
  {
    name: "surya madheswaran",
    role: "Parent · 4 months ago",
    text: "My son going to this school for last 5 months. Staffs are so Friendly and taking good care of childrens.They are Keeping Different Activities time to time for Kids which my son is enjoying so much.They Engage Every Kids in all Activities like Sports,Dance.So far Good experience.",
    rating: 5,
    initials: "SM",
    badgeColor: "text-indigo-600 bg-indigo-500/[0.08] border-indigo-500/15"
  },
  {
    name: "M Santhoshkumar",
    role: "Parent · 9 months ago",
    text: "Best day care of erode comfortable of time on day care wonderful experience in our child such a best day care play school staffs was very sweet and care of my baby I got a good desition of the scholl conviniant of the fees structure..... ❤️❤️❤️❤️❤️❤️❤️‍❤️",
    rating: 5,
    initials: "MS",
    badgeColor: "text-amber-600 bg-amber-500/[0.08] border-amber-500/15"
  },
  {
    name: "Uvanycia",
    role: "Parent · 9 months ago",
    text: "A safe and friendly place for kids. The teachers are caring, activities are fun, and it really helps with overall growth.",
    rating: 5,
    initials: "UV",
    badgeColor: "text-rose-500 bg-rose-500/[0.08] border-rose-500/15"
  },
  {
    name: "Nirmala Manoj",
    role: "Parent · 9 months ago",
    text: "I feel safe and secure in school, and the education quality has improved significantly, making me very satisfied.",
    rating: 5,
    initials: "NM",
    badgeColor: "text-accent-red bg-accent-red/[0.08] border-accent-red/15"
  },
  {
    name: "Ayisha rishad",
    role: "Parent · 9 months ago",
    text: "This school ambiance is too comfortable for the children mentally and physically development, and also the staffs and management are such nice......",
    rating: 5,
    initials: "AR",
    badgeColor: "text-accent-blue bg-accent-blue/[0.08] border-accent-blue/15"
  },
  {
    name: "sugan deiva",
    role: "Parent · 3 years ago",
    text: "Very dedicated personal care. Never felt that we left him at daycare. They were treating him as a family guy and much felt satisfied while leaving him there and concentrated on work. We wish for the successful journey💐‍😍👍",
    rating: 5,
    initials: "SD",
    badgeColor: "text-emerald-600 bg-emerald-500/[0.08] border-emerald-500/15"
  },
  {
    name: "Snow",
    role: "Parent · 2 years ago",
    text: "The mom can feel 100 % safe and happy about their kids.thank u so much for your service.",
    rating: 5,
    initials: "SN",
    badgeColor: "text-indigo-600 bg-indigo-500/[0.08] border-indigo-500/15"
  }
];
function TestimonialsSection() {
  const [index, setIndex] = reactExports.useState(0);
  const [isHovered, setIsHovered] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5e3);
    return () => clearInterval(interval);
  }, [index, isHovered]);
  const handlePrev = () => {
    setIndex((prev) => prev === 0 ? testimonials.length - 1 : prev - 1);
  };
  const handleNext = () => {
    setIndex((prev) => prev === testimonials.length - 1 ? 0 : prev + 1);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      className: "relative overflow-hidden bg-gradient-to-b from-soft/50 via-background to-soft/50 px-4 py-12 sm:py-20 md:py-24 border-y border-border/40",
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute left-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-accent-blue/[0.02] blur-3xl animate-float-slow" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute right-0 bottom-1/4 -z-10 h-96 w-96 rounded-full bg-accent-red/[0.02] blur-3xl animate-float" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center mb-16", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl leading-tight sm:text-5xl font-extrabold tracking-tight", children: [
              "What ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-accent-blue font-sans", children: "Parents Say" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground/80 text-base sm:text-lg font-light", children: "Hear from the families who make our preschool community so special" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-4 sm:-left-34 bottom-0 sm:-bottom-4 z-20 w-20 sm:w-60 h-auto pointer-events-none animate-float", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: pencileImg,
                alt: "Playful pencil character",
                className: "w-full h-auto object-contain"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-3xl border-[6px] golden-border bg-white/70 backdrop-blur-md p-5 sm:p-8 md:p-12 shadow-soft hover:bg-white hover:shadow-float", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "select-none pointer-events-none absolute top-4 right-8 text-[160px] font-serif leading-none text-muted-foreground/[0.05]", children: "“" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden w-full relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  animate: { x: `-${index * 100}%` },
                  transition: { type: "spring", stiffness: 120, damping: 20 },
                  className: "flex w-full",
                  children: testimonials.map((t, idx) => {
                    const isActive = idx === index;
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "w-full shrink-0 flex flex-col justify-between min-h-[250px] sm:min-h-[220px] pl-12 pr-2 sm:px-1",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            motion.div,
                            {
                              animate: {
                                opacity: isActive ? 1 : 0,
                                y: isActive ? 0 : 10,
                                scale: isActive ? 1 : 0.98
                              },
                              transition: { duration: 0.4, ease: "easeOut" },
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5 text-amber-400/90", children: Array.from({ length: t.rating }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-current" }, i)) }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "mt-4 sm:mt-8 text-xs min-[375px]:text-sm sm:text-lg leading-relaxed text-foreground/80 font-normal italic", children: [
                                  "“",
                                  t.text,
                                  "”"
                                ] })
                              ]
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            motion.div,
                            {
                              animate: {
                                opacity: isActive ? 1 : 0,
                                y: isActive ? 0 : 15
                              },
                              transition: { duration: 0.4, delay: 0.08, ease: "easeOut" },
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[1px] w-full bg-border/40 my-4 sm:my-8" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "flex items-center gap-3.5", children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                                      "div",
                                      {
                                        className: `h-11 w-11 rounded-full flex items-center justify-center font-bold text-sm border ${t.badgeColor}`,
                                        children: t.initials
                                      }
                                    ),
                                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm sm:text-base font-bold tracking-tight text-foreground/90", children: t.name }),
                                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs sm:text-sm text-muted-foreground/80 font-medium", children: t.role })
                                    ] })
                                  ] }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 self-end sm:self-center", children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                                      "button",
                                      {
                                        onClick: handlePrev,
                                        className: "group/btn h-11 w-11 rounded-full border border-border/80 bg-white/50 hover:bg-white hover:border-accent-blue/30 flex items-center justify-center shadow-soft hover:shadow-float active:scale-95 transition-all duration-200 cursor-pointer",
                                        "aria-label": "Previous testimonial",
                                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4 text-muted-foreground group-hover/btn:text-accent-blue transition-colors duration-200" })
                                      }
                                    ),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                                      "button",
                                      {
                                        onClick: handleNext,
                                        className: "group/btn h-11 w-11 rounded-full border border-border/80 bg-white/50 hover:bg-white hover:border-accent-blue/30 flex items-center justify-center shadow-soft hover:shadow-float active:scale-95 transition-all duration-200 cursor-pointer",
                                        "aria-label": "Next testimonial",
                                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 text-muted-foreground group-hover/btn:text-accent-blue transition-colors duration-200" })
                                      }
                                    )
                                  ] })
                                ] })
                              ]
                            }
                          )
                        ]
                      },
                      t.name
                    );
                  })
                }
              ) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex justify-center gap-1", children: testimonials.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setIndex(i),
              className: "h-11 px-2.5 flex items-center justify-center cursor-pointer group/dot",
              "aria-label": `Go to testimonial ${i + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `h-2 rounded-full transition-all duration-300 ${i === index ? "w-6 bg-accent-blue" : "w-2 bg-border group-hover/dot:bg-muted-foreground/30"}`
                }
              )
            },
            i
          )) })
        ] })
      ]
    }
  );
}
function LocationsSection() {
  const campusData = [
    {
      id: "main",
      title: "Main Campus",
      badge: "Main Branch",
      address: "83/1, 2nd Cross Street, VIP Colony, Palakattu Thottam, Perundurai Road, Erode - 638011",
      landmark: "Opposite Reliance Mall, Behind Zudio",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=83%2F1%2C+2nd+Cross+Street%2C+VIP+Colony%2C+Palakattu+Thottam%2C+Perundurai+Road%2C+Erode+-+638011",
      embedUrl: "https://maps.google.com/maps?q=83/1,%202nd%20Cross%20Street,%20VIP%20Colony,%20Palakattu%20Thottam,%20Perundurai%20Road,%20Erode%20638011&t=&z=15&ie=UTF8&iwloc=&output=embed",
      accentColor: "accent-red",
      badgeStyle: "text-accent-red bg-accent-red/[0.08] border-accent-red/15",
      buttonStyle: "bg-accent-red hover:bg-accent-red/95 shadow-accent-red/10",
      pinColor: "text-accent-red",
      features: ["Opposite Reliance Mall", "CCTV Secured", "Spacious Playarea"],
      contacts: [
        { type: "whatsapp", label: "WhatsApp/Mobile", values: ["97882 09034", "97882 89034"], hrefs: ["https://wa.me/919788209034", "https://wa.me/919788289034"] },
        { type: "landline", label: "Landline", values: ["0424 420 4777"], hrefs: ["tel:+914244204777"] }
      ]
    },
    {
      id: "kuppanna",
      title: "Kuppanna Street Campus",
      badge: "Activity Branch",
      address: "No. 530, Kuppanna Street, Perundurai Road, Near PP Scaans, Edayankattuvalasu, Erode - 638011",
      landmark: "Near PP Scaans",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=No.+530%2C+Kuppanna+Street%2C+Perundurai+Road%2C+Near+PP+Scaans%2C+Edayankattuvalasu%2C+Erode+-+638011",
      embedUrl: "https://maps.google.com/maps?q=530,%20Kuppanna%20Street,%20Perundurai%20Road,%20Near%20PP%20Scaans,%20Edayankattuvalasu,%20Erode%20638011&t=&z=15&ie=UTF8&iwloc=&output=embed",
      accentColor: "accent-blue",
      badgeStyle: "text-accent-blue bg-accent-blue/[0.08] border-accent-blue/15",
      buttonStyle: "bg-accent-blue hover:bg-accent-blue/95 shadow-accent-blue/10",
      pinColor: "text-accent-blue",
      features: ["Near PP Scaans", "Smart Classrooms", "Activity Center"],
      contacts: [
        { type: "whatsapp", label: "WhatsApp/Mobile", values: ["97882 09034"], hrefs: ["https://wa.me/919788209034"] },
        { type: "landline", label: "Landline", values: ["0424 420 4777"], hrefs: ["tel:+914244204777"] }
      ]
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-4 py-12 sm:py-20 md:py-24 bg-gradient-to-b from-transparent via-soft/20 to-transparent relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute left-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-accent-blue/[0.015] blur-3xl animate-float-slow" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute right-0 bottom-1/4 -z-10 h-96 w-96 rounded-full bg-accent-red/[0.015] blur-3xl animate-float" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl leading-tight sm:text-5xl font-extrabold tracking-tight", children: [
          "Our ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-accent-blue font-sans", children: "Campuses" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground/85 text-base sm:text-lg font-light leading-relaxed", children: "Locate and explore our child-friendly preschool branches in Erode" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-2 min-[400px]:gap-3.5 md:gap-8 grid-cols-2 max-w-6xl mx-auto items-stretch", children: campusData.map((loc) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          whileHover: { y: -8 },
          transition: { type: "spring", stiffness: 120, damping: 18 },
          className: "group relative rounded-2xl sm:rounded-[36px] border-2 sm:border-[6px] golden-border bg-white p-2 min-[400px]:p-3.5 sm:p-8 shadow-soft hover:shadow-float flex flex-col justify-between overflow-hidden text-left min-w-0",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "pointer-events-none absolute -left-10 -top-10 -z-10 h-40 w-40 rounded-full blur-3xl opacity-20 animate-float",
                style: { backgroundColor: loc.accentColor === "accent-red" ? "rgba(220, 38, 38, 0.2)" : "rgba(15, 126, 188, 0.2)" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col min-[450px]:flex-row min-[450px]:items-center justify-between gap-1 mb-2.5 sm:mb-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[10px] min-[400px]:text-xs min-[450px]:text-sm sm:text-2xl font-black tracking-tight text-foreground/90 leading-tight", children: loc.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-block rounded-full px-1.5 py-0.5 sm:px-3.5 sm:py-1 text-[7px] sm:text-[10px] font-extrabold uppercase tracking-wider self-start min-[450px]:self-auto ${loc.badgeStyle}`, children: loc.badge })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative rounded-xl overflow-hidden aspect-[16/10] sm:aspect-[16/9] mb-2.5 sm:mb-6 shadow-inner border border-border/50 bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "iframe",
                {
                  src: loc.embedUrl,
                  width: "100%",
                  height: "100%",
                  style: { border: 0 },
                  allowFullScreen: false,
                  loading: "lazy",
                  referrerPolicy: "no-referrer-when-downgrade",
                  title: `${loc.title} Map Location`,
                  className: "w-full h-full"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1 mb-2.5 sm:mb-6", children: loc.features.map((feat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-[8px] sm:text-xs font-bold px-1.5 py-0.5 sm:px-3 sm:py-1.5 rounded-lg bg-soft/50 text-muted-foreground border border-border/30", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-2.5 w-2.5 sm:h-3 sm:w-3 text-amber-500 shrink-0" }),
                feat
              ] }, i)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 sm:space-y-4 pt-2.5 sm:pt-5 border-t border-border/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5 sm:gap-4 items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `grid h-6 w-6 sm:h-9 sm:w-9 shrink-0 place-items-center rounded-lg bg-muted/50 text-xs sm:text-base ${loc.pinColor}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5 sm:h-5 sm:w-5" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[8px] min-[400px]:text-[9px] sm:text-sm font-bold text-foreground/80 leading-normal sm:leading-relaxed", children: loc.address }),
                  loc.landmark && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[7px] min-[400px]:text-[8px] sm:text-xs text-muted-foreground mt-0.5 sm:mt-1.5 font-bold", children: [
                    "Landmark: ",
                    loc.landmark
                  ] })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5 sm:space-y-3 pt-2.5 sm:pt-5 border-t border-border/40", children: loc.contacts.map((contact, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5 sm:gap-4 items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `grid h-6 w-6 sm:h-9 sm:w-9 shrink-0 place-items-center rounded-lg bg-muted/50 ${contact.type === "whatsapp" ? "text-emerald-600" : "text-accent-blue"}`, children: contact.type === "whatsapp" ? /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppIcon, { className: "h-3.5 w-3.5 sm:h-5 sm:w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3.5 w-3.5 sm:h-5 sm:w-5" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[8px] min-[400px]:text-[9px] sm:text-sm font-bold text-foreground/85 flex flex-col sm:flex-row sm:items-start md:items-center w-full", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[7px] min-[400px]:text-[8px] sm:text-xs font-semibold text-muted-foreground w-auto sm:w-[130px] shrink-0", children: [
                    contact.label,
                    ":"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex flex-col sm:flex-row sm:items-start md:items-center gap-x-1 sm:gap-x-2 gap-y-0.5 mt-0.5 sm:mt-0", children: contact.values.map((val, valIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "a",
                      {
                        href: contact.hrefs[valIdx],
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "hover:text-accent-blue transition-colors cursor-pointer hover:underline",
                        children: val
                      }
                    ),
                    valIdx < contact.values.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground/50 ml-1.5 hidden sm:inline", children: "|" })
                  ] }, valIdx)) })
                ] })
              ] }, idx)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2.5 sm:mt-8 pt-2.5 sm:pt-6 border-t border-border/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: loc.mapUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                className: `w-full inline-flex items-center justify-center gap-1 sm:gap-2 rounded-full px-2 py-2 sm:px-6 sm:py-4 text-[8px] min-[400px]:text-[10px] sm:text-base font-extrabold text-white shadow-soft transition-all duration-300 hover:scale-[1.03] cursor-pointer hover:shadow-card ${loc.buttonStyle}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Navigation, { className: "h-3.5 w-3.5 sm:h-5 sm:w-5 animate-pulse" }),
                  "Get Navigation Map",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3 w-3 sm:h-4 sm:w-4 ml-0.5 sm:ml-1" })
                ]
              }
            ) })
          ]
        },
        loc.id
      )) })
    ] })
  ] });
}
export {
  AboutSection as A,
  LocationsSection as L,
  TestimonialsSection as T,
  WhyChooseSection as W
};
