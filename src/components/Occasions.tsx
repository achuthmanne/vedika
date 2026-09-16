"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const categories = [
  { id: 1, title: "Weddings & Love", image: "/hero/wedding.jpg", link: "/occasions/weddings" },
  { id: 2, title: "New Beginnings", image: "/hero/housewarming.jpg", link: "/occasions/openings" },
  { id: 3, title: "Family & Milestones", image: "/hero/baby.jpg", link: "/occasions/milestones" },
  { id: 4, title: "Festivals & Traditions", image: "/hero/festival.jpg", link: "/occasions/festivals" },
  { id: 5, title: "Events & Organizations", image: "/hero/friends.jpg", link: "/occasions/events" },
  { id: 6, title: "Travel & Adventures", image: "/hero/travel.jpg", link: "/occasions/travel" },
];

export default function Occasions({ onBookClick }: { onBookClick?: () => void }) {
  const router = useRouter();
  
  return (
    <section id="occasions" className="relative w-full bg-brand-background flex flex-col items-center justify-center overflow-hidden pt-12 pb-24">
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center z-20 mb-8 sm:mb-12 px-4"
      >
        <h2 className="font-heading text-4xl md:text-5xl text-brand-text mb-4">
          Whatever You Celebrate, <br className="hidden sm:block" />
          <span className="text-brand-primary italic">We Create Its Space.</span>
        </h2>
        <p className="font-body text-sm md:text-base text-brand-text/70 uppercase tracking-[0.2em] font-medium">
          Choose Your Occasion
        </p>
      </motion.div>

      {/* Grid */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 lg:gap-6 w-full max-w-7xl px-4">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative group overflow-hidden rounded-2xl cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 aspect-[4/5]`}
            onClick={() => {
              if (category.link !== "#") {
                router.push(category.link);
              }
            }}
          >
            <Image
              src={category.image}
              alt={category.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-90"></div>
            
            {/* Text */}
            <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 text-brand-background">
              <h3 className="font-heading text-xl md:text-2xl mb-1 drop-shadow-sm transition-transform duration-300 group-hover:-translate-y-2">
                {category.title}
              </h3>
              <p className="font-body text-xs md:text-sm font-medium text-brand-background/0 group-hover:text-brand-background/100 transition-colors duration-300 delay-100 transform translate-y-2 group-hover:-translate-y-2 flex items-center">
                Explore <ArrowRight className="w-4 h-4 ml-1" strokeWidth={2.5} />
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Custom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 text-center px-4"
      >
        <p className="text-brand-text/70 text-lg mb-4 font-light">Can't find your occasion?</p>
        <p className="font-heading text-2xl md:text-3xl text-brand-text mb-8">
          Tell us what you're celebrating. <br className="hidden sm:block" /> We'll create its space.
        </p>
        <button 
          onClick={onBookClick}
          className="px-8 py-4 bg-brand-text text-brand-background rounded-full font-bold uppercase tracking-widest text-sm hover:bg-brand-primary transition-colors flex items-center gap-2 mx-auto"
        >
          Create Something Custom <ArrowRight className="w-4 h-4" />
        </button>
      </motion.div>

    </section>
  );
}
