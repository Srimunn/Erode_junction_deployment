import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

import a1 from "@/assets/a-1.jpg";
import a2 from "@/assets/a-2.jpg";
import a3 from "@/assets/a-3.jpg";
import a4 from "@/assets/a-4.jpg";
import a5 from "@/assets/a-5.jpg";
import a6 from "@/assets/a-6.jpg";
import a7 from "@/assets/a-7.jpg";
import a8 from "@/assets/a-8.jpg";

import c1 from "@/assets/c-1.jpg";
import c2 from "@/assets/c-2.jpg";
import c3 from "@/assets/c-3.jpg";
import c4 from "@/assets/c-4.jpg";
import c5 from "@/assets/c-5.jpg";
import c6 from "@/assets/c-6.jpg";
import c7 from "@/assets/c-7.jpg";
import c8 from "@/assets/c-8.jpg";
import c9 from "@/assets/c-9.jpg";
import c10 from "@/assets/c-10.jpg";

import l1 from "@/assets/l-1.jpg";
import l2 from "@/assets/l-2.jpg";
import l3 from "@/assets/l-3.jpg";
import l4 from "@/assets/l-4.jpg";
import l5 from "@/assets/l-5.jpg";

const categories = ["All", "Activity", "Learn", "Celebration"] as const;

const items = [
  // Activity (a-1 to a-8)
  { src: a1, label: "Fun Playtime", category: "Activity", h: "tall" },
  { src: a2, label: "Creative Crafts", category: "Activity", h: "short" },
  { src: a3, label: "Rhythm & Dance", category: "Activity", h: "short" },
  { src: a4, label: "Storytelling Circles", category: "Activity", h: "tall" },
  { src: a5, label: "Outdoor Adventures", category: "Activity", h: "short" },
  { src: a6, label: "Weekly Sports", category: "Activity", h: "tall" },
  { src: a7, label: "Interactive Games", category: "Activity", h: "short" },
  { src: a8, label: "Art Exploration", category: "Activity", h: "tall" },

  // Celebration (c-1 to c-10)
  { src: c1, label: "Diwali Delight", category: "Celebration", h: "tall" },
  { src: c2, label: "Graduation Day", category: "Celebration", h: "short" },
  { src: c3, label: "Annual Day Joy", category: "Celebration", h: "short" },
  { src: c4, label: "Festival Lights", category: "Celebration", h: "tall" },
  { src: c5, label: "National Day", category: "Celebration", h: "short" },
  { src: c6, label: "Sports Day", category: "Celebration", h: "tall" },
  { src: c7, label: "Children's Day", category: "Celebration", h: "short" },
  { src: c8, label: "Christmas Cheer", category: "Celebration", h: "tall" },
  { src: c9, label: "Krishna Jayanthi", category: "Celebration", h: "short" },
  { src: c10, label: "Milestone Moments", category: "Celebration", h: "short" },

  // Learn (l-1 to l-5)
  { src: l1, label: "Alphabet Fun", category: "Learn", h: "tall" },
  { src: l2, label: "Smart Classroom", category: "Learn", h: "short" },
  { src: l3, label: "Sensory Discovery", category: "Learn", h: "short" },
  { src: l4, label: "Early Reading", category: "Learn", h: "tall" },
  { src: l5, label: "Numbers & Logic", category: "Learn", h: "short" },
] as const;

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Junior Junction Play School, Erode" },
      {
        name: "description",
        content:
          "A glimpse into life at Junior Junction — classrooms, activities and joyful moments.",
      },
      { property: "og:title", content: "Gallery — Junior Junction Play School" },
      {
        property: "og:description",
        content: "Moments of joy, learning and play from our campus in Erode.",
      },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredItems = items.filter(
    (it) => activeFilter === "All" || it.category === activeFilter,
  );

  const gridVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 18 },
    },
  };

  return (
    <div className="relative min-h-screen px-4 pb-20 pt-32 overflow-hidden">
      {/* Background Ambient Radial Glows */}
      <div className="pointer-events-none absolute left-0 top-1/4 -z-10 h-[600px] w-[600px] rounded-full bg-accent-blue/[0.015] blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute right-0 bottom-1/4 -z-10 h-[600px] w-[600px] rounded-full bg-accent-red/[0.015] blur-3xl animate-float" />

      <section className="mx-auto max-w-7xl text-center">
        <h1 className="text-5xl leading-tight sm:text-6xl font-extrabold tracking-tight">
          A peek into our <span className="italic text-accent-red font-sans">happy days</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground/80 font-light text-base sm:text-lg">
          Snapshots of curiosity, creativity, and joy from our campus in Erode.
        </p>

        {/* Responsive Glass Filter Pills */}
        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveFilter(cat);
                }}
                className={`relative rounded-full px-6 py-2.5 text-sm font-semibold tracking-tight transition-all duration-300 cursor-pointer active:scale-95 ${
                  isActive
                    ? "text-primary-foreground shadow-soft"
                    : "text-foreground/70 border border-border/80 bg-white/40 hover:bg-white/90 hover:border-border"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeFilterBg"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-accent-blue -z-10"
                  />
                )}
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* Grid Container */}
      <motion.div
        variants={gridVariants}
        initial="hidden"
        animate="show"
        layout
        className={
          activeFilter === "All"
            ? "mx-auto mt-16 max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            : "mx-auto mt-16 max-w-7xl columns-1 gap-6 sm:columns-2 lg:columns-3 xl:columns-4 [column-fill:_balance]"
        }
      >
        {filteredItems.map((it) => (
          <motion.figure
            key={it.src}
            variants={cardVariants}
            layout
            whileHover={{ y: -6 }}
            className={
              activeFilter === "All"
                ? "group overflow-hidden rounded-[32px] border-[6px] golden-border bg-white/70 backdrop-blur-md shadow-soft hover:shadow-float hover:bg-white transition-all duration-300 relative"
                : "group mb-6 break-inside-avoid overflow-hidden rounded-[32px] border-[6px] golden-border bg-white/70 backdrop-blur-md shadow-soft hover:shadow-float hover:bg-white transition-all duration-300 relative"
            }
          >
            {/* Image Container */}
            <div className="relative overflow-hidden w-full h-full">
              <img
                src={it.src}
                alt={it.label}
                loading="lazy"
                className={
                  activeFilter === "All"
                    ? "w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                    : `w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                        it.h === "tall" ? "aspect-[3/4]" : "aspect-[4/3]"
                      }`
                }
              />
            </div>

          </motion.figure>
        ))}
      </motion.div>


    </div>
  );
}
