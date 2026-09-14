"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, EyeOff, LayoutTemplate } from "lucide-react";

export default function PrivacyPage() {
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
          Your Memories. <span className="text-brand-primary italic">Strictly Yours.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-brand-text/80 max-w-2xl mx-auto font-light leading-relaxed"
        >
          At Vedika, we believe that your personal celebrations are sacred. Our commitment to your privacy is simple, transparent, and absolute.
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
              <EyeOff className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-heading text-2xl md:text-3xl mb-3 text-brand-text">Zero Misuse. Absolute Trust.</h3>
              <p className="text-brand-text/70 leading-relaxed text-base md:text-lg">
                The photos and videos you share with us are used for one purpose only: to craft your personal Vedika. We do not analyze them, we do not use them for marketing, and we absolutely do not share them with anyone. Once your digital space is delivered, your raw media is safe.
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
              <LayoutTemplate className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-heading text-2xl md:text-3xl mb-3 text-brand-text">Your Vision, Our Craft.</h3>
              <p className="text-brand-text/70 leading-relaxed text-base md:text-lg">
                We design your space exactly the way you want it. No hidden agendas, no unwanted branding. You tell us your story, provide the visuals, and we build a beautiful, elegant gallery that reflects your exact requirements.
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
              <Lock className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-heading text-2xl md:text-3xl mb-3 text-brand-text">100% Private Access.</h3>
              <p className="text-brand-text/70 leading-relaxed text-base md:text-lg">
                Your Vedika link is completely private and unlisted. It will never appear on search engines like Google. Only you, and the guests you choose to share the private link with, can view your celebration.
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
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-heading text-2xl md:text-3xl mb-3 text-brand-text">Secure & Preserved.</h3>
              <p className="text-brand-text/70 leading-relaxed text-base md:text-lg">
                We handle your memories with the highest level of care. Your media is kept secure during the crafting process and delivered back to you in its original glory, without any quality loss or tampering.
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
            If you have any questions about how we handle your media, please contact us directly. <br/> Your peace of mind is our priority.
          </p>
        </motion.div>
      </section>

    </main>
  );
}
