"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { MapPin, Heart, Play, Users, Sparkles, QrCode, X, Copy, CheckCircle2 } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function RoyalGaneshTemplate() {
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isBuilderMode, setIsBuilderMode] = useState(false);
  const [previewMode, setPreviewMode] = useState("desktop");
  
  // Customizable Template Data (Defaults)
  const [templateData, setTemplateData] = useState({
    mainName: "Green Park",
    subName: "Utsav Samithi",
    welcomeText: "welcomes you to",
    mainTitle: "Ganesh Chaturthi",
    year: "2026",
    youtubeLink: "https://youtube.com/live/example",
    upiId: "greenpark@ybl",
    logoImage: "",
    heroImage: "",
    qrCodeImage: "",
    locationImage: "",
    locationAddress: "12, Green Park Colony",
    locationCity: "Vijayawada, Andhra Pradesh 520001",
    galleryImages: [] as string[],
    memories: [
      { id: 1, title: "Maha Aarti 2025", desc: "Evening Darshan", img: "/festival-preparation.jpg", videoUrl: "" },
      { id: 2, title: "Grand Visarjan", desc: "A farewell to Bappa", img: "/festival-community.jpg", videoUrl: "" }
    ],
    schedule: [
      { id: 1, title: "Sthapana & Puja", date: "Sept 7, 2026", time: "09:00 AM" },
      { id: 2, title: "Maha Aarti", date: "Sept 7, 2026", time: "07:00 PM" }
    ],
    committee: [
      { id: 1, name: "Rahul Sharma", role: "President", photo: "" },
      { id: 2, name: "Priya Patel", role: "Secretary", photo: "" },
      { id: 3, name: "Amit Kumar", role: "Treasurer", photo: "" },
      { id: 4, name: "Neha Singh", role: "Event Head", photo: "" }
    ]
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.self !== window.top || window.location.search.includes('mode=builder')) {
        setIsBuilderMode(true);
      }
      
      // Listen for updates from the Builder
      const handleMessage = (event: MessageEvent) => {
        if (event.data?.type === 'UPDATE_PREVIEW') {
          const { previewMode: mode, ...rest } = event.data.data;
          setTemplateData(prev => ({ ...prev, ...rest }));
          if (mode) setPreviewMode(mode);
        }
      };
      
      window.addEventListener('message', handleMessage);
      return () => window.removeEventListener('message', handleMessage);
    }
  }, []);
  
  // Feature states
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const mapLink = `https://maps.google.com/?q=${encodeURIComponent((templateData.locationAddress + " " + templateData.locationCity).trim() || "Vijayawada")}`;

  // Blessings State (Real DB)
  const [blessings, setBlessings] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [newName, setNewName] = useState("");
  const [newCity, setNewCity] = useState("");
  const [showAllBlessings, setShowAllBlessings] = useState(false);
  const [isPosting, setIsPosting] = useState(false);

  useEffect(() => {
    fetchBlessings();
  }, []);

  const fetchBlessings = async () => {
    // Avoid DB calls during builder/preview phase
    setBlessings([
      { id: 1, name: "Kiran & Family", city: "Hyderabad", message: "Om Gam Ganapataye Namaha! May Bappa remove all obstacles and bless everyone with peace and prosperity. Beautiful pandal decoration this year!", date: "Sept 1" },
      { id: 2, name: "Rahul S.", city: "Pune", message: "Missing the hometown celebrations, but feeling blessed to see this digital darshan. Ganpati Bappa Morya!", date: "Sept 2" }
    ]);
  };

  const handlePostBlessing = async () => {
    if (!newMessage.trim() || !newName.trim()) return;
    setIsPosting(true);
    
    // Local mock insert
    setTimeout(() => {
      const newBlessing = {
        id: Date.now(),
        name: newName,
        city: newCity || "India",
        message: newMessage,
        date: "Just now"
      };
      
      setBlessings(prev => [newBlessing, ...prev]);
      setNewMessage("");
      setNewName("");
      setNewCity("");
      setIsPosting(false);
    }, 600);
  };
  
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <main className="min-h-screen bg-[#123B2A] text-[#30241D] font-body selection:bg-[#C9963E] selection:text-[#123B2A] overflow-x-hidden">
      
      {/* Floating Premium Header */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 bg-[#EDE3CF]/95 backdrop-blur-md border-b border-[#30241D]/10 shadow-sm ${isBuilderMode && previewMode === 'mobile' ? 'pt-7' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex justify-between items-center">
          {/* Logo / Crest */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-[#123B2A] flex items-center justify-center shadow-md border border-[#C9963E]/30 overflow-hidden shrink-0">
              {templateData.logoImage ? (
                <img src={templateData.logoImage} alt="Logo" className="w-full h-full object-cover" />
              ) : (
                <span className="font-heading text-[#C9963E] text-lg tracking-widest ml-1">
                  {templateData.mainName.substring(0, 2).toUpperCase()}
                </span>
              )}
            </div>
            <div className="hidden md:flex flex-col justify-center">
              <span className="text-[#123B2A] font-heading tracking-[0.25em] uppercase text-sm leading-tight">{templateData.mainName}</span>
              <span className="text-[#B94A32] text-[9px] tracking-[0.4em] font-bold uppercase mt-0.5">{templateData.subName}</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-[#30241D]/80 text-xs font-bold uppercase tracking-widest">
            <a href="#schedule" className="hover:text-[#B94A32] transition-colors">Schedule</a>
            <a href="#videos" className="hover:text-[#B94A32] transition-colors">Videos</a>
            <a href="#committee" className="hover:text-[#B94A32] transition-colors">Committee</a>
            <a href="#darshan" className="hover:text-[#B94A32] transition-colors">Darshan</a>
          </div>
          
          {/* CTA Button */}
          <button 
            onClick={() => setIsDonateOpen(true)}
            className="bg-[#B94A32] text-[#FFF8E8] px-4 md:px-8 py-2 md:py-3.5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#9c3e29] transition-all shadow-md hover:shadow-lg flex items-center gap-2"
          >
            <Heart className="w-3.5 h-3.5" />
            <span>Donate</span>
          </button>
        </div>
      </motion.nav>

      {/* 1. HERO - DEEP GREEN */}
      <section className="relative w-full min-h-[100svh] flex flex-col items-center justify-center pt-32 pb-16 px-4 bg-[#123B2A] overflow-hidden">
        
        {/* Rich Photographic Texture Background */}
        <div className="absolute inset-0 z-0">
          <Image src="/festival-preparation.jpg" alt="Background Texture" fill className="object-cover opacity-30 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#123B2A] via-[#123B2A]/80 to-transparent"></div>
        </div>
        
        <motion.div 
          style={{ y: heroY }}
          className="relative z-10 flex flex-col items-center text-center max-w-4xl"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="mb-8 md:mb-12 relative"
          >
            {/* Elegant Image Framing */}
            <div className="relative w-[220px] h-[300px] sm:w-[260px] sm:h-[360px] md:w-[380px] md:h-[500px] rounded-t-full rounded-b-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10 border-4 border-[#C9963E]">
              <Image src={templateData.heroImage || "/ganesh-chaturthi.jpg"} alt="Lord Ganesha" fill className="object-cover" />
            </div>
            
            {/* Thin gold accent ring */}
            <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 border border-[#C9963E]/40 rounded-t-full rounded-b-[2rem] md:rounded-b-[2.5rem] z-0 opacity-80"></div>
            {/* Outer dotted ring for floral/traditional vibe */}
            <div className="absolute -inset-4 sm:-inset-6 md:-inset-8 border-2 border-dotted border-[#C9963E]/20 rounded-t-full rounded-b-[3rem] md:rounded-b-[3.5rem] z-0"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-center max-w-4xl mt-4 md:mt-0"
          >
            <p className="text-[#FFF8E8] text-[10px] sm:text-xs md:text-sm tracking-[0.2em] uppercase font-bold mb-2 md:mb-4">
              {templateData.mainName} {templateData.subName}
            </p>
            <p className="text-[#C9963E] italic font-serif text-sm md:text-xl mb-2 md:mb-4">{templateData.welcomeText}</p>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl text-[#FFF8E8] mb-6 md:mb-8 leading-tight drop-shadow-md px-2">
              {templateData.mainTitle} <br/><span className="text-[#C9963E] text-5xl sm:text-6xl md:text-8xl">{templateData.year}</span>
            </h1>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mt-8 md:mt-12 w-full max-w-sm mx-auto sm:max-w-none">
              <button 
                onClick={() => document.getElementById('darshan')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#C9963E] text-[#123B2A] px-6 py-3.5 md:px-10 md:py-4 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-[#FFF8E8] transition-colors w-full sm:w-auto shadow-lg"
              >
                Digital Darshan
              </button>
              
              {templateData.youtubeLink && (
                <a 
                  href={templateData.youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 backdrop-blur-md text-[#FFF8E8] px-6 py-3.5 md:px-8 md:py-4 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-[#C9963E] hover:text-[#123B2A] transition-colors border border-[#FFF8E8]/20 flex items-center justify-center gap-2 md:gap-3 w-full sm:w-auto group shadow-lg"
                >
                  <Play className="w-3 h-3 md:w-4 md:h-4 fill-current" /> <span>Join The Utsav</span>
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. OUR CELEBRATION - WARM SAND */}
      <section className="py-24 px-4 relative bg-[#EDE3CF]">
        <div className="max-w-3xl mx-auto text-center border-y border-[#30241D]/10 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="font-heading text-3xl md:text-5xl text-[#123B2A] mb-8">A Celebration of Devotion</h2>
            <p className="text-[#30241D] text-lg md:text-2xl leading-relaxed font-serif italic mb-10 px-4">
              "With devotion in our hearts and joy in our pandal, we invite you to celebrate Ganpati Bappa with us. Join our Samithi as we welcome Bappa and share moments of faith, tradition, and togetherness."
            </p>
            <p className="text-[#B94A32] font-heading text-2xl md:text-4xl">Ganpati Bappa Morya!</p>
          </motion.div>
        </div>
      </section>

      {/* 3. VIDEOS / GLIMPSES - WARM IVORY */}
      <section id="videos" className="py-32 px-4 relative bg-[#FFF8E8]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[#B94A32] text-xs tracking-[0.3em] uppercase font-bold mb-4">Memories</p>
            <h2 className="font-heading text-4xl md:text-5xl text-[#123B2A] mb-6">Glimpses of Glory</h2>
            <div className="w-16 h-1 bg-[#C9963E] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            {templateData.memories.map((video, i) => (
              <motion.div 
                key={video.id || i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] md:aspect-video bg-[#123B2A] shadow-xl border-4 border-[#EDE3CF]"
              >
                {playingVideo === (video.id || i) && video.videoUrl ? (
                  <video 
                    src={video.videoUrl} 
                    controls 
                    autoPlay 
                    className="absolute inset-0 w-full h-full object-cover z-20 bg-black" 
                  />
                ) : (
                  <>
                    <Image src={video.img || (i === 0 ? "/festival-preparation.jpg" : "/festival-community.jpg")} alt={video.title} fill className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000 ease-out" />
                    <div className="absolute inset-0 bg-[#123B2A]/20 group-hover:bg-[#123B2A]/0 transition-colors duration-500 z-0"></div>
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center pb-8 md:pb-0 z-10">
                      {video.videoUrl ? (
                        <button onClick={() => setPlayingVideo(video.id || i)} className="w-12 h-12 md:w-14 md:h-14 bg-[#C9963E] rounded-full flex items-center justify-center cursor-pointer shadow-xl group-hover:scale-110 group-hover:bg-[#FFF8E8] transition-all duration-500 border-2 border-white/40 group-hover:border-[#C9963E]">
                          <Play className="w-4 h-4 md:w-5 md:h-5 text-[#123B2A] ml-1 transition-colors duration-500" fill="currentColor" />
                        </button>
                      ) : (
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-[#C9963E]/50 rounded-full flex items-center justify-center shadow-xl border-2 border-white/20">
                          <Play className="w-4 h-4 md:w-5 md:h-5 text-white/50 ml-1" fill="currentColor" />
                        </div>
                      )}
                    </div>
                    
                    {/* Details Bar */}
                    <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 bg-gradient-to-t from-[#123B2A] via-[#123B2A]/80 to-transparent z-10 pointer-events-none">
                      <h3 className="text-[#FFF8E8] font-heading text-xl md:text-2xl mb-1">{video.title}</h3>
                      <p className="text-[#C9963E] text-[10px] md:text-xs tracking-widest uppercase font-bold">{video.desc}</p>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SCHEDULE - WARM SAND + GREEN */}
      <section id="schedule" className="py-32 px-4 bg-[#EDE3CF]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-heading text-4xl md:text-5xl text-[#123B2A] mb-4">The Sacred Moments</h2>
            <p className="text-[#B94A32] text-sm tracking-widest uppercase font-bold">Utsav Schedule</p>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-0 bottom-0 left-6 -translate-x-1/2 md:translate-x-0 md:left-1/2 md:-translate-x-1/2 w-[2px] bg-[#C9963E]/50"></div>

            {templateData.schedule.map((event, i) => (
              <motion.div 
                key={event.id || i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="relative flex flex-col md:flex-row items-start md:items-center justify-between mb-16 pl-16 md:pl-0"
              >
                <div className="md:w-[45%] text-left md:text-right mb-2 md:mb-0">
                  <span className="text-[#B94A32] font-serif italic text-3xl leading-none">{event.id}</span>
                  <h3 className="font-heading text-2xl md:text-3xl text-[#123B2A] mt-2">{event.title}</h3>
                </div>
                
                {/* Elegant Dot */}
                <div className="absolute left-6 md:left-1/2 top-2 md:top-auto -translate-x-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-[#C9963E] ring-4 ring-[#FFF8E8] shadow-md z-10"></div>
                
                <div className="md:w-[45%] text-left">
                  <p className="text-[#30241D] font-serif italic text-lg">{event.date}</p>
                  <p className="text-[#496B4A] text-xs uppercase tracking-widest font-bold mt-1">{event.time}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. COMMITTEE - WARM SAND */}
      <section id="committee" className="py-32 px-4 relative bg-[#EDE3CF] border-t border-[#30241D]/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <Users className="w-10 h-10 text-[#123B2A] mx-auto mb-6" />
            <h2 className="font-heading text-4xl md:text-5xl text-[#123B2A] mb-6">Our Pandal Committee</h2>
            <div className="w-12 h-1 bg-[#B94A32] mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
            {templateData.committee.map((member, i) => (
              <motion.div 
                key={member.id || i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="text-center group cursor-pointer"
              >
                <div className="w-28 h-28 md:w-36 md:h-36 mx-auto rounded-full mb-6 p-1 border-2 border-[#C9963E]/30 group-hover:border-[#C9963E] transition-colors duration-500 bg-[#FFF8E8]">
                  <div className="w-full h-full rounded-full bg-[#123B2A] overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700">
                    <Image src={member.photo || "/hero/wedding.jpg"} alt={member.name} fill className="object-cover" />
                  </div>
                </div>
                <h4 className="font-heading text-xl text-[#123B2A] mb-1">{member.name}</h4>
                <p className="text-[#B94A32] text-[10px] uppercase tracking-widest font-bold">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. LOCATION - DEEP GREEN */}
      <section className="py-32 px-4 relative bg-[#123B2A]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2"
          >
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border-8 border-[#FFF8E8] shadow-2xl">
              <Image src={templateData.locationImage || "/festival-preparation.jpg"} alt="Our Mandap" fill className="object-cover" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <p className="text-[#C9963E] text-sm tracking-[0.2em] uppercase font-bold mb-4">Location</p>
            <h2 className="font-heading text-4xl md:text-5xl text-[#FFF8E8] mb-8">Come Celebrate With Us</h2>
            
            <div className="bg-[#FFF8E8] p-8 rounded-2xl shadow-xl border-l-4 border-[#B94A32] mb-8 inline-block text-left w-full">
              <h3 className="font-heading text-2xl text-[#123B2A] mb-2">{templateData.mainName} Pandal</h3>
              <p className="text-[#30241D] leading-relaxed mb-6 font-serif">
                {templateData.locationAddress || "12, Green Park Colony"}<br/>
                {templateData.locationCity || "Vijayawada, Andhra Pradesh 520001"}
              </p>
              <a 
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 bg-[#123B2A] text-[#C9963E] rounded-full uppercase tracking-widest text-xs font-bold hover:bg-[#496B4A] transition-colors"
              >
                <MapPin className="w-4 h-4" /> Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. DIGITAL DARSHAN - WARM IVORY */}
      <section id="darshan" className="py-32 px-4 bg-[#FFF8E8]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div>
              <p className="text-[#B94A32] text-xs tracking-[0.3em] uppercase font-bold mb-4">Gallery</p>
              <h2 className="font-heading text-4xl md:text-5xl text-[#123B2A]">Digital Darshan</h2>
            </div>
            <button className="hidden md:flex bg-transparent border-2 border-[#123B2A] text-[#123B2A] px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#123B2A] hover:text-[#FFF8E8] transition-colors">
              View All Photos
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {(templateData.galleryImages?.length > 0 ? templateData.galleryImages : ["/ganesh-chaturthi.jpg", "/festival-puja.jpg", "/festival-preparation.jpg", "/festival-community.jpg"]).map((img, index) => {
              const isFirst = index === 0;
              const isLastEven = index === 3;
              
              return (
                <div 
                  key={index}
                  className={`${isFirst ? "col-span-2 md:row-span-2 relative aspect-square md:aspect-auto md:h-full" : isLastEven ? "col-span-2 relative aspect-[2/1]" : "relative aspect-square"} rounded-2xl overflow-hidden bg-[#EDE3CF] border-2 border-[#C9963E]/20 cursor-pointer group`} 
                  onClick={() => setSelectedImage(img)}
                >
                  <Image src={img} alt={`Gallery ${index}`} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
              );
            })}
          </div>
          
          {/* Mobile View All Button */}
          <button className="w-full mt-8 md:hidden bg-transparent border-2 border-[#123B2A] text-[#123B2A] px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#123B2A] hover:text-[#FFF8E8] transition-colors">
            View All Photos
          </button>
        </div>
      </section>

      {/* 8. BLESSINGS / GUESTBOOK - WARM SAND */}
      <section id="blessings" className="py-32 px-4 relative bg-[#EDE3CF]">
        <div className="max-w-3xl mx-auto text-center">
          <Heart className="w-8 h-8 text-[#B94A32] mx-auto mb-6" />
          <h2 className="font-heading text-4xl md:text-5xl text-[#123B2A] mb-4">Leave Your Blessings</h2>
          <p className="text-[#30241D]/70 mb-12 font-serif italic text-lg">Sign the digital guestbook for our Samithi.</p>

          <div className="bg-[#FFF8E8] p-8 md:p-12 rounded-[2rem] shadow-lg border border-[#C9963E]/30 mb-16 text-left relative overflow-hidden">
            {/* Subtle floral accent inside card */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9963E]/10 rounded-bl-full pointer-events-none"></div>

            <textarea 
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Write your beautiful message here..." 
              className="w-full bg-transparent border-b-2 border-[#123B2A]/10 p-4 min-h-[140px] focus:outline-none focus:border-[#B94A32] transition-colors mb-6 text-[#30241D] font-serif text-lg resize-none relative z-10"
            ></textarea>
            <div className="flex flex-col md:flex-row gap-6 mb-8 relative z-10">
              <input 
                type="text" 
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Your Name" 
                className="flex-1 bg-transparent border-b-2 border-[#123B2A]/10 py-3 focus:outline-none focus:border-[#B94A32] text-[#30241D] font-bold uppercase tracking-widest text-xs" 
              />
              <input 
                type="text" 
                value={newCity}
                onChange={(e) => setNewCity(e.target.value)}
                placeholder="City (Optional)" 
                className="flex-1 bg-transparent border-b-2 border-[#123B2A]/10 py-3 focus:outline-none focus:border-[#B94A32] text-[#30241D] font-bold uppercase tracking-widest text-xs" 
              />
            </div>
            <button 
              onClick={handlePostBlessing}
              disabled={isPosting}
              className="w-full md:w-auto px-10 py-4 bg-[#123B2A] text-[#C9963E] rounded-full uppercase tracking-widest text-xs font-bold hover:bg-[#B94A32] hover:text-[#FFF8E8] transition-all flex items-center justify-center shadow-lg mx-auto relative z-10 disabled:opacity-50"
            >
              {isPosting ? "Posting..." : "Post Blessing"}
            </button>
          </div>

          {/* DISPLAY BLESSINGS */}
          <div className="text-left space-y-6">
            <AnimatePresence>
              {blessings.slice(0, showAllBlessings ? blessings.length : 3).map((blessing) => (
                <motion.div 
                  key={blessing.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-[#30241D]/5"
                >
                  <p className="text-[#30241D] font-serif text-lg mb-4 leading-relaxed">"{blessing.message}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[#123B2A] font-bold text-sm">{blessing.name}</p>
                      <p className="text-[#B94A32] text-[10px] uppercase tracking-widest font-bold mt-1">{blessing.city}</p>
                    </div>
                    <span className="text-[#30241D]/40 text-xs italic">{blessing.date}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {blessings.length > 3 && (
            <button 
              onClick={() => setShowAllBlessings(!showAllBlessings)}
              className="mt-10 px-8 py-3 border-2 border-[#123B2A] text-[#123B2A] rounded-full uppercase tracking-widest text-xs font-bold hover:bg-[#123B2A] hover:text-[#FFF8E8] transition-colors"
            >
              {showAllBlessings ? "Show Less" : `View All ${blessings.length} Blessings`}
            </button>
          )}
        </div>
      </section>

      {/* 9. FOOTER - DEEP GREEN */}
      <section className="pt-32 pb-12 px-4 bg-[#123B2A] text-[#FFF8E8] text-center border-t-8 border-[#C9963E] relative">
        <div className="max-w-2xl mx-auto mb-20">
          <h2 className="font-heading text-5xl md:text-6xl text-[#C9963E] mb-8">Ganpati Bappa Morya</h2>
          <p className="text-[#FFF8E8]/80 font-serif italic text-xl md:text-2xl mb-12 leading-relaxed">
            "Thank you for being part of our celebration and sharing this auspicious moment with us."
          </p>
          <div className="w-12 h-[2px] bg-[#B94A32] mx-auto mb-8"></div>
          <p className="font-heading text-2xl tracking-widest uppercase text-[#C9963E] mb-12">Green Park Utsav Samithi</p>
          
          {!isBuilderMode && (
            <a href="/builder/ganesh-royal" className="inline-block bg-[#C9963E] text-[#123B2A] px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#FFF8E8] transition-colors shadow-xl border-2 border-transparent hover:border-[#C9963E]">
              Customize this Vedika
            </a>
          )}
        </div>

        {/* Vedika Branding */}
        <div className="border-t border-[#FFF8E8]/10 pt-8 mt-12 text-center">
          <p className="text-[#FFF8E8]/40 text-[10px] font-bold tracking-[0.3em] uppercase">
            Powered by{" "}
            <a href="https://vedika-six.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-[#C9963E] hover:text-[#FFF8E8] transition-colors">
              Vedika
            </a>
          </p>
        </div>
      </section>

      {/* DONATE MODAL */}
      <AnimatePresence>
        {isDonateOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#123B2A]/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-[#FFF8E8] w-full max-w-md rounded-3xl overflow-hidden shadow-2xl relative"
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsDonateOpen(false)}
                className="absolute top-4 right-4 p-2 bg-[#123B2A]/5 hover:bg-[#123B2A]/10 rounded-full transition-colors z-10"
              >
                <X className="w-5 h-5 text-[#30241D]" />
              </button>

              {/* Modal Header */}
              <div className="bg-[#EDE3CF] p-8 text-center border-b border-[#30241D]/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9963E]/10 rounded-bl-full pointer-events-none"></div>
                <Heart className="w-8 h-8 text-[#B94A32] mx-auto mb-4" />
                <h3 className="font-heading text-3xl text-[#123B2A] mb-2">Support Our Utsav</h3>
                <p className="text-[#30241D]/80 font-serif text-sm">
                  Your contribution helps us organize the Maha Annadanam and grand celebrations.
                </p>
              </div>

              {/* Modal Body */}
              <div className="p-8 text-center">
                <div className="w-48 h-48 mx-auto bg-white border-2 border-[#C9963E]/30 rounded-xl flex flex-col items-center justify-center mb-6 shadow-sm overflow-hidden">
                  {templateData.qrCodeImage ? (
                    <img src={templateData.qrCodeImage} alt="QR Code" className="w-full h-full object-cover" />
                  ) : (
                    <>
                      <QrCode className="w-32 h-32 text-[#123B2A] opacity-80" />
                      <span className="text-[10px] text-[#30241D]/50 uppercase tracking-widest font-bold mt-2">Scan to Pay</span>
                    </>
                  )}
                </div>

                {/* Auspicious Amounts */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                  {['₹116', '₹501', '₹1,116', '₹5,116'].map((amount) => (
                    <button key={amount} className="px-3 sm:px-4 py-1.5 sm:py-2 border border-[#C9963E]/40 rounded-full text-xs font-bold text-[#123B2A] hover:bg-[#C9963E] hover:text-[#FFF8E8] transition-colors">
                      {amount}
                    </button>
                  ))}
                </div>

                {/* UPI ID */}
                <div className="bg-[#EDE3CF] rounded-xl p-4 flex items-center justify-between border border-[#30241D]/5">
                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-widest font-bold text-[#B94A32] mb-1">UPI ID</p>
                    <p className="text-sm font-bold text-[#123B2A]">{templateData.upiId}</p>
                  </div>
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText(templateData.upiId);
                      setCopied(true);
                      setTimeout(() => setCopied(false), 2000);
                    }}
                    className="p-2 bg-[#FFF8E8] rounded-full hover:bg-[#C9963E] hover:text-white transition-colors"
                  >
                    {copied ? <CheckCircle2 className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-[#123B2A]" />}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* IMAGE LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#123B2A]/90 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-2 bg-[#FFF8E8]/10 hover:bg-[#FFF8E8]/20 rounded-full transition-colors z-10"
            >
              <X className="w-6 h-6 text-[#FFF8E8]" />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-[4/3] md:aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-[#C9963E]/30"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={selectedImage} alt="Fullscreen View" fill className="object-contain bg-black/50" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
