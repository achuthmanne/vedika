"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Camera, Smartphone, Sparkles, Check, Image as ImageIcon } from "lucide-react";

export default function WeddingsPage() {
  const handleBooking = (packageId: string) => {
    let text = "";
    if (packageId === "essential") {
      text = "Hi Vedika Team! I'm interested in booking 'The Essential' (₹4,999) package for my wedding. Please share the details.";
    } else if (packageId === "grand") {
      text = "Hi Vedika Team! I'm interested in booking 'The Grand Celebration' (₹9,999) package for my wedding. Please share the details.";
    } else if (packageId === "ultimate") {
      text = "Hi Vedika Team! I want to book 'The Complete Love Story' (₹14,999) premium package for my wedding! Let's get started.";
    }
    window.open("https://wa.me/918121648629?text=" + encodeURIComponent(text), "_blank");
  };

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
          Back to Explore
        </Link>
      </nav>

      {/* Hero Section with Video Background */}
      <section className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Loop Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/wedding.mp4" type="video/mp4" />
        </video>

        {/* Gradient Overlay for Text Visibility */}
        <div className="absolute inset-0 bg-linear-to-b from-brand-text/60 via-brand-text/30 to-brand-background z-10"></div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <p className="text-brand-background/80 uppercase tracking-[0.3em] font-bold text-sm md:text-base mb-6">Weddings by Vedika</p>
            <h1 className="font-heading text-5xl md:text-7xl text-brand-background mb-6">
              Your Love Story, <br/> <span className="text-brand-accent italic">Immortalized.</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-background/90 max-w-2xl mx-auto font-light leading-relaxed">
              From the Haldi chaos to the sacred Muhurtham. Every emotion, preserved in a private digital space.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 md:py-32 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col gap-24 md:gap-32">
          
          {/* Feature 1: The Complete Journey */}
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden border border-brand-text/5">
                <Image src="/wedding-story.jpg" alt="Love Story" fill className="object-cover" />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <div className="w-12 h-12 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mb-6">
                <Heart className="w-6 h-6" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl text-brand-text mb-4">The Complete Journey</h2>
              <p className="text-brand-text/70 text-lg leading-relaxed">
                A wedding is more than just a single day. From how you first met, to the pre-wedding shoot, and every tiny ceremony in between. We build a comprehensive timeline that tells your authentic story.
              </p>
            </motion.div>
          </div>

          {/* Feature 2: Event-Wise Galleries */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden border border-brand-text/5">
                <Image src="/wedding-haldi.jpg" alt="Event Galleries" fill className="object-cover" />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <div className="w-12 h-12 bg-brand-accent/10 rounded-2xl flex items-center justify-center text-brand-accent mb-6">
                <Camera className="w-6 h-6" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl text-brand-text mb-4">Event-Wise Galleries</h2>
              <p className="text-brand-text/70 text-lg leading-relaxed">
                No more scrolling through a messy Google Drive folder. Your Haldi, Mehendi, Sangeet, and Reception are beautifully categorized. Your guests can easily navigate to their favorite moments and relive the joy.
              </p>
            </motion.div>
          </div>

          {/* Feature 3: Virtual Guestbook */}
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden border border-brand-text/5">
                <Image src="/wedding-guestbook.jpg" alt="Virtual Guestbook" fill className="object-cover" />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <div className="w-12 h-12 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mb-6">
                <Smartphone className="w-6 h-6" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl text-brand-text mb-4">Virtual Guestbook</h2>
              <p className="text-brand-text/70 text-lg leading-relaxed">
                Some friends and family couldn't make it to the destination? Not a problem. Our exclusive Guestbook feature allows loved ones from anywhere in the world to leave you a heartfelt digital message or wish directly on your space.
              </p>
            </motion.div>
          </div>

          {/* Feature 4: Uncompressed Memories */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden border border-brand-text/5">
                <Image src="/wedding-hero.jpg" alt="Uncompressed Memories" fill className="object-cover" />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <div className="w-12 h-12 bg-brand-accent/10 rounded-2xl flex items-center justify-center text-brand-accent mb-6">
                <ImageIcon className="w-6 h-6" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl text-brand-text mb-4">Uncompressed Memories</h2>
              <p className="text-brand-text/70 text-lg leading-relaxed">
                WhatsApp compresses your memories, hiding the intricate details of your mehendi and the brilliance of your rings. We host your moments in their true, uncompressed, high-resolution glory, just as the photographer intended.
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-brand-text text-brand-background px-4">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl mb-4">Choose Your Canvas</h2>
            <p className="text-brand-background/70 text-lg max-w-2xl mx-auto">
              Transparent, one-time pricing for a lifetime of memories. No hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            
            {/* Package 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-3xl border border-brand-background/20 bg-brand-text transition-colors"
            >
              <h3 className="font-heading text-2xl mb-2">The Essential</h3>
              <p className="text-brand-background/60 text-sm mb-6 h-10">For intimate weddings and the core ceremonies.</p>
              <div className="mb-8">
                <span className="text-4xl font-heading">₹4,999</span>
              </div>
              <ul className="flex flex-col gap-4 mb-8">
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> 2 Core Events (Wedding & Reception)</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Up to 300 Curated Photos</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> 2 Highlight Videos</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> 1 Year Premium Hosting</li>
              </ul>
              <button 
                onClick={() => handleBooking("essential")}
                className="w-full py-4 rounded-full border border-brand-background/20 text-brand-background hover:bg-brand-background hover:text-brand-text transition-colors font-bold text-sm tracking-widest uppercase"
              >
                Book Essential
              </button>
            </motion.div>

            {/* Package 3 (Middle position for Best Seller) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-3xl border-2 border-brand-accent bg-brand-background/10 relative"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-accent text-brand-text px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                Best Seller
              </div>
              <h3 className="font-heading text-2xl mb-2 text-brand-accent">The Complete Love Story</h3>
              <p className="text-brand-background/60 text-sm mb-6 h-10">Our flagship premium experience for the entire journey.</p>
              <div className="mb-8">
                <span className="text-4xl font-heading text-brand-accent">₹14,999</span>
              </div>
              <ul className="flex flex-col gap-4 mb-8">
                <li className="flex items-start gap-3 text-sm text-brand-background/90"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Everything from Day 1 (How you met)</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/90"><Check className="w-5 h-5 text-brand-accent shrink-0" /> ALL Wedding Events (Haldi to Reception)</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/90"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Unlimited Photos & Videos</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/90"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Virtual Guestbook Section</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/90"><Check className="w-5 h-5 text-brand-accent shrink-0" /> 3 Years Premium Hosting</li>
              </ul>
              <button 
                onClick={() => handleBooking("ultimate")}
                className="w-full py-4 rounded-full bg-brand-accent text-brand-text hover:bg-brand-accent/90 transition-colors font-bold text-sm tracking-widest uppercase"
              >
                Book Premium
              </button>
            </motion.div>

            {/* Package 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-8 rounded-3xl border border-brand-background/20 bg-brand-text transition-colors"
            >
              <h3 className="font-heading text-2xl mb-2">The Grand</h3>
              <p className="text-brand-background/60 text-sm mb-6 h-10">For big fat Indian weddings with multiple events.</p>
              <div className="mb-8">
                <span className="text-4xl font-heading">₹9,999</span>
              </div>
              <ul className="flex flex-col gap-4 mb-8">
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> 5 Core Events (Haldi to Reception)</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Up to 1000 Curated Photos</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Virtual Guestbook Section</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> 2 Years Premium Hosting</li>
              </ul>
              <button 
                onClick={() => handleBooking("grand")}
                className="w-full py-4 rounded-full border border-brand-background/20 text-brand-background hover:bg-brand-background hover:text-brand-text transition-colors font-bold text-sm tracking-widest uppercase"
              >
                Book Grand
              </button>
            </motion.div>

          </div>

        </div>
      </section>

    </main>
  );
}
