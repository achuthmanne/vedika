"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const pillars = [
  {
    num: "01",
    title: "Celebrate",
    desc: "A beautiful digital space built just for your special day.",
    delay: 0.2,
  },
  {
    num: "02",
    title: "Remember",
    desc: "Keep all your photos, videos, and memories safely in one place.",
    delay: 0.4,
  },
  {
    num: "03",
    title: "Share",
    desc: "100% private and secure. Share only with the people you choose.",
    delay: 0.6,
  },
];

export default function WhatIsVedika() {
  return (
    <section id="concept" className="relative w-full bg-[var(--color-brand-background)] flex flex-col items-center justify-center overflow-hidden pt-24 md:pt-32 pb-12">
      
      {/* Main Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="text-center z-20 mb-12 sm:mb-16 px-4"
      >
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-brand-text mb-4">
          Not Just a Gallery, <br className="hidden sm:block" />
          <span className="text-brand-primary italic">A Digital Vedika.</span>
        </h2>
        <p className="font-body text-sm md:text-base text-brand-text/70 uppercase tracking-[0.2em] font-medium">
          For Your Celebration
        </p>
      </motion.div>

      {/* The 3 Pillars */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-16 md:gap-12 lg:gap-24 w-full max-w-7xl px-4">
        {pillars.map((pillar, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 + pillar.delay, ease: "easeOut" }}
            className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[3/4] flex flex-col items-center justify-center"
          >
            {/* Arch Image Background */}
            <Image
              src="/arch.png"
              alt="Vedika Arch"
              fill
              className="object-contain drop-shadow-xl"
              priority
            />
            
            {/* Text Content inside the Arch */}
            <div className="absolute inset-0 flex flex-col items-center justify-start text-center px-6 pt-[35%] sm:pt-[38%]">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-primary/10 flex items-center justify-center mb-3">
                <span className="font-heading text-sm md:text-base text-brand-primary tracking-wider ml-1">
                  {pillar.num}
                </span>
              </div>
              <h3 className="font-heading text-3xl md:text-4xl text-brand-text mb-3 drop-shadow-sm h-[40px] flex items-center justify-center">
                {pillar.title}
              </h3>
              <p className="font-body text-sm md:text-base text-brand-text/90 leading-relaxed max-w-[170px] font-semibold">
                {pillar.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
