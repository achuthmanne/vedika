"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Car, Heart, MapPin, Laptop, Sparkles, Check, Compass, Globe } from "lucide-react";

export default function TravelPage() {
  const handleBooking = (packageId: string) => {
    let text = "";
    if (packageId === "weekend") {
      text = "Hi Vedika Team! I want to create a digital space for 'The Weekend Getaway' (₹1,999). We have a trip coming up. Please share the details.";
    } else if (packageId === "expedition") {
      text = "Hi Vedika Team! I want to book 'The Grand Expedition' digital space package (₹4,999) for our international trip/honeymoon. Please share the details.";
    } else if (packageId === "ultimate") {
      text = "Hi Vedika Team! We want to discuss 'The Ultimate Travelogue' digital space (₹9,999) for our massive family trip/yatra! Let's get started.";
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
          <source src="/travel.mp4" type="video/mp4" />
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
            <p className="text-brand-background/80 uppercase tracking-[0.3em] font-bold text-sm md:text-base mb-6">Travel & Adventures</p>
            <h1 className="font-heading text-5xl md:text-7xl text-brand-background mb-6">
              A Permanent Home <br/> for Your <span className="text-brand-accent italic">Adventures.</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-background/90 max-w-2xl mx-auto font-light leading-relaxed">
              Don't let your greatest journeys get lost in your camera roll. Turn your scattered photos into breathtaking digital travelogues.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 md:py-32 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col gap-24 md:gap-32">
          
          {/* Feature 1: The Friends Road Trip */}
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden border border-brand-text/5">
                <Image src="/travel-friends.jpg" alt="Friends Road Trip" fill className="object-cover" />
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
                <Car className="w-6 h-6" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl text-brand-text mb-4">The Friends Getaway</h2>
              <p className="text-brand-text/70 text-lg leading-relaxed">
                The spontaneous road trips and weekend getaways with friends. Throw all your raw photos into one shared digital space, beautifully curated and color-graded for everyone to look back on years later.
              </p>
            </motion.div>
          </div>

          {/* Feature 2: Honeymoon */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden border border-brand-text/5">
                <Image src="/travel-honeymoon.jpg" alt="Romantic Honeymoon" fill className="object-cover" />
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
                <Heart className="w-6 h-6" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl text-brand-text mb-4">The Honeymoon</h2>
              <p className="text-brand-text/70 text-lg leading-relaxed">
                Your first major journey together deserves more than an Instagram carousel. We build cinematic travel journals that document every aesthetic street, beautiful dinner, and romantic moment.
              </p>
            </motion.div>
          </div>

          {/* Feature 3: The Family Yatra */}
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden border border-brand-text/5">
                <Image src="/travel-yatra.jpg" alt="Family Spiritual Yatra" fill className="object-cover" />
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
                <MapPin className="w-6 h-6" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl text-brand-text mb-4">The Family Yatra</h2>
              <p className="text-brand-text/70 text-lg leading-relaxed">
                Whether it's an adventurous Himalayan trek or a peaceful family pilgrimage, we create majestic digital diaries that preserve your heritage, group memories, and spiritual experiences forever.
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
                <Image src="/travel-digital.jpg" alt="Digital Travelogue" fill className="object-cover" />
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
                <Laptop className="w-6 h-6" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl text-brand-text mb-4">The Digital Travelogue</h2>
              <p className="text-brand-text/70 text-lg leading-relaxed">
                Interactive maps, daily itineraries, and massive photo dumps—all organized beautifully in a premium digital hub. Just share your unique VEDIKA link and let your friends experience your trip.
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-brand-text text-brand-background px-4">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl mb-4">Travelogue Packages</h2>
            <p className="text-brand-background/70 text-lg max-w-2xl mx-auto">
              You travel the world, we build the digital space. Beautifully curated memories.
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
              <h3 className="font-heading text-2xl mb-2">The Weekend Getaway</h3>
              <p className="text-brand-background/60 text-sm mb-6 h-10">Perfect for short road trips or weekend staycations.</p>
              <div className="mb-8">
                <span className="text-4xl font-heading">₹1,999</span>
              </div>
              <ul className="flex flex-col gap-4 mb-8">
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Ready-made Premium Design</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Simple Trip Story</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Up to 100 Photos Gallery</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> 1 Year Premium Hosting</li>
              </ul>
              <button 
                onClick={() => handleBooking("weekend")}
                className="w-full py-4 rounded-full border border-brand-background/20 text-brand-background hover:bg-brand-background hover:text-brand-text transition-colors font-bold text-sm tracking-widest uppercase"
              >
                Book Getaway
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
                <Sparkles className="w-3 h-3" /> Most Popular
              </div>
              <h3 className="font-heading text-2xl mb-2 text-brand-accent">The Grand Expedition</h3>
              <p className="text-brand-background/60 text-sm mb-6 h-10">Ideal for Honeymoons, international trips, or week-long vacations.</p>
              <div className="mb-8">
                <span className="text-4xl font-heading text-brand-accent">₹4,999</span>
              </div>
              <ul className="flex flex-col gap-4 mb-8">
                <li className="flex items-start gap-3 text-sm text-brand-background/90"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Interactive Travel Map</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/90"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Day-by-Day Itinerary View</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/90"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Up to 300 Photos & Videos</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/90"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Digital Guestbook</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/90"><Check className="w-5 h-5 text-brand-accent shrink-0" /> 3 Years Premium Hosting</li>
              </ul>
              <button 
                onClick={() => handleBooking("expedition")}
                className="w-full py-4 rounded-full bg-brand-accent text-brand-text hover:bg-brand-accent/90 transition-colors font-bold text-sm tracking-widest uppercase"
              >
                Book Expedition
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
                <Compass className="w-3 h-3" /> Epic Journey
              </div>
              <h3 className="font-heading text-2xl mb-2">The Ultimate Travelogue</h3>
              <p className="text-brand-background/60 text-sm mb-6 h-10">For massive family trips, spiritual yatras, or extreme multi-country adventures.</p>
              <div className="mb-8">
                <span className="text-4xl font-heading">₹9,999</span>
              </div>
              <ul className="flex flex-col gap-4 mb-8">
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> 100% Custom Travel Hub</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Unlimited WhatsApp Dumps</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Massive Community Gallery</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> 5 Years Premium Hosting</li>
              </ul>
              <button 
                onClick={() => handleBooking("ultimate")}
                className="w-full py-4 rounded-full border border-brand-background/20 text-brand-background hover:bg-brand-background hover:text-brand-text transition-colors font-bold text-sm tracking-widest uppercase"
              >
                Book Ultimate
              </button>
            </motion.div>

          </div>

        </div>
      </section>

    </main>
  );
}
