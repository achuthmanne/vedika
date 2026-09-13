"use client";

import { motion } from "framer-motion";
import { CalendarHeart, PaintBucket, PartyPopper } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <CalendarHeart className="w-8 h-8 text-brand-background" />,
      title: "Book",
      desc: "Reach out with your event details. Whether it's a grand wedding or an intimate gathering, tell us your vision.",
      delay: 0.2
    },
    {
      icon: <PaintBucket className="w-8 h-8 text-brand-background" />,
      title: "We Craft",
      desc: "Our team designs a beautiful, bespoke digital space exclusively for your celebration. No templates, just pure elegance.",
      delay: 0.4
    },
    {
      icon: <PartyPopper className="w-8 h-8 text-brand-background" />,
      title: "You Celebrate",
      desc: "We hand over your secure link. Share it with your friends and family, and let everyone relive the beautiful moments.",
      delay: 0.6
    }
  ];

  return (
    <section id="how-it-works" className="relative w-full bg-brand-background flex flex-col items-center justify-center overflow-hidden pt-24 pb-32">
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center z-20 mb-16 px-4"
      >
        <h2 className="font-heading text-4xl md:text-5xl text-brand-text mb-4">
          Three Simple <span className="text-brand-primary italic">Steps.</span>
        </h2>
        <p className="font-body text-sm md:text-base text-brand-text/70 uppercase tracking-[0.2em] font-medium">
          How It Works
        </p>
      </motion.div>

      {/* Steps Container */}
      <div className="relative z-10 flex flex-col md:flex-row items-start justify-center gap-12 lg:gap-24 w-full max-w-6xl px-4 mt-8">
        
        {/* Connecting Line (Desktop Only) */}
        <div className="hidden md:block absolute top-[40px] left-[15%] right-[15%] h-[2px] bg-linear-to-r from-transparent via-[#9A7B4F]/60 to-transparent -z-10"></div>
        
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: step.delay, ease: "easeOut" }}
            className="flex flex-col items-center text-center max-w-[280px] w-full mx-auto relative group"
          >
            {/* Step Icon */}
            <div className="w-20 h-20 rounded-full bg-brand-primary flex items-center justify-center mb-8 relative shadow-lg group-hover:scale-110 transition-transform duration-500">
              {step.icon}
            </div>
            
            {/* Content */}
            <h3 className="font-heading text-2xl md:text-3xl text-brand-text mb-4">
              {step.title}
            </h3>
            <p className="font-body text-brand-text/80 text-base font-medium leading-relaxed">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
