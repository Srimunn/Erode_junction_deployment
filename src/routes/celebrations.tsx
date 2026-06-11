import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  PartyPopper,
  Sparkles,
  Flame,
  BookOpen,
  Compass,
  Trophy,
  Music,
  GraduationCap,
  Smile,
  Heart,
  Palette,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

// Image Imports matching events.tsx and user's celebration directory

import annualDayImg from "@/assets/celebration/annual day.webp";
import brownDayImg from "@/assets/celebration/brown day.webp";
import childrenDayImg from "@/assets/celebration/children day.webp";
import christmasImg from "@/assets/celebration/christmas celebration.webp";
import diwaliImg from "@/assets/celebration/diwali.webp";
import fieldTripImg from "@/assets/celebration/field trip.webp";
import graduationImg from "@/assets/celebration/graduation day.webp";
import krishnaImg from "@/assets/celebration/krishna jayanthi.webp";
import onamImg from "@/assets/celebration/onam.webp";
import orangeDayImg from "@/assets/celebration/Orange Day.webp";
import pinkDayImg from "@/assets/celebration/pink day.webp";
import sportsDayImg from "@/assets/celebration/sports day.webp";
import vijayaImg from "@/assets/celebration/vijaya dhasami.webp";
import welcomingImg from "@/assets/celebration/welcoming activities.webp";
import pongalImg from "@/assets/celebration/pongal.webp";

interface CelebrationItem {
  id: number;
  numStr: string;
  title: string;
  season: string;
  src: string;
  desc: string;
  highlights: string[];
  skills: string[];
  icon: any;
  themeColor: string;
  accentClass: string;
  polaroidNote: string;
  objectPosition?: string;
}

