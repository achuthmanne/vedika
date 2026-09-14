"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar({ onExploreClick, isCompact = false, scrollY = 0 }: { onExploreClick?: () => void, isCompact?: boolean, scrollY?: number }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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

          {/* CTA Buttons (Desktop) & Hamburger (Mobile) */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex items-center gap-4 z-50"
          >
            {/* Desktop CTA */}
            <button
              onClick={() => alert("Book form opening...")}
              className="hidden md:block bg-brand-primary text-brand-background hover:bg-[#9c4632] px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
            >
              Create Your Vedika
            </button>

            {/* Mobile Hamburger (Only visible when links should be shown) */}
            {showLinks && (
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-brand-text flex items-center justify-center cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            )}
          </motion.div>
          
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {showLinks && mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 w-full bg-[#F8F3EA] border-t border-brand-accent/10 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
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
                    setMobileMenuOpen(false);
                  }}
                  className="text-left text-base font-bold tracking-widest uppercase transition-colors text-brand-text/90 hover:text-brand-primary py-2 px-4"
                >
                  {link.name}
                </button>
              ))}
              
              <button
                onClick={() => {
                  alert("Book form opening...");
                  setMobileMenuOpen(false);
                }}
                className="mt-2 bg-brand-primary text-brand-background px-6 py-3.5 w-full text-center rounded-full text-base font-semibold transition-all duration-300 shadow-md cursor-pointer"
              >
                Create Your Vedika
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
