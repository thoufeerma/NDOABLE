"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  MonitorPlay, 
  Layers, 
  Map, 
  Briefcase, 
  UserPlus 
} from "lucide-react";

const formats = [
  {
    title: "Classroom Training",
    description: "Immersive, in-person sessions designed for deep focus and immediate interaction.",
    icon: Users,
  },
  {
    title: "Virtual Learning",
    description: "Live, instructor-led online sessions that break geographical barriers without compromising impact.",
    icon: MonitorPlay,
  },
  {
    title: "Hybrid Workshops",
    description: "The perfect blend of digital flexibility and physical presence for distributed teams.",
    icon: Layers,
  },
  {
    title: "Outdoor Experiential",
    description: "Action-oriented learning in natural environments to test leadership under pressure.",
    icon: Map,
  },
  {
    title: "Executive Coaching",
    description: "Intensive, customized guidance for senior leaders to navigate complex business challenges.",
    icon: Briefcase,
  },
  {
    title: "One-on-One Mentoring",
    description: "Personalized developmental relationships to accelerate individual career trajectories.",
    icon: UserPlus,
  },
];

export default function TrainingFormatsSection() {
  return (
    <section className="py-32 bg-white relative">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:radial-gradient(ellipse_at_top_center,white,transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-[0.2em] uppercase mb-8">
            Delivery Methods
          </div>
          <h3 className="text-4xl md:text-5xl font-heading font-extrabold text-primary tracking-tight mb-6">
            Flexible Training Formats
          </h3>
          <p className="text-primary/60 text-lg leading-relaxed font-medium text-balance">
            We adapt to your organizational rhythm. Choose the learning mode that best suits your team's unique requirements and global distribution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {formats.map((format, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="group flex flex-col bg-white rounded-3xl p-8 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-premium border border-gray-100/80 transition-all duration-500 cursor-pointer hover:-translate-y-1"
            >
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#F8F9FA] text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-500 shadow-sm border border-gray-100">
                <format.icon size={26} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-heading font-bold text-primary mb-3 tracking-tight">
                {format.title}
              </h4>
              <p className="text-primary/60 text-sm leading-relaxed font-medium">
                {format.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
