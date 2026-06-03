import { useEffect, useState } from "react";
import { Sparkles, Heart } from "lucide-react";

interface IntroAnimationProps {
  onComplete: () => void;
}

export function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [scene, setScene] = useState(0);
  const [fade, setFade] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if intro has already run in this session
    const hasRun = sessionStorage.getItem("jj_intro_run");
    if (hasRun === "true") {
      setIsVisible(false);
      onComplete();
      return;
    }

    // Sequence timer
    const t1 = setTimeout(() => {
      setFade(false); // trigger fade-out of Scene 1
      setTimeout(() => {
        setScene(1);
        setFade(true); // trigger fade-in of Scene 2
      }, 800);
    }, 3200);

    const t2 = setTimeout(() => {
      setFade(false); // trigger fade-out of Scene 2
      setTimeout(() => {
        setScene(2);
        setFade(true); // trigger fade-in of Scene 3 (Transition)
      }, 800);
    }, 6600);

    const t3 = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem("jj_intro_run", "true");
      onComplete();
    }, 8500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsVisible(false);
    sessionStorage.setItem("jj_intro_run", "true");
    onComplete();
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white transition-opacity duration-1000 ${
        scene === 2 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Background Breathing Pastel Gradients */}
      <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/[0.03] via-white to-accent-red/[0.03] animate-pulse" style={{ animationDuration: '6s' }} />

      {/* Story Scene Frame */}
      <div
        className={`relative flex flex-col items-center max-w-xl px-6 text-center transition-all duration-700 ${
          fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {scene === 0 && (
          <div className="flex flex-col items-center">
            {/* Minimalist Scene 1 SVG: Parent and Child Holding Hands */}
            <div className="relative h-64 w-64 md:h-72 md:w-72 mb-8 animate-float">
              {/* Subtle Glowing Pulse Circles */}
              <div className="absolute inset-0 rounded-full bg-accent-red/[0.04] blur-2xl animate-ping" style={{ animationDuration: '4s' }} />
              <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-foreground/80">
                {/* School Gate Contour in the background */}
                <path
                  d="M10 190 H190 M40 190 V60 C40 40, 60 30, 80 30 H120 C140 30, 160 40, 160 60 V190"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeDasharray="4 4"
                  className="opacity-20"
                />
                {/* Parent Line Silhouette */}
                <path
                  d="M75 190 V115 C75 105, 80 90, 85 85 C90 80, 95 65, 95 55 C95 45, 85 45, 85 55"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="opacity-40"
                />
                <circle cx="85" cy="45" r="8" stroke="currentColor" strokeWidth="2.5" className="opacity-40" />
                
                {/* Child Line Silhouette */}
                <path
                  d="M125 190 V140 C125 135, 120 125, 115 125 M105 125 C100 125, 95 130, 95 140"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="opacity-60"
                />
                <circle cx="120" cy="110" r="6" stroke="currentColor" strokeWidth="2" className="opacity-60" />

                {/* The Holding Hands Connection */}
                <path
                  d="M85 100 Q95 102, 105 110"
                  stroke="var(--accent-red)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="animate-pulse"
                />
                
                {/* Heart Emblem above hand connection */}
                <g className="animate-bounce" style={{ animationDuration: '2.5s' }}>
                  <path
                    d="M95 85 C93 83, 90 83, 88 85 C86 87, 86 90, 88 92 L95 99 L102 92 C104 90, 104 87, 102 85 C100 83, 97 83, 95 85 Z"
                    fill="var(--accent-red)"
                    className="opacity-80"
                  />
                </g>
              </svg>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground/90 font-sans mb-4 leading-tight tracking-tight">
              A new step, holding a warm hand...
            </h2>
            <p className="text-sm md:text-base text-muted-foreground font-medium max-w-sm tracking-wide">
              Entering a safe haven filled with infinite care and gentle guidance.
            </p>
          </div>
        )}

        {scene === 1 && (
          <div className="flex flex-col items-center">
            {/* Minimalist Scene 2 SVG: Child Walk in through Archway, waving */}
            <div className="relative h-64 w-64 md:h-72 md:w-72 mb-8 animate-float-slow">
              {/* Soft background blue glow */}
              <div className="absolute inset-0 rounded-full bg-accent-blue/[0.04] blur-2xl animate-pulse" />
              
              <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-foreground/80">
                {/* Beautiful curved archway school entry */}
                <path
                  d="M30 190 V80 C30 35, 170 35, 170 80 V190"
                  stroke="var(--accent-blue)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="opacity-45"
                />
                {/* Decorative Flowers/Leaves on Archway */}
                <circle cx="50" cy="60" r="3" fill="var(--accent-red)" className="opacity-60" />
                <circle cx="150" cy="60" r="3" fill="var(--accent-red)" className="opacity-60" />
                <circle cx="100" cy="30" r="4" fill="var(--accent-blue)" className="opacity-60 animate-pulse" />

                {/* Ground */}
                <path d="M10 190 H190" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="opacity-30" />

                {/* Happy Child entering the gate */}
                <g transform="translate(10, 0)">
                  {/* Body walking */}
                  <path
                    d="M90 190 V140 C90 132, 95 125, 102 125"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    className="opacity-80"
                  />
                  {/* Head */}
                  <circle cx="98" cy="110" r="7" stroke="currentColor" strokeWidth="2.5" className="opacity-80" />
                  
                  {/* Waving Arm back */}
                  <path
                    d="M86 135 C80 128, 72 120, 68 115"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="opacity-70 animate-bounce"
                    style={{ animationDuration: '1.5s' }}
                  />
                  {/* Hand waving */}
                  <circle cx="66" cy="112" r="2.5" fill="currentColor" className="opacity-70 animate-ping" />
                </g>

                {/* Floating balloons / Sparkles */}
                <g className="animate-float" style={{ animationDuration: '4s' }}>
                  <path d="M140 100 Q145 90, 138 80 C135 75, 142 65, 148 70 Q152 75, 148 85 Z" fill="var(--accent-blue)" className="opacity-25" />
                  <path d="M148 85 Q149 92, 148 100" stroke="currentColor" strokeWidth="0.75" className="opacity-20" />
                </g>
                <g className="animate-float-slow" style={{ animationDuration: '6s' }}>
                  <path d="M50 110 Q53 102, 48 95 C45 92, 50 85, 54 88 Q57 92, 54 99 Z" fill="var(--accent-red)" className="opacity-20" />
                  <path d="M54 99 Q55 104, 54 110" stroke="currentColor" strokeWidth="0.75" className="opacity-15" />
                </g>

                {/* Sparkle symbols */}
                <g transform="translate(100, 70)" className="animate-pulse text-accent-blue">
                  <path d="M0 -6 L2 -2 L6 0 L2 2 L0 6 L-2 2 L-6 0 L-2 -2 Z" fill="currentColor" className="opacity-70" />
                </g>
                <g transform="translate(125, 50)" className="animate-pulse text-accent-red" style={{ animationDelay: '0.5s' }}>
                  <path d="M0 -4 L1 -1 L4 0 L1 1 L0 4 L-1 1 L-4 0 L-1 -1 Z" fill="currentColor" className="opacity-60" />
                </g>
              </svg>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground/90 font-sans mb-4 leading-tight tracking-tight">
              ...into a world of play, friendship, and wonder.
            </h2>
            <p className="text-sm md:text-base text-muted-foreground font-medium max-w-sm tracking-wide">
              Step by step, growing with confidence, laughter, and curious delight.
            </p>
          </div>
        )}
      </div>

      {/* Page bottom indicators */}
      <div className="absolute bottom-12 flex gap-2">
        <span
          className={`h-1.5 rounded-full transition-all duration-500 ${
            scene === 0 ? "w-8 bg-accent-red" : "w-2 bg-muted/60"
          }`}
        />
        <span
          className={`h-1.5 rounded-full transition-all duration-500 ${
            scene === 1 ? "w-8 bg-accent-blue" : "w-2 bg-muted/60"
          }`}
        />
      </div>
    </div>
  );
}
