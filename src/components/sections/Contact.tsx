"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const InputField = ({ label, type = "text", name, isTextArea = false, value, onChange, focused, setFocused }: any) => (
  <div className="relative w-full mb-6 md:mb-8">
    {isTextArea ? (
      <textarea
        name={name}
        rows={4}
        value={value || ""}
        onChange={onChange}
        onFocus={() => setFocused(name)}
        onBlur={() => setFocused(null)}
        className="w-full bg-transparent border-b border-ivory/20 text-ivory pb-2 pt-6 outline-none transition-colors focus:border-gold resize-none peer"
      />
    ) : (
      <input
        type={type}
        name={name}
        value={value || ""}
        onChange={onChange}
        onFocus={() => setFocused(name)}
        onBlur={() => setFocused(null)}
        className="w-full bg-transparent border-b border-ivory/20 text-ivory pb-2 pt-6 outline-none transition-colors focus:border-gold peer"
      />
    )}
    <label
      className={`absolute left-0 transition-all duration-300 pointer-events-none ${
        focused === name || value
          ? "text-xs text-gold top-0"
          : "text-sm text-ivory/50 top-6"
      }`}
    >
      {label}
    </label>
  </div>
);

export function Contact() {
  const [focused, setFocused] = useState<string | null>(null);
  const [values, setValues] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative bg-midnight text-ivory z-20 overflow-hidden">
      
      {/* Ultra-low opacity premium office background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920&auto=format&fit=crop"
          alt="Premium Office Background"
          fill
          className="object-cover opacity-[0.03] mix-blend-luminosity"
        />
        {/* Subtle blur overlay to push image deep into the background */}
        <div className="absolute inset-0 backdrop-blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-midnight opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
        
        {/* Left: Contact Info */}
        <div className="flex flex-col justify-center">
          <h2 className="text-gold/80 uppercase tracking-[0.2em] text-sm font-medium mb-4">Start a Conversation</h2>
          <h3 className="font-serif text-4xl md:text-6xl mb-8 drop-shadow-lg">
            Let's build <br/><span className="italic text-ivory/70">Excellence.</span>
          </h3>
          <p className="text-ivory/60 font-sans leading-relaxed max-w-md mb-12 drop-shadow-md">
            Connect with our advisory team to discuss how we can tailor our programs to fit your organizational goals.
          </p>

          <div className="space-y-6 text-sm">
            <div>
              <div className="text-ivory/40 uppercase tracking-widest text-xs mb-1">Phone</div>
              <a href="tel:+919751133577" className="text-lg hover:text-gold transition-colors">+91 9751133577</a>
            </div>
            <div>
              <div className="text-ivory/40 uppercase tracking-widest text-xs mb-1">Email</div>
              <a href="mailto:info@ndoableconsultancy.com" className="text-lg hover:text-gold transition-colors">info@ndoableconsultancy.com</a>
            </div>
            <div>
              <div className="text-ivory/40 uppercase tracking-widest text-xs mb-1">Location</div>
              <div className="text-lg">Coimbatore, Tamil Nadu</div>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-midnight/40 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 md:p-12 relative shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        >
          {/* Subtle glow behind form */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gold/5 blur-[100px] -z-10 rounded-full pointer-events-none" />
          
          <form className="flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
              <InputField label="Full Name" name="name" value={values["name"]} onChange={handleChange} focused={focused} setFocused={setFocused} />
              <InputField label="Company Name" name="company" value={values["company"]} onChange={handleChange} focused={focused} setFocused={setFocused} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
              <InputField label="Email Address" type="email" name="email" value={values["email"]} onChange={handleChange} focused={focused} setFocused={setFocused} />
              <InputField label="Phone Number" type="tel" name="phone" value={values["phone"]} onChange={handleChange} focused={focused} setFocused={setFocused} />
            </div>
            <InputField label="Training Requirement" name="requirement" value={values["requirement"]} onChange={handleChange} focused={focused} setFocused={setFocused} />
            <InputField label="Message" name="message" isTextArea={true} value={values["message"]} onChange={handleChange} focused={focused} setFocused={setFocused} />

            <button 
              type="button"
              className="mt-4 px-8 py-4 bg-gold text-midnight font-medium hover:bg-gold-light transition-colors duration-300 w-full rounded-sm tracking-wide shadow-lg hover:shadow-xl"
            >
              Send Inquiry
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
