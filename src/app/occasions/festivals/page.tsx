"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Flower2, Flame, Users, MonitorSmartphone, Sparkles, Check, Globe, UploadCloud } from "lucide-react";

export default function FestivalsPage() {
  const handleBooking = (packageId: string) => {
    let text = "";
    if (packageId === "intimate") {
      text = "Hi Vedika Team! I want to create a digital space for my 'Intimate Puja' (₹2,999). I have the photos ready. Please share the details.";
    } else if (packageId === "story") {
      text = "Hi Vedika Team! I want to book 'The Festival Story' digital space package (₹4,999) for our traditional festival. Please share the details.";
    } else if (packageId === "community") {
      text = "Hi Vedika Team! We want to build 'The Temple Grand' digital space (₹9,999) for our large society event/pandal! Let's get started.";
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
          <source src="/festival.mp4" type="video/mp4" />
        </video>

        {/* Gradient Overlay for Text Visibility */}
        <div className="absolute inset-0 bg-linear-to-b from-brand-text/70 via-brand-text/40 to-brand-background z-10"></div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <p className="text-brand-background/80 uppercase tracking-[0.3em] font-bold text-sm md:text-base mb-6">Festivals & Traditions</p>
            <h1 className="font-heading text-5xl md:text-7xl text-brand-background mb-6">
              Preserving Your <br/> <span className="text-brand-accent italic">Heritage.</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-background/90 max-w-2xl mx-auto font-light leading-relaxed">
              From intimate family Pujas to dedicated devotional archives for major temples. You celebrate, we build the digital archive.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 md:py-32 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col gap-24 md:gap-32">
          
          {/* Feature 1: The Preparation */}
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden border border-brand-text/5">
                <Image src="/festival-preparation.jpg" alt="Festival Preparation" fill className="object-cover" />
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
                <UploadCloud className="w-6 h-6" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl text-brand-text mb-4">Just Upload, We Build</h2>
              <p className="text-brand-text/70 text-lg leading-relaxed">
                You don't need a professional photographer. Capture the joy of making rangolis, stringing marigolds, or home pujas on your phones. Send the raw photo dump to us, and our expert team will color-grade and curate them beautifully.
              </p>
            </motion.div>
          </div>

          {/* Feature 2: The Sacred Rituals */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden border border-brand-text/5">
                <Image src="/festival-puja.jpg" alt="Sacred Rituals" fill className="object-cover" />
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
                <Flame className="w-6 h-6" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl text-brand-text mb-4">Temples & Devotional Archives</h2>
              <p className="text-brand-text/70 text-lg leading-relaxed">
                Whether it's a golden Diwali aarti at home, or a dedicated devotional archive for a major temple and grand traditional event, we design specialized digital galleries that reflect deep spiritual richness.
              </p>
            </motion.div>
          </div>

          {/* Feature 3: Community & Joy */}
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden border border-brand-text/5">
                <Image src="/festival-community.jpg" alt="Community Joy" fill className="object-cover" />
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
                <Users className="w-6 h-6" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl text-brand-text mb-4">Mass Gatherings & Dumps</h2>
              <p className="text-brand-text/70 text-lg leading-relaxed">
                Organizing a large Ganesh Chaturthi pandal, a village Jaathara, or a society Dandiya night? Don't let hundreds of photos get lost in messy WhatsApp groups. We collect them all and organize them into one massive community digital space.
              </p>
            </motion.div>
          </div>

          {/* Feature 4: Cultural Archive */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden border border-brand-text/5">
                <Image src="/festival-archive.jpg" alt="Cultural Digital Archive" fill className="object-cover" />
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
                <MonitorSmartphone className="w-6 h-6" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl text-brand-text mb-4">The Cultural Archive</h2>
              <p className="text-brand-text/70 text-lg leading-relaxed">
                Pass down your heritage gracefully. We transform your raw media into a breathtaking digital library—a permanent home in the digital world, making it easy for future generations to experience their roots.
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-brand-text text-brand-background px-4">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl mb-4">Digital Space Packages</h2>
            <p className="text-brand-background/70 text-lg max-w-2xl mx-auto">
              You shoot the memories, we build the digital space. Pan-India digital space creation for your festivals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            
            {/* Package 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-3xl border border-brand-background/20 bg-brand-text transition-colors relative overflow-hidden"
            >
              <h3 className="font-heading text-2xl mb-2">The Intimate Puja</h3>
              <p className="text-brand-background/60 text-sm mb-6 h-10">For small home pujas and personalized cultural events.</p>
              <div className="mb-8">
                <span className="text-4xl font-heading">₹2,999</span>
              </div>
              <ul className="flex flex-col gap-4 mb-8">
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Upload up to 100 Photos</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Basic Color Grading & Curation</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Beautiful 1-Page Digital Space</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> 1 Year Premium Hosting</li>
              </ul>
              <button 
                onClick={() => handleBooking("intimate")}
                className="w-full py-4 rounded-full border border-brand-background/20 text-brand-background hover:bg-brand-background hover:text-brand-text transition-colors font-bold text-sm tracking-widest uppercase"
              >
                Start Archiving
              </button>
            </motion.div>

            {/* Package 2 (Middle position for Best Seller) */}
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
              <h3 className="font-heading text-2xl mb-2 text-brand-accent">The Festival Story</h3>
              <p className="text-brand-background/60 text-sm mb-6 h-10">Perfect for major festivals like Diwali, Onam, or Navratri.</p>
              <div className="mb-8">
                <span className="text-4xl font-heading text-brand-accent">₹4,999</span>
              </div>
              <ul className="flex flex-col gap-4 mb-8">
                <li className="flex items-start gap-3 text-sm text-brand-background/90"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Upload up to 300 Photos & Videos</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/90"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Professional Photo Editing</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/90"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Dedicated Cultural Digital Space</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/90"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Digital Guestbook for Wishes</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/90"><Check className="w-5 h-5 text-brand-accent shrink-0" /> 3 Years Premium Hosting</li>
              </ul>
              <button 
                onClick={() => handleBooking("story")}
                className="w-full py-4 rounded-full bg-brand-accent text-brand-text hover:bg-brand-accent/90 transition-colors font-bold text-sm tracking-widest uppercase"
              >
                Build Our Story
              </button>
            </motion.div>

            {/* Package 3: Community */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-8 rounded-3xl border border-brand-background/20 bg-brand-text transition-colors relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-brand-primary/20 text-brand-background px-3 py-1 rounded-bl-xl text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                <Globe className="w-3 h-3" /> Mass Scale
              </div>
              <h3 className="font-heading text-2xl mb-2">The Temple Grand</h3>
              <p className="text-brand-background/60 text-sm mb-6 h-10">For major temples, large society Ganesh Pandals, or massive traditional village gatherings.</p>
              <div className="mb-8">
                <span className="text-4xl font-heading">₹9,999</span>
              </div>
              <ul className="flex flex-col gap-4 mb-8">
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Collect WhatsApp Dumps</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Unlimited Photos from Members</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Advanced Community Gallery</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> 5 Years Premium Hosting</li>
              </ul>
              <button 
                onClick={() => handleBooking("community")}
                className="w-full py-4 rounded-full border border-brand-background/20 text-brand-background hover:bg-brand-background hover:text-brand-text transition-colors font-bold text-sm tracking-widest uppercase"
              >
                Create Hub
              </button>
            </motion.div>

          </div>

        </div>
      </section>

    </main>
  );
}
