"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag, User as UserIcon } from "lucide-react";
import { User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import Cart from "./Cart";
import AuthModal from "./AuthModal";

export default function Navbar({ onExploreClick, isCompact = false, scrollY = 0 }: { onExploreClick?: () => void, isCompact?: boolean, scrollY?: number }) {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check active sessions and sets the user
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for changes on auth state (logged in, signed out, etc.)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) setAuthModalOpen(false); // close modal on login success
    });

    return () => subscription.unsubscribe();
  }, []);
  
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
                  { name: "Explore Templates", href: "/templates", id: "templates-page" },
                ].map((link) => (
                  link.href ? (
                    <Link
                      key={link.id}
                      href={link.href}
                      className="text-sm font-bold tracking-widest uppercase transition-colors cursor-pointer hover:text-brand-primary text-brand-text/90"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <button
                      key={link.id}
                      onClick={() => {
                        document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-sm font-bold tracking-widest uppercase transition-colors cursor-pointer hover:text-brand-primary text-brand-text/90"
                    >
                      {link.name}
                    </button>
                  )
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
            {/* Desktop CTA & Cart */}
            <div className="hidden lg:flex items-center gap-4">
              {user ? (
                <>
                  <button
                    onClick={() => setCartOpen(true)}
                    className="p-2.5 bg-brand-text/5 text-brand-text rounded-full hover:bg-brand-text/10 transition-colors shadow-sm"
                  >
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-brand-text/5 rounded-full border border-brand-text/10">
                    <div className="w-7 h-7 bg-brand-primary text-brand-background rounded-full flex items-center justify-center font-bold text-xs">
                      {user.email?.charAt(0).toUpperCase() || 'U'}
                    </div>
                    <button 
                      onClick={() => supabase.auth.signOut()}
                      className="text-[10px] font-bold uppercase tracking-widest text-brand-text/60 hover:text-brand-text px-2"
                    >
                      Logout
                    </button>
                  </div>
                  <Link
                    href="/templates"
                    className="bg-brand-primary text-brand-background hover:bg-[#9c4632] px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
                  >
                    Book Now
                  </Link>
                </>
              ) : (
                <button
                  onClick={() => setAuthModalOpen(true)}
                  className="bg-brand-primary text-brand-background hover:bg-[#9c4632] px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer flex items-center gap-2"
                >
                  <UserIcon className="w-4 h-4" /> Sign In
                </button>
              )}
            </div>

            {/* Mobile Actions (Only visible when links should be shown) */}
            {showLinks && (
              <div className="lg:hidden flex items-center gap-2">
                <button
                  onClick={() => user ? setCartOpen(true) : setAuthModalOpen(true)}
                  className="p-2 text-brand-text flex items-center justify-center cursor-pointer relative"
                >
                  {user ? <ShoppingBag className="w-5 h-5" /> : <UserIcon className="w-5 h-5" />}
                </button>
                <button 
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 text-brand-text flex items-center justify-center cursor-pointer"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
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
                { name: "Explore Templates", href: "/templates", id: "templates-page" },
              ].map((link) => (
                link.href ? (
                  <Link
                    key={link.id}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-left text-base font-bold tracking-widest uppercase transition-colors text-brand-text/90 hover:text-brand-primary py-2 px-4"
                  >
                    {link.name}
                  </Link>
                ) : (
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
                )
              ))}
              
              {user ? (
                <>
                  <div className="flex items-center justify-between mt-2 pt-4 border-t border-brand-text/10 px-4">
                    <span className="text-sm font-medium text-brand-text/70">{user.email}</span>
                    <button 
                      onClick={() => {
                        supabase.auth.signOut();
                        setMobileMenuOpen(false);
                      }}
                      className="text-xs font-bold uppercase tracking-widest text-brand-text/60"
                    >
                      Logout
                    </button>
                  </div>
                  <Link
                    href="/templates"
                    onClick={() => setMobileMenuOpen(false)}
                    className="mt-2 bg-brand-primary text-brand-background px-6 py-3.5 w-full block text-center rounded-full text-base font-semibold transition-all duration-300 shadow-md cursor-pointer"
                  >
                    Book Now
                  </Link>
                </>
              ) : (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setAuthModalOpen(true);
                  }}
                  className="mt-2 bg-brand-primary text-brand-background px-6 py-3.5 w-full flex items-center justify-center gap-2 rounded-full text-base font-semibold transition-all duration-300 shadow-md cursor-pointer"
                >
                  <UserIcon className="w-5 h-5" /> Sign In
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
    </motion.nav>
  );
}
