"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { HeartCrack, ArrowLeft, ArrowRight } from "lucide-react";

export default function PaymentCancelledPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-brand-background text-brand-text font-body flex flex-col justify-center items-center selection:bg-brand-primary selection:text-brand-background relative overflow-hidden">
      
      {/* Background Subtle Elements */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <Image src="/logo.png" alt="VEDIKA" width={800} height={400} className="object-contain" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center mb-8"
        >
          <div className="p-5 bg-brand-text/5 rounded-full text-brand-text/40">
            <HeartCrack className="w-12 h-12" />
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-5xl md:text-7xl text-brand-text mb-6 leading-tight"
        >
          Leaving so <span className="text-brand-primary italic">soon?</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-brand-text/70 mb-10 leading-relaxed font-light"
        >
          You are just one step away from giving your celebration the premium digital space it deserves. 
          Don't miss out on the <strong className="text-brand-primary font-medium">Vedika experience.</strong> Let your guests witness the beauty of your memories, perfectly crafted and hosted forever.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <button 
            onClick={() => router.back()}
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-brand-text text-brand-background rounded-full font-body font-bold text-xs uppercase tracking-[0.15em] hover:bg-brand-primary transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Wait, Take Me Back
          </button>
          
          <Link 
            href="/?section=explore"
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-brand-text/10 text-brand-text/50 rounded-full font-body font-bold text-xs uppercase tracking-[0.15em] hover:border-brand-text/30 hover:text-brand-text/80 transition-colors"
          >
            Yes, Cancel Booking
          </Link>
        </motion.div>
      </div>

    </main>
  );
}
