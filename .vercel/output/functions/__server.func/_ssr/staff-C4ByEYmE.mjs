import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { A as Award, H as Heart, G as GraduationCap, U as User, B as BookOpen, S as Sparkles } from "../_libs/lucide-react.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const staff1 = "/assets/staff_1-MGYsFYGS.webp";
const staff2 = "/assets/staff_2-C__idaWG.webp";
const staff3 = "/assets/staff_3-BnL5EILo.webp";
const staff4 = "/assets/staff_4-DWfuP__Y.webp";
const staff5 = "/assets/staff_5-l2UM-o0E.webp";
const staff6 = "/assets/staff_6-Cx3R0y95.webp";
const t1 = "/assets/t-1-DwXajDhz.webp";
const t2 = "/assets/t-2-pCILfzVJ.webp";
const t3 = "/assets/t-3-DxTqa-nv.webp";
const t4 = "/assets/t-4-VaVkSC9e.webp";
const t5 = "/assets/t-5-BS8RdUZN.webp";
const t6 = "/assets/t-6-DSYSONJZ.webp";
const t7 = "/assets/t-7-DHZ2kDqS.webp";
const leadershipStaff = [{
  id: 5,
  name: "Mr. Raghupathi Arumugam",
  role: "Founder",
  qualifications: ["B.E.", "Managing Director"],
  experience: "12+ Years",
  philosophy: "Providing children with a safe space to grow, explore, and build lifelong learning foundations.",
  image: staff5,
  themeColor: "from-accent-red/10 via-accent-red/[0.02] to-transparent",
  glowColor: "group-hover:shadow-accent-red/15",
  badgeBg: "bg-white border-accent-red/80",
  badgeText: "text-accent-red",
  icon: Award,
  specialties: ["Institutional Vision", "Child Safety Infrastructure", "Community Relations"],
  rotationClass: "hover:rotate-1"
}, {
  id: 3,
  name: "Mrs. R. Preethi",
  role: "Principal",
  qualifications: ["B.COM (CA)", "B.Sc Psychology ( Montessori Trained)"],
  experience: "8+ Years",
  philosophy: "Every child is a unique blossom. We nurture them with love, guidance, and active play.",
  image: staff3,
  themeColor: "from-accent-red/10 via-accent-red/[0.02] to-transparent",
  glowColor: "group-hover:shadow-accent-red/15",
  badgeBg: "bg-white border-accent-red/80",
  badgeText: "text-accent-red",
  icon: Heart,
  specialties: ["Academic Development", "Child Behavior & Guidance", "Teacher Mentorship"],
  rotationClass: "hover:-rotate-1"
}];
const teamStaff = [{
  id: 4,
  name: "Mr. R. Rajesh",
  role: "Administrative Officer (AO)",
  qualifications: ["MBA (Operations & Admin)"],
  experience: "6+ Years",
  philosophy: "Ensuring a seamless, supportive, and joyful environment for our staff and little learners.",
  image: staff4,
  themeColor: "from-accent-blue/10 via-accent-blue/[0.02] to-transparent",
  glowColor: "group-hover:shadow-accent-blue/15",
  badgeBg: "bg-white border-accent-blue/80",
  badgeText: "text-accent-blue",
  icon: User,
  specialties: ["School Operations", "Event Planning", "Parent Coordinator"],
  rotationClass: "hover:rotate-2"
}, {
  id: 6,
  name: "Mrs. Ayisha Nihara",
  role: "Montessori Teacher",
  qualifications: ["B.A. (English)", "MTTC & PPTTC Certified", "CPPTTC (Child Psychology)", "Dip. Computerized Financial Accounting"],
  experience: "5+ Years",
  philosophy: "Language and expression are the keys to a child's confidence. We learn by sharing.",
  image: staff6,
  themeColor: "from-accent-blue/10 via-accent-blue/[0.02] to-transparent",
  glowColor: "group-hover:shadow-accent-blue/15",
  badgeBg: "bg-white border-accent-blue/80",
  badgeText: "text-accent-blue",
  icon: BookOpen,
  specialties: ["Pre-Primary Phonics", "Language Arts", "Fine Motor Play"],
  rotationClass: "hover:-rotate-2"
}, {
  id: 2,
  name: "Mrs. V Haripriya",
  role: "Kindergarten Teacher",
  qualifications: ["D.El.Ed (Diploma in Elementary Ed.)"],
  experience: "4+ Years",
  philosophy: "Fostering active engagement and curiosity. Learning happens best when hands-on.",
  image: staff2,
  themeColor: "from-accent-blue/10 via-accent-blue/[0.02] to-transparent",
  glowColor: "group-hover:shadow-accent-blue/15",
  badgeBg: "bg-white border-accent-blue/80",
  badgeText: "text-accent-blue",
  icon: GraduationCap,
  specialties: ["Sensory Mathematics", "Early Numbers", "Rhymes & Rhythm"],
  rotationClass: "hover:rotate-1"
}, {
  id: 1,
  name: "Mrs. Aishwarya G",
  role: "Play Group Teacher",
  qualifications: ["Montessori Trained", "Nursery Educator"],
  experience: "3+ Years",
  philosophy: "Joyful beginnings in a child's first steps away from home. Play is our language.",
  image: staff1,
  themeColor: "from-accent-blue/10 via-accent-blue/[0.02] to-transparent",
  glowColor: "group-hover:shadow-accent-blue/15",
  badgeBg: "bg-white border-accent-blue/80",
  badgeText: "text-accent-blue",
  icon: Sparkles,
  specialties: ["Social Adaptation", "Craft & Clay Play", "Creative Storytelling"],
  rotationClass: "hover:-rotate-1"
}];
const slidingImages = [t1, t2, t3, t4, t5, t6, t7];
function StaffPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen px-4 pb-20 pt-28 sm:pt-36 md:pt-40 bg-gradient-to-br from-[#FFFDF8] via-[#F7FAFC] to-[#FFF4F6] overflow-hidden flex flex-col justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute left-0 top-0 -z-10 h-[600px] w-[600px] rounded-full bg-accent-blue/[0.04] blur-[120px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute right-0 bottom-0 -z-10 h-[600px] w-[600px] rounded-full bg-accent-red/[0.03] blur-[120px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "mx-auto max-w-3xl w-full text-center mb-16 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { initial: {
      opacity: 0,
      y: 15
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      duration: 0.6
    }, className: "text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-neutral-800 leading-tight", children: [
      "Meet the Team Behind ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "Our ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent-red font-light italic", children: "Junior Junction" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "mx-auto max-w-7xl w-full flex-1 px-2 relative z-10 space-y-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-left mb-6 pl-4 border-l-4 border-accent-red", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-black uppercase text-neutral-450 tracking-widest leading-none", children: "School Leadership" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: leadershipStaff.map((member, index) => {
          member.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            y: 35
          }, animate: {
            opacity: 1,
            y: 0
          }, transition: {
            type: "spring",
            stiffness: 200,
            damping: 24,
            delay: index * 0.1
          }, className: `group relative rounded-[28px] sm:rounded-[36px] border border-neutral-200/50 shadow-soft hover:shadow-float p-4.5 sm:p-8 flex flex-row gap-4 sm:gap-6 items-center sm:items-stretch overflow-hidden transition-all duration-500 cursor-default ${member.rotationClass} ${member.glowColor}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-white -z-10" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-0 bg-gradient-to-br ${member.themeColor} -z-10` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 right-4 h-3 w-3 rounded-full bg-neutral-200 group-hover:bg-accent-red transition-colors duration-300" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-square h-20 w-20 min-[375px]:h-24 min-[375px]:w-24 sm:h-[180px] sm:w-[180px] rounded-full sm:rounded-[24px] overflow-hidden border-2 sm:border-4 border-white shadow-soft bg-white group-hover:scale-[1.02] transition-transform duration-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: member.image, alt: member.name, loading: "lazy", width: 180, height: 180, className: "w-full h-full object-cover object-top" }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex flex-col justify-center sm:justify-between text-left", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 sm:mb-3.5 select-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-lg sm:rounded-xl text-[10px] sm:text-xs md:text-sm font-black tracking-widest whitespace-nowrap uppercase border-2 shadow-[2px_2px_0px_rgba(0,0,0,0.12)] sm:shadow-[3px_3px_0px_rgba(0,0,0,0.12)] transform ${index % 2 === 0 ? "-rotate-1.5" : "rotate-1.5"} hover:rotate-0 transition-transform duration-300 ${member.badgeBg} ${member.badgeText}`, children: member.role }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm min-[375px]:text-base sm:text-xl font-black text-neutral-800 tracking-tight leading-snug group-hover:text-accent-red transition-colors duration-300", children: member.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-start gap-1 mt-1.5 sm:mt-3", children: member.qualifications.map((q) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-[9px] min-[375px]:text-[10px] sm:text-xs font-semibold text-neutral-600 bg-neutral-50/65 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full border border-neutral-200/50 shadow-[1px_1px_2px_rgba(0,0,0,0.02)] select-none", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: `h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 ${member.badgeText}` }),
                q
              ] }, q)) })
            ] }) })
          ] }, member.id);
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-6 pt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-left mb-6 pl-4 border-l-4 border-sky-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-black uppercase text-neutral-450 tracking-widest leading-none", children: "Academic & Administrative Officers" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: teamStaff.map((member, index) => {
          member.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            y: 35
          }, animate: {
            opacity: 1,
            y: 0
          }, transition: {
            type: "spring",
            stiffness: 180,
            damping: 22,
            delay: 0.2 + index * 0.1
          }, className: `group relative rounded-[28px] md:rounded-[32px] border border-neutral-200/50 shadow-soft hover:shadow-float p-4.5 md:p-5 flex flex-col justify-between overflow-hidden transition-all duration-500 cursor-default ${member.rotationClass} ${member.glowColor}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-white -z-10" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-0 bg-gradient-to-br ${member.themeColor} -z-10` }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row md:flex-col gap-4 md:gap-0 w-full items-center md:items-stretch", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-square h-20 w-20 min-[375px]:h-24 min-[375px]:w-24 md:h-auto md:w-full shrink-0 rounded-full md:rounded-2xl overflow-hidden border-2 md:border border-white md:border-neutral-200/50 shadow-soft bg-white mb-0 md:mb-5 group-hover:border-neutral-300/60 transition-colors duration-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: member.image, alt: member.name, loading: "lazy", width: 300, height: 300, className: "w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-102" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 text-left px-0 md:px-1 flex flex-col justify-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 md:mb-3 select-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-block px-3 py-1 rounded-lg text-[9px] min-[375px]:text-[10px] md:text-[11px] font-black tracking-wider whitespace-nowrap uppercase border-2 shadow-[2px_2px_0px_rgba(0,0,0,0.12)] transform ${index % 2 === 0 ? "rotate-1.5" : "-rotate-1.5"} hover:rotate-0 transition-transform duration-300 ${member.badgeBg} ${member.badgeText}`, children: member.role }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm min-[375px]:text-base md:text-lg font-black text-neutral-800 tracking-tight leading-snug group-hover:text-accent-blue transition-colors duration-300", children: member.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-start gap-1 mt-1.5 md:mt-3", children: member.qualifications.map((q) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-[9px] min-[375px]:text-[10px] font-semibold text-neutral-600 bg-neutral-50/65 px-2.5 py-1 rounded-full border border-neutral-200/50 shadow-[1px_1px_2px_rgba(0,0,0,0.02)] select-none", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: `h-2.5 w-2.5 md:h-3 md:w-3 ${member.badgeText}` }),
                  q
                ] }, q)) })
              ] })
            ] })
          ] }, member.id);
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-12 border-t border-neutral-200/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full overflow-hidden rounded-[32px] border border-neutral-200/50 bg-white/40 p-4 backdrop-blur-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#FFFDF8] via-[#FFFDF8]/80 to-transparent rounded-l-[32px]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#FFFDF8] via-[#FFFDF8]/80 to-transparent rounded-r-[32px]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-marquee flex w-max gap-6 px-4", children: [...slidingImages, ...slidingImages].map((imgSrc, i) => {
          const isSquare = i % 2 === 0;
          return /* @__PURE__ */ jsxRuntimeExports.jsx("figure", { className: `group relative shrink-0 overflow-hidden rounded-[24px] border-[4px] golden-border shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-float bg-white ${isSquare ? "w-[240px] sm:w-[300px] aspect-square" : "w-[320px] sm:w-[400px] aspect-[4/3]"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: imgSrc, alt: "Life at Junior Junction", loading: "lazy", width: isSquare ? 300 : 400, height: 300, className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" }) }, i);
        }) }) })
      ] }) })
    ] })
  ] });
}
export {
  StaffPage as component
};
