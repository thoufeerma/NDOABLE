"use client";

import { motion, useMotionValue, useSpring, useTransform, useScroll, useMotionTemplate } from "framer-motion";
import { useRef, useState } from "react";

// --- Custom Ultra-Thin Monoline Icons ---
const ClassroomIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75" className="w-8 h-8">
    <path d="M4 6h16M4 12h16M4 18h16" opacity="0.3"/>
    <rect x="3" y="4" width="18" height="16" rx="1" />
    <path d="M8 20v4M16 20v4M4 24h16"/>
  </svg>
);

const VirtualIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75" className="w-8 h-8">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" strokeDasharray="2 2" opacity="0.5"/>
    <circle cx="12" cy="12" r="2" />
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4" opacity="0.5"/>
  </svg>
);

const HybridIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75" className="w-8 h-8">
    <circle cx="9" cy="12" r="6" />
    <circle cx="15" cy="12" r="6" />
    <path d="M12 8v8" strokeDasharray="1 2"/>
  </svg>
);

const OutdoorIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75" className="w-8 h-8">
    <path d="M2 20L12 4l10 16z" />
    <path d="M7 12l5-8 5 8" opacity="0.4"/>
    <path d="M12 20v-6" opacity="0.4"/>
  </svg>
);

const ExecutiveIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75" className="w-8 h-8">
    <path d="M12 2L15 9h7l-5.5 4.5L18 21l-6-4.5L6 21l1.5-7.5L2 9h7z" />
    <circle cx="12" cy="12" r="10" opacity="0.2"/>
  </svg>
);

const MentoringIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75" className="w-8 h-8">
    <circle cx="12" cy="8" r="4" />
    <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
    <path d="M16 8h4M4 8h4" opacity="0.3"/>
  </svg>
);

const formats = [
  { 
    id: "classroom",
    title: "Classroom Training", 
    desc: "Structured immersion in focused environments.", 
    icon: ClassroomIcon,
    atmosphere: (
      <div className="absolute inset-0 z-0 overflow-hidden opacity-20 pointer-events-none rounded-2xl">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:14px_14px]" />
      </div>
    )
  },
  { 
    id: "virtual",
    title: "Virtual Learning", 
    desc: "Borderless connectivity and digital engagement.", 
    icon: VirtualIcon,
    atmosphere: (
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-2xl">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 blur-[50px] rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-cyan-500/10 blur-[50px] rounded-full" />
      </div>
    )
  },
  { 
    id: "hybrid",
    title: "Hybrid Workshops", 
    desc: "Seamless integration of physical and digital spaces.", 
    icon: HybridIcon,
    atmosphere: (
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-30 rounded-2xl">
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-ivory/5 rounded-full blur-xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-gold/5 rounded-full blur-xl -translate-y-1/2" />
      </div>
    )
  },
  { 
    id: "outdoor",
    title: "Outdoor Experiential", 
    desc: "Immersive team learning beyond traditional environments.", 
    icon: OutdoorIcon,
    atmosphere: (
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-2xl">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-60 h-32 bg-amber-500/10 blur-[60px] rounded-full" />
      </div>
    )
  },
  { 
    id: "executive",
    title: "Executive Coaching", 
    desc: "Personalized leadership transformation for decision-makers.", 
    icon: ExecutiveIcon,
    atmosphere: (
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-2xl">
        <div className="absolute inset-2 border border-gold/10 rounded-xl" />
        <div className="absolute inset-4 border border-gold/5 rounded-lg" />
      </div>
    )
  },
  { 
    id: "mentoring",
    title: "One-on-One Mentoring", 
    desc: "Targeted guidance for high-potential individuals.", 
    icon: MentoringIcon,
    atmosphere: (
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-2xl">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/5 blur-[40px] rounded-full" />
      </div>
    )
  },
];

