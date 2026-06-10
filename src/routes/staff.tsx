import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { GraduationCap, Heart, Sparkles, Mail, Calendar, Award, User, BookOpen } from "lucide-react";
import { Link } from "@tanstack/react-router";

// Import all 6 staff images from assets
import staff1 from "@/assets/staff_1.webp";
import staff2 from "@/assets/staff_2.webp";
import staff3 from "@/assets/staff_3.webp";
import staff4 from "@/assets/staff_4.webp";
import staff5 from "@/assets/staff_5.webp";
import staff6 from "@/assets/staff_6.webp";

// Import new sliding gallery images
import t1 from "@/assets/t-1.webp";
import t2 from "@/assets/t-2.webp";
import t3 from "@/assets/t-3.webp";
import t4 from "@/assets/t-4.webp";
import t5 from "@/assets/t-5.webp";
import t6 from "@/assets/t-6.webp";
import t7 from "@/assets/t-7.webp";

interface StaffMember {
  id: number;
  name: string;
  role: string;
  qualifications: string[];
  experience: string;
  philosophy: string;
  image: string;
  themeColor: string; // gradient classes
  glowColor: string;  // shadow-glow on hover
  badgeBg: string;
  badgeText: string;
  icon: any;
  specialties: string[];
  rotationClass: string; // Scrapbook tilt feel
}

const leadershipStaff: readonly StaffMember[] = [
  {
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
    rotationClass: "hover:rotate-1",
  },
  {
    id: 3,
    name: "Mrs. R. Preethi",
    role: "Principal",
    qualifications: ["B.COM (CA)", "B.Sc Psychology (Montessori Trained)"],
    experience: "8+ Years",
    philosophy: "Every child is a unique blossom. We nurture them with love, guidance, and active play.",
    image: staff3,
    themeColor: "from-accent-red/10 via-accent-red/[0.02] to-transparent",
    glowColor: "group-hover:shadow-accent-red/15",
    badgeBg: "bg-white border-accent-red/80",
    badgeText: "text-accent-red",
    icon: Heart,
    specialties: ["Academic Development", "Child Behavior & Guidance", "Teacher Mentorship"],
    rotationClass: "hover:-rotate-1",
  },
];

const teamStaff: readonly StaffMember[] = [
  {
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
    rotationClass: "hover:rotate-2",
  },
  {
    id: 6,
    name: "Mrs. Ayisha Nihara",
    role: "Montessori Teacher",
    qualifications: [
      "B.A. (English)",
      "MTTC & PPTTC Certified",
      "CPPTTC (Child Psychology)",
      "Dip. Computerized Financial Accounting"
    ],
    experience: "5+ Years",
    philosophy: "Language and expression are the keys to a child's confidence. We learn by sharing.",
    image: staff6,
    themeColor: "from-accent-blue/10 via-accent-blue/[0.02] to-transparent",
    glowColor: "group-hover:shadow-accent-blue/15",
    badgeBg: "bg-white border-accent-blue/80",
    badgeText: "text-accent-blue",
    icon: BookOpen,
    specialties: ["Pre-Primary Phonics", "Language Arts", "Fine Motor Play"],
    rotationClass: "hover:-rotate-2",
  },
  {
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
    rotationClass: "hover:rotate-1",
  },
  {
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
    rotationClass: "hover:-rotate-1",
  },
];

const slidingImages = [t1, t2, t3, t4, t5, t6, t7];

export const Route = createFileRoute("/staff")({
  head: () => ({
    meta: [
      { title: "Our Staff — Junior Junction Play School, Erode" },
      {
        name: "description",
        content: "Meet our dedicated founders, administrators, and Montessori guides at Junior Junction, Erode.",
      },
      { property: "og:title", content: "Our Staff — Junior Junction Play School" },
      {
        property: "og:description",
        content: "Nurturing educators, directors, and administrators guiding little minds in Erode.",
      },
    ],
  }),
  component: StaffPage,
});

