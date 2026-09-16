"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mic, Briefcase, HeartHandshake, Smartphone, Sparkles, Check, Building2, Globe } from "lucide-react";

export default function EventsPage() {
  const handleBooking = (packageId: string) => {
    let text = "";
    if (packageId === "basic") {
      text = "Hi Vedika Team! I want to create a digital space for 'The Community Hub' (₹14,999). We have a gathering coming up. Please share the details.";
    } else if (packageId === "standard") {
      text = "Hi Vedika Team! I want to book 'The Institution Grand' digital space package (₹114,999) for our upcoming college fest/corporate event. Please share the details.";
    } else if (packageId === "enterprise") {
      text = "Hi Vedika Team! We want to discuss 'The Global Summit' digital space for a massive organization event. We have custom requirements! Let's get started.";
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
          <source src="/events.mp4" type="video/mp4" />
        </video>

        {/* Gradient Overlay for Text Visibility */}
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/10 to-brand-background z-10"></div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <p className="text-brand-background/80 uppercase tracking-[0.3em] font-bold text-sm md:text-base mb-6">Events & Organizations</p>
            <h1 className="font-heading text-5xl md:text-7xl text-brand-background mb-6">
              The Ultimate Digital Hub <br/> for Your <span className="text-brand-accent italic">Events.</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-background/90 max-w-2xl mx-auto font-light leading-relaxed">
              From massive college fests to exclusive corporate retreats. Build a centralized, premium digital space for schedules, live updates, and community memories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 md:py-32 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col gap-24 md:gap-32">
          
          {/* Feature 1: The College Fest */}
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden border border-brand-text/5">
                <Image src="/event-college.jpg" alt="College Fest Concert" fill className="object-cover" />
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
                <Mic className="w-6 h-6" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl text-brand-text mb-4">The College Fest</h2>
              <p className="text-brand-text/70 text-lg leading-relaxed">
                Capture the high energy of massive youth events. Whether it's a concert or an annual cultural fest, we build robust digital spaces that can handle live schedules and massive community photo dumps from thousands of students.
              </p>
            </motion.div>
          </div>

          {/* Feature 2: The Corporate Retreat */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden border border-brand-text/5">
                <Image src="/event-corporate.jpg" alt="Corporate Networking Event" fill className="object-cover" />
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
                <Briefcase className="w-6 h-6" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl text-brand-text mb-4">The Corporate Retreat</h2>
              <p className="text-brand-text/70 text-lg leading-relaxed">
                Professional networking deserves a premium digital presence. Share multi-day schedules, speaker profiles, and candid moments from your company retreats in a sleek, beautifully designed corporate hub.
              </p>
            </motion.div>
          </div>

          {/* Feature 3: Alumni Meet */}
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden border border-brand-text/5">
                <Image src="/event-alumni.jpg" alt="Alumni Reunion Dinner" fill className="object-cover" />
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
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl text-brand-text mb-4">The Alumni Reunion</h2>
              <p className="text-brand-text/70 text-lg leading-relaxed">
                Some bonds last forever. Provide a heartwarming digital space where old friends can reconnect, share nostalgic memories from the past, and stay updated on the reunion events.
              </p>
            </motion.div>
          </div>

          {/* Feature 4: Custom Digital Space */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden border border-brand-text/5">
                <Image src="/event-digital.jpg" alt="Custom Event Digital Space" fill className="object-cover" />
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
                <Smartphone className="w-6 h-6" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl text-brand-text mb-4">Zero Friction Access</h2>
              <p className="text-brand-text/70 text-lg leading-relaxed">
                No apps to install. No logins required. We build custom-branded digital hubs with unique URLs (e.g., vedika.in/v/techfest). Sharing your event details with thousands of people is as simple as sending a WhatsApp message.
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-brand-text text-brand-background px-4">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl mb-4">Organization & Event Packages</h2>
            <p className="text-brand-background/70 text-lg max-w-2xl mx-auto">
              You host the event, we build the digital space. Customized solutions for every scale.
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
              <h3 className="font-heading text-2xl mb-2">The Community Hub</h3>
              <p className="text-brand-background/60 text-sm mb-6 h-10">Perfect for small corporate offsites, team building retreats, or large personal parties.</p>
              <div className="mb-8">
                <span className="text-4xl font-heading">₹14,999</span>
              </div>
              <ul className="flex flex-col gap-4 mb-8">
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Ready-made Premium Design</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Event Schedule & Details</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Up to 300 Photos Gallery</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> 1 Year Premium Hosting</li>
              </ul>
              <button 
                onClick={() => handleBooking("basic")}
                className="w-full py-4 rounded-full border border-brand-background/20 text-brand-background hover:bg-brand-background hover:text-brand-text transition-colors font-bold text-sm tracking-widest uppercase"
              >
                Book The Hub
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
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-accent text-brand-text px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                Most Popular
              </div>
              <h3 className="font-heading text-2xl mb-2 text-brand-accent">The Institution Grand</h3>
              <p className="text-brand-background/60 text-sm mb-6 h-10">Ideal for massive College Fests, University Symposiums, or Alumni Association meets.</p>
              <div className="mb-8">
                <span className="text-4xl font-heading text-brand-accent">₹114,999</span>
              </div>
              <ul className="flex flex-col gap-4 mb-8">
                <li className="flex items-start gap-3 text-sm text-brand-background/90"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Custom Event Branding</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/90"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Live Updates & Speakers List</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/90"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Unlimited Community Gallery</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/90"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Digital Guestbook for Wishes</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/90"><Check className="w-5 h-5 text-brand-accent shrink-0" /> 3 Years Premium Hosting</li>
              </ul>
              <button 
                onClick={() => handleBooking("standard")}
                className="w-full py-4 rounded-full bg-brand-accent text-brand-text hover:bg-brand-accent/90 transition-colors font-bold text-sm tracking-widest uppercase"
              >
                Book The Grand
              </button>
            </motion.div>

            {/* Package 3: Enterprise */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-8 rounded-3xl border border-brand-background/20 bg-brand-text transition-colors relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-brand-primary/20 text-brand-background px-3 py-1 rounded-bl-xl text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                Global Scale
              </div>
              <h3 className="font-heading text-2xl mb-2">The Global Summit</h3>
              <p className="text-brand-background/60 text-sm mb-6 h-10">Fully handcrafted digital space for massive multi-day corporate summits and global expos.</p>
              <div className="mb-8">
                <span className="text-4xl font-heading">Custom</span>
              </div>
              <ul className="flex flex-col gap-4 mb-8">
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> 100% Handcrafted Design</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Custom Domain Integration</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Enterprise-grade bandwidth</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Lifetime or Custom Hosting</li>
              </ul>
              <button 
                onClick={() => handleBooking("enterprise")}
                className="w-full py-4 rounded-full border border-brand-background/20 text-brand-background hover:bg-brand-background hover:text-brand-text transition-colors font-bold text-sm tracking-widest uppercase"
              >
                Contact Sales
              </button>
            </motion.div>

          </div>

        </div>
      </section>

    </main>
  );
}
