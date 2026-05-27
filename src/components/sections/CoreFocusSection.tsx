"use client";

import { motion } from "framer-motion";
import { 
  Briefcase, 
  TrendingUp, 
  Cpu, 
  Users, 
  Mountain, 
  Puzzle, 
  GraduationCap,
  ArrowRight
} from "lucide-react";

const focusAreas = [
  {
    title: "Corporate Life Skills",
    icon: Briefcase,
    description: "Essential skills for professional excellence and workplace harmony.",
  },
  {
    title: "Leadership Development",
    icon: TrendingUp,
    description: "Empowering tomorrow's leaders with strategic vision and empathy.",
  },
  {
    title: "AI & Future-Tech",
    icon: Cpu,
    description: "Preparing your workforce for the digital transformation era.",
  },
  {
    title: "Employee Engagement",
    icon: Users,
    description: "Building resilient cultures that attract and retain top talent.",
  },
  {
    title: "Outbound & Adventure",
    icon: Mountain,
    description: "Experiential learning that builds resilience and leadership.",
  },
  {
    title: "Team Building",
    icon: Puzzle,
    description: "Fostering collaboration through highly interactive workshops.",
  },
  {
    title: "Campus to Corporate",
    icon: GraduationCap,
    description: "Bridging the gap for fresh graduates entering the corporate world.",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 200, damping: 20 } }
};

export default function CoreFocusSection() {
  return (
    <section className="py-32 bg-[#F8F9FA] relative border-b border-gray-100 overflow-hidden">
      {/* Subtle Color Ambient Gradients */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[80px] pointer-events-none translate-y-1/2" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-3xl">
            <h2 className="text-sm font-bold tracking-[0.2em] text-accent uppercase mb-4">Core Focus</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-extrabold text-primary tracking-tight">
              Transforming Potential <br className="hidden md:block" />
              <span className="text-primary/60">into Performance.</span>
            </h3>
          </div>
          <button className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors pb-1 border-b-2 border-primary/10 hover:border-accent">
            Explore All Solutions <ArrowRight size={16} />
          </button>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {focusAreas.map((area, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="group relative h-full bg-white rounded-3xl p-8 border border-gray-100/80 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-premium hover:-translate-y-1 transition-all duration-500 ease-out cursor-pointer flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-[#F8F9FA] text-primary flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-500 shadow-sm border border-gray-100">
                  <area.icon size={26} strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-heading font-bold text-primary mb-3 tracking-tight">
                  {area.title}
                </h4>
                <p className="text-primary/60 text-sm leading-relaxed mb-8 flex-grow">
                  {area.description}
                </p>
                <div className="mt-auto flex items-center text-sm font-bold text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Premium CTA Card */}
          <motion.div variants={itemVariants}>
            <div className="group relative h-full bg-gradient-to-br from-primary to-[#0f172a] rounded-3xl p-8 shadow-premium hover:shadow-2xl transition-all duration-500 ease-out cursor-pointer flex flex-col justify-center overflow-hidden">
              {/* Abstract glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/20 rounded-full blur-3xl group-hover:bg-accent/30 transition-colors duration-500" />
              
              <div className="relative z-10 text-center flex flex-col items-center">
                <div className="w-12 h-1 bg-accent/50 mb-6 rounded-full" />
                <h4 className="text-2xl font-heading font-bold text-white mb-4 tracking-tight leading-tight">
                  Ready to elevate <br/> your team?
                </h4>
                <button className="mt-4 text-sm font-semibold uppercase tracking-wider text-accent group-hover:text-white transition-colors flex items-center gap-2">
                  Contact Us <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
