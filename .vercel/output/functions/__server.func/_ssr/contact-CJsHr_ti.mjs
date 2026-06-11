import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { P as Phone, b as Mail, e as ArrowRight, U as User, G as GraduationCap, f as Pencil, g as Send, h as CircleCheck } from "../_libs/lucide-react.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const abcdImg = "/assets/abcd-CyhjO0T2.webp";
function WhatsAppIcon({
  className
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" })
  ] });
}
function ContactPage() {
  const [sent, setSent] = reactExports.useState(false);
  const [name, setName] = reactExports.useState("");
  const [phone, setPhone] = reactExports.useState("");
  const [email, setEmail] = reactExports.useState("");
  const [age, setAge] = reactExports.useState("");
  const [program, setProgram] = reactExports.useState("");
  const [selectedCard, setSelectedCard] = reactExports.useState(null);
  const [message, setMessage] = reactExports.useState("");
  const [errors, setErrors] = reactExports.useState({});
  const cardContainerVariants = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  const cardItemVariants = {
    hidden: {
      opacity: 0,
      x: -30
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 15
      }
    }
  };
  const formVariants = {
    hidden: {
      opacity: 0,
      x: 40
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 16,
        delay: 0.2
      }
    }
  };
  const handleResetForm = () => {
    setName("");
    setPhone("");
    setEmail("");
    setAge("");
    setProgram("");
    setMessage("");
    setSent(false);
    setErrors({});
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative px-4 pb-8 pt-24 sm:pt-32 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pointer-events-none overflow-hidden select-none -z-10", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "absolute text-accent-blue/10", style: {
      left: `${15 + i * 18}%`,
      top: `${10 + i % 2 * 35}%`
    }, animate: {
      y: [0, -12, 0],
      rotate: [0, 180, 360],
      scale: [0.8, 1.1, 0.8]
    }, transition: {
      duration: 8 + i * 2,
      repeat: Infinity,
      ease: "easeInOut",
      delay: i * 0.5
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", className: "h-5 w-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" }) }) }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 lg:grid-cols-12 items-start relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 space-y-10 px-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { initial: {
            opacity: 0,
            y: 15
          }, animate: {
            opacity: 1,
            y: 0
          }, transition: {
            duration: 0.6,
            delay: 0.1
          }, className: "mt-4 sm:mt-12 md:mt-[90px] text-[38px] sm:text-6xl font-bold tracking-tight font-sans text-foreground/95 leading-tight", children: [
            "Let's ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-accent-blue font-sans", children: "connect" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
            opacity: 0
          }, animate: {
            opacity: 1
          }, transition: {
            duration: 0.8,
            delay: 0.3
          }, className: "text-base text-muted-foreground leading-relaxed font-semibold", children: "We'd love to show you around. Send us an enquiry or reach out directly to schedule a campus visit." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: cardContainerVariants, initial: "hidden", animate: "show", className: "relative space-y-5", children: [
          [{
            icon: Phone,
            label: "Call Us",
            value: "0424 420 4777",
            color: "bg-red-50/80 text-accent-red shadow-[0_0_15px_rgba(239,68,68,0.1)] group-hover:scale-105 transition-all duration-300",
            arrowStyle: "w-12 h-12 rounded-full bg-gradient-to-br from-red-50 to-orange-50 text-accent-red shadow-[0_4px_12px_rgba(239,68,68,0.08)] border border-red-200/30 backdrop-blur-md group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-[0_8px_20px_rgba(239,68,68,0.15)] transition-all duration-500",
            href: "tel:+914244204777",
            cardStyle: "bg-white/60 border-white/80 hover:border-accent-red/35 hover:shadow-[0_15px_35px_rgba(239,68,68,0.08)]",
            selectedBg: "bg-white/95 border-accent-red/40 shadow-[0_15px_30px_rgba(239,68,68,0.12)] scale-[1.01]",
            selectedIconColor: "bg-accent-red/10 text-accent-red ring-4 ring-accent-red/5 scale-105",
            selectedLabelColor: "text-accent-red/80",
            selectedValColor: "text-foreground font-extrabold",
            selectedArrowStyle: "w-12 h-12 rounded-full bg-gradient-to-br from-red-100 to-orange-100/90 text-accent-red border border-red-300/45 shadow-[0_8px_22px_rgba(239,68,68,0.2)] scale-110 rotate-12 transition-all duration-500"
          }, {
            icon: Mail,
            label: "Email Us",
            value: "juniorjunctionerode@gmail.com",
            color: "bg-blue-50/80 text-accent-blue shadow-[0_0_15px_rgba(15,126,188,0.1)] group-hover:scale-105 transition-all duration-300",
            arrowStyle: "w-12 h-12 rounded-full bg-gradient-to-br from-blue-50 to-cyan-50 text-accent-blue shadow-[0_4px_12px_rgba(15,126,188,0.08)] border border-blue-200/30 backdrop-blur-md group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-[0_8px_20px_rgba(15,126,188,0.15)] transition-all duration-500",
            href: "mailto:juniorjunctionerode@gmail.com",
            cardStyle: "bg-white/60 border-white/80 hover:border-accent-blue/35 hover:shadow-[0_15px_35px_rgba(15,126,188,0.08)]",
            selectedBg: "bg-white/95 border-accent-blue/40 shadow-[0_15px_30px_rgba(15,126,188,0.12)] scale-[1.01]",
            selectedIconColor: "bg-accent-blue/10 text-accent-blue ring-4 ring-accent-blue/5 scale-105",
            selectedLabelColor: "text-accent-blue/80",
            selectedValColor: "text-foreground font-extrabold",
            selectedArrowStyle: "w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100/90 text-accent-blue border border-blue-300/45 shadow-[0_8px_22px_rgba(15,126,188,0.2)] scale-110 rotate-12 transition-all duration-500"
          }, {
            icon: WhatsAppIcon,
            label: "WhatsApp Support",
            value: "Chat on +91 97882 09034",
            color: "bg-emerald-50/80 text-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.1)] group-hover:scale-105 transition-all duration-300",
            arrowStyle: "w-12 h-12 rounded-full bg-gradient-to-br from-emerald-50 to-lime-50 text-emerald-600 shadow-[0_4px_12px_rgba(16,185,129,0.08)] border border-emerald-200/30 backdrop-blur-md group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-[0_8px_20px_rgba(16,185,129,0.15)] transition-all duration-500",
            href: "https://wa.me/919788209034",
            cardStyle: "bg-white/60 border-white/80 hover:border-emerald-500/35 hover:shadow-[0_15px_35px_rgba(16,185,129,0.08)]",
            selectedBg: "bg-white/95 border-emerald-500/40 shadow-[0_15px_30px_rgba(16,185,129,0.12)] scale-[1.01]",
            selectedIconColor: "bg-emerald-500/10 text-emerald-500 ring-4 ring-emerald-500/5 scale-105",
            selectedLabelColor: "text-emerald-600/80",
            selectedValColor: "text-foreground font-extrabold",
            selectedArrowStyle: "w-12 h-12 rounded-full bg-gradient-to-br from-emerald-100 to-lime-100/90 text-emerald-600 border border-emerald-300/45 shadow-[0_8px_22px_rgba(16,185,129,0.2)] scale-110 rotate-12 transition-all duration-500"
          }].map((c, i) => {
            const isSelected = selectedCard === i;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.a, { href: c.href, target: "_blank", rel: "noopener noreferrer", variants: cardItemVariants, whileHover: {
              y: -6,
              scale: 1.015
            }, onClick: () => setSelectedCard(isSelected ? null : i), className: `backdrop-blur-xl border rounded-[28px] p-4 sm:p-5.5 shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-all duration-500 flex items-center justify-between z-10 relative group min-w-0 ${isSelected ? c.selectedBg : c.cardStyle}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 sm:gap-4 min-w-0 flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `grid h-12 w-12 shrink-0 place-items-center rounded-full transition-all duration-300 ${isSelected ? c.selectedIconColor : c.color}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "h-5.5 w-5.5" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5 min-w-0 flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] font-extrabold uppercase tracking-wider block transition-all duration-300 ${isSelected ? c.selectedLabelColor : "text-muted-foreground/60"}`, children: c.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-xs min-[375px]:text-sm sm:text-base font-bold leading-tight break-all transition-all duration-300 ${isSelected ? c.selectedValColor : "text-foreground/80"}`, children: c.value })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `grid place-items-center rounded-full transition-all duration-300 ${isSelected ? c.selectedArrowStyle : c.arrowStyle}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" }) })
            ] }, i);
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: cardItemVariants, whileHover: {
            y: -6,
            scale: 1.02
          }, className: "bg-white/80 backdrop-blur-xl rounded-[28px] p-5.5 border-2 golden-border shadow-[0_12px_35px_rgba(15,126,188,0.06)] hover:shadow-[0_20px_45px_rgba(15,126,188,0.1)] transition-all duration-500 flex items-center justify-around text-center relative overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "absolute -left-10 -top-10 h-32 w-32 bg-accent-blue/5 rounded-full blur-2xl pointer-events-none", animate: {
              scale: [0.9, 1.1, 0.9],
              opacity: [0.3, 0.5, 0.3]
            }, transition: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 relative z-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { animate: {
                y: [0, -3, 0]
              }, transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }, className: "text-lg filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.05)]", children: "⭐" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-extrabold text-foreground text-base sm:text-lg leading-none tracking-tight", children: "500+" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase tracking-wider text-muted-foreground/80 font-extrabold mt-1", children: "Happy Parents" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-px h-8 bg-accent-blue/15 relative z-10" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 relative z-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { animate: {
                y: [0, -3, 0]
              }, transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }, className: "text-lg filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.05)]", children: "📍" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-extrabold text-foreground text-base sm:text-lg leading-none tracking-tight", children: "Admissions Open" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase tracking-wider text-muted-foreground/80 font-extrabold mt-1", children: "Erode Campus" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shine pointer-events-none" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: formVariants, initial: "hidden", animate: "show", className: "mt-6 sm:mt-16 md:mt-[110px] bg-white/70 backdrop-blur-xl border-4 sm:border-[6px] golden-border rounded-[28px] sm:rounded-[36px] p-4.5 sm:p-10 shadow-[0_20px_50px_-15px_rgba(15,126,188,0.12)] z-10 w-full min-h-[580px] flex flex-col justify-center relative overflow-visible", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: abcdImg, alt: "Enquiry Decoration", className: "absolute -top-[130px] right-4 w-56 h-48 object-contain z-20 pointer-events-none hidden sm:block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: !sent ? /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.form, { initial: {
          opacity: 1
        }, exit: {
          opacity: 0,
          y: -20
        }, transition: {
          duration: 0.4
        }, noValidate: true, onSubmit: (e) => {
          e.preventDefault();
          const newErrors = {};
          if (!name.trim()) newErrors.name = "Please enter your name";
          if (!program) newErrors.program = "Please select a program interest";
          if (!message.trim()) newErrors.message = "Please enter your message or query";
          if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
          }
          setErrors({});
          setSent(true);
          const subject = `Enquiry from ${name} - Junior Junction Play School`;
          const body = `Parent Name: ${name}
Program Interest: ${program}

Message/Query:
${message}`;
          window.location.href = `mailto:juniorjunctionerode@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        }, className: "space-y-6 text-left w-full flex flex-col justify-between flex-1 relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-[10px] text-2xl font-bold tracking-tight text-foreground/90 font-sans", children: "Send an enquiry" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/80 font-semibold mt-1", children: "Fill in your details and we'll get back to you within one working day." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(PremiumInput, { icon: User, placeholder: "Parent Name", name: "name", value: name, onChange: (val) => {
              setName(val);
              if (errors.name) setErrors((prev) => ({
                ...prev,
                name: void 0
              }));
            }, error: errors.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-sm font-semibold text-foreground/80 tracking-wide block flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-4.5 w-4.5 text-foreground/70" }),
                "Program Interest"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 sm:gap-2.5", children: ["Toddler", "Play Group", "Pre-KG", "LKG", "UKG"].map((prog) => {
                const isSelected = program === prog;
                return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.button, { type: "button", onClick: () => {
                  setProgram(prog);
                  if (errors.program) setErrors((prev) => ({
                    ...prev,
                    program: void 0
                  }));
                }, whileHover: {
                  y: -2,
                  scale: 1.03
                }, whileTap: {
                  scale: 0.97
                }, className: `px-3.5 py-3 min-[375px]:px-4.5 min-[375px]:py-3.5 rounded-full border text-xs min-[375px]:text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer outline-none ${isSelected ? "bg-accent-blue text-white border-accent-blue shadow-lg shadow-accent-blue/20 scale-[1.03]" : errors.program ? "bg-white text-accent-red border-accent-red/45 hover:bg-red-50/10 shadow-sm" : "bg-white/70 text-foreground/75 border-[#E5EFFF] hover:border-accent-blue/30 hover:text-accent-blue hover:bg-blue-50/10 shadow-sm"}`, children: prog }, prog);
              }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: errors.program && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.p, { initial: {
                opacity: 0,
                y: -5
              }, animate: {
                opacity: 1,
                y: 0
              }, exit: {
                opacity: 0,
                y: -5
              }, className: "text-xs text-accent-red font-semibold flex items-center gap-1.5 ml-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-accent-red animate-pulse" }),
                errors.program
              ] }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(PremiumTextarea, { icon: Pencil, placeholder: "Message or Query", name: "message", value: message, onChange: (val) => {
              setMessage(val);
              if (errors.message) setErrors((prev) => ({
                ...prev,
                message: void 0
              }));
            }, error: errors.message })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.button, { type: "submit", whileHover: {
            scale: 1.02,
            y: -1
          }, whileTap: {
            scale: 0.98
          }, animate: {
            boxShadow: ["0 4px 14px 0 rgba(220, 38, 38, 0.2)", "0 4px 22px 6px rgba(220, 38, 38, 0.35)", "0 4px 14px 0 rgba(220, 38, 38, 0.2)"]
          }, transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }, className: "w-full relative overflow-hidden group rounded-full bg-accent-red py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-accent-red/95 cursor-pointer flex items-center justify-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative z-10 flex items-center justify-center gap-2", children: [
              "Submit Enquiry ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine" })
          ] }) })
        ] }, "form") : /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          scale: 0.9
        }, animate: {
          opacity: 1,
          scale: 1
        }, transition: {
          type: "spring",
          stiffness: 100,
          damping: 15
        }, className: "flex flex-col items-center justify-center py-10 text-center relative w-full flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 top-10 pointer-events-none select-none overflow-hidden", children: [{
            left: "12%",
            delay: "0s",
            size: "h-2 w-2"
          }, {
            left: "32%",
            delay: "0.5s",
            size: "h-3 w-3"
          }, {
            left: "68%",
            delay: "0.2s",
            size: "h-1.5 w-1.5"
          }, {
            left: "88%",
            delay: "0.8s",
            size: "h-2.5 w-2.5"
          }].map((p, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute bottom-0 rounded-full bg-accent-blue/15 animate-bubble-particle ${p.size}`, style: {
            left: p.left,
            animationDelay: p.delay
          } }, idx)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full bg-accent-blue/5 blur-xl animate-ping", style: {
              animationDuration: "3s"
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-16 w-16 text-accent-blue animate-success-pop shadow-soft" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold font-sans text-accent-blue leading-tight", children: "Thank You!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground font-semibold max-w-sm leading-relaxed", children: "Thank you for your admissions enquiry. Our admissions team has received your request and will get in touch with you within one working day." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.button, { whileHover: {
            scale: 1.02
          }, whileTap: {
            scale: 0.98
          }, onClick: handleResetForm, className: "mt-8 rounded-full border border-border bg-white px-6 py-2.5 text-xs font-semibold text-muted-foreground shadow-soft hover:bg-foreground hover:text-background transition-all cursor-pointer z-10", children: "Send Another Enquiry" })
        ] }, "success") })
      ] }) })
    ] }) })
  ] });
}
function PremiumInput({
  icon: Icon,
  placeholder,
  name,
  type = "text",
  value,
  onChange,
  error
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 w-full group", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-3.5 bg-white/75 backdrop-blur-md border rounded-full px-6 py-[18px] focus-within:scale-[1.02] transition-all duration-300 outline-none ${error ? "border-accent-red focus-within:border-accent-red focus-within:shadow-[0_0_20px_rgba(220,38,38,0.12)]" : "border-[#E5EFFF] focus-within:border-accent-blue focus-within:shadow-[0_0_20px_rgba(15,126,188,0.12)]"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `h-5 w-5 shrink-0 transition-all duration-300 group-focus-within:scale-110 group-focus-within:rotate-3 ${error ? "text-accent-red/70" : "text-accent-blue/70"}` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type, name, value, onChange: (e) => onChange(e.target.value), placeholder, className: "w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground/60 outline-none" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: error && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.p, { initial: {
      opacity: 0,
      y: -5
    }, animate: {
      opacity: 1,
      y: 0
    }, exit: {
      opacity: 0,
      y: -5
    }, className: "text-xs text-accent-red font-semibold flex items-center gap-1.5 ml-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-accent-red animate-pulse" }),
      error
    ] }) })
  ] });
}
function PremiumTextarea({
  icon: Icon,
  placeholder,
  name,
  value,
  onChange,
  error
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 w-full group", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-start gap-3.5 bg-white/75 backdrop-blur-md border rounded-[28px] px-6 py-[20px] focus-within:scale-[1.02] transition-all duration-300 outline-none ${error ? "border-accent-red focus-within:border-accent-red focus-within:shadow-[0_0_20px_rgba(220,38,38,0.12)]" : "border-[#E5EFFF] focus-within:border-accent-blue focus-within:shadow-[0_0_20px_rgba(15,126,188,0.12)]"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `h-5 w-5 shrink-0 mt-0.5 transition-all duration-300 group-focus-within:scale-110 group-focus-within:rotate-3 ${error ? "text-accent-red/70" : "text-accent-blue/70"}` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { name, rows: 4, value, onChange: (e) => onChange(e.target.value), placeholder, className: "w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground/60 outline-none resize-none" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: error && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.p, { initial: {
      opacity: 0,
      y: -5
    }, animate: {
      opacity: 1,
      y: 0
    }, exit: {
      opacity: 0,
      y: -5
    }, className: "text-xs text-accent-red font-semibold flex items-center gap-1.5 ml-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-accent-red animate-pulse" }),
      error
    ] }) })
  ] });
}
export {
  ContactPage as component
};
