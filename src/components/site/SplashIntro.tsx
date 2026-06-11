import { useEffect } from "react";
import { motion } from "framer-motion";
import logoImg from "../../assets/logo.webp";

interface SplashIntroProps {
  onComplete: () => void;
}

export function SplashIntro({ onComplete }: SplashIntroProps) {
  // Setup timers for lifecycle events
  useEffect(() => {
    // Complete intro after 5.0s
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 5000);

    return () => clearTimeout(completeTimer);
  }, [onComplete]);

  // Generating background particles
  const particles = Array.from({ length: 15 });

  // Generating random svg sparkles with colors matching the theme
  const sparkles = [
    { top: "15%", left: "20%", delay: 0.5, size: 16, color: "text-amber-400/40" },
    { top: "25%", left: "80%", delay: 1.2, size: 20, color: "text-accent-blue/30" },
    { top: "75%", left: "15%", delay: 0.8, size: 18, color: "text-accent-red/30" },
    { top: "68%", left: "85%", delay: 1.6, size: 24, color: "text-amber-400/40" },
    { top: "10%", left: "60%", delay: 2.0, size: 14, color: "text-accent-blue/25" },
    { top: "85%", left: "45%", delay: 2.4, size: 16, color: "text-accent-red/25" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98, filter: "blur(8px)" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white select-none overflow-hidden"
    >
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-accent-red/[0.04] blur-3xl animate-float" />

      {/* Premium subtle background grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-35 pointer-events-none" />

      {/* Floating Sparkles */}
      {sparkles.map((sp, idx) => (
        <svg
          key={idx}
          style={{
            position: "absolute",
            top: sp.top,
            left: sp.left,
            animationDelay: `${sp.delay}s`,
            width: sp.size,
            height: sp.size,
          }}
          className={`animate-sparkle-twinkle ${sp.color} pointer-events-none fill-current`}
          viewBox="0 0 24 24"
        >
          <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
        </svg>
      ))}

      {/* Floating Ambient Particles */}
      {particles.map((_, i) => {
        const size = Math.random() * 4 + 2;
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 4 + 4;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              bottom: "-20px",
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
            className="rounded-full bg-gradient-to-t from-accent-blue/10 to-accent-red/10 animate-particle-drift pointer-events-none"
          />
        );
      })}

      {/* Central Interactive Content Container */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="flex flex-col items-center justify-center text-center relative z-10 px-6 max-w-lg"
      >
        {/* Curved Accents */}
        <svg
          className="absolute -top-16 -left-16 w-32 h-32 text-accent-blue/10 pointer-events-none stroke-current fill-none stroke-2"
          viewBox="0 0 100 100"
        >
          <path d="M10,90 Q50,50 90,90" />
        </svg>
        <svg
          className="absolute -bottom-16 -right-16 w-32 h-32 text-accent-red/10 pointer-events-none stroke-current fill-none stroke-2"
          viewBox="0 0 100 100"
        >
          <path d="M10,10 Q50,50 90,10" />
        </svg>

        {/* Logo Wrapper Container */}
        <div className="relative mb-8">
          {/* Logo container with clean white border and soft shadow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-44 w-44 sm:h-56 sm:w-56 rounded-full p-1 bg-white border-[5px] border-white shadow-xl flex items-center justify-center overflow-hidden"
          >
            <img
              src={logoImg}
              alt="Junior Junction Logo"
              loading="eager"
              width={224}
              height={224}
              fetchpriority="high"
              className="h-full w-full rounded-full object-contain"
            />
            {/* Glass light sweep reflection */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shine" />
          </motion.div>
        </div>

        {/* 2. Brand Name Letter-by-Letter Motion Blur Reveal */}
        <h1 className="mt-4 text-[14px] min-[375px]:text-[17px] min-[450px]:text-xl sm:text-3xl md:text-4xl font-black tracking-[0.1em] min-[375px]:tracking-[0.18em] min-[450px]:tracking-[0.25em] flex justify-center items-center select-none leading-none whitespace-nowrap">
          {"JUNIOR JUNCTION".split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: "blur(12px)", scale: 0.8 }}
              animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 1.0 + index * 0.04,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={char === " " ? "w-1.5 min-[375px]:w-2 sm:w-3 md:w-4" : "inline-block bg-gradient-to-r from-accent-blue to-indigo-700 bg-clip-text text-transparent"}
            >
              {char}
            </motion.span>
          ))}
        </h1>

        {/* 3. Subtitle "Play School" slides upward in red */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-accent-red font-bold tracking-[0.4em] text-xs sm:text-sm mt-4 uppercase select-none leading-none opacity-90"
        >
          Play School
        </motion.div>

        {/* 4. Tagline "Love & Learning" handwritten script */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 2.4, ease: "easeOut" }}
          className="font-script text-3xl sm:text-4xl text-amber-500 mt-5 select-none leading-none font-normal italic filter drop-shadow-[0_2px_4px_rgba(251,191,36,0.15)]"
        >
          Love & Learning
        </motion.div>

        {/* Elegant Animated Light Sweep Passing Behind */}
        <motion.div
          initial={{ x: "-150%" }}
          animate={{ x: "150%" }}
          transition={{ duration: 1.8, delay: 3.2, ease: "easeInOut" }}
          className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-accent-blue/[0.08] to-transparent skew-x-12 pointer-events-none"
        />
      </motion.div>
    </motion.div>
  );
}
