"use client";

import { motion } from "framer-motion";
import { 
  Briefcase, 
  Compass, 
  Cpu, 
  Users, 
  Tent, 
  TrendingUp, 
  Network, 
  GraduationCap 
} from "lucide-react";
import { useRef, useState } from "react";
import Image from "next/image";

const areas = [
  { title: "Leadership Development", icon: Compass, colSpan: "md:col-span-2", desc: "Cultivate visionary leaders capable of navigating complex challenges.", imageId: "1552664730-d307ca884978" },
  { title: "AI & Future-Tech Awareness", icon: Cpu, colSpan: "md:col-span-1", desc: "Equip your workforce with future-proof technological literacy.", imageId: "1519389950473-47ba0277781c" },
  { title: "Corporate Life Skills", icon: Briefcase, colSpan: "md:col-span-1", desc: "Essential skills for personal and professional excellence.", imageId: "1507537297725-24a1c029d3ca" },
  { title: "Employee Engagement", icon: Users, colSpan: "md:col-span-2", desc: "Build a cohesive, motivated, and high-performing culture.", imageId: "1522071820081-009f0129c71c" },
  { title: "Outbound Learning", icon: Tent, colSpan: "md:col-span-2", desc: "Experiential programs designed to push boundaries and build trust.", imageId: "1517048676732-d65bc937f952" },
  { title: "Sales Excellence", icon: TrendingUp, colSpan: "md:col-span-1", desc: "Advanced strategies to drive revenue and client satisfaction.", imageId: "1552581234-26160f608093" },
  { title: "Team Building", icon: Network, colSpan: "md:col-span-1", desc: "Forge unbreakable bonds and seamless collaboration.", imageId: "1542744173-8e7e53415bb0" },
  { title: "Campus to Corporate", icon: GraduationCap, colSpan: "md:col-span-2", desc: "Smooth transition programs for new graduates.", imageId: "1523240795612-9a054b0db644" },
];

function BentoCard({ area, index }: { area: any; index: number }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  const Icon = area.icon;

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative overflow-hidden rounded-[24px] bg-midnight border border-white/10 p-8 cursor-pointer group ${area.colSpan}`}
    >
      {/* Contextual Image Background */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-30 transition-opacity duration-500 group-hover:opacity-50">
        <Image 
          src={`https://images.unsplash.com/photo-${area.imageId}?q=80&w=600&auto=format&fit=crop`}
          alt={area.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 saturate-[0.8]"
        />
        <div className="absolute inset-0 bg-midnight/60" />
      </div>

      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-10"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(197,138,43,0.15), transparent 40%)`,
        }}
      />

      <div className="relative z-20 flex flex-col h-full justify-between">
        <div className="mb-4 md:mb-8">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 group-hover:bg-gold/20 group-hover:border-gold/30 transition-all duration-500">
            <Icon className="w-5 h-5 md:w-6 md:h-6 text-ivory/80 group-hover:text-gold transition-colors duration-300" />
          </div>
          <h3 className="text-base md:text-xl font-serif text-ivory mb-1 md:mb-2 drop-shadow-sm">{area.title}</h3>
          <p className="text-xs md:text-sm text-ivory/70 font-sans leading-relaxed">{area.desc}</p>
        </div>
        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-white/20 backdrop-blur-md flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 bg-black/20">
          <span className="text-gold text-[10px] md:text-xs">→</span>
        </div>
      </div>
    </motion.div>
  );
}

export function FocusAreas() {
  return (
    <section id="services" className="py-20 md:py-32 relative bg-midnight z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-12 md:mb-20 text-center md:text-left">
          <h2 className="text-gold/80 uppercase tracking-[0.2em] text-sm font-medium mb-4 flex items-center gap-4 justify-center md:justify-start">
            <span className="w-8 h-[1px] bg-gold/50 hidden md:block" /> Core Focus Areas
          </h2>
          <h3 className="font-serif text-4xl md:text-5xl text-ivory">Domains of <span className="italic text-ivory/70">Expertise</span></h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {areas.map((area, index) => (
            <BentoCard key={area.title} area={area} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
