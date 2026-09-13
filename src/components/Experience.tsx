"use client";

import { motion } from "framer-motion";
import { MessageCircleOff, Highlighter, ShieldCheck, Smartphone } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="relative w-full bg-[var(--color-brand-background)] flex flex-col items-center justify-center overflow-hidden pt-24 pb-32">
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center z-20 mb-12 sm:mb-16 px-4"
      >
        <h2 className="font-heading text-4xl md:text-5xl text-brand-text mb-4">
          The Vedika <span className="text-brand-primary italic">Experience.</span>
        </h2>
        <p className="font-body text-sm md:text-base text-brand-text/70 uppercase tracking-[0.2em] font-medium">
          Why Choose Us
        </p>
      </motion.div>

      {/* Bento Box Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full max-w-6xl px-4">
        
        {/* Box 1: WhatsApp (Span 2) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="col-span-1 md:col-span-2 bg-brand-sand rounded-3xl p-8 md:p-10 flex flex-col justify-between min-h-[280px] md:min-h-[320px] group overflow-hidden relative"
        >
          <div className="w-12 h-12 rounded-full bg-brand-background flex items-center justify-center mb-6 z-10 shadow-sm group-hover:scale-110 transition-transform duration-500">
            <MessageCircleOff className="text-brand-primary w-6 h-6" />
          </div>
          <div className="z-10">
            <h3 className="font-heading text-2xl md:text-3xl text-brand-text mb-3">
              No More WhatsApp Clutter
            </h3>
            <p className="font-body text-brand-text/80 text-base max-w-md font-medium">
              Say goodbye to messy group chats, lost files, and expired links. Experience a clean, beautiful gallery dedicated solely to your celebration.
            </p>
          </div>
          {/* Decorative element */}
          <div className="absolute right-[-10%] top-[-10%] w-64 h-64 bg-brand-background/40 rounded-full blur-3xl group-hover:bg-brand-background/60 transition-colors duration-500"></div>
        </motion.div>

        {/* Box 2: Quality (Span 1) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="col-span-1 bg-brand-primary rounded-3xl p-8 md:p-10 flex flex-col justify-between min-h-[280px] md:min-h-[320px] group relative overflow-hidden"
        >
          <div className="w-12 h-12 rounded-full bg-brand-background/20 flex items-center justify-center mb-6 z-10 backdrop-blur-md group-hover:scale-110 transition-transform duration-500">
            <Highlighter className="text-brand-background w-6 h-6" />
          </div>
          <div className="z-10">
            <h3 className="font-heading text-2xl md:text-3xl text-brand-background mb-3">
              Original Quality
            </h3>
            <p className="font-body text-brand-background/80 text-base font-medium">
              Zero compression. Your photos stay exactly as sharp and breathtaking as the moment they were captured.
            </p>
          </div>
        </motion.div>

        {/* Box 3: Private (Span 1) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="col-span-1 bg-brand-text rounded-3xl p-8 md:p-10 flex flex-col justify-between min-h-[280px] md:min-h-[320px] group relative overflow-hidden"
        >
          <div className="w-12 h-12 rounded-full bg-brand-background/10 flex items-center justify-center mb-6 z-10 backdrop-blur-md group-hover:scale-110 transition-transform duration-500">
            <ShieldCheck className="text-brand-accent w-6 h-6" />
          </div>
          <div className="z-10">
            <h3 className="font-heading text-2xl md:text-3xl text-brand-background mb-3">
              100% Private & Secure
            </h3>
            <p className="font-body text-brand-background/70 text-base font-medium">
              Your memories, your rules. Only the people you invite can access and view your private Vedika gallery.
            </p>
          </div>
        </motion.div>

        {/* Box 4: No Apps (Span 2) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="col-span-1 md:col-span-2 bg-[#9A7B4F] rounded-3xl p-8 md:p-10 flex flex-col justify-between min-h-[280px] md:min-h-[320px] group relative overflow-hidden"
        >
          <div className="w-12 h-12 rounded-full bg-brand-background/20 flex items-center justify-center mb-6 z-10 backdrop-blur-md group-hover:scale-110 transition-transform duration-500">
            <Smartphone className="text-brand-background w-6 h-6" />
          </div>
          <div className="z-10">
            <h3 className="font-heading text-2xl md:text-3xl text-brand-background mb-3">
              Zero App Downloads
            </h3>
            <p className="font-body text-brand-background/90 text-base max-w-md font-medium">
              Access your beautiful digital album instantly through a simple, secure link. No clumsy apps to install—just pure memories that look stunning on any device.
            </p>
          </div>
          {/* Decorative element */}
          <div className="absolute right-[-10%] bottom-[-10%] w-64 h-64 bg-brand-background/10 rounded-full blur-3xl group-hover:bg-brand-background/20 transition-colors duration-500"></div>
        </motion.div>

      </div>
    </section>
  );
}
