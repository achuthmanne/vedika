"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Search, PartyPopper, Heart, Cake, Calendar, Scissors, Plane } from "lucide-react";

const TEMPLATES = [
  {
    id: "ganesh-chaturthi",
    title: "Ganesh Royal",
    description: "A premium website for your Utsav Samithi. Includes Live YouTube Darshan, Event Schedule, Committee Members, Photo Gallery, and UPI Donation Integration.",
    price: "₹1499",
    image: "/ganesh-thumbnail.png",
    demoLink: "/preview/ganesh-royal",
    tag: "Trending",
    status: "ready",
    category: "Festivals",
    keywords: ["ganesh", "vinayaka", "chavithi", "chaturthi", "utsav", "samithi", "festival", "pooja", "bappa"]
  },
  {
    id: "wedding-classic",
    title: "The Classic Wedding",
    description: "A timeless, editorial design for your special day. Focuses on large photography, elegant serif fonts, and minimal clutter.",
    price: "₹1999",
    image: "/wedding-hero.jpg",
    demoLink: "/preview/wedding-classic",
    tag: "Premium",
    status: "upcoming",
    category: "Weddings",
    keywords: ["wedding", "marriage", "pelli", "kalyanam", "bride", "groom", "invitation"]
  },
  {
    id: "first-birthday",
    title: "First Milestone",
    description: "A joyful, bright, and playful layout to celebrate your little one's first year of magic and memories.",
    price: "₹1499",
    image: "/family-baby.jpg",
    demoLink: "/preview/first-birthday",
    tag: "New",
    status: "upcoming",
    category: "Milestones",
    keywords: ["birthday", "kids", "first year", "baby", "milestone", "celebration", "party"]
  },
  {
    id: "anniversary-gold",
    title: "Golden Years",
    description: "Sophisticated and warm. A dark-themed layout that highlights years of togetherness with a touch of gold.",
    price: "₹1499",
    image: "/family-anniversary.jpg",
    demoLink: "/preview/anniversary-gold",
    tag: "",
    status: "upcoming",
    category: "Milestones",
    keywords: ["anniversary", "couple", "together", "golden", "celebration", "love"]
  }
];

const CATEGORIES = [
  { id: "Festivals", name: "Festivals", icon: "/cat-festival.jpg", color: "bg-orange-100" },
  { id: "Weddings", name: "Weddings", icon: "/cat-wedding.jpg", color: "bg-rose-100" },
  { id: "Milestones", name: "Milestones", icon: "/cat-milestone.jpg", color: "bg-purple-100" },
  { id: "Events", name: "Events", icon: "/cat-event.jpg", color: "bg-blue-100" },
  { id: "Openings", name: "Openings", icon: "/cat-opening.jpg", color: "bg-emerald-100" },
  { id: "Travel", name: "Travels", icon: "/cat-travel.jpg", color: "bg-yellow-100" },
];

const PILLS = [
  { id: "all", name: "Discover All", icon: Sparkles, color: "text-brand-primary", activeBorder: "border-brand-primary" },
  { id: "Festivals", name: "Festivals & Devotional", icon: PartyPopper, color: "text-orange-500", activeBorder: "border-orange-500" },
  { id: "Weddings", name: "Wedding Ceremonies", icon: Heart, color: "text-rose-500", activeBorder: "border-rose-500" },
  { id: "Milestones", name: "Life Milestones", icon: Cake, color: "text-purple-500", activeBorder: "border-purple-500" },
  { id: "Events", name: "Corporate & Events", icon: Calendar, color: "text-blue-500", activeBorder: "border-blue-500" },
  { id: "Openings", name: "Store Openings", icon: Scissors, color: "text-emerald-500", activeBorder: "border-emerald-500" },
  { id: "Travel", name: "Travel & Journeys", icon: Plane, color: "text-sky-500", activeBorder: "border-sky-500" },
];

