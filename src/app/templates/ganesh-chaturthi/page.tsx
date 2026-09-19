"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Filter, Sparkles } from "lucide-react";
import { useState } from "react";

const templates = [
  { id: 1, name: "The Royal Darbar", theme: "Royal", img: "/ganesh-chaturthi.jpg", previewLink: "/preview/ganesh-royal", builderLink: "/builder/ganesh-royal" },
  { id: 2, name: "Floral Blessings", theme: "Floral", img: "/festival-preparation.jpg", previewLink: "#", builderLink: "#" },
  { id: 3, name: "Minimalist Bappa", theme: "Minimal", img: "/festival-puja.jpg", previewLink: "#", builderLink: "#" },
  { id: 4, name: "Golden Aura", theme: "Royal", img: "/ganesh-chaturthi.jpg", previewLink: "#", builderLink: "#" },
  { id: 5, name: "Marigold Divine", theme: "Floral", img: "/festival-preparation.jpg", previewLink: "#" },
  { id: 6, name: "Modern Devotion", theme: "Minimal", img: "/festival-puja.jpg", previewLink: "#" },
];

const themes = ["All", "Royal", "Floral", "Minimal"];

export default function GaneshTemplatesPage() {
  const [activeTheme, setActiveTheme] = useState("All");

  const filteredTemplates = templates.filter(t => activeTheme === "All" || t.theme === activeTheme);

  return (
    <main className="min-h-screen bg-brand-background text-brand-text font-body selection:bg-brand-primary selection:text-brand-background">
      
      {/* Simple Navbar */}
      <nav className="w-full px-4 sm:px-8 lg:px-12 py-3 md:py-4 flex justify-between items-center border-b border-brand-text/5 bg-brand-background/95 backdrop-blur-md sticky top-0 z-50">
        <Link href="/occasions/festivals">
          <div className="relative w-[140px] md:w-[180px] h-[45px] md:h-[55px]">
            <Image src="/logo.png" alt="VEDIKA" fill className="object-contain" />
          </div>
        </Link>
        <Link 
          href="/occasions/festivals" 
          className="text-xs md:text-sm font-bold tracking-widest uppercase text-brand-text/70 hover:text-brand-primary transition-colors"
        >
          Back to Festivals
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-brand-primary uppercase tracking-[0.2em] font-bold text-sm mb-4">Ganesh Chaturthi</p>
          <h1 className="font-heading text-4xl md:text-6xl mb-6">Choose Your <span className="text-brand-accent italic">Bappa's</span> Digital Mandap</h1>
          <p className="text-brand-text/70 text-lg max-w-2xl mx-auto">
            Explore our handcrafted templates. Preview, customize with your details, and create a beautiful digital space for your Ganesh Puja.
          </p>
        </motion.div>
      </section>

      {/* Search & Filters */}
      <section className="px-4 max-w-7xl mx-auto mb-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-y border-brand-text/10 py-6">
          
          {/* Theme Filters */}
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
            {themes.map(theme => (
              <button 
                key={theme}
                onClick={() => setActiveTheme(theme)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-colors shrink-0 ${
                  activeTheme === theme 
                  ? "bg-brand-text text-brand-background" 
                  : "bg-brand-text/5 text-brand-text/70 hover:bg-brand-text/10"
                }`}
              >
                {theme}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-text/40" />
            <input 
              type="text" 
              placeholder="Search templates..." 
              className="w-full bg-brand-text/5 border border-brand-text/10 rounded-full py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-brand-primary/50 transition-colors"
            />
          </div>

        </div>
      </section>

      {/* Templates Grid */}
      <section className="px-4 max-w-7xl mx-auto pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((template, i) => (
            <motion.div 
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-3xl overflow-hidden aspect-[4/5] bg-brand-text/5 border border-brand-text/10"
            >
              <Image src={template.img} alt={template.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end overflow-hidden">
                <div className="transform translate-y-16 group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col">
                  <div>
                    <h3 className="font-heading text-2xl text-brand-background mb-4 drop-shadow-md">{template.name}</h3>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Link href={template.previewLink || "#"} className="flex-1">
                      <button className="w-full py-3 rounded-full bg-brand-background text-brand-text text-xs font-bold uppercase tracking-widest hover:bg-brand-background/90 transition-colors">
                        Preview
                      </button>
                    </Link>
                    <Link href={template.builderLink || "#"} className="flex-1">
                      <button className="w-full py-3 rounded-full bg-brand-accent text-brand-text text-xs font-bold uppercase tracking-widest hover:bg-brand-accent/90 transition-colors flex items-center justify-center gap-2">
                        <Sparkles className="w-3 h-3" /> Customize
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
}
