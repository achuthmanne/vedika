"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { PlayCircle } from "lucide-react";

export default function Hero({ onExploreClick }: { onExploreClick?: () => void }) {
  const images = [
    "/hero/wedding.jpg",
    "/hero/housewarming.jpg",
    "/hero/baby.jpg",
    "/hero/anniversary.jpg",
    "/hero/festival.jpg",
    "/hero/friends.jpg",
    "/hero/tradition.jpg",
    "/hero/travel.jpg",
    "/hero/graduation.jpg",
  ];

  // Duplicate images for infinite scrolling
  const marqueeImages = [...images, ...images, ...images];

  return (
    <section className="relative w-full h-screen min-h-175 flex items-center justify-center overflow-hidden bg-black">
      
      {/* Netflix-style Auto-Scrolling Background Grid */}
      <div className="absolute inset-0 opacity-40 transform -skew-y-6 scale-110 pointer-events-none">
        <div className="flex flex-col gap-4 h-[150%] -translate-y-20">
          
          {/* Row 1: Moving Right to Left */}
          <motion.div 
            className="flex gap-4 w-max"
            animate={{ x: [0, -1920] }}
            transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
          >
            {marqueeImages.map((src, i) => (
              <div key={`r1-${i}`} className="relative w-100 h-70 rounded-xl overflow-hidden">
                <Image src={src} alt="Celebration" fill className="object-cover" />
              </div>
            ))}
          </motion.div>

          {/* Row 2: Moving Left to Right */}
          <motion.div 
            className="flex gap-4 w-max"
            animate={{ x: [-1920, 0] }}
            transition={{ repeat: Infinity, duration: 75, ease: "linear" }}
          >
            {marqueeImages.map((src, i) => (
              <div key={`r2-${i}`} className="relative w-125 h-80 rounded-xl overflow-hidden">
                <Image src={src} alt="Celebration" fill className="object-cover" />
              </div>
            ))}
          </motion.div>

          {/* Row 3: Moving Right to Left */}
          <motion.div 
            className="flex gap-4 w-max"
            animate={{ x: [-500, -2420] }}
            transition={{ repeat: Infinity, duration: 65, ease: "linear" }}
          >
            {marqueeImages.map((src, i) => (
              <div key={`r3-${i}`} className="relative w-112.5 h-75 rounded-xl overflow-hidden">
                <Image src={src} alt="Celebration" fill className="object-cover" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Dark Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/60 to-black/90 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-brand-background leading-tight tracking-wide mb-6">
            Every Celebration <br />
            <span className="text-brand-accent italic">Deserves Its Own Space.</span>
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <p className="font-body text-lg sm:text-xl text-brand-sand/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Create a beautiful, private digital space for your special moments, memories, photos, and videos — all in one place, shared with the people who matter.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
