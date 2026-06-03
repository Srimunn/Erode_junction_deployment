import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Monitor,
  Sparkles,
  ShieldCheck,
  Video,
  HeartHandshake,
  GraduationCap,
  Star,
  ArrowLeft,
  ArrowRight,
  Heart,
} from "lucide-react";
import aboutImg from "@/assets/about-classroom.jpg";
import img2 from "@/assets/hero-2-play.jpg";
import ab12Img from "@/assets/ab_12.jpg";
import tomHomeImg from "@/assets/tom_home.png";

const aboutPoints = [
  {
    icon: GraduationCap,
    color: "text-accent-blue bg-accent-blue/[0.07] border-accent-blue/15",
    title: "Curiosity-Led Curriculum",
    desc: "Activity-first learning built around natural wonder and exploration.",
  },
  {
    icon: Heart,
    color: "text-accent-red bg-accent-red/[0.07] border-accent-red/15",
    title: "Caring & Attentive Educators",
    desc: "Trained teachers dedicating individual attention with low student ratios.",
  },
  {
    icon: ShieldCheck,
    color: "text-emerald-600 bg-emerald-500/[0.07] border-emerald-500/15",
    title: "Secure & Child-First Campus",
    desc: "A safe, CCTV-monitored environment custom-tailored for little feet.",
  },
];

