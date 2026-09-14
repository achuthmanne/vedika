"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatIsVedika from "@/components/WhatIsVedika";
import Occasions from "@/components/Occasions";
import Experience from "@/components/Experience";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState<"hero" | "explore">("hero");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // If the user navigates back from a subpage like /privacy, jump straight to explore
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("section") === "explore") {
        setActiveSection("explore");
      }
    }
  }, []);

  return (
    <main className="h-screen w-full bg-[var(--color-brand-background)] overflow-hidden relative">
      {activeSection === "explore" && (
        <Navbar 
          onExploreClick={() => setActiveSection("explore")} 
          isCompact={activeSection === "explore"} 
          scrollY={scrollY}
        />
      )}
      
      <AnimatePresence>
        {activeSection === "hero" && (
          <>
            {/* Left Door */}
            <motion.div
              key="hero-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ x: "-100%", opacity: 0, filter: "blur(15px)" }}
              transition={{ duration: 1.6, ease: [0.4, 0, 0.2, 1] }}
              className="absolute inset-0 z-20 pointer-events-none"
              style={{ clipPath: "inset(0 50% 0 0)" }}
            >
              <Hero onExploreClick={() => setActiveSection("explore")} />
            </motion.div>

            {/* Right Door */}
            <motion.div
              key="hero-right"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ x: "100%", opacity: 0, filter: "blur(15px)" }}
              transition={{ duration: 1.6, ease: [0.4, 0, 0.2, 1] }}
              className="absolute inset-0 z-20 pointer-events-none"
              style={{ clipPath: "inset(0 0 0 50%)" }}
            >
              <Hero onExploreClick={() => setActiveSection("explore")} />
            </motion.div>

            {/* Central Floating Button (Not split) */}
            <motion.div
              key="hero-button"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.5, filter: "blur(10px)", transition: { duration: 0.2 } }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              className="absolute left-0 right-0 top-[80%] md:top-[75%] z-30 pointer-events-none flex flex-col items-center justify-center"
            >
              <button
                onClick={() => setActiveSection("explore")}
                className="pointer-events-auto flex items-center gap-3 text-brand-sand hover:text-brand-accent px-10 py-4 rounded-full text-xl font-medium transition-colors border border-brand-sand/30 hover:border-brand-accent/50 bg-black/20 backdrop-blur-sm cursor-pointer"
              >
                Explore Vedika
              </button>
            </motion.div>
          </>
        )}
        
        {activeSection === "explore" && (
          <motion.div
            key="explore"
            initial={{ opacity: 0, scale: 0.95, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="absolute inset-0 z-10 overflow-y-auto scrollbar-hide"
            onScroll={(e) => setScrollY(e.currentTarget.scrollTop)}
          >
            <WhatIsVedika />
            
            {/* Vedika Netflix-style Curved Divider */}
            <div className="relative w-full my-4 h-[60px] md:h-[100px] flex justify-center">
              <svg 
                viewBox="0 0 1440 100" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                className="absolute top-0 w-full min-w-[1000px] object-cover"
                preserveAspectRatio="none"
              >
                {/* The sweeping curve */}
                <path 
                  d="M0 100 Q 720 0 1440 100" 
                  stroke="url(#vedikaGradient)" 
                  strokeWidth="4" 
                  fill="none"
                />
                <defs>
                  <linearGradient id="vedikaGradient" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#F8F3EA" stopOpacity="0" />
                    <stop offset="20%" stopColor="#C6A15B" />
                    <stop offset="50%" stopColor="#B6533C" />
                    <stop offset="80%" stopColor="#C6A15B" />
                    <stop offset="100%" stopColor="#F8F3EA" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Soft atmospheric glow under the curve */}
              <div className="absolute top-[10px] w-[60%] h-[40px] bg-brand-primary/15 blur-2xl rounded-[100%]"></div>
            </div>

            <Occasions onBookClick={() => alert("Booking...")} />
            <Experience />
            <HowItWorks />
            <Footer onBookClick={() => alert("Booking...")} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
