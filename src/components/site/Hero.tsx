import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Heart } from "lucide-react";
import img1 from "@/assets/hero-1-learning.webp";
import img2 from "@/assets/hero-2-play.webp";
import img3 from "@/assets/hero-3-art.webp";
import img4 from "@/assets/hero-4-dance.webp";
import img5 from "@/assets/hero-5-outdoor.webp";
import img6 from "@/assets/hero-6-story.webp";
import img7 from "@/assets/hero-7-digital.webp";
import img8 from "@/assets/hero-8-sports.webp";

import cardImg1 from "@/assets/one.webp";
import cardImg2 from "@/assets/two.webp";
import cardImg3 from "@/assets/three.webp";

const slides = [
  { src: img1, label: "Diwali Delight" },
  { src: img2, label: "Messy Play Magic" },
  { src: img3, label: "Happy Beginnings" },
  { src: img4, label: "Confident Voices" },
  { src: img5, label: "Creative Play Time" },
  { src: img6, label: "Joyful Moves" },
  { src: img7, label: "Little Learners" },
  { src: img8, label: "Pretty in Pink" },
];

export function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 12;
      const y = (e.clientY / window.innerHeight - 0.5) * 12;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const loop = [...slides, ...slides];

  // Animation variants for staggered load
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 18,
      },
    },
  } as const;

  return (
    <section className="relative overflow-hidden px-4 pt-32 pb-20 sm:pt-36 bg-white min-h-screen flex flex-col justify-center items-center">
      {/* Soft Background Breathing Radial Gradient */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-tr from-accent-blue/[0.015] via-white to-accent-red/[0.015] animate-pulse"
        style={{ animationDuration: "10s" }}
      />

      {/* Playful Floating Background Shapes (Extremely Subtle) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10 select-none opacity-40">
        {/* Floating Sparkle Left */}
        <div className="absolute top-[22%] left-[10%] animate-float text-accent-blue/15">
          <Sparkles className="h-8 w-8" />
        </div>

        {/* Floating Heart Right */}
        <div className="absolute top-[26%] right-[12%] animate-float-slow text-accent-red/15">
          <Heart className="h-9 w-9" />
        </div>

        {/* Soft Background Gradients */}
        <div className="absolute top-1/4 left-1/4 h-[350px] w-[350px] rounded-full bg-accent-blue/[0.02] blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-[350px] w-[350px] rounded-full bg-accent-red/[0.02] blur-3xl" />
      </div>

      {/* Main Centered Hero Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-[1280px] w-full px-4 md:px-8 flex flex-col items-center justify-center transition-transform duration-300 ease-out"
        style={{
          transform: `perspective(1000px) rotateY(${mousePos.x * 0.05}deg) rotateX(${mousePos.y * -0.05}deg)`,
        }}
      >
        {/* Responsive Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full mb-16">
          {/* Left Column: Left-aligned Typography */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">


            {/* Clean Premium Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.15] tracking-tight font-sans mb-6 text-foreground/95 select-none"
            >
              Where Little Minds <br />
              <span className="relative mt-2 inline-block font-extrabold bg-gradient-to-r from-accent-blue via-indigo-600 to-accent-red bg-clip-text text-transparent">
                Love & Learning
              </span>
            </motion.h1>

            {/* Elegant Minimal Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground/80 sm:text-xl leading-relaxed tracking-wide mb-8 font-light max-w-xl"
            >
              A <span className="text-foreground/90 font-medium">joyful</span> preschool nurturing{" "}
              <span className="text-foreground/90 font-medium">creativity</span>,{" "}
              <span className="text-foreground/90 font-medium">confidence</span> and{" "}
              <span className="text-foreground/90 font-medium">happy learning</span> — every single
              day.
            </motion.p>

            {/* Premium CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-accent-red px-8 py-4 text-base font-bold text-primary-foreground shadow-soft hover:shadow-float transition-all duration-300 hover:scale-[1.04] hover:bg-accent-red/95 cursor-pointer w-full sm:w-auto"
              >
                Enquire Now
                <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

            </motion.div>
          </div>

          {/* Right Column: Overlapping, Interactive visual card collage */}
          <div className="lg:col-span-5 relative w-full h-[400px] sm:h-[450px] flex items-center justify-center">
            {/* Card 1: Bottom / Back (Art & Craft) */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: -2, zIndex: 10, y: -5 }}
              className="absolute left-4 top-4 w-[220px] sm:w-[260px] aspect-[3/4] rounded-3xl overflow-hidden border-[6px] golden-border shadow-card rotate-[-8deg] bg-white cursor-pointer origin-center transition-shadow duration-300 hover:shadow-float z-0"
            >
              <img
                src={cardImg3}
                alt="Happy Beginnings"
                width={260}
                height={347}
                loading="eager"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Card 2: Middle (Play Time) */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: 2, zIndex: 10, y: -5 }}
              className="absolute right-4 top-12 w-[220px] sm:w-[260px] aspect-[3/4] rounded-3xl overflow-hidden border-[6px] golden-border shadow-card rotate-[6deg] bg-white cursor-pointer origin-center transition-shadow duration-300 hover:shadow-float z-1"
            >
              <img
                src={cardImg2}
                alt="Messy Play Magic"
                width={260}
                height={347}
                loading="eager"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Card 3: Top / Front (Kids Learning) */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: -1, zIndex: 10, y: -5 }}
              className="absolute left-16 bottom-2 w-[220px] sm:w-[260px] aspect-[3/4] rounded-3xl overflow-hidden border-[6px] golden-border shadow-float rotate-[-2deg] bg-white cursor-pointer origin-center transition-shadow duration-300 hover:shadow-float z-2"
            >
              <img
                src={cardImg1}
                alt="Graduation Day"
                width={260}
                height={347}
                loading="eager"
                fetchPriority="high"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Infinite Moving Photo Marquee (Bottom) */}
        <motion.div
          variants={itemVariants}
          className="relative w-full overflow-hidden border-t border-border/20 pt-8"
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white via-white/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white via-white/80 to-transparent" />
          <div className="overflow-hidden py-4">
            <div className="animate-marquee flex w-max gap-6 px-4">
              {loop.map((s, i) => (
                <figure
                  key={i}
                  className="group relative w-[180px] sm:w-[220px] shrink-0 overflow-hidden rounded-[24px] border-[4px] golden-border shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-float"
                >
                  <img
                    src={s.src}
                    alt={s.label}
                    loading="lazy"
                    width={220}
                    height={293}
                    className="aspect-[3/4] h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <figcaption className="absolute inset-x-3 bottom-3 rounded-full bg-white/95 px-3 py-1.5 text-center text-[10px] font-bold tracking-wide text-foreground backdrop-blur-md border border-white/40 shadow-soft">
                    {s.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