// Chronologically arranged list of the celebrations including specific Colours Days and custom user images
const celebrations: readonly CelebrationItem[] = [
  {
    id: 1,
    numStr: "01",
    title: "School Reopen - Welcoming Activities",
    season: "June",
    src: welcomingImg,
    desc: "Welcoming our little stars back with open arms, colorful balloon arches, and friendly classroom interactive games as they embark on a new year of joyful discovery.",
    highlights: [
      "Festive balloon arch welcome ceremony",
      "Creative hand-print art banner activity",
      "Interactive ice-breaker music circles"
    ],
    skills: ["Adaptation", "Social Interaction", "Confidence"],
    icon: Smile,
    themeColor: "from-blue-500 to-indigo-500",
    accentClass: "text-blue-600 bg-blue-50/50 border-blue-100",
    polaroidNote: "A new year begins with smiles and balloons!"
  },
  {
    id: 2,
    numStr: "02",
    title: "Pink Day Celebration",
    season: "July",
    src: pinkDayImg,
    desc: "A vibrant day of sensory exploration and color matching. Children dress up in themed pink colors, participate in collaborative flower drawings, and explore pastel hues.",
    highlights: [
      "Pink color mixing paint activities",
      "Pink blossom drawings and templates",
      "Group pink flower decoration board"
    ],
    skills: ["Color Recognition", "Sensory Art", "Association Logic"],
    icon: Palette,
    themeColor: "from-pink-500 to-rose-500",
    accentClass: "text-pink-600 bg-pink-50/50 border-pink-100",
    polaroidNote: "Splashes of beautiful pink and floral crafts."
  },
  {
    id: 3,
    numStr: "03",
    title: "Orange Day Celebration",
    season: "July",
    src: orangeDayImg,
    desc: "Exploring the bright and warm hue of orange through sorting activities, orange peel crafts, and thematic healthy citrus snacks.",
    highlights: [
      "Orange object treasure hunts",
      "Orange peel collage craft making",
      "Citrus fruit sorting and tasting"
    ],
    skills: ["Color Discrimination", "Tactile Learning", "Healthy Habits"],
    icon: Palette,
    themeColor: "from-orange-500 to-amber-500",
    accentClass: "text-orange-600 bg-orange-50/50 border-orange-100",
    polaroidNote: "Bright orange activities and citrus fun!"
  },
  {
    id: 4,
    numStr: "04",
    title: "Brown Day Celebration",
    season: "July",
    src: brownDayImg,
    desc: "Exploring earthy tones during our Brown Day theme. Children learn about colors of nature, clay modeling, and chocolate-themed sensory play.",
    highlights: [
      "Earthy sand and soil sensory bins",
      "Teddy bear craft and paint making",
      "Clay modeling workshop"
    ],
    skills: ["Color Blending", "Sensory Sorting", "Fine Motor Skills"],
    icon: Palette,
    themeColor: "from-amber-700 to-yellow-800",
    accentClass: "text-amber-800 bg-amber-50/50 border-amber-100",
    polaroidNote: "Discovering beautiful earthy tones and teddy crafts."
  },
  {
    id: 5,
    numStr: "05",
    title: "Onam Celebration",
    season: "August",
    src: onamImg,
    desc: "Experiencing beautiful regional traditions with colorful pookalam (flower carpet) design activities, traditional wear showcases, and festive stories.",
    highlights: [
      "Designing beautiful flower petal carpets (Pookalam)",
      "Traditional Kerala apparel showcase",
      "Story circles about King Mahabali"
    ],
    skills: ["Cultural Heritage", "Pattern Logic", "Teamwork"],
    icon: Sparkles,
    themeColor: "from-amber-500 to-orange-500",
    accentClass: "text-amber-600 bg-amber-50/50 border-amber-100",
    polaroidNote: "Arranging flower petals in circular carpets."
  },
  {
    id: 6,
    numStr: "06",
    title: "Krishna Jayanthi",
    season: "September",
    src: krishnaImg,
    desc: "Celebrating with beautiful peacock feather crowns, little Krishna-Radha dress-up pageants, devotional music, and sweet distribution.",
    highlights: [
      "Handcrafting peacock feather crowns",
      "Joyful Krishna and Radha dress-up pageant",
      "Devotional dancing and sweet sharing"
    ],
    skills: ["Aesthetic Appreciation", "Social Bonding", "Creative Drama"],
    icon: Heart,
    themeColor: "from-yellow-400 to-amber-500",
    accentClass: "text-yellow-600 bg-yellow-50/50 border-yellow-100",
    polaroidNote: "Little Krishnas and Radhas singing together."
  },
  {
    id: 7,
    numStr: "07",
    title: "Vijaya Dhasami - Vidhyarambam",
    season: "October",
    src: vijayaImg,
    desc: "A highly sacred day marking the auspicious initiation of little children into the world of alphabets, reading, and formal Montessori learning.",
    highlights: [
      "Traditional ceremony writing the first alphabet in rice",
      "Blessings from educators and gurus",
      "Special first reading book distribution"
    ],
    skills: ["Cognitive Initiation", "Focus", "Early Literacy"],
    icon: BookOpen,
    themeColor: "from-teal-500 to-cyan-500",
    accentClass: "text-teal-600 bg-teal-50/50 border-teal-100",
    polaroidNote: "Writing first alphabets on golden grains of rice."
  },
  {
    id: 8,
    numStr: "08",
    title: "Diwali Celebration",
    season: "November",
    src: diwaliImg,
    desc: "Sharing joy and sweetness during the festival of lights with clay diya painting, paper lantern crafting, and learning values of sharing and charity.",
    highlights: [
      "Hand-painting beautiful clay diyas",
      "Designing paper lanterns and banners",
      "Sharing traditional Diwali sweets and cards"
    ],
    skills: ["Generosity", "Fine Motor Skills", "Tradition Awareness"],
    icon: Flame,
    themeColor: "from-red-500 to-amber-500",
    accentClass: "text-red-600 bg-red-50/50 border-red-100",
    polaroidNote: "Beautiful clay lamps painted by little hands."
  },
  {
    id: 9,
    numStr: "09",
    title: "Children's Day Celebration",
    season: "November",
    src: childrenDayImg,
    desc: "A delightful day dedicated fully to celebrating childhood with fun puppet shows, exciting games, and special surprises from teachers.",
    highlights: [
      "Interactive educational puppet theater",
      "Special indoor obstacle games and races",
      "Handcrafted surprise gifts from teachers"
    ],
    skills: ["Playful Creativity", "Emotional Well-being", "Friendship"],
    icon: Smile,
    themeColor: "from-purple-500 to-pink-500",
    accentClass: "text-purple-600 bg-purple-50/50 border-purple-100",
    polaroidNote: "A day filled with play, puppet shows, and laughter!"
  },
  {
    id: 10,
    numStr: "10",
    title: "Sports Day",
    season: "December",
    src: sportsDayImg,
    desc: "An active and energetic day of friendly physical challenges, potato races, parent-child sports events, and pride-filled medal ceremonies.",
    highlights: [
      "Exciting potato races and obstacle courses",
      "Interactive parent-child coordination sports",
      "Grand medal and certificate distribution"
    ],
    skills: ["Gross Motor Skills", "Sportsmanship", "Determination"],
    icon: Trophy,
    themeColor: "from-yellow-500 to-orange-500",
    accentClass: "text-yellow-600 bg-yellow-50/50 border-yellow-100",
    polaroidNote: "Running fast and winning shiny gold medals."
  },
  {
    id: 11,
    numStr: "11",
    title: "Christmas Celebration",
    season: "December",
    src: christmasImg,
    desc: "Spreading festive cheer with Christmas tree decorations, cheerful carol singing, a special visit from Santa, and gifts of kindness.",
    highlights: [
      "Decorating the class Christmas tree",
      "Santa Claus gift distribution session",
      "Cheerful Christmas carol singing circles"
    ],
    skills: ["Joy of Giving", "Rhythmic Coordination", "Social Play"],
    icon: PartyPopper,
    themeColor: "from-red-600 to-green-600",
    accentClass: "text-red-600 bg-red-50/50 border-red-100",
    polaroidNote: "Merry carols and a surprise visit from Santa!",
    objectPosition: "object-top"
  },
  {
    id: 12,
    numStr: "12",
    title: "Pongal Celebration",
    season: "January",
    src: pongalImg,
    desc: "Celebrating the harvest festival of Tamil Nadu with traditional sweet pongal preparation in earthen pots, sugarcane sharing, and colorful kolam patterns.",
    highlights: [
      "Traditional clay pot sweet Pongal preparation",
      "Decorating the courtyard with vibrant kolams",
      "Sugarcane sharing and learning about farming"
    ],
    skills: ["Cultural Appreciation", "Sharing", "Tradition"],
    icon: Flame,
    themeColor: "from-orange-500 to-yellow-500",
    accentClass: "text-orange-600 bg-orange-50/50 border-orange-100",
    polaroidNote: "Boiling sweet rice and celebrating harvest joy!",
    objectPosition: "center -10px"
  },
  {
    id: 13,
    numStr: "13",
    title: "Annual Day Celebration",
    season: "January",
    src: annualDayImg,
    desc: "A grand showcase of talent where every single child takes the stage to present dance, music, drama, and thematic group costumes.",
    highlights: [
      "Synchronized rhythm dance performance",
      "Thematic theatrical stage plays",
      "Grand parent audience photo stations"
    ],
    skills: ["Stage Confidence", "Rhythm", "Collaboration"],
    icon: Music,
    themeColor: "from-purple-500 to-pink-500",
    accentClass: "text-purple-600 bg-purple-50/50 border-purple-100",
    polaroidNote: "Shining bright on the big stage."
  },
  {
    id: 14,
    numStr: "14",
    title: "Field Trip",
    season: "February",
    src: fieldTripImg,
    desc: "Expanding learning beyond classroom walls with educational visits to local parks, gardens, and farms to explore nature first-hand.",
    highlights: [
      "Interactive nature trails and insect viewing",
      "Learning farm animal care and feeding",
      "Outdoor safety and travel etiquette classes"
    ],
    skills: ["Observational Skills", "Practical Safety", "Curiosity"],
    icon: Compass,
    themeColor: "from-emerald-500 to-teal-600",
    accentClass: "text-emerald-600 bg-emerald-50/50 border-emerald-100",
    polaroidNote: "An educational trip exploring nature and farms."
  },
  {
    id: 15,
    numStr: "15",
    title: "Graduation Day Celebration",
    season: "March",
    src: graduationImg,
    desc: "A proud milestone event honoring our senior pre-primary kids as they receive their graduation scrolls and step forward into primary school.",
    highlights: [
      "Graduation cap and gown march parade",
      "Presenting developmental progress portfolios",
      "Singing graduation farewell songs"
    ],
    skills: ["Transition Readiness", "Public Speaking", "Self-Esteem"],
    icon: GraduationCap,
    themeColor: "from-indigo-600 to-violet-600",
    accentClass: "text-indigo-600 bg-indigo-50/50 border-indigo-100",
    polaroidNote: "Caps in the air! We are ready for big school!",
    objectPosition: "center -60px"
  }
];

