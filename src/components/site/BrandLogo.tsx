import { motion } from "framer-motion";
import { Sparkles, Heart, Star } from "lucide-react";
import logoPremium from "@/assets/logo-premium.png";

export function BrandLogo() {
  return (
    <div className="relative overflow-hidden p-1 sm:p-2 rounded-[36px] bg-gradient-to-br from-accent-blue/10 via-white/80 to-accent-red/10 border border-white/60 shadow-float">
      <div className="relative flex flex-col items-center justify-center p-8 sm:p-12 rounded-[32px] bg-white/75 backdrop-blur-2xl border border-white/50 text-center group">
        {/* Soft Glow Radial Highlights */}
        <div className="absolute -top-32 -left-32 h-64 w-64 rounded-full bg-accent-blue/8 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-accent-red/8 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        {/* Floating Playful Accents */}
        <div className="absolute top-4 right-6 text-accent-blue/25 animate-float pointer-events-none">
          <Sparkles className="h-5 w-5" />
        </div>
        <div className="absolute bottom-6 left-6 text-accent-red/25 animate-float-slow pointer-events-none">
          <Heart className="h-5 w-5 animate-pulse" />
        </div>
        <div
          className="absolute top-8 left-8 text-emerald-500/20 animate-bounce-down pointer-events-none"
          style={{ animationDuration: "3s" }}
        >
          <Star className="h-4 w-4 fill-current" />
        </div>

        {/* JJ Premium Logo Emblem */}
        <motion.div
          whileHover={{ scale: 1.06, rotate: 2 }}
          transition={{ type: "spring", stiffness: 350, damping: 18 }}
          className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-[24px] bg-gradient-to-tr from-accent-blue to-[#1D4ED8] p-0.5 shadow-card cursor-pointer select-none"
        >
          <div className="absolute inset-0.5 rounded-[22px] bg-white/95 flex items-center justify-center overflow-hidden">
            <img
              src={logoPremium}
              alt="Junior Junction Vector Emblem"
              className="h-full w-full object-contain scale-[1.1] transition-transform duration-500 group-hover:scale-[1.15]"
            />
          </div>
        </motion.div>

        {/* Brand Headline - JUNIOR JUNCTION (Bold luxury typography) */}
        <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-[#1D4ED8] to-accent-blue select-none drop-shadow-[0_2px_8px_rgba(29,78,216,0.1)] font-sans">
          JUNIOR JUNCTION
        </h2>

        {/* Play School - Elegant, Warm, Inviting clean font */}
        <p className="text-xl sm:text-2xl font-semibold tracking-[0.14em] text-accent-red italic font-sans mt-2.5 mb-6 select-none opacity-95">
          Play School
        </p>

        {/* Minimal Gradient Accent Line */}
        <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-accent-blue/30 to-transparent mb-6" />

        {/* Tagline: Love & Learning */}
        <div className="flex items-center justify-center gap-3.5 select-none px-4">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground/80 hover:text-accent-red transition-colors duration-300">
            Love
          </span>
          <span className="text-muted-foreground/40 font-medium text-xs sm:text-sm select-none">
            &
          </span>
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground/80 hover:text-accent-blue transition-colors duration-300">
            Learning
          </span>
        </div>
      </div>
    </div>
  );
}