// Reusable 3D Tilt Card
const InteractiveCard = ({ format, index }: { format: typeof formats[0], index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for 3D rotation
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), { damping: 30, stiffness: 200 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), { damping: 30, stiffness: 200 });
  
  // Radial light overlay position
  const lightX = useSpring(mouseX, { damping: 40, stiffness: 300 });
  const lightY = useSpring(mouseY, { damping: 40, stiffness: 300 });

  const mousePxX = useTransform(lightX, x => x * 400);
  const mousePxY = useTransform(lightY, y => y * 400);
  
  const lightBg = useMotionTemplate`radial-gradient(400px circle at calc(50% + ${mousePxX}px) calc(50% + ${mousePxY}px), rgba(197,138,43,0.1), transparent 50%)`;
  const lightMask = useMotionTemplate`radial-gradient(250px circle at calc(50% + ${mousePxX}px) calc(50% + ${mousePxY}px), black, transparent)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => {
        setHovering(false);
        mouseX.set(0);
        mouseY.set(0);
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{ 
        rotateX, 
        rotateY,
        transformStyle: "preserve-3d"
      }}
      className={`relative h-48 md:h-64 p-4 md:p-8 rounded-2xl flex flex-col justify-between group cursor-crosshair
        bg-white/[0.02] backdrop-blur-xl border border-white/5 border-t-white/10
        hover:bg-white/[0.04] transition-colors duration-700
        shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_10px_40px_rgba(0,0,0,0.2)]
      `}
    >
      {/* Dynamic Hover Radial Light */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{ background: lightBg }}
      />
      
      {/* Border Glow tracking mouse */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none rounded-2xl border border-gold/0 group-hover:border-gold/30 transition-colors duration-700 opacity-0 group-hover:opacity-100"
        style={{
          maskImage: lightMask,
          WebkitMaskImage: lightMask
        }}
      />

      {/* Atmospheric Background */}
      {format.atmosphere}

      <div className="relative z-10 flex flex-col h-full justify-between" style={{ transform: "translateZ(30px)" }}>
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-ivory/60 group-hover:text-gold group-hover:bg-gold/5 group-hover:border-gold/20 transition-all duration-500 group-hover:scale-110 shadow-[0_0_0_rgba(197,138,43,0)] group-hover:shadow-[0_0_20px_rgba(197,138,43,0.3)] shrink-0">
          <format.icon />
        </div>
        
        <div className="transform group-hover:-translate-y-2 transition-transform duration-500 ease-out mt-4 md:mt-0">
          <h4 className="font-serif text-base md:text-2xl text-ivory tracking-wide mb-1 md:mb-2 drop-shadow-md leading-tight line-clamp-2">
            {format.title}
          </h4>
          <p className="font-sans text-[10px] md:text-sm text-ivory/60 leading-snug md:leading-relaxed group-hover:text-ivory/80 transition-colors duration-300 line-clamp-2 md:line-clamp-none">
            {format.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export function TrainingFormats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useSpring(useTransform(scrollYProgress, [0.2, 0.8], [0, 1]), { damping: 40, stiffness: 100 });
  const rotateOrbital1 = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const rotateOrbital2 = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <section ref={containerRef} className="py-20 md:py-32 relative bg-midnight text-ivory z-20 overflow-hidden perspective-1000">
      
      {/* Cinematic Background Environment */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-royal-light/10 via-midnight to-midnight opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-midnight opacity-90" />
        
        {/* Ambient floating geometry (blurred orbs) */}
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
          className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-gold/5 blur-[120px] rounded-full mix-blend-screen"
        />
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 150]) }}
          className="absolute bottom-0 right-1/4 w-[50rem] h-[50rem] bg-royal/10 blur-[150px] rounded-full mix-blend-screen"
        />

        {/* Huge Faded Typography */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center mix-blend-overlay opacity-[0.03]">
           <h1 className="font-serif text-[15vw] leading-none whitespace-nowrap">EXPERIENCE</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Central Anchor & Headers */}
        <div className="relative text-center mb-32 flex flex-col items-center justify-center">
          
          {/* Orbital System */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 pointer-events-none flex items-center justify-center opacity-30">
             <motion.div style={{ rotate: rotateOrbital1 }} className="absolute inset-0 border border-gold/20 rounded-full border-t-gold/50" />
             <motion.div style={{ rotate: rotateOrbital2 }} className="absolute inset-4 border border-ivory/10 rounded-full border-b-ivory/40" />
             <div className="absolute inset-0 bg-gradient-to-b from-gold/10 to-transparent blur-2xl rounded-full" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <h2 className="text-gold/80 uppercase tracking-[0.2em] text-sm font-medium mb-6 drop-shadow-sm">Immersive Experiences</h2>
            <h3 className="font-serif text-5xl md:text-6xl max-w-3xl mx-auto drop-shadow-xl leading-tight">
              Transformational Learning <br/><span className="italic text-ivory/70">Without Boundaries</span>
            </h3>
          </motion.div>
        </div>

        {/* Curved Journey Layout */}
        <div className="relative">
          
          {/* Connecting SVG Path (Hidden on mobile) */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none hidden lg:block z-0 opacity-20">
            <svg width="100%" height="100%" viewBox="0 0 1000 500" preserveAspectRatio="none" className="overflow-visible">
              <motion.path 
                d="M 100 150 C 300 -50, 400 350, 800 150 C 900 50, 950 350, 1100 250"
                fill="none" 
                stroke="url(#goldGradient)" 
                strokeWidth="2" 
                strokeDasharray="10 10"
                style={{ pathLength }}
              />
              <defs>
                <linearGradient id="goldGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#C58A2B" stopOpacity="0"/>
                  <stop offset="50%" stopColor="#C58A2B" />
                  <stop offset="100%" stopColor="#C58A2B" stopOpacity="0"/>
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-8 gap-y-4 lg:gap-y-32 relative z-10">
            {formats.map((format, i) => {
              // Create the wave stagger natively with CSS classes
              let yStagger = "";
              if (i === 0 || i === 2) yStagger = "lg:-translate-y-12";
              if (i === 1) yStagger = "lg:translate-y-12";
              if (i === 3 || i === 5) yStagger = "lg:translate-y-12";
              if (i === 4) yStagger = "lg:-translate-y-12";

              return (
                <div key={format.id} className={yStagger}>
                  <InteractiveCard format={format} index={i} />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
