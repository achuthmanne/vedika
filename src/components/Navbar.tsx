"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ onExploreClick, isCompact = false, scrollY = 0 }: { onExploreClick?: () => void, isCompact?: boolean, scrollY?: number }) {
  
  const threshold = 300;
  const isScrolledPast = scrollY >= threshold;
  const showLinks = isCompact && isScrolledPast;
  
  // Calculate Y position:
  // If not compact (Hero): y = 0
  // If compact & scrolled past threshold: y = 0 (sticky reveal)
  // If compact & scrolling away (< threshold): y = -scrollY (scrolls away naturally)
  const navY = !isCompact ? 0 : (isScrolledPast ? 0 : -scrollY);

  return (
    <motion.nav 
      initial={false}
      animate={{ 
        y: navY,
        paddingTop: isCompact ? "1rem" : "1.5rem",
        backgroundColor: showLinks ? "rgba(248, 243, 234, 0.95)" : "transparent",
        backdropFilter: showLinks ? "blur(12px)" : "blur(0px)"
      }}
      transition={{ 
        y: { type: "tween", ease: "easeOut", duration: isScrolledPast ? 0.4 : 0 },
        backgroundColor: { duration: 0.3 },
      }}
      className={`absolute top-0 w-full z-50`}
    >
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center">
          
          {/* Logo (Left) */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-shrink-0 flex items-center"
          >
            <button onClick={() => window.location.reload()} className="flex items-center gap-2 cursor-pointer">
              <motion.div
                animate={{
                  width: isCompact ? 170 : 220,
                  height: isCompact ? 54 : 70
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative"
              >
                <Image 
                  src="/logo.png" 
                  alt="VEDIKA Logo" 
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </button>
          </motion.div>

          {/* Nav Links (Desktop Center - Only visible after scroll/explore) */}
          <AnimatePresence>
            {showLinks && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="hidden lg:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2"
              >
                {[
                  { name: "Concept", id: "concept" },
                  { name: "Occasions", id: "occasions" },
                  { name: "Experience", id: "experience" },
                  { name: "How It Works", id: "how-it-works" },
                ].map((link) => (
                  <button
                    key={link.id}
                    onClick={() => {
                      document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-sm font-bold tracking-widest uppercase transition-colors cursor-pointer hover:text-brand-primary text-brand-text/90"
                  >
                    {link.name}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* CTA Buttons (Desktop: Right, Mobile: Bottom Fixed) */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="fixed bottom-6 left-4 right-4 md:static md:bottom-auto md:left-auto md:right-auto flex items-center justify-center md:justify-end gap-6 z-50"
          >
            <button
              onClick={() => alert("Book form opening...")}
              className="bg-brand-primary text-brand-background hover:bg-[#9c4632] px-6 py-3.5 md:py-2.5 w-full md:w-auto text-center rounded-full text-base md:text-sm font-semibold transition-all duration-300 shadow-xl md:shadow-sm hover:shadow-md cursor-pointer"
            >
              Create Your Vedika
            </button>
          </motion.div>
          
        </div>
      </div>
    </motion.nav>
  );
}
