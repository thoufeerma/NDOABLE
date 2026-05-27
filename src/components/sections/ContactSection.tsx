"use client";

import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 lg:py-48 bg-[#012555] relative">
      {/* Ambient background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          
          {/* Left: Contact Info Container */}
          <div>
            <div className="lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-accent text-xs font-bold tracking-[0.2em] uppercase mb-8 border border-white/20 backdrop-blur-md">
                Get In Touch
              </div>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
                Let's build capability together.
              </h3>
              <p className="text-white/70 text-lg mb-16 max-w-md font-medium leading-relaxed">
                Reach out to our team of experts to discuss how we can tailor our corporate development solutions to your organization's unique challenges.
              </p>
              
              <div className="space-y-10">
                <div className="group flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-[#012555]/60 backdrop-blur-md text-white flex items-center justify-center shrink-0 border border-white/20 group-hover:border-accent group-hover:text-accent shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-all duration-300">
                    <MapPin size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-white mb-2 tracking-tight">Our Headquarters</h4>
                    <p className="text-white/60 font-medium">123 Corporate Blvd, Suite 500<br/>Business District, NY 10001</p>
                  </div>
                </div>
                
                <div className="group flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-[#012555]/60 backdrop-blur-md text-white flex items-center justify-center shrink-0 border border-white/20 group-hover:border-accent group-hover:text-accent shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-all duration-300">
                    <Phone size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-white mb-2 tracking-tight">Phone</h4>
                    <p className="text-white/60 font-medium">+1 (234) 567-8900</p>
                  </div>
                </div>
                
                <div className="group flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-[#012555]/60 backdrop-blur-md text-white flex items-center justify-center shrink-0 border border-white/20 group-hover:border-accent group-hover:text-accent shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-all duration-300">
                    <Mail size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-white mb-2 tracking-tight">Email</h4>
                    <p className="text-white/60 font-medium">hello@ndoable.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Premium Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="bg-[#012555]/40 backdrop-blur-2xl rounded-[2rem] p-8 md:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.2)] border border-white/10">
              <h3 className="text-2xl font-heading font-extrabold text-white mb-2 tracking-tight">Request a Consultation</h3>
              <p className="text-white/60 mb-10 font-medium text-sm">Fill out the form below and our team will get back to you within 24 hours.</p>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 relative">
                    <label className="text-xs font-bold text-white/70 uppercase tracking-wider ml-1">First Name</label>
                    <Input placeholder="John" className="h-14 bg-white/5 border-white/10 text-white placeholder:text-white/30 hover:bg-white/10 focus:bg-white/10 focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all rounded-xl font-medium" />
                  </div>
                  <div className="space-y-2 relative">
                    <label className="text-xs font-bold text-white/70 uppercase tracking-wider ml-1">Last Name</label>
                    <Input placeholder="Doe" className="h-14 bg-white/5 border-white/10 text-white placeholder:text-white/30 hover:bg-white/10 focus:bg-white/10 focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all rounded-xl font-medium" />
                  </div>
                </div>
                
                <div className="space-y-2 relative">
                  <label className="text-xs font-bold text-white/70 uppercase tracking-wider ml-1">Email Address</label>
                  <Input type="email" placeholder="john@company.com" className="h-14 bg-white/5 border-white/10 text-white placeholder:text-white/30 hover:bg-white/10 focus:bg-white/10 focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all rounded-xl font-medium" />
                </div>
                
                <div className="space-y-2 relative">
                  <label className="text-xs font-bold text-white/70 uppercase tracking-wider ml-1">Company Name</label>
                  <Input placeholder="Acme Corp" className="h-14 bg-white/5 border-white/10 text-white placeholder:text-white/30 hover:bg-white/10 focus:bg-white/10 focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all rounded-xl font-medium" />
                </div>
                
                <div className="space-y-2 relative">
                  <label className="text-xs font-bold text-white/70 uppercase tracking-wider ml-1">Area of Interest</label>
                  <select className="w-full h-14 rounded-xl border-white/10 border bg-white/5 text-white hover:bg-white/10 focus:bg-white/10 focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all px-4 font-medium appearance-none cursor-pointer">
                    <option value="" disabled selected className="text-gray-900">Select an area</option>
                    <option value="leadership" className="text-gray-900">Leadership Development</option>
                    <option value="soft-skills" className="text-gray-900">Soft Skills Training</option>
                    <option value="ai-readiness" className="text-gray-900">AI & Future-Tech Readiness</option>
                    <option value="team-building" className="text-gray-900">Team Building / Outbound</option>
                    <option value="other" className="text-gray-900">Other</option>
                  </select>
                </div>
                
                <div className="space-y-2 relative">
                  <label className="text-xs font-bold text-white/70 uppercase tracking-wider ml-1">Message</label>
                  <Textarea 
                    placeholder="Tell us about your organization's challenges..." 
                    className="min-h-[140px] bg-white/5 border-white/10 text-white placeholder:text-white/30 hover:bg-white/10 focus:bg-white/10 focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all rounded-xl font-medium resize-none p-4" 
                  />
                </div>
                
                <Button className="w-full h-14 bg-accent hover:bg-accent/90 text-[#012555] font-bold text-base rounded-xl transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:-translate-y-0.5 group mt-4">
                  Submit Request
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