function StaffPage() {
  return (
    <div className="relative min-h-screen px-4 pb-20 pt-28 sm:pt-36 md:pt-40 bg-gradient-to-br from-[#FFFDF8] via-[#F7FAFC] to-[#FFF4F6] overflow-hidden flex flex-col justify-between">
      {/* Background Ambient Decorative Glows */}
      <div className="pointer-events-none absolute left-0 top-0 -z-10 h-[600px] w-[600px] rounded-full bg-accent-blue/[0.04] blur-[120px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 -z-10 h-[600px] w-[600px] rounded-full bg-accent-red/[0.03] blur-[120px]" />

      {/* Header Section */}
      <header className="mx-auto max-w-3xl w-full text-center mb-16 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-neutral-800 leading-tight"
        >
          Meet the Team Behind <br />
          Our <span className="text-accent-red font-light italic">Junior Junction</span>
        </motion.h1>
      </header>

      {/* Asymmetric Scrapbook Container */}
      <main className="mx-auto max-w-7xl w-full flex-1 px-2 relative z-10 space-y-12">
        
        {/* ROW 1: Leadership (Founder & Principal) - Horizontal Wide Cards */}
        <section className="space-y-6">
          <div className="text-left mb-6 pl-4 border-l-4 border-accent-red">
            <h2 className="text-sm font-black uppercase text-neutral-450 tracking-widest leading-none">
              School Leadership
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {leadershipStaff.map((member, index) => {
              const IconComponent = member.icon;
              return (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 24,
                    delay: index * 0.1,
                  }}
                  className={`group relative rounded-[36px] border border-neutral-200/50 shadow-soft hover:shadow-float p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-center sm:items-stretch overflow-hidden transition-all duration-500 cursor-default ${member.rotationClass} ${member.glowColor}`}
                >
                  {/* Base white surface and soft overlay gradient */}
                  <div className="absolute inset-0 bg-white -z-10" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.themeColor} -z-10`} />

                  {/* Decorative Subtle Corner Accent Pin */}
                  <div className="absolute top-4 right-4 h-3 w-3 rounded-full bg-neutral-200 group-hover:bg-accent-red transition-colors duration-300" />

                  {/* Left Side: Portrait Photo Frame */}
                  <div className="w-full sm:w-[180px] shrink-0 flex items-center justify-center">
                    <div className="relative aspect-square w-full sm:w-[180px] rounded-[24px] overflow-hidden border-4 border-white shadow-soft bg-white group-hover:scale-[1.02] transition-transform duration-500">
                      <img
                        src={member.image}
                        alt={member.name}
                        loading="lazy"
                        width={180}
                        height={180}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>

                  {/* Right Side: Detailed Profile Content */}
                  <div className="flex-1 flex flex-col justify-between text-left">
                    <div>
                      <div className="mb-3.5 select-none">
                        <span className={`inline-block px-4 py-1.5 rounded-xl text-xs md:text-sm font-black tracking-widest uppercase border-2 shadow-[3px_3px_0px_rgba(0,0,0,0.12)] transform ${index % 2 === 0 ? '-rotate-1.5' : 'rotate-1.5'} hover:rotate-0 transition-transform duration-300 ${member.badgeBg} ${member.badgeText}`}>
                          {member.role}
                        </span>
                      </div>

                      <h3 className="text-xl font-black text-neutral-800 tracking-tight group-hover:text-accent-red transition-colors duration-300">
                        {member.name}
                      </h3>

                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {member.qualifications.map((q) => (
                          <span key={q} className="inline-flex items-center gap-1 text-[10px] font-bold text-neutral-600 bg-neutral-50/65 px-2.5 py-0.5 rounded-full border border-neutral-200/50 shadow-[1px_1px_2px_rgba(0,0,0,0.02)] select-none">
                            <GraduationCap className={`h-3 w-3 ${member.badgeText}`} />
                            {q}
                          </span>
                        ))}
                      </div>


                    </div>


                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ROW 2: Teaching & Admin Team - Vertical Grid */}
        <section className="space-y-6 pt-6">
          <div className="text-left mb-6 pl-4 border-l-4 border-sky-400">
            <h2 className="text-sm font-black uppercase text-neutral-450 tracking-widest leading-none">
              Academic & Administrative Officers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamStaff.map((member, index) => {
              const IconComponent = member.icon;
              return (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 22,
                    delay: 0.2 + index * 0.1,
                  }}
                  className={`group relative rounded-[32px] border border-neutral-200/50 shadow-soft hover:shadow-float p-5 flex flex-col justify-between overflow-hidden transition-all duration-500 cursor-default ${member.rotationClass} ${member.glowColor}`}
                >
                  {/* Base white surface and soft overlay gradient */}
                  <div className="absolute inset-0 bg-white -z-10" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.themeColor} -z-10`} />

                  <div>
                    {/* Photo Frame */}
                    <div className="relative aspect-square w-full rounded-2xl overflow-hidden border border-neutral-200/50 shadow-soft bg-white mb-5 group-hover:border-neutral-300/60 transition-colors duration-500">
                      <img
                        src={member.image}
                        alt={member.name}
                        loading="lazy"
                        width={300}
                        height={300}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-102"
                      />
                    </div>

                    {/* Meta info */}
                    <div className="text-left px-1">
                      <div className="mb-3 select-none">
                        <span className={`inline-block px-3.5 py-1.5 rounded-xl text-[11px] md:text-xs font-black tracking-widest uppercase border-2 shadow-[3px_3px_0px_rgba(0,0,0,0.12)] transform ${index % 2 === 0 ? 'rotate-1.5' : '-rotate-1.5'} hover:rotate-0 transition-transform duration-300 ${member.badgeBg} ${member.badgeText}`}>
                          {member.role}
                        </span>
                      </div>

                      <h3 className="text-lg font-black text-neutral-800 tracking-tight leading-snug group-hover:text-accent-blue transition-colors duration-300">
                        {member.name}
                      </h3>

                      {/* Multi-line credentials list */}
                      <div className="flex flex-wrap gap-1 gap-y-1.5 mt-2.5 min-h-[36px]">
                        {member.qualifications.map((q) => (
                          <span key={q} className="inline-flex items-center gap-1 text-[9px] font-bold text-neutral-600 bg-neutral-50/65 px-2 py-0.5 rounded-full border border-neutral-200/50 shadow-[1px_1px_2px_rgba(0,0,0,0.02)] select-none">
                            <GraduationCap className={`h-2.5 w-2.5 ${member.badgeText}`} />
                            {q}
                          </span>
                        ))}
                      </div>


                    </div>
                  </div>


                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ROW 3: sliding images marquee */}
        <section className="pt-12 border-t border-neutral-200/40">
          <div className="relative w-full overflow-hidden rounded-[32px] border border-neutral-200/50 bg-white/40 p-4 backdrop-blur-md">
            {/* Ambient gradients for smooth fade out at edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#FFFDF8] via-[#FFFDF8]/80 to-transparent rounded-l-[32px]" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#FFFDF8] via-[#FFFDF8]/80 to-transparent rounded-r-[32px]" />
            
            <div className="overflow-hidden py-2">
              <div className="animate-marquee flex w-max gap-6 px-4">
                {[...slidingImages, ...slidingImages].map((imgSrc, i) => {
                  const isSquare = i % 2 === 0;
                  return (
                    <figure
                      key={i}
                      className={`group relative shrink-0 overflow-hidden rounded-[24px] border-[4px] golden-border shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-float bg-white ${
                        isSquare
                          ? "w-[240px] sm:w-[300px] aspect-square"
                          : "w-[320px] sm:w-[400px] aspect-[4/3]"
                      }`}
                    >
                      <img
                        src={imgSrc}
                        alt="Life at Junior Junction"
                        loading="lazy"
                        width={isSquare ? 300 : 400}
                        height={300}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </figure>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

      </main>


    </div>
  );
}