export const Route = createFileRoute("/celebrations")({
  head: () => ({
    meta: [
      { title: "Celebrations Exhibition — Junior Junction Play School, Erode" },
      {
        name: "description",
        content: "Explore the joyful festivals, cultural celebrations, and special milestones celebrated at Junior Junction, Erode.",
      },
      { property: "og:title", content: "Celebrations Exhibition — Junior Junction Play School" },
      {
        property: "og:description",
        content: "A premium interactive gallery of preschool cultural celebrations and festive events.",
      },
    ],
  }),
  component: CelebrationsPage,
});

function CelebrationsPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto scroll/align active list item on changes
  useEffect(() => {
    const activeEl = document.getElementById(`list-item-${activeIndex}`);
    if (activeEl) {
      activeEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [activeIndex]);

  const activeItem = celebrations[activeIndex];
  const IconComponent = activeItem.icon;

  const handleNext = () => {
    setActiveIndex((prev) => (prev === celebrations.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? celebrations.length - 1 : prev - 1));
  };

  return (
    <div className="relative min-h-screen px-4 pb-12 pt-28 sm:pt-36 md:pt-40 bg-[#fafafc] overflow-hidden flex flex-col justify-between">
      {/* Background Decorative Art Gradients */}
      <div className="pointer-events-none absolute left-0 top-0 -z-10 h-[600px] w-[600px] rounded-full bg-accent-blue/[0.02] blur-[120px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 -z-10 h-[600px] w-[600px] rounded-full bg-accent-red/[0.02] blur-[120px]" />

      {/* Main Title Header */}
      <header className="mx-auto max-w-7xl w-full text-center mb-8 relative z-10">

        <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-neutral-800">
          Our Year of <span className="text-accent-red font-light italic">Celebrations</span>
        </h1>
      </header>

      {/* Main Screen Container - Split Screen Presentation */}
      <main className="mx-auto max-w-7xl w-full flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10 min-h-[550px]">

        {/* LEFT COLUMN: Vertical Scrollable Exhibition Index (Desktop Only) */}
        <section className="lg:col-span-5 hidden lg:flex flex-col h-[520px] lg:h-[620px] bg-white/50 backdrop-blur-md border border-neutral-200/40 rounded-[32px] p-6 shadow-soft order-2 lg:order-1">
          <div className="mb-4 pb-3 border-b border-neutral-100 flex items-center justify-between">
            <span className="text-xs font-black uppercase text-neutral-400 tracking-widest">Select Milestone</span>
            <span className="text-xs font-bold text-accent-blue bg-accent-blue/10 px-2.5 py-0.5 rounded-full">
              {activeIndex + 1} / {celebrations.length}
            </span>
          </div>

          {/* Scrolling Index List */}
          <div className="flex-1 overflow-y-auto space-y-2.5 pr-2 scrollbar-thin">
            {celebrations.map((c, index) => {
              const isSelected = activeIndex === index;
              const ItemIcon = c.icon;
              return (
                <button
                  key={c.id}
                  id={`list-item-${index}`}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full relative flex items-center gap-4 rounded-2xl p-4 text-left border transition-all duration-300 group cursor-pointer ${isSelected
                    ? "border-neutral-200 bg-white shadow-soft"
                    : "border-transparent bg-transparent hover:bg-white/40 hover:border-neutral-100"
                    }`}
                >
                  {/* Left sliding focus line */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeExhibitionIndicator"
                      className="absolute left-0 top-3 bottom-3 w-1 rounded-r-md bg-accent-blue"
                    />
                  )}

                  {/* Outline Number */}
                  <span className={`text-2xl font-black select-none tracking-tight shrink-0 ${isSelected ? "text-accent-blue" : "text-neutral-300 group-hover:text-neutral-500"
                    }`}>
                    {c.numStr}
                  </span>

                  {/* Details summary */}
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-black uppercase tracking-wider text-neutral-400 block mb-0.5">
                      {c.season}
                    </span>
                    <h3 className={`text-sm md:text-base font-black truncate leading-none transition-colors ${isSelected ? "text-neutral-800" : "text-neutral-500 group-hover:text-neutral-700"
                      }`}>
                      {c.title}
                    </h3>
                  </div>

                  {/* Unique Squircle Icon indicator */}
                  <div className="relative shrink-0 select-none">
                    {/* Glowing background ring on select */}
                    {isSelected && (
                      <motion.div
                        layoutId={`activeIconGlow-${c.id}`}
                        className="absolute -inset-1 rounded-[14px] bg-gradient-to-tr from-accent-blue/15 to-[#60a5fa]/5 blur-xs -z-10"
                        transition={{ type: "spring", stiffness: 350, damping: 25 }}
                      />
                    )}
                    <div className={`h-9 w-9 rounded-[14px] flex items-center justify-center border transition-all duration-500 transform ${isSelected
                        ? `bg-gradient-to-tr ${c.themeColor} text-white border-transparent rotate-[12deg] scale-105 shadow-[0_4px_12px_-4px_rgba(0,0,0,0.18)]`
                        : "bg-white/80 text-neutral-400 border-neutral-200/60 shadow-xs hover:border-neutral-300 hover:text-neutral-600 hover:-rotate-3 group-hover:scale-102"
                      }`}>
                      <ItemIcon className={`h-4.5 w-4.5 transition-transform duration-500 ${isSelected ? "scale-105 -rotate-[12deg]" : "group-hover:scale-110"}`} />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Lower interactive buttons (prev / next) */}
          <div className="mt-4 pt-4 border-t border-neutral-100 flex items-center justify-between gap-4">
            <button
              onClick={handlePrev}
              className="flex items-center gap-1 text-xs font-extrabold uppercase text-neutral-500 hover:text-neutral-800 bg-neutral-100 hover:bg-neutral-200 px-4 py-2.5 rounded-full transition-colors cursor-pointer"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Back</span>
            </button>
            <button
              onClick={handleNext}
              className="flex items-center gap-1 text-xs font-extrabold uppercase text-white bg-neutral-800 hover:bg-neutral-900 px-5 py-2.5 rounded-full transition-all cursor-pointer shadow-soft active:scale-98"
            >
              <span>Next</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </section>

        {/* RIGHT COLUMN: Realistic Interactive Gallery Canvas (Desktop) */}
        <section className="lg:col-span-7 flex flex-col justify-center items-center order-1 lg:order-2 px-4 relative min-h-[460px] lg:min-h-0">

          {/* Card Deck Wrapper */}
          <div className="relative w-full max-w-lg aspect-auto sm:aspect-[4/5] flex items-center justify-center min-h-[480px] sm:h-full">

            {/* Shuffling Card Animation */}
            <AnimatePresence mode="popLayout">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.82, rotate: -8, y: 80 }}
                animate={{ opacity: 1, scale: 1, rotate: activeIndex % 2 === 0 ? 2.5 : -2.5, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotate: 12, y: -90 }}
                transition={{ type: "spring", stiffness: 260, damping: 25 }}
                className="relative sm:absolute inset-auto sm:inset-0 w-full h-auto sm:h-full bg-white rounded-[28px] border border-neutral-200/50 shadow-float p-4.5 sm:p-5 flex flex-col justify-between"
                style={{ transformOrigin: "bottom center" }}
              >

                {/* Visual Polaroid Masterpiece */}
                <div className="relative w-full aspect-[4/3] rounded-[18px] overflow-hidden border border-neutral-200/50 shadow-soft bg-neutral-50 flex items-center justify-center group">
                  <img
                    src={activeItem.src}
                    alt={activeItem.title}
                    loading="lazy"
                    width={512}
                    height={384}
                    className={`w-full h-full object-cover select-none ${
                      activeItem.objectPosition && activeItem.objectPosition.startsWith("object-")
                        ? activeItem.objectPosition
                        : !activeItem.objectPosition
                        ? "object-center"
                        : ""
                    }`}
                    style={
                      activeItem.objectPosition && !activeItem.objectPosition.startsWith("object-")
                        ? { objectPosition: activeItem.objectPosition }
                        : undefined
                    }
                  />
                  <div className="absolute inset-0 bg-neutral-900/[0.03] pointer-events-none" />

                  {/* Unique Squircle Overlay tag decoration */}
                  <div className={`absolute top-4 left-4 h-9 w-9 rounded-[12px] bg-gradient-to-tr ${activeItem.themeColor} text-white flex items-center justify-center shadow-soft border border-white/20 rotate-[12deg] select-none`}>
                    <IconComponent className="h-4.5 w-4.5 -rotate-[12deg]" />
                  </div>

                </div>

                {/* Hand-written Polaroid Caption Style */}
                <div className="flex-1 mt-5 flex flex-col justify-between text-left px-2">
                  <div className="space-y-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-neutral-400 block">
                      {activeItem.season} Celebration
                    </span>
                    <h2 className="text-xl md:text-2xl font-black text-neutral-800 tracking-tight leading-snug">
                      {activeItem.title}
                    </h2>

                    {/* Handwritten style cursive note */}
                    <p className="font-script text-lg text-accent-blue/90 leading-tight pt-1">
                      "{activeItem.polaroidNote}"
                    </p>
                  </div>

                  {/* Highlights checklist & Skills Row */}
                  <div className="flex items-center justify-between border-t border-neutral-100 pt-4 mt-3">
                    <span className="text-[10px] font-extrabold text-neutral-400 tracking-widest uppercase">
                      Skill Focus:
                    </span>
                    <div className="flex gap-1">
                      {activeItem.skills.slice(0, 2).map((skill) => (
                        <span
                          key={skill}
                          className="text-[9px] bg-neutral-100 text-neutral-600 font-extrabold px-2 py-0.5 rounded-full border border-neutral-200/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

            {/* Backing structural cards to simulate a real stack */}
            <div className="absolute inset-0 bg-neutral-100 rounded-[28px] border border-neutral-200/20 -z-10 transform translate-y-3 translate-x-2 rotate-3 scale-98 pointer-events-none opacity-80 hidden sm:block" />
            <div className="absolute inset-0 bg-neutral-200 rounded-[28px] border border-neutral-200/10 -z-20 transform translate-y-5 -translate-x-1.5 -rotate-2 scale-96 pointer-events-none opacity-40 hidden sm:block" />

          </div>

          {/* Mobile-only Navigation & Horizontal Milestone index (under card deck) */}
          <div className="w-full max-w-lg mt-6 flex flex-col gap-4 lg:hidden">
            {/* Mobile Nav Button Row */}
            <div className="flex items-center justify-between px-1">
              <button
                onClick={handlePrev}
                className="h-11 px-4 flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white hover:bg-neutral-50 text-xs font-bold text-neutral-600 active:scale-95 transition-all cursor-pointer shadow-soft"
              >
                <ChevronLeft className="h-4 w-4" />
                <span>Back</span>
              </button>
              <span className="text-xs font-black text-neutral-500 bg-neutral-100 px-3.5 py-1 rounded-full border border-neutral-200/50">
                {activeIndex + 1} / {celebrations.length}
              </span>
              <button
                onClick={handleNext}
                className="h-11 px-4 flex items-center gap-1.5 rounded-full bg-neutral-800 hover:bg-neutral-900 text-xs font-bold text-white active:scale-95 transition-all cursor-pointer shadow-soft"
              >
                <span>Next</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            {/* Horizontal Scrollable milestones selection list */}
            <div 
              className="w-full overflow-x-auto py-1.5 flex gap-2 px-1 items-center justify-start min-h-[48px]"
              style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
            >
              <style dangerouslySetInnerHTML={{__html: `
                /* Hide scrollbar for Chrome, Safari and Opera */
                .w-full::-webkit-scrollbar {
                  display: none;
                }
              `}} />
              {celebrations.map((c, index) => {
                const isSelected = activeIndex === index;
                return (
                  <button
                    key={c.id}
                    onClick={() => setActiveIndex(index)}
                    className={`h-11 min-w-[44px] px-3.5 rounded-full border flex items-center justify-center font-bold text-xs shrink-0 cursor-pointer transition-all ${
                      isSelected
                        ? "bg-accent-blue text-white border-accent-blue shadow-md scale-105"
                        : "bg-white text-neutral-500 border-neutral-200 hover:border-neutral-300"
                    }`}
                  >
                    {c.numStr}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

      </main>

    </div>
  );
}