export function AboutSection() {
  return (
    <section className="relative overflow-hidden px-4 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
        {/* Left Column: Visual Overlapping Collage */}
        <div className="relative group">
          {/* Faint ambient background glows */}
          <div className="pointer-events-none absolute -left-10 -top-10 -z-10 h-72 w-72 rounded-full bg-accent-blue/10 blur-3xl animate-float-slow" />
          <div className="pointer-events-none absolute -right-10 -bottom-10 -z-10 h-72 w-72 rounded-full bg-accent-red/10 blur-3xl animate-float" />

          {/* Main classroom image with elegant border */}
          <div className="overflow-hidden rounded-[40px] shadow-float border-[6px] golden-border bg-white p-2">
            <img
              src={aboutImg}
              alt="Bright modern preschool classroom"
              width={1024}
              height={1024}
              loading="lazy"
              className="aspect-square w-full object-cover rounded-[32px] transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>

          {/* Overlapping secondary floating card (Play Time) */}
          <motion.div
            whileHover={{ scale: 1.04, rotate: 1 }}
            className="absolute -bottom-8 -right-4 hidden rounded-[28px] border-2 golden-border bg-white/90 backdrop-blur-md p-3.5 shadow-float sm:flex items-center gap-4 max-w-[285px] z-10 cursor-pointer"
          >
            <div className="h-16 w-16 rounded-full overflow-hidden shrink-0 shadow-soft border-2 golden-border">
              <img src={ab12Img} alt="Kids playing" className="h-full w-full object-cover" />
            </div>
            <div>
              <div className="text-3xl font-extrabold text-accent-red font-sans leading-none">
                12+
              </div>
              <div className="text-[11px] font-bold text-muted-foreground mt-1.5 leading-tight">
                Years of joyful learning & growth
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Upgraded Content Card Grid */}
        <div className="flex flex-col items-start text-left">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.15] text-foreground/95">
            About <span className="italic text-accent-red font-sans">Junior Junction</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground/80 leading-relaxed font-light">
            A safe, nurturing, and activity-based preschool in the heart of Erode. We blend play,
            exploration, and gentle structure so every child discovers their unique spark.
          </p>

          {/* Clean upgraded feature cards */}
          <div className="mt-8 space-y-4 w-full">
            {aboutPoints.map((point) => (
              <div
                key={point.title}
                className="flex gap-4 p-4.5 rounded-2xl border border-border/50 bg-card/40 hover:bg-card hover:border-border transition-all duration-300 hover:shadow-soft group cursor-default"
              >
                <div
                  className={`grid h-12 w-12 place-items-center rounded-xl shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 border ${point.color}`}
                >
                  <point.icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground/90 text-base">{point.title}</h4>
                  <p className="text-sm text-muted-foreground/80 mt-1 leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Link
            to="/about"
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-foreground hover:bg-foreground/90 px-8 py-4 text-base font-bold text-background transition-all duration-300 hover:scale-[1.03] shadow-soft hover:shadow-card cursor-pointer"
          >
            Learn more about us
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

const experiences = [
  { title: "Toddler", desc: "Sensory exploration and early socialization.", tag: "Age 1.0–1.5" },
  {
    title: "Play Group",
    desc: "Gentle first steps for our youngest learners.",
    tag: "Age 1.5–2.5",
  },
  { title: "Pre-KG", desc: "Sensory play, songs and early social skills.", tag: "Age 2.5–3.5" },
  { title: "LKG", desc: "Letters, numbers and creative discovery.", tag: "Age 3.5–4.5" },
  { title: "UKG", desc: "Confident readers, writers, thinkers.", tag: "Age 4.5–5.5" },
  { title: "Art & Craft", desc: "Hands-on creativity every week.", tag: "Activity" },
  { title: "Dance & Music", desc: "Rhythm, expression, joy.", tag: "Activity" },
  { title: "Story Time", desc: "Imagination through beautiful stories.", tag: "Daily" },
  { title: "Outdoor Play", desc: "Fresh air, friends and adventure.", tag: "Daily" },
  { title: "Sports", desc: "Coordination through fun games.", tag: "Weekly" },
  { title: "Digital Learning", desc: "Smart, age-appropriate screen time.", tag: "Modern" },
];

export function ExperiencesSection() {
  return (
    <section className="px-4 py-20 bg-gradient-to-b from-transparent via-soft/30 to-transparent">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">
              Learning <span className="italic text-accent-blue font-sans">Experiences</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              One thoughtful curriculum — combining structured programs and joyful activities into a
              complete day of discovery.
            </p>
          </div>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            ← swipe to explore
          </p>
        </div>

        <div className="-mx-4 mt-10 overflow-hidden">
          <div className="flex w-max gap-5 px-4 animate-marquee">
            {[...experiences, ...experiences].map((e, i) => {
              const isEven = i % 2 === 0;
              const borderHover = isEven
                ? "hover:border-accent-red/20"
                : "hover:border-accent-blue/20";
              const tagBg = isEven
                ? "bg-accent-red/10 text-accent-red"
                : "bg-accent-blue/10 text-accent-blue";

              return (
                <article
                  key={i}
                  className={`group flex w-[280px] shrink-0 flex-col justify-between rounded-3xl border border-border/80 bg-card/65 backdrop-blur-sm p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-float ${borderHover} hover:bg-card`}
                >
                  <div>
                    <span
                      className={`inline-block rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${tagBg}`}
                    >
                      {e.tag}
                    </span>
                    <h3 className="mt-4 text-2xl font-normal tracking-tight">{e.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <span
                      className={`h-1 w-10 rounded-full transition-all group-hover:w-16 ${isEven ? "bg-accent-red" : "bg-accent-blue"}`}
                    />
                    <span className="text-xs font-semibold text-foreground/50">0{(i % 9) + 1}</span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: Monitor,
    title: "Digital Classroom",
    desc: "Interactive smart boards bring visual lessons to life.",
    color: "text-accent-blue bg-accent-blue/[0.08] border-accent-blue/15",
    hoverGlow: "hover:shadow-accent-blue/10",
  },
  {
    icon: Sparkles,
    title: "Activity-Based Learning",
    desc: "Hands-on play and exploration tasks built around curiosity.",
    color: "text-accent-red bg-accent-red/[0.08] border-accent-red/15",
    hoverGlow: "hover:shadow-accent-red/10",
  },
  {
    icon: ShieldCheck,
    title: "Safe Environment",
    desc: "Child-proofed indoor and outdoor facilities designed with care.",
    color: "text-emerald-600 bg-emerald-500/[0.08] border-emerald-500/15",
    hoverGlow: "hover:shadow-emerald-500/10",
  },
  {
    icon: Video,
    title: "CCTV Security",
    desc: "Full-campus security camera monitoring for parents' peace of mind.",
    color: "text-indigo-600 bg-indigo-500/[0.08] border-indigo-500/15",
    hoverGlow: "hover:shadow-indigo-500/10",
  },
  {
    icon: HeartHandshake,
    title: "Individual Attention",
    desc: "Low teacher-student ratios ensuring every child is seen and heard.",
    color: "text-rose-500 bg-rose-500/[0.08] border-rose-500/15",
    hoverGlow: "hover:shadow-rose-500/10",
  },
  {
    icon: GraduationCap,
    title: "Experienced Teachers",
    desc: "Warm, qualified, and joyful educators passionate about early years.",
    color: "text-amber-600 bg-amber-500/[0.08] border-amber-500/15",
    hoverGlow: "hover:shadow-amber-500/10",
  },
];

export function WhyChooseSection() {
  return (
    <section className="px-4 py-24 relative overflow-hidden">
      {/* Background Ambient Radial Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-accent-blue/[0.015] blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-4 text-4xl leading-tight sm:text-5xl font-extrabold tracking-tight">
            Built with <span className="italic text-accent-red font-sans">care</span>, for little
            hearts
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <motion.div
              key={f.title}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              className={`group relative rounded-3xl border border-border/70 bg-white/70 backdrop-blur-md p-8 shadow-soft transition-all duration-300 hover:bg-white hover:border-border hover:shadow-float ${f.hoverGlow}`}
            >
              {/* Colored Top Accent Bar */}
              <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-accent-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div
                className={`grid h-12 w-12 place-items-center rounded-2xl border transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${f.color}`}
              >
                <f.icon className="h-5 w-5" />
              </div>

              <h3 className="mt-6 text-xl font-bold tracking-tight text-foreground/90">
                {f.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground/85 font-light">
                {f.desc}
              </p>

              {/* Floating tiny dot accent */}
              <div className="absolute bottom-4 right-4 h-1.5 w-1.5 rounded-full bg-border group-hover:bg-accent-blue group-hover:scale-125 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: "Priya R.",
    role: "Parent of Aanya, UKG",
    text: "My daughter sings about school every morning. The teachers are so warm and the activities keep her excited to learn.",
    rating: 5,
    initials: "PR",
    badgeColor: "text-accent-red bg-accent-red/[0.08] border-accent-red/15",
  },
  {
    name: "Karthik M.",
    role: "Parent of Vihaan, LKG",
    text: "Beautiful campus and a team that truly knows each child. Junior Junction feels like a second home for our son.",
    rating: 5,
    initials: "KM",
    badgeColor: "text-accent-blue bg-accent-blue/[0.08] border-accent-blue/15",
  },
  {
    name: "Divya S.",
    role: "Parent of Meera, Pre-KG",
    text: "From the safe environment to the thoughtful curriculum, every detail shows how much they care. Highly recommend.",
    rating: 5,
    initials: "DS",
    badgeColor: "text-emerald-600 bg-emerald-500/[0.08] border-emerald-500/15",
  },
];

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [index, isHovered]);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-soft/50 via-background to-soft/50 px-4 py-24 border-y border-border/40"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Ambient Radial Glows */}
      <div className="pointer-events-none absolute left-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-accent-blue/[0.02] blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute right-0 bottom-1/4 -z-10 h-96 w-96 rounded-full bg-accent-red/[0.02] blur-3xl animate-float" />

      <div className="mx-auto max-w-4xl px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-4xl leading-tight sm:text-5xl font-extrabold tracking-tight">
            What <span className="italic text-accent-blue font-sans">Parents Say</span>
          </h2>
          <p className="mt-4 text-muted-foreground/80 text-base sm:text-lg font-light">
            Hear from the families who make our preschool community so special
          </p>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative">
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-3xl border-[6px] golden-border bg-white/70 backdrop-blur-md p-8 sm:p-12 shadow-soft hover:bg-white hover:shadow-float">
            {/* Elegant decorative background quote mark */}
            <span className="select-none pointer-events-none absolute top-4 right-8 text-[160px] font-serif leading-none text-muted-foreground/[0.05]">
              &ldquo;
            </span>

            <div className="overflow-hidden w-full relative z-10">
              {/* Sliding Track */}
              <motion.div
                animate={{ x: `-${index * 100}%` }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                className="flex w-full"
              >
                {testimonials.map((t, idx) => {
                  const isActive = idx === index;
                  return (
                    <div
                      key={t.name}
                      className="w-full shrink-0 flex flex-col justify-between min-h-[220px] sm:min-h-[180px] px-1"
                    >
                      <motion.div
                        animate={{
                          opacity: isActive ? 1 : 0,
                          y: isActive ? 0 : 10,
                          scale: isActive ? 1 : 0.98,
                        }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      >
                        {/* Stars */}
                        <div className="flex gap-0.5 text-amber-400/90">
                          {Array.from({ length: t.rating }).map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current" />
                          ))}
                        </div>

                        <blockquote className="mt-8 text-base sm:text-lg leading-relaxed text-foreground/80 font-normal italic">
                          &ldquo;{t.text}&rdquo;
                        </blockquote>
                      </motion.div>

                      <motion.div
                        animate={{
                          opacity: isActive ? 1 : 0,
                          y: isActive ? 0 : 15,
                        }}
                        transition={{ duration: 0.4, delay: 0.08, ease: "easeOut" }}
                      >
                        {/* Delicate Divider Line */}
                        <div className="h-[1px] w-full bg-border/40 my-8" />

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                          <figcaption className="flex items-center gap-3.5">
                            <div
                              className={`h-11 w-11 rounded-full flex items-center justify-center font-bold text-sm border ${t.badgeColor}`}
                            >
                              {t.initials}
                            </div>
                            <div>
                              <div className="text-sm sm:text-base font-bold tracking-tight text-foreground/90">
                                {t.name}
                              </div>
                              <div className="text-xs sm:text-sm text-muted-foreground/80 font-medium">
                                {t.role}
                              </div>
                            </div>
                          </figcaption>

                          {/* Navigation Buttons inline on desktop */}
                          <div className="flex items-center gap-2 self-end sm:self-center">
                            <button
                              onClick={handlePrev}
                              className="group/btn h-10 w-10 rounded-full border border-border/80 bg-white/50 hover:bg-white hover:border-accent-blue/30 flex items-center justify-center shadow-soft hover:shadow-float active:scale-95 transition-all duration-200 cursor-pointer"
                              aria-label="Previous testimonial"
                            >
                              <ArrowLeft className="h-4 w-4 text-muted-foreground group-hover/btn:text-accent-blue transition-colors duration-200" />
                            </button>
                            <button
                              onClick={handleNext}
                              className="group/btn h-10 w-10 rounded-full border border-border/80 bg-white/50 hover:bg-white hover:border-accent-blue/30 flex items-center justify-center shadow-soft hover:shadow-float active:scale-95 transition-all duration-200 cursor-pointer"
                              aria-label="Next testimonial"
                            >
                              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover/btn:text-accent-blue transition-colors duration-200" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>

          {/* Floating Mascot Tom */}
          <motion.img
            src={tomHomeImg}
            alt="Tom Mascot"
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-[100px] -bottom-[1px] h-70 w-auto z-20 pointer-events-none hidden md:block"
          />
        </div>

        {/* Carousel Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                i === index ? "w-6 bg-accent-blue" : "w-2 bg-border hover:bg-muted-foreground/30"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
