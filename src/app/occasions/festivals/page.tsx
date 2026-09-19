"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Flower2, Flame, Users, Check, Globe, Sparkles } from "lucide-react";

export default function FestivalsPage() {

  const handleBooking = (packageId: string) => {
    let text = "";
    if (packageId === "simple") {
      text = "Hi Vedika Team! I'm interested in booking 'The Simple Tradition' (₹4,999) package for an upcoming traditional celebration. Please share the details.";
    } else if (packageId === "grand") {
      text = "Hi Vedika Team! I'm interested in booking 'The Grand Tradition' (₹9,999) package for an upcoming traditional celebration. Please share the details.";
    } else if (packageId === "complete") {
      text = "Hi Vedika Team! I want to book 'The Complete Tradition' (₹14,999) premium package to document our complete celebration! Let's get started.";
    } else if (packageId === "essential") {
      text = "Hi Vedika Team! I want to create a digital space with the 'Essential' (₹14,999) package for our organization/temple festival. Please share the details.";
    } else if (packageId === "professional") {
      text = "Hi Vedika Team! I want to book the 'Professional' (₹24,999) digital space package for our upcoming large community festival. Please share the details.";
    } else if (packageId === "signature") {
      text = "Hi Vedika Team! We want to discuss a 'Signature' (₹39,999+) bespoke digital space for our organization/temple festival. We have custom requirements! Let's get started.";
    }
    window.open("https://wa.me/918121648629?text=" + encodeURIComponent(text), "_blank");
  };

  const familyOccasions = [
    { title: "Ganesh Chaturthi", desc: "Welcoming Bappa", img: "/ganesh-chaturthi.jpg", link: "/templates/ganesh-chaturthi" },
    { title: "Diwali", desc: "The festival of lights", img: "/festival-puja.jpg", link: "#" },
    { title: "Ugadi & Pongal", desc: "New beginnings", img: "/festival-archive.jpg", link: "#" },
    { title: "Christmas & Eid", desc: "Joy and brotherhood", img: "/festival-community.jpg", link: "#" },
    { title: "Puja & Ceremonies", desc: "Sacred moments", img: "/festival-puja.jpg", link: "#" },
    { title: "Traditional Functions", desc: "Rooted in culture", img: "/festival-archive.jpg", link: "#" },
  ];

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
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/10 to-brand-background z-10"></div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <p className="text-brand-background/80 uppercase tracking-[0.3em] font-bold text-sm md:text-base mb-6">Festivals & Traditions</p>
            <h1 className="font-heading text-5xl md:text-7xl text-brand-background mb-6">
              Culture Preserved, <br/> <span className="text-brand-accent italic">Digitally Forever.</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-background/90 max-w-2xl mx-auto font-light leading-relaxed">
              From intimate family pujas to massive community utsavs. A permanent digital home for your traditions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sub-Occasions Carousel (Explore by Tradition) */}
      <section className="pt-48 pb-0 bg-brand-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-brand-primary uppercase tracking-[0.2em] font-bold text-sm mb-2">Dive Deeper</p>
              <h2 className="font-heading text-4xl md:text-5xl text-brand-text">Explore by Tradition</h2>
            </div>
            <p className="text-brand-text/60 text-sm max-w-sm">From intimate family pujas to grand traditional ceremonies, discover bespoke digital templates for every sacred moment.</p>
          </div>
          
          <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {familyOccasions.map((sub, i) => (
              <div key={i} className="min-w-[280px] md:min-w-[320px] snap-start relative rounded-3xl overflow-hidden aspect-[4/5] group cursor-pointer border border-brand-text/5 shadow-sm hover:shadow-xl transition-all">
                <Image src={sub.img} alt={sub.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end overflow-hidden">
                  <div className="transform translate-y-14 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <p className="text-brand-background/80 text-sm font-medium mb-1">{sub.desc}</p>
                    <h3 className="font-heading text-2xl text-brand-background mb-4 drop-shadow-sm">{sub.title}</h3>
                    <Link href={sub.link || "#"}>
                      <button className="w-fit px-6 py-3 rounded-full bg-brand-background/20 backdrop-blur-md border border-brand-background/30 text-brand-background text-xs font-bold uppercase tracking-widest hover:bg-brand-background hover:text-brand-text transition-all duration-500 opacity-0 group-hover:opacity-100">
                        View Templates
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Serve Section */}
      <section className="py-24 bg-brand-text/5 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl text-brand-text mb-4">Crafted for Every Scale</h2>
            <p className="text-brand-text/70 text-lg max-w-2xl mx-auto">
              From intimate family pujas to massive community utsavs, we have a solution tailored for you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-brand-background p-8 rounded-3xl border border-brand-text/5 hover:border-brand-text/20 transition-all flex flex-col"
            >
              <div className="w-12 h-12 bg-brand-accent/10 rounded-full flex items-center justify-center text-brand-accent mb-6">
                <Flower2 className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-2xl text-brand-text mb-3">Individual Templates</h3>
              <p className="text-brand-text/70 text-sm leading-relaxed mb-6 flex-grow">
                Beautiful, ready-to-use digital templates perfect for your family pujas, intimate celebrations, and small traditions. Easy to setup and beautifully crafted.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-brand-background p-8 rounded-3xl border border-brand-text/5 hover:border-brand-text/20 transition-all flex flex-col"
            >
              <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-2xl text-brand-text mb-3">Custom Family Designs</h3>
              <p className="text-brand-text/70 text-sm leading-relaxed mb-6 flex-grow">
                Want something entirely unique? We build bespoke, custom digital spaces for families who want to document their celebrations with a premium, personalized touch.
              </p>
              <Link 
                href="#family-pricing" 
                className="w-full py-3 rounded-full border border-brand-text/20 text-brand-text text-center hover:bg-brand-text hover:text-brand-background transition-colors font-bold text-xs tracking-widest uppercase mt-auto"
              >
                Explore Custom Packages
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-brand-text text-brand-background p-8 rounded-3xl flex flex-col"
            >
              <div className="w-12 h-12 bg-brand-background/20 rounded-full flex items-center justify-center text-brand-background mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-2xl mb-3">For Organizations</h3>
              <p className="text-brand-background/80 text-sm leading-relaxed mb-6 flex-grow">
                Grand digital experiences tailored for Temple Festivals, Cultural Committees, and Institutions. Complete with sponsor showcases, timelines, and massive galleries.
              </p>
              <Link 
                href="#organization-pricing" 
                className="w-full py-3 rounded-full border border-brand-background/20 text-brand-background text-center hover:bg-brand-background hover:text-brand-text transition-colors font-bold text-xs tracking-widest uppercase mt-auto"
              >
                See Org Pricing
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="pt-16 pb-24 md:pt-20 md:pb-32 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col gap-24 md:gap-32">
          
          {/* Feature 1 */}
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
                <Flower2 className="w-6 h-6" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl text-brand-text mb-4">The Digital Mandap</h2>
              <p className="text-brand-text/70 text-lg leading-relaxed">
                Whether it's your home's Ganesh puja or a grand community Durga pandal, we create a beautiful digital space that captures the essence, colors, and vibrations of your setup perfectly.
              </p>
            </motion.div>
          </div>

          {/* Feature 2 */}
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
              <h2 className="font-heading text-3xl md:text-4xl text-brand-text mb-4">Timeless Rituals</h2>
              <p className="text-brand-text/70 text-lg leading-relaxed">
                Social media stories disappear in 24 hours. Your most sacred rituals deserve permanence. We host your high-resolution photos and videos so the traditions can be passed down generations.
              </p>
            </motion.div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden border border-brand-text/5">
                <Image src="/festival-community.jpg" alt="Community Celebration" fill className="object-cover" />
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
              <h2 className="font-heading text-3xl md:text-4xl text-brand-text mb-4">Togetherness & Devotion</h2>
              <p className="text-brand-text/70 text-lg leading-relaxed">
                For organizations and committees, VEDIKA becomes the central hub. Showcase sponsors, share event schedules, and let every devotee relive the grand celebration long after the idol is immersed.
              </p>
            </motion.div>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden border border-brand-text/5">
                <Image src="/festival-archive.jpg" alt="A Permanent Archive" fill className="object-cover" />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <div className="w-12 h-12 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mb-6">
                <Globe className="w-6 h-6" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl text-brand-text mb-4">A Permanent Archive</h2>
              <p className="text-brand-text/70 text-lg leading-relaxed">
                Relive the joy year after year. Preserve the stories, the smiles, and the blessings forever in a digital space that becomes your family's modern heirloom.
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Pricing Section */}
      <section id="family-pricing" className="py-24 bg-brand-text text-brand-background px-4">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl mb-4">Build Your Custom VEDIKA</h2>
            <p className="text-brand-background/70 text-lg max-w-2xl mx-auto">
              Bring your traditions, celebrations, and timeless moments into a digital space of their own.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            
            {/* Package 1: The Simple Tradition */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-3xl border border-brand-background/20 bg-brand-text transition-colors"
            >
              <h3 className="font-heading text-2xl mb-2">
                The Simple Tradition
              </h3>
              <p className="text-brand-background/60 text-sm mb-6 h-10">For intimate traditional celebrations</p>
              <div className="mb-8">
                <span className="text-4xl font-heading">₹4,999</span>
              </div>
              <ul className="flex flex-col gap-4 mb-8">
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Custom VEDIKA design</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Up to 2 event sections</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Personalized welcome section</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Up to 300 photos</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> 2 highlight videos</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Event details & venue</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Tradition / ceremony details</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Personalized VEDIKA link</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> 1 Year Hosting</li>
              </ul>
              <button 
                onClick={() => handleBooking("simple")}
                className="w-full py-4 rounded-full border border-brand-background/20 text-brand-background hover:bg-brand-background hover:text-brand-text transition-colors font-bold text-sm tracking-widest uppercase"
              >
                Choose Simple
              </button>
            </motion.div>

            {/* Package 2: The Grand Tradition (Best Seller) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-3xl border-2 border-brand-accent bg-brand-background/10 relative"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-accent text-brand-text px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                Best Seller
              </div>
              <h3 className="font-heading text-2xl mb-2 text-brand-accent">
                The Grand Tradition
              </h3>
              <p className="text-brand-background/60 text-sm mb-6 h-10">For festivals and celebrations with more to experience</p>
              <div className="mb-8">
                <span className="text-4xl font-heading text-brand-accent">₹9,999</span>
              </div>
              <ul className="flex flex-col gap-4 mb-8">
                <li className="flex items-start gap-3 text-sm text-brand-background/90"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Everything in Simple</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/90"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Up to 5 event sections</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/90"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Up to 1,000 photos</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/90"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Up to 5 videos</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/90"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Festival / ceremony schedule</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/90"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Story & tradition timeline</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/90"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Family / community section</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/90"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Photo & video galleries</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/90"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Wishes & messages</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/90"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Venue & location maps</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/90"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Custom colors & visual style</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/90"><Check className="w-5 h-5 text-brand-accent shrink-0" /> 2 Years Hosting</li>
              </ul>
              <button 
                onClick={() => handleBooking("grand")}
                className="w-full py-4 rounded-full bg-brand-accent text-brand-text hover:bg-brand-accent/90 transition-colors font-bold text-sm tracking-widest uppercase"
              >
                Choose Grand
              </button>
            </motion.div>

            {/* Package 3: The Complete Tradition */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-8 rounded-3xl border border-brand-background/20 bg-brand-text transition-colors relative"
            >
              <h3 className="font-heading text-2xl mb-2">
                The Complete Tradition
              </h3>
              <p className="text-brand-background/60 text-sm mb-6 min-h-[40px]">For a complete digital experience around your celebration</p>
              <div className="mb-8">
                <span className="text-4xl font-heading">₹14,999</span>
              </div>
              <ul className="flex flex-col gap-4 mb-8">
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Everything in Grand</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Multiple events & ceremonies</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Unlimited* photos & videos</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Advanced custom design</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Detailed festival / ceremony experience</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Interactive guestbook</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Announcements & updates</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> RSVP / guest interaction</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Multiple galleries & timelines</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> 3 Years Hosting</li>
              </ul>
              <button 
                onClick={() => handleBooking("complete")}
                className="w-full py-4 rounded-full border border-brand-background/20 text-brand-background hover:bg-brand-background hover:text-brand-text transition-colors font-bold text-sm tracking-widest uppercase"
              >
                Choose Complete
              </button>
            </motion.div>

          </div>
          
          {/* Disclaimer & Small Line Below Pricing */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-brand-background/40 text-xs italic mb-4">* Storage limits may apply.</p>
            <p className="text-brand-background/70 text-sm md:text-base max-w-3xl mx-auto font-medium">
              Every VEDIKA is thoughtfully built around your traditions, your celebration, and the people who make it special.
            </p>
          </motion.div>

        </div>
      </section>
      
      {/* Organization Pricing Section */}
      <section id="organization-pricing" className="py-24 bg-brand-background text-brand-text px-4 border-t border-brand-text/5">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl mb-4">VEDIKA for Organizations</h2>
            <p className="text-brand-text/70 text-lg max-w-2xl mx-auto">
              Digital spaces built around your organization, event, and community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            
            {/* Package 1: Essential */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-3xl border border-brand-text/10 bg-brand-background transition-colors"
            >
              <h3 className="font-heading text-2xl mb-2">Essential</h3>
              <p className="text-brand-text/60 text-sm mb-6 h-10">For smaller events and organizations.</p>
              <div className="mb-8">
                <span className="text-4xl font-heading">₹14,999</span>
              </div>
              <ul className="flex flex-col gap-4 mb-8">
                <li className="flex items-start gap-3 text-sm text-brand-text/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Custom VEDIKA design</li>
                <li className="flex items-start gap-3 text-sm text-brand-text/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Up to 5 sections</li>
                <li className="flex items-start gap-3 text-sm text-brand-text/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Event schedule</li>
                <li className="flex items-start gap-3 text-sm text-brand-text/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Photo gallery</li>
                <li className="flex items-start gap-3 text-sm text-brand-text/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Video section</li>
                <li className="flex items-start gap-3 text-sm text-brand-text/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> About organization/event</li>
                <li className="flex items-start gap-3 text-sm text-brand-text/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Contact & location</li>
                <li className="flex items-start gap-3 text-sm text-brand-text/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Announcements</li>
                <li className="flex items-start gap-3 text-sm text-brand-text/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> 1 Year Hosting</li>
              </ul>
              <button 
                onClick={() => handleBooking("essential")}
                className="w-full py-4 rounded-full border border-brand-text/20 text-brand-text hover:bg-brand-text hover:text-brand-background transition-colors font-bold text-sm tracking-widest uppercase"
              >
                Build With VEDIKA
              </button>
            </motion.div>

            {/* Package 2: Professional */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-3xl border-2 border-brand-accent bg-brand-accent/5 relative"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-accent text-brand-text px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                Best Seller
              </div>
              <h3 className="font-heading text-2xl mb-2 text-brand-accent">Professional</h3>
              <p className="text-brand-text/60 text-sm mb-6 h-10">For larger events and active communities.</p>
              <div className="mb-8">
                <span className="text-4xl font-heading text-brand-accent">₹24,999</span>
              </div>
              <ul className="flex flex-col gap-4 mb-8">
                <li className="flex items-start gap-3 text-sm text-brand-text/90"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Everything in Essential</li>
                <li className="flex items-start gap-3 text-sm text-brand-text/90"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Up to 10 sections</li>
                <li className="flex items-start gap-3 text-sm text-brand-text/90"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Multiple event schedules</li>
                <li className="flex items-start gap-3 text-sm text-brand-text/90"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Large photo & video galleries</li>
                <li className="flex items-start gap-3 text-sm text-brand-text/90"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Registration / RSVP</li>
                <li className="flex items-start gap-3 text-sm text-brand-text/90"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Announcements & updates</li>
                <li className="flex items-start gap-3 text-sm text-brand-text/90"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Team / committee section</li>
                <li className="flex items-start gap-3 text-sm text-brand-text/90"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Interactive guestbook</li>
                <li className="flex items-start gap-3 text-sm text-brand-text/90"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Custom branding</li>
                <li className="flex items-start gap-3 text-sm text-brand-text/90"><Check className="w-5 h-5 text-brand-accent shrink-0" /> 2 Years Hosting</li>
              </ul>
              <button 
                onClick={() => handleBooking("professional")}
                className="w-full py-4 rounded-full bg-brand-accent text-brand-text hover:bg-brand-accent/90 transition-colors font-bold text-sm tracking-widest uppercase"
              >
                Build With VEDIKA
              </button>
            </motion.div>

            {/* Package 3: Signature */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-8 rounded-3xl border border-brand-text/10 bg-brand-background transition-colors relative"
            >
              <h3 className="font-heading text-2xl mb-2">Signature</h3>
              <p className="text-brand-text/60 text-sm mb-6 min-h-[40px]">For large-scale events and organizations.</p>
              <div className="mb-8">
                <span className="text-4xl font-heading">₹39,999+</span>
              </div>
              <ul className="flex flex-col gap-4 mb-8">
                <li className="flex items-start gap-3 text-sm text-brand-text/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Fully bespoke VEDIKA</li>
                <li className="flex items-start gap-3 text-sm text-brand-text/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Unlimited sections</li>
                <li className="flex items-start gap-3 text-sm text-brand-text/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Multiple events / programs</li>
                <li className="flex items-start gap-3 text-sm text-brand-text/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Advanced galleries & videos</li>
                <li className="flex items-start gap-3 text-sm text-brand-text/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Registration / RSVP</li>
                <li className="flex items-start gap-3 text-sm text-brand-text/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Live updates</li>
                <li className="flex items-start gap-3 text-sm text-brand-text/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Organization profiles</li>
                <li className="flex items-start gap-3 text-sm text-brand-text/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Custom interactions</li>
                <li className="flex items-start gap-3 text-sm text-brand-text/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Custom branding & domain support</li>
                <li className="flex items-start gap-3 text-sm text-brand-text/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> 3 Years Hosting</li>
                <li className="flex items-start gap-3 text-sm text-brand-text/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Priority support</li>
              </ul>
              <button 
                onClick={() => handleBooking("signature")}
                className="w-full py-4 rounded-full border border-brand-text/20 text-brand-text hover:bg-brand-text hover:text-brand-background transition-colors font-bold text-sm tracking-widest uppercase"
              >
                Build With VEDIKA
              </button>
            </motion.div>

          </div>
        </div>
      </section>

    </main>
  );
}
