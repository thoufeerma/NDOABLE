"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight,
  Target, 
  MessageSquare, 
  TrendingUp, 
  Cpu, 
  Puzzle, 
  GraduationCap 
} from "lucide-react";

const services = [
  {
    title: "Leadership Development",
    description: "Equip your managers with the skills to lead with empathy, strategic vision, and decisive action in a rapidly changing world.",
    icon: Target,
    color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  },
  {
    title: "Soft Skills Training",
    description: "Enhance communication, emotional intelligence, and interpersonal skills to build a harmonious and highly productive workplace.",
    icon: MessageSquare,
    color: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  },
  {
    title: "Sales & Customer Service",
    description: "Transform your front-line teams into confident, persuasive professionals who consistently exceed customer expectations.",
    icon: TrendingUp,
    color: "bg-green-500/20 text-green-400 border-green-500/30",
  },
  {
    title: "AI & Future-Tech Readiness",
    description: "Demystify emerging technologies and prepare your workforce to leverage AI tools for enhanced productivity and innovation.",
    icon: Cpu,
    color: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  },
  {
    title: "Team Building",
    description: "Break down silos and foster genuine collaboration through highly interactive, customized experiential workshops.",
    icon: Puzzle,
    color: "bg-rose-500/20 text-rose-400 border-rose-500/30",
  },
  {
    title: "Campus to Corporate",
    description: "A comprehensive bridging program that helps fresh graduates seamlessly transition into valuable corporate contributors.",
    icon: GraduationCap,
    color: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-32 lg:py-48 bg-[#012555] relative">
      {/* Decorative ambient gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative">
          
          {/* Sticky Left Sidebar Container */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-accent text-xs font-bold tracking-[0.2em] uppercase mb-8 border border-white/20 backdrop-blur-md">
                Our Services
              </div>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-[1.05] tracking-tight mb-8">
                Solutions That Drive <br className="hidden lg:block"/>
                <span className="text-white/40">Real Impact.</span>
              </h3>
              <p className="text-white/60 text-lg leading-relaxed mb-10 font-medium max-w-md">
                We design and deliver high-impact corporate training solutions tailored to your unique business challenges. Explore our core service verticals.
              </p>
              <button className="hidden lg:inline-flex items-center gap-2 text-white font-bold hover:text-accent transition-colors pb-2 border-b-2 border-white/20 hover:border-accent">
                View All Services <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Scrolling Right Content */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="group relative bg-[#012555]/60 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:border-white/30 hover:bg-[#012555]/80 transition-all duration-500 overflow-hidden"
              >
                {/* Soft glow on hover */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col sm:flex-row gap-8 items-start">
                  <div className={`w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 shadow-sm border ${service.color}`}>
                    <service.icon size={32} strokeWidth={1.5} />
                  </div>
                  
                  <div className="flex-grow">
                    <h4 className="text-2xl font-heading font-bold text-white mb-4 tracking-tight group-hover:text-accent transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-white/70 leading-relaxed text-lg mb-8 font-medium">
                      {service.description}
                    </p>
                    <div className="inline-flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider group-hover:gap-3 group-hover:text-accent transition-all duration-300">
                      <span>Learn More</span>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="lg:hidden w-full flex justify-center mt-8">
            <button className="inline-flex items-center gap-2 text-white font-bold hover:text-accent transition-colors pb-2 border-b-2 border-white/20 hover:border-accent">
              View All Services <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
