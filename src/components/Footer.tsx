"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer({ onBookClick }: { onBookClick?: () => void }) {
  return (
    <footer className="relative w-full bg-[#1A1918] flex flex-col items-center justify-center overflow-hidden pt-24 pb-12 mt-16">
      
      {/* Creative Top Border Cut (Swoop mask) */}
      <div className="absolute top-0 left-0 w-full z-20">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[40px] md:h-[80px] block" preserveAspectRatio="none">
          <path d="M0 0 L1440 0 L1440 120 C960 0 480 0 0 120 Z" fill="#F8F3EA" />
        </svg>
      </div>

      {/* Background Subtle Arch */}
      <div className="absolute top-[-20%] left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] border-[1px] border-brand-accent/5 rounded-full opacity-50 pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col items-center text-center">
        
        {/* Footer Logo */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-[180px] h-[60px] mb-8"
        >
          <Image 
            src="/logo.png" 
            alt="VEDIKA Logo" 
            fill
            className="object-contain brightness-0 invert"
          />
        </motion.div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="font-heading text-3xl md:text-5xl text-brand-background mb-8">
            Ready to Celebrate?
          </h2>
          
          <button
            onClick={onBookClick}
            className="bg-brand-accent text-brand-text px-8 py-4 rounded-full text-lg font-bold tracking-wider uppercase transition-all duration-300 shadow-xl cursor-pointer"
          >
            Create Your Vedika
          </button>
        </motion.div>

        {/* Divider */}
        <div className="w-full max-w-2xl h-[1px] bg-brand-background/10 my-16"></div>

        {/* Copyright */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center text-brand-background/40 font-body text-xs md:text-sm font-medium tracking-wide">
          <p>© {new Date().getFullYear()} Vedika. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-accent transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Terms</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Contact</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