export default function TemplatesPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredTemplates = TEMPLATES.filter(
    (t) => {
      const matchesSearch = 
        t.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        t.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === "all" || t.category === selectedCategory;

      return t.status === "ready" && matchesSearch && matchesCategory;
    }
  );

  return (
    <main className="min-h-screen bg-brand-background text-brand-text font-body selection:bg-brand-primary selection:text-brand-background pb-32">
      
      {/* Simple Navbar */}
      <nav className="w-full px-4 sm:px-8 lg:px-12 py-3 md:py-4 flex justify-between items-center border-b border-brand-text/5 bg-brand-background/95 backdrop-blur-md sticky top-0 z-50">
        <Link href="/?section=explore">
          <div className="relative w-[140px] md:w-[180px] h-[45px] md:h-[55px]">
            <Image src="/logo.png" alt="VEDIKA" fill className="object-contain" />
          </div>
        </Link>
        <button 
          onClick={() => router.push("/?section=explore")} 
          className="text-xs md:text-sm font-bold tracking-widest uppercase text-brand-text/70 hover:text-brand-primary transition-colors"
        >
          Back to Home
        </button>
      </nav>

      {/* Hero Header */}
      <section className="px-4 py-20 md:py-24 max-w-5xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-text/10 mb-8"
        >
          <Sparkles className="w-4 h-4 text-brand-primary" />
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-brand-text/70">The Collection</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-heading text-5xl md:text-7xl text-brand-text mb-6 leading-tight"
        >
          Curated <span className="text-brand-primary italic">Designs.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-brand-text/70 max-w-2xl mx-auto font-light leading-relaxed mb-12"
        >
          Discover our handcrafted digital spaces. Each template is meticulously designed to give your celebration the premium, editorial feel it deserves.
        </motion.p>

        {/* Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-xl mx-auto relative group"
        >
          <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-brand-text/40 group-focus-within:text-brand-primary transition-colors" />
          </div>
          <input
            type="text"
            placeholder="Search templates (e.g., Wedding, Birthday)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-brand-text/5 border border-brand-text/10 rounded-full py-4 pl-14 pr-6 text-base text-brand-text placeholder:text-brand-text/40 focus:outline-none focus:border-brand-primary/50 focus:bg-transparent transition-all"
          />
        </motion.div>

        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-6 -mx-4 px-4 overflow-x-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex items-center justify-start md:justify-center gap-3 w-max mx-auto pb-2">
            {PILLS.map((pill) => {
              const Icon = pill.icon;
              return (
                <button
                  key={pill.id}
                  onClick={() => {
                    setSelectedCategory(pill.id);
                    document.getElementById("templates-grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 border ${
                    selectedCategory === pill.id
                      ? `bg-white shadow-sm ${pill.activeBorder}`
                      : "bg-white border-brand-text/10 hover:border-brand-text/30 hover:bg-gray-50 text-brand-text"
                  }`}
                >
                  <Icon 
                    className={`w-4 h-4 ${pill.color}`} 
                    fill="currentColor" 
                  />
                  <span className="text-sm font-semibold tracking-wide whitespace-nowrap">{pill.name}</span>
                </button>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Categories Grid */}
      <section className="px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 px-4"
        >
          <h2 className="text-xl md:text-2xl font-bold text-brand-text mb-6 max-w-4xl mx-auto">Explore Collections</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto pb-6">
            {CATEGORIES.map(category => (
               <Link
                key={category.id}
                href={`/occasions/${category.id.toLowerCase()}`}
                className={`group relative overflow-hidden h-24 md:h-28 rounded-2xl transition-all duration-300 text-left ${category.color} hover:shadow-md hover:-translate-y-1`}
              >
                <span className="absolute top-4 left-4 text-sm md:text-base font-bold tracking-wide z-10 text-gray-800">
                  {category.name}
                </span>

                {category.icon ? (
                  <div className="absolute -right-2 top-2 md:top-4 w-20 h-20 md:w-24 md:h-24 transition-transform duration-500 group-hover:scale-110 mix-blend-multiply">
                    <Image src={category.icon} alt={category.name} fill className="object-contain" />
                  </div>
                ) : (
                  <div className="absolute right-2 bottom-2 w-12 h-12 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 mix-blend-multiply">
                    <Sparkles className="w-8 h-8 text-gray-400" />
                  </div>
                )}
              </Link>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Templates Grid */}
      <section id="templates-grid" className="px-4 max-w-7xl mx-auto pt-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-brand-text">
            {selectedCategory === "all" ? "Trending in Vedika" : PILLS.find(p => p.id === selectedCategory)?.name}
          </h2>
        </div>
        
        {filteredTemplates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {filteredTemplates.map((template, index) => (
              <motion.div 
                key={template.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group flex flex-col"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[4/3] rounded-[2rem] border border-brand-text/5 overflow-hidden mb-6 flex items-center justify-center bg-brand-text/5">
                  
                  {/* Thumbnail Image */}
                  <Image 
                    src={template.image} 
                    alt={template.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-brand-text/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 px-2">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-heading text-3xl md:text-4xl text-brand-text">{template.title}</h3>
                    <span className="font-body text-lg text-brand-primary font-medium">{template.price}</span>
                  </div>
                  
                  <p className="text-brand-text/70 text-base leading-relaxed mb-8 max-w-md">
                    {template.description}
                  </p>

                  {/* Actions */}
                  <div className="mt-auto flex items-center gap-4">
                    <button 
                      onClick={() => router.push(`/checkout?plan=${encodeURIComponent(template.title)}&amount=${template.price.replace('₹', '')}`)}
                      className="flex-1 py-4 bg-brand-text text-brand-background rounded-full font-body font-bold text-xs uppercase tracking-[0.15em] hover:bg-brand-primary transition-colors text-center"
                    >
                      Book Now
                    </button>
                    <Link 
                      href={template.demoLink}
                      className="flex items-center justify-center gap-2 px-6 py-4 border border-brand-text/20 text-brand-text rounded-full font-body font-bold text-xs uppercase tracking-[0.15em] hover:border-brand-text hover:bg-brand-text/5 transition-all"
                    >
                      Demo <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center flex flex-col items-center">
            <div className="p-6 bg-brand-text/5 rounded-full mb-6">
              <Search className="w-8 h-8 text-brand-text/30" />
            </div>
            <h3 className="font-heading text-3xl text-brand-text mb-3">No templates found</h3>
            <p className="text-brand-text/60 max-w-md mx-auto">
              We couldn't find any ready templates matching "{searchQuery}". Try a different search term or check back soon for new designs!
            </p>
          </div>
        )}
      </section>

    </main>
  );
}
