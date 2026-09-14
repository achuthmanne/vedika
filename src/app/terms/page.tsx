"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FileText, Image as ImageIcon, Clock, Handshake } from "lucide-react";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-brand-background text-brand-text font-body selection:bg-brand-primary selection:text-brand-background">
      {/* Simple Navbar */}
      <nav className="w-full px-4 sm:px-8 lg:px-12 py-3 md:py-4 flex justify-between items-center border-b border-brand-text/5 bg-brand-background/95 backdrop-blur-md sticky top-0 z-50">
        <Link href="/?section=explore">
          <div className="relative w-[140px] md:w-[180px] h-[45px] md:h-[55px]">
            <Image src="/logo.png" alt="VEDIKA" fill className="object-contain" />
          </div>
        </Link>
        <Link 
          href="/?section=explore" 
          className="text-xs md:text-sm font-bold tracking-widest uppercase text-brand-text/70 hover:text-brand-primary transition-colors"
        >
          Back to Home
        </Link>
      </nav>

      {/* Hero Header */}
      <section className="px-4 py-20 md:py-32 max-w-4xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading text-4xl md:text-6xl text-brand-text mb-6"
        >
          Clear Terms. <span className="text-brand-primary italic">No Surprises.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-brand-text/80 max-w-2xl mx-auto font-light leading-relaxed"
        >
          We believe in simple, transparent agreements. Our terms are designed to ensure your experience with Vedika is smooth, professional, and entirely stress-free.
        </motion.p>
      </section>

      {/* Content */}
      <section className="px-4 pb-32 max-w-4xl mx-auto">
        <div className="flex flex-col gap-12 md:gap-16">
          
          {/* Point 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row gap-6 md:gap-10 items-start"
          >
            <div className="p-4 bg-brand-primary/10 backdrop-blur-md rounded-2xl text-brand-primary">
              <FileText className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-heading text-2xl md:text-3xl mb-3 text-brand-text">The Service.</h3>
              <p className="text-brand-text/70 leading-relaxed text-base md:text-lg">
                Vedika is a bespoke white-glove service. You provide the details and media of your celebration, and our team crafts a personalized digital gallery. We do not provide DIY website builders; we hand-code and design your space with care.
              </p>
            </div>
          </motion.div>

          {/* Point 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row gap-6 md:gap-10 items-start"
          >
            <div className="p-4 bg-brand-accent/10 backdrop-blur-md rounded-2xl text-brand-accent">
              <ImageIcon className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-heading text-2xl md:text-3xl mb-3 text-brand-text">Media Ownership.</h3>
              <p className="text-brand-text/70 leading-relaxed text-base md:text-lg">
                You retain full rights and ownership of every photo and video you share with us. We claim zero rights to your memories. They are hosted purely to populate your personal gallery, exactly as you intend.
              </p>
            </div>
          </motion.div>

          {/* Point 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row gap-6 md:gap-10 items-start"
          >
            <div className="p-4 bg-brand-primary/10 backdrop-blur-md rounded-2xl text-brand-primary">
              <Handshake className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-heading text-2xl md:text-3xl mb-3 text-brand-text">Revisions & Delivery.</h3>
              <p className="text-brand-text/70 leading-relaxed text-base md:text-lg">
                Once the initial design is delivered, you will have a review period to request adjustments. We want your space to be perfect. After final approval, the space goes live and any major structural changes may require an additional consultation.
              </p>
            </div>
          </motion.div>

          {/* Point 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row gap-6 md:gap-10 items-start"
          >
            <div className="p-4 bg-brand-accent/10 backdrop-blur-md rounded-2xl text-brand-accent">
              <Clock className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-heading text-2xl md:text-3xl mb-3 text-brand-text">Uptime & Hosting.</h3>
              <p className="text-brand-text/70 leading-relaxed text-base md:text-lg">
                Your Vedika will remain online and accessible via your private link for the duration of your chosen plan. We ensure high-speed delivery and premium hosting so your guests never face downtime during your celebration.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Footer Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-20 pt-10 border-t border-brand-text/10 text-center"
        >
          <p className="text-brand-text/50 text-sm font-medium">
            By proceeding with your booking, you agree to these simple terms. <br/> Let's create something beautiful together.
          </p>
        </motion.div>
      </section>

    </main>
  );
}
