"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Car, Heart, MapPin, Laptop, Sparkles, Check, Compass, Globe } from "lucide-react";

const travelTemplates = [
  {
    title: "Friends Getaways",
    desc: "Road trips & squad adventures",
    img: "/travel-friends.jpg"
  },
  {
    title: "Couples & Honeymoon",
    desc: "Romantic escapes",
    img: "/travel-honeymoon.jpg"
  },
  {
    title: "Spiritual Yatras",
    desc: "Pilgrimages & sacred journeys",
    img: "/travel-yatra.jpg"
  },
  {
    title: "Solo Expeditions",
    desc: "Finding yourself on the road",
    img: "/travel-digital.jpg"
  }
];

export default function TravelPage() {
  const handleBooking = (packageId: string) => {
    let text = "";
    if (packageId === "journey") {
      text = "Hi Vedika Team! I want to create a digital space with 'The Journey' (₹4,999) package for our travel memories. Please share the details.";
    } else if (packageId === "explorer") {
      text = "Hi Vedika Team! I want to book 'The Explorer' (₹9,999) digital space package for our upcoming detailed trip. Please share the details.";
    } else if (packageId === "grand_journey") {
      text = "Hi Vedika Team! We want to discuss 'The Grand Journey' (₹14,999) digital space for a complete digital travel story. Let's get started.";
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

      {/* Explore Templates Carousel */}
      <section className="pt-48 pb-0 bg-brand-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-brand-primary uppercase tracking-[0.2em] font-bold text-sm mb-2">Dive Deeper</p>
              <h2 className="font-heading text-4xl md:text-5xl text-brand-text">Explore by Trip Type</h2>
            </div>
            <p className="text-brand-text/60 text-sm max-w-sm">From wild road trips with friends to soulful solo journeys, discover bespoke digital templates for every kind of travel.</p>
          </div>
          
          <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {travelTemplates.map((sub, i) => (
              <div key={i} className="min-w-[280px] md:min-w-[320px] snap-start relative rounded-3xl overflow-hidden aspect-[4/5] group cursor-pointer border border-brand-text/5 shadow-sm hover:shadow-xl transition-all">
                <Image src={sub.img} alt={sub.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end overflow-hidden">
                  <div className="transform translate-y-14 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <p className="text-brand-background/80 text-sm font-medium mb-1">{sub.desc}</p>
                    <h3 className="font-heading text-2xl text-brand-background mb-4 drop-shadow-sm">{sub.title}</h3>
                    <button className="w-fit px-6 py-3 rounded-full bg-brand-background/20 backdrop-blur-md border border-brand-background/30 text-brand-background text-xs font-bold uppercase tracking-widest hover:bg-brand-background hover:text-brand-text transition-all duration-500 opacity-0 group-hover:opacity-100">
                      View Templates
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl mb-4">Build Your Custom VEDIKA</h2>
            <p className="text-brand-background/70 text-lg max-w-2xl mx-auto">
              Turn every journey into a digital story worth revisiting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            
            {/* Package 1: The Journey */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-3xl border border-brand-background/20 bg-brand-text transition-colors relative"
            >
              <h3 className="font-heading text-2xl mb-2">The Journey</h3>
              <p className="text-brand-background/60 text-sm mb-6 h-10">For personal trips and intimate adventures</p>
              <div className="mb-8">
                <span className="text-4xl font-heading">₹4,999</span>
              </div>
              <ul className="flex flex-col gap-4 mb-8">
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Custom VEDIKA design</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Up to 5 travel days / sections</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Up to 300 photos</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> 2 highlight videos</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Travel itinerary</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Interactive map</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Personalized VEDIKA link</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> 1 Year Hosting</li>
              </ul>
              <button 
                onClick={() => handleBooking("journey")}
                className="w-full py-4 rounded-full border border-brand-background/20 text-brand-background hover:bg-brand-background hover:text-brand-text transition-colors font-bold text-sm tracking-widest uppercase"
              >
                Choose Journey
              </button>
            </motion.div>

            {/* Package 2: The Explorer */}
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
              <h3 className="font-heading text-2xl mb-2 text-brand-accent">The Explorer</h3>
              <p className="text-brand-background/60 text-sm mb-6 h-10">For detailed trips filled with places, people & memories</p>
              <div className="mb-8">
                <span className="text-4xl font-heading text-brand-accent">₹9,999</span>
              </div>
              <ul className="flex flex-col gap-4 mb-8">
                <li className="flex items-start gap-3 text-sm text-brand-background/90"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Everything in Journey</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/90"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Up to 10 travel days / sections</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/90"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Up to 1,000 photos</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/90"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Up to 5 videos</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/90"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Day-by-day travel journal</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/90"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Interactive route map</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/90"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Places & experiences</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/90"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Travel companions section</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/90"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Photo & video galleries</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/90"><Check className="w-5 h-5 text-brand-accent shrink-0" /> 2 Years Hosting</li>
              </ul>
              <button 
                onClick={() => handleBooking("explorer")}
                className="w-full py-4 rounded-full bg-brand-accent text-brand-text hover:bg-brand-accent/90 transition-colors font-bold text-sm tracking-widest uppercase"
              >
                Choose Explorer
              </button>
            </motion.div>

            {/* Package 3: The Grand Journey */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-8 rounded-3xl border border-brand-background/20 bg-brand-text transition-colors relative"
            >
              <h3 className="font-heading text-2xl mb-2">The Grand Journey</h3>
              <p className="text-brand-background/60 text-sm mb-6 min-h-[40px]">For a complete digital travel story</p>
              <div className="mb-8">
                <span className="text-4xl font-heading">₹14,999</span>
              </div>
              <ul className="flex flex-col gap-4 mb-8">
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Everything in Explorer</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Unlimited* photos & videos</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Extended travel journal</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Multiple destinations</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Advanced interactive maps</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Travel timeline</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Stories & memories</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Guest / companion contributions</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> Advanced custom design</li>
                <li className="flex items-start gap-3 text-sm text-brand-background/80"><Check className="w-5 h-5 text-brand-accent shrink-0" /> 3 Years Hosting</li>
              </ul>
              <button 
                onClick={() => handleBooking("grand_journey")}
                className="w-full py-4 rounded-full border border-brand-background/20 text-brand-background hover:bg-brand-background hover:text-brand-text transition-colors font-bold text-sm tracking-widest uppercase"
              >
                Choose Grand Journey
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
              Your journey. Your memories. Your VEDIKA.
            </p>
          </motion.div>

        </div>
      </section>

    </main>
  );
}
