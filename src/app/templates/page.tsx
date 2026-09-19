"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Search } from "lucide-react";

const TEMPLATES = [
  {
    id: "ganesh-chaturthi",
    title: "Ganesh Chaturthi",
    description: "A divine, traditional layout perfect for welcoming Bappa. Features rich reds, marigolds, and elegant typography.",
    price: "₹1499",
    imageColor: "bg-[#B6533C]/10",
    imageText: "Ganesh Chaturthi Theme",
    demoLink: "/templates/ganesh-chaturthi",
    tag: "Trending",
    status: "ready"
  }
];

export default function TemplatesPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTemplates = TEMPLATES.filter(
    (t) => t.status === "ready" && (t.title.toLowerCase().includes(searchQuery.toLowerCase()) || t.description.toLowerCase().includes(searchQuery.toLowerCase()))
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
      </section>

      {/* Templates Grid */}
      <section className="px-4 max-w-7xl mx-auto">
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
                <div className={`relative w-full aspect-[4/3] rounded-[2rem] border border-brand-text/5 overflow-hidden mb-6 flex items-center justify-center ${template.imageColor}`}>
                  
                  {/* Fallback Text if no image */}
                  <span className="font-heading text-2xl text-brand-text/30">{template.imageText}</span>

                  {/* Tags */}
                  {template.tag && (
                    <div className="absolute top-6 left-6 px-4 py-2 bg-brand-background/90 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-widest text-brand-text border border-brand-text/10">
                      {template.tag}
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-brand-text/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
