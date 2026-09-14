"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";

export default function ContactPage() {
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
      <section className="px-4 py-20 md:py-24 max-w-3xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading text-4xl md:text-6xl text-brand-text mb-6"
        >
          Let's Craft Something <span className="text-brand-primary italic">Beautiful.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-brand-text/80 max-w-xl mx-auto font-light leading-relaxed"
        >
          Whether it's an upcoming event or a cherished past celebration, reach out to our team directly. We are ready to design your perfect digital space.
        </motion.p>
      </section>

      {/* Contact Cards */}
      <section className="px-4 pb-32 max-w-3xl mx-auto">
        <div className="flex flex-col gap-6 md:gap-8">
          
          {/* WhatsApp Card */}
          <motion.a 
            href="https://wa.me/918121648629?text=Hi%20Vedika%20Team!%20I%20would%20like%20to%20craft%20a%20digital%20space%20for%20my%20celebration."
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:p-8 bg-brand-primary/5 hover:bg-brand-primary/10 border border-brand-primary/10 rounded-3xl transition-all duration-300 backdrop-blur-md cursor-pointer"
          >
            <div className="flex items-center gap-6 mb-4 md:mb-0">
              <div className="p-4 bg-brand-primary/10 rounded-2xl text-brand-primary group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-8 h-8" />
              </div>
              <div>
                <p className="text-xs md:text-sm font-bold tracking-widest uppercase text-brand-primary/70 mb-1">Direct Booking</p>
                <h3 className="font-heading text-2xl md:text-3xl text-brand-text">Chat on WhatsApp</h3>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full border border-brand-text/10 flex items-center justify-center group-hover:border-brand-primary group-hover:text-brand-primary transition-colors self-end md:self-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
          </motion.a>

          {/* Instagram Card */}
          <motion.a 
            href="https://instagram.com/vedika.celebrations"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:p-8 bg-brand-accent/5 hover:bg-brand-accent/10 border border-brand-accent/10 rounded-3xl transition-all duration-300 backdrop-blur-md cursor-pointer"
          >
            <div className="flex items-center gap-6 mb-4 md:mb-0">
              <div className="p-4 bg-brand-accent/10 rounded-2xl text-brand-accent group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </div>
              <div>
                <p className="text-xs md:text-sm font-bold tracking-widest uppercase text-brand-accent/70 mb-1">Social</p>
                <h3 className="font-heading text-2xl md:text-3xl text-brand-text">@vedika.celebrations</h3>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full border border-brand-text/10 flex items-center justify-center group-hover:border-brand-accent group-hover:text-brand-accent transition-colors self-end md:self-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
          </motion.a>

          {/* Email Card */}
          <motion.a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=vedika.celebration@gmail.com&su=Inquiry%20for%20Vedika%20Celebration&body=Hi%20Vedika%20Team%2C%0A%0AI%20would%20like%20to%20craft%20a%20digital%20space%20for%20my%20celebration.%0A%0AMy%20Name%3A%20%0AEvent%20Date%3A%20%0AType%20of%20Event%3A%20%0A%0APlease%20let%20me%20know%20the%20next%20steps.%0A%0AThanks!"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:p-8 bg-brand-text/5 hover:bg-brand-text/10 border border-brand-text/10 rounded-3xl transition-all duration-300 backdrop-blur-md cursor-pointer"
          >
            <div className="flex items-center gap-6 mb-4 md:mb-0">
              <div className="p-4 bg-brand-text/10 rounded-2xl text-brand-text group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8" />
              </div>
              <div>
                <p className="text-xs md:text-sm font-bold tracking-widest uppercase text-brand-text/50 mb-1">Email</p>
                <h3 className="font-heading text-xl md:text-2xl text-brand-text break-all">vedika.celebration@gmail.com</h3>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full border border-brand-text/10 flex items-center justify-center group-hover:border-brand-text group-hover:text-brand-text transition-colors self-end md:self-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
          </motion.a>

        </div>
      </section>

    </main>
  );
}
