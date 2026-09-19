"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ShieldCheck, MessageCircle } from "lucide-react";

export default function UnderReviewPage() {
  return (
    <main className="min-h-screen bg-brand-background text-brand-text font-body flex flex-col selection:bg-brand-primary selection:text-brand-background">
      
      {/* Simple Navbar */}
      <nav className="w-full px-4 sm:px-8 lg:px-12 py-3 md:py-4 flex justify-between items-center border-b border-brand-text/5 bg-brand-background/95 backdrop-blur-md sticky top-0 z-50">
        <Link href="/?section=explore">
          <div className="relative w-[140px] md:w-[180px] h-[45px] md:h-[55px]">
            <Image src="/logo.png" alt="VEDIKA" fill className="object-contain" />
          </div>
        </Link>
        <Link 
          href="/templates" 
          className="text-xs md:text-sm font-bold tracking-widest uppercase text-brand-text/70 hover:text-brand-primary transition-colors"
        >
          Explore Templates
        </Link>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8">
        <div className="max-w-2xl w-full text-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center mb-8"
          >
            <div className="p-6 bg-brand-accent/10 rounded-full text-brand-accent relative">
              <Clock className="w-12 h-12 md:w-16 md:h-16" />
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-brand-accent border-t-transparent border-r-transparent opacity-50"
              />
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-4xl md:text-5xl text-brand-text mb-4 leading-tight"
          >
            Payment Under <span className="text-brand-primary italic">Review.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg text-brand-text/70 mb-12 leading-relaxed max-w-xl mx-auto"
          >
            Thank you for choosing Vedika! We have successfully received your UTR number. Our team is manually verifying the transaction to ensure complete security.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-lg mx-auto mb-12"
          >
            <div className="p-4 md:p-5 bg-brand-primary/5 border border-brand-primary/10 rounded-2xl flex gap-4">
              <ShieldCheck className="w-6 h-6 text-brand-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-brand-text text-sm mb-1 uppercase tracking-wider">Secure Process</h4>
                <p className="text-brand-text/60 text-sm">Every payment is cross-checked with bank records.</p>
              </div>
            </div>
            
            <div className="p-4 md:p-5 bg-brand-accent/5 border border-brand-accent/10 rounded-2xl flex gap-4">
              <Clock className="w-6 h-6 text-brand-accent shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-brand-text text-sm mb-1 uppercase tracking-wider">Turnaround Time</h4>
                <p className="text-brand-text/60 text-sm">Approval usually takes between 2 to 24 hours.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col items-center gap-6"
          >
            <p className="text-brand-text/80 text-sm md:text-base font-medium">
              We will notify you on your WhatsApp number once your digital space is ready!
            </p>
            
            <Link 
              href="https://wa.me/918121648629?text=Hi%20Vedika%20Team!%20I%20just%20submitted%20my%20payment%20and%20waiting%20for%20approval."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-text text-brand-background rounded-full font-body font-bold text-xs uppercase tracking-[0.15em] hover:bg-brand-primary transition-colors group"
            >
              <MessageCircle className="w-4 h-4" />
              Message Support
            </Link>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
