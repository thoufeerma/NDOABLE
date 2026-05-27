"use client";

import { Users, Cpu, Mountain } from "lucide-react";
import { motion } from "framer-motion";

const pillars = [
  {
    title: "# Corporate Life Skills",
    description: "Empowering people to thrive in the modern workplace.",
    icon: Users,
    iconBg: "bg-blue-500/10 border-blue-500/30",
    iconColor: "text-blue-400",
  },
  {
    title: "# Trending Tech Savvy",
    description: "Building future-ready skills for a digital world.",
    icon: Cpu,
    iconBg: "bg-green-500/10 border-green-500/30",
    iconColor: "text-green-400",
  },
  {
    title: "# Outbound & Adventure",
    description: "Experiential learning that builds resilience and leadership.",
    icon: Mountain,
    iconBg: "bg-orange-500/10 border-orange-500/30",
    iconColor: "text-orange-400",
  },
];

export default function PillarsBanner() {
  return (
    <section className="bg-primary py-12 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px] pointer-events-none translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-white/10">
          {pillars.map((pillar, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className={`flex items-start gap-5 group px-4 lg:px-8 ${index === 0 ? "md:pl-0" : ""} ${index === pillars.length - 1 ? "md:pr-0" : ""}`}
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 border ${pillar.iconBg} group-hover:scale-110 transition-transform duration-500 ease-out`}>
                <pillar.icon size={24} className={pillar.iconColor} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-white font-heading font-bold text-lg mb-2 tracking-tight group-hover:text-accent transition-colors duration-300">
                  {pillar.title}
                </h4>
                <p className="text-white/60 text-sm leading-relaxed font-medium">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
