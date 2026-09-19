"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Settings, Image as ImageIcon, CalendarClock, Users, CreditCard, ChevronRight, Check, ArrowLeft, Smartphone, Monitor, Plus, Trash2, MapPin, Sparkles, X, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const STEPS = [
  { id: "basics", label: "Basic Details", icon: Settings },
  { id: "media", label: "Media & Links", icon: ImageIcon },
  { id: "schedule", label: "Schedule", icon: CalendarClock },
  { id: "committee", label: "Committee", icon: Users },
  { id: "gallery", label: "Gallery & Videos", icon: ImageIcon },
  { id: "payment", label: "Donations", icon: CreditCard },
];

export default function RoyalBuilder() {
  const [activeStep, setActiveStep] = useState("basics");
  const [previewMode, setPreviewMode] = useState<"mobile" | "desktop">("mobile");
  const [showMobilePreview, setShowMobilePreview] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Global Template State
  const [templateData, setTemplateData] = useState({
    mainName: "Green Park",
    subName: "Utsav Samithi",
    welcomeText: "welcomes you to",
    mainTitle: "Ganesh Chaturthi",
    year: "2026",
    youtubeLink: "",
    upiId: "greenpark@ybl",
    logoImage: "",
    heroImage: "",
    qrCodeImage: "",
    locationImage: "",
    locationAddress: "12, Green Park Colony",
    locationCity: "Vijayawada, Andhra Pradesh 520001",
    galleryImages: [] as string[],
    memories: [
      { id: 1, title: "Maha Aarti 2025", desc: "Evening Darshan", img: "", videoUrl: "" },
      { id: 2, title: "Grand Visarjan", desc: "A farewell to Bappa", img: "", videoUrl: "" }
    ]
  });

  const updateTemplate = (field: string, value: string) => {
    setTemplateData(prev => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, field: string, id?: number) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        if (id !== undefined) {
          updateMember(id, 'photo', result);
        } else {
          updateTemplate(field, result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGalleryUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    
    // Limit to remaining slots
    const availableSlots = 10 - templateData.galleryImages.length;
    const filesToProcess = files.slice(0, availableSlots);
    
    filesToProcess.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setTemplateData(prev => ({ ...prev, galleryImages: [...prev.galleryImages, result] }));
      };
      reader.readAsDataURL(file);
    });
  };

  const removeGalleryImage = (index: number) => {
    setTemplateData(prev => ({
      ...prev,
      galleryImages: prev.galleryImages.filter((_, i) => i !== index)
    }));
  };

  const updateMemory = (id: number, field: string, value: string) => {
    setTemplateData(prev => ({
      ...prev,
      memories: prev.memories.map(m => m.id === id ? { ...m, [field]: value } : m)
    }));
  };

  const handleMemoryImageUpload = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateMemory(id, 'img', reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMemoryVideoUpload = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const file = e.target.files?.[0];
    if (file) {
      // Use createObjectURL for videos to avoid massive base64 strings crashing the browser
      const url = URL.createObjectURL(file);
      updateMemory(id, 'videoUrl', url);
    }
  };

  // Dynamic Schedule State
  const [schedule, setSchedule] = useState([
    { id: 1, title: "Ganesh Sthapana", date: "Sept 7", time: "09:00 AM" },
    { id: 2, title: "Maha Aarti", date: "Sept 7", time: "07:00 PM" }
  ]);

  const addEvent = () => setSchedule([...schedule, { id: Date.now(), title: "", date: "", time: "" }]);
  const removeEvent = (id: number) => setSchedule(schedule.filter(e => e.id !== id));
  const updateEvent = (id: number, field: string, value: string) => {
    setSchedule(schedule.map(e => e.id === id ? { ...e, [field]: value } : e));
  };

  // Dynamic Committee State
  const [committee, setCommittee] = useState([
    { id: 1, name: "R. Sharma", role: "President", photo: "" },
    { id: 2, name: "K. Reddy", role: "Secretary", photo: "" }
  ]);

  const addMember = () => setCommittee([...committee, { id: Date.now(), name: "", role: "", photo: "" }]);
  const removeMember = (id: number) => setCommittee(committee.filter(m => m.id !== id));
  const updateMember = (id: number, field: string, value: string) => {
    setCommittee(committee.map(m => m.id === id ? { ...m, [field]: value } : m));
  };

  // Sync with iframe
  useEffect(() => {
    const payload = {
      ...templateData,
      schedule,
      committee,
      previewMode
    };
    
    // Broadcast to all iframes (desktop mockup and mobile fullscreen)
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => {
      if (iframe.contentWindow) {
        iframe.contentWindow.postMessage({ type: 'UPDATE_PREVIEW', data: payload }, '*');
      }
    });
  }, [templateData, schedule, committee, previewMode]);

  return (
    <div className="flex h-screen bg-brand-background overflow-hidden font-body text-brand-text">
      
      {/* LEFT SIDEBAR - FORM */}
      <div className="w-full md:w-[450px] bg-brand-background h-full shadow-2xl flex flex-col relative z-10 flex-shrink-0 border-r border-brand-text/10">
        {/* Header */}
        <div className="p-6 border-b border-brand-text/10 bg-brand-background">
          <Link href="/templates/ganesh-chaturthi" className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-text/50 hover:text-brand-primary transition-colors mb-6 w-fit">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Templates
          </Link>
          <h1 className="font-heading text-2xl text-brand-text">Customize Template</h1>
          <p className="text-sm text-brand-text/60 mt-1">Royal Floral Minimal (₹1,499)</p>
        </div>

        {/* Stepper Navigation */}
        <div className="flex overflow-x-auto hide-scrollbar border-b border-brand-text/10 px-2 py-3 bg-brand-text/5">
          {STEPS.map((step) => {
            const Icon = step.icon;
            const isActive = activeStep === step.id;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                  isActive ? "bg-brand-primary text-white shadow-md" : "text-brand-text/50 hover:text-brand-text hover:bg-brand-text/5"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {step.label}
              </button>
            );
          })}
        </div>

        {/* Form Content Area */}
        <div className="flex-1 overflow-y-auto p-6 bg-brand-text/5">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              {activeStep === "basics" && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-lg font-bold text-brand-text mb-4">Committee & Event Name</h2>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-brand-text/60 mb-2">Committee Logo</label>
                        <label className="border border-dashed border-brand-text/20 rounded-xl p-4 flex flex-col items-center justify-center hover:border-brand-primary hover:bg-brand-primary/5 transition-colors cursor-pointer bg-white relative overflow-hidden">
                          {templateData.logoImage ? (
                            <img src={templateData.logoImage} className="w-10 h-10 object-contain mb-1" />
                          ) : (
                            <ImageIcon className="w-5 h-5 text-brand-text/40 mb-1" />
                          )}
                          <span className="text-xs font-bold text-brand-text">{templateData.logoImage ? 'Change Logo' : 'Upload Logo'}</span>
                          <input type="file" accept="image/*" className="hidden" onChange={(e) => handleImageUpload(e, 'logoImage')} />
                        </label>
                      </div>
                      
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-brand-text/60 mb-2">Main Name (e.g. Green Park)</label>
                        <input 
                          type="text" 
                          value={templateData.mainName}
                          onChange={(e) => updateTemplate("mainName", e.target.value)}
                          placeholder="Green Park" 
                          className="w-full bg-brand-background border border-brand-text/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-primary transition-colors" 
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-brand-text/60 mb-2">Sub Name (e.g. Utsav Samithi)</label>
                        <input 
                          type="text" 
                          value={templateData.subName}
                          onChange={(e) => updateTemplate("subName", e.target.value)}
                          placeholder="Utsav Samithi" 
                          className="w-full bg-brand-background border border-brand-text/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-primary transition-colors" 
                        />
                      </div>
                    </div>
                  </div>

                  <hr className="border-brand-text/10" />

                  <div>
                    <h2 className="text-lg font-bold text-brand-text mb-4">Hero Section Text</h2>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-brand-text/60 mb-2">Welcome Text</label>
                        <input 
                          type="text" 
                          value={templateData.welcomeText}
                          onChange={(e) => updateTemplate("welcomeText", e.target.value)}
                          placeholder="welcomes you to" 
                          className="w-full bg-brand-background border border-brand-text/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-primary transition-colors" 
                        />
                      </div>
                      
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-brand-text/60 mb-2">Main Title</label>
                        <input 
                          type="text" 
                          value={templateData.mainTitle}
                          onChange={(e) => updateTemplate("mainTitle", e.target.value)}
                          placeholder="Ganesh Chaturthi" 
                          className="w-full bg-brand-background border border-brand-text/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-primary transition-colors" 
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-brand-text/60 mb-2">Year / Highlight</label>
                        <input 
                          type="text" 
                          value={templateData.year}
                          onChange={(e) => updateTemplate("year", e.target.value)}
                          placeholder="2026" 
                          className="w-full bg-brand-background border border-brand-text/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-primary transition-colors" 
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-brand-text/60 mb-2 mt-4">Location Address</label>
                        <input 
                          type="text" 
                          value={templateData.locationAddress}
                            onChange={(e) => updateTemplate("locationAddress", e.target.value)}
                            placeholder="e.g. 12, Green Park Colony" 
                            className="w-full bg-brand-background border border-brand-text/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-primary transition-colors mb-3" 
                          />
                          <input 
                            type="text" 
                            value={templateData.locationCity}
                            onChange={(e) => updateTemplate("locationCity", e.target.value)}
                            placeholder="e.g. Vijayawada, Andhra Pradesh 520001" 
                            className="w-full bg-brand-background border border-brand-text/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-primary transition-colors" 
                          />
                        </div>
                      </div>
                    </div>
                  </div>
              )}

              {activeStep === "media" && (
                <div className="space-y-6">
                   <h2 className="text-lg font-bold text-brand-text mb-2">Media & Links</h2>
                   <p className="text-xs text-brand-text/60 mb-6">Upload your main photos and add your live links.</p>
                   
                   <label className="border border-dashed border-brand-text/20 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:border-brand-primary hover:bg-brand-primary/5 transition-colors cursor-pointer bg-white relative overflow-hidden">
                      {templateData.heroImage ? (
                         <img src={templateData.heroImage} className="absolute inset-0 w-full h-full object-cover opacity-30" />
                      ) : (
                         <ImageIcon className="w-8 h-8 text-brand-text/40 mx-auto mb-3" />
                      )}
                      <div className="relative z-10">
                        <p className="text-sm font-bold text-brand-text">{templateData.heroImage ? 'Change Hero Image' : 'Upload Hero Image'}</p>
                        <p className="text-xs text-brand-text/50 mt-1">High quality portrait recommended</p>
                      </div>
                      <input type="file" accept="image/*" className="hidden" onChange={(e) => handleImageUpload(e, 'heroImage')} />
                   </label>

                   <label className="border border-dashed border-brand-text/20 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:border-brand-primary hover:bg-brand-primary/5 transition-colors cursor-pointer bg-white relative overflow-hidden mt-4">
                      {templateData.locationImage ? (
                         <img src={templateData.locationImage} className="absolute inset-0 w-full h-full object-cover opacity-30" />
                      ) : (
                         <MapPin className="w-8 h-8 text-brand-text/40 mx-auto mb-3" />
                      )}
                      <div className="relative z-10">
                        <p className="text-sm font-bold text-brand-text">{templateData.locationImage ? 'Change Location Image' : 'Upload Location Image'}</p>
                        <p className="text-xs text-brand-text/50 mt-1">Pandal or Mandap Photo</p>
                      </div>
                      <input type="file" accept="image/*" className="hidden" onChange={(e) => handleImageUpload(e, 'locationImage')} />
                   </label>

                   <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-brand-text/60 mb-2 mt-6">YouTube Live Link (Optional)</label>
                      <input 
                        type="url" 
                        value={templateData.youtubeLink}
                        onChange={(e) => updateTemplate("youtubeLink", e.target.value)}
                        placeholder="https://youtube.com/live/..." 
                        className="w-full bg-brand-background border border-brand-text/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-primary transition-colors" 
                      />
                      <p className="text-[10px] text-brand-text/40 mt-2">Leave blank to hide the "Join The Utsav" button.</p>
                   </div>

                   <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-brand-text/60 mb-2 mt-6">Google Maps Link</label>
                      <input type="url" placeholder="https://maps.google.com/..." className="w-full bg-brand-background border border-brand-text/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-primary transition-colors" />
                   </div>
                </div>
              )}

              {activeStep === "schedule" && (
                <div className="space-y-6">
                   <div className="flex justify-between items-center mb-2">
                     <h2 className="text-lg font-bold text-brand-text">Event Schedule</h2>
                     <button onClick={addEvent} className="text-xs font-bold uppercase tracking-widest text-brand-primary hover:text-brand-accent flex items-center gap-1 bg-brand-primary/10 px-3 py-1.5 rounded-full transition-colors">
                       <Plus className="w-3.5 h-3.5" /> Add Event
                     </button>
                   </div>
                   <p className="text-xs text-brand-text/60 mb-6">List out your daily pujas, aartis, and special events.</p>
                   
                   <div className="space-y-4">
                     <AnimatePresence>
                       {schedule.map((event, index) => (
                         <motion.div 
                           key={event.id}
                           initial={{ opacity: 0, height: 0 }}
                           animate={{ opacity: 1, height: "auto" }}
                           exit={{ opacity: 0, height: 0 }}
                           className="bg-white p-4 rounded-xl border border-brand-text/10 shadow-sm relative group"
                         >
                           {/* Remove Button */}
                           <button 
                             onClick={() => removeEvent(event.id)}
                             className="absolute -top-2 -right-2 bg-red-100 text-red-600 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-sm hover:bg-red-200"
                           >
                             <Trash2 className="w-3.5 h-3.5" />
                           </button>

                           <div className="flex items-center gap-2 mb-3">
                             <div className="w-6 h-6 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center text-xs font-bold">
                               {index + 1}
                             </div>
                             <input 
                               type="text" 
                               value={event.title}
                               onChange={(e) => updateEvent(event.id, "title", e.target.value)}
                               placeholder="Event Title (e.g. Maha Aarti)" 
                               className="flex-1 bg-transparent border-b border-brand-text/20 pb-1 text-sm font-bold focus:outline-none focus:border-brand-primary transition-colors text-brand-text placeholder-brand-text/30" 
                             />
                           </div>
                           
                           <div className="flex gap-3 pl-8">
                             <input 
                               type="text" 
                               value={event.date}
                               onChange={(e) => updateEvent(event.id, "date", e.target.value)}
                               placeholder="Date (Sept 7)" 
                               className="w-1/2 bg-brand-background border border-brand-text/20 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-brand-primary transition-colors" 
                             />
                             <input 
                               type="text" 
                               value={event.time}
                               onChange={(e) => updateEvent(event.id, "time", e.target.value)}
                               placeholder="Time (09:00 AM)" 
                               className="w-1/2 bg-brand-background border border-brand-text/20 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-brand-primary transition-colors" 
                             />
                           </div>
                         </motion.div>
                       ))}
                     </AnimatePresence>
                   </div>
                </div>
              )}

              {activeStep === "committee" && (
                <div className="space-y-6">
                   <div className="flex justify-between items-center mb-2">
                     <h2 className="text-lg font-bold text-brand-text">Committee Members</h2>
                     <button onClick={addMember} className="text-xs font-bold uppercase tracking-widest text-brand-primary hover:text-brand-accent flex items-center gap-1 bg-brand-primary/10 px-3 py-1.5 rounded-full transition-colors">
                       <Plus className="w-3.5 h-3.5" /> Add Member
                     </button>
                   </div>
                   <p className="text-xs text-brand-text/60 mb-6">Add your core team members and their roles.</p>
                   
                   <div className="space-y-4">
                     <AnimatePresence>
                       {committee.map((member, index) => (
                         <motion.div 
                           key={member.id}
                           initial={{ opacity: 0, height: 0 }}
                           animate={{ opacity: 1, height: "auto" }}
                           exit={{ opacity: 0, height: 0 }}
                           className="bg-white p-4 rounded-xl border border-brand-text/10 shadow-sm relative group"
                         >
                           {/* Remove Button */}
                           <button 
                             onClick={() => removeMember(member.id)}
                             className="absolute -top-2 -right-2 bg-red-100 text-red-600 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-sm hover:bg-red-200"
                           >
                             <Trash2 className="w-3.5 h-3.5" />
                           </button>

                           <div className="flex gap-4 items-center">
                             {/* Photo Upload Placeholder */}
                             <label className="w-12 h-12 rounded-full bg-brand-background border border-dashed border-brand-text/20 flex items-center justify-center cursor-pointer hover:border-brand-primary transition-colors shrink-0 relative overflow-hidden">
                               {member.photo ? (
                                 <img src={member.photo} className="w-full h-full object-cover" />
                               ) : (
                                 <ImageIcon className="w-4 h-4 text-brand-text/30" />
                               )}
                               <input type="file" accept="image/*" className="hidden" onChange={(e) => handleImageUpload(e, 'committee', member.id)} />
                             </label>
                             
                             <div className="flex-1 space-y-2">
                               <input 
                                 type="text" 
                                 value={member.name}
                                 onChange={(e) => updateMember(member.id, "name", e.target.value)}
                                 placeholder="Name (e.g. R. Sharma)" 
                                 className="w-full bg-transparent border-b border-brand-text/20 pb-1 text-sm font-bold focus:outline-none focus:border-brand-primary transition-colors text-brand-text placeholder-brand-text/30" 
                               />
                               <input 
                                 type="text" 
                                 value={member.role}
                                 onChange={(e) => updateMember(member.id, "role", e.target.value)}
                                 placeholder="Role (e.g. President)" 
                                 className="w-full bg-transparent border-b border-brand-text/10 pb-1 text-xs focus:outline-none focus:border-brand-primary transition-colors text-brand-text/80 placeholder-brand-text/30" 
                               />
                             </div>
                           </div>
                         </motion.div>
                       ))}
                     </AnimatePresence>
                   </div>
                </div>
              )}

              {activeStep === "gallery" && (
                <div className="space-y-8">
                   {/* GALLERY SECTION */}
                   <div>
                     <div className="flex justify-between items-center mb-2">
                       <h2 className="text-lg font-bold text-brand-text">Digital Darshan Gallery</h2>
                       <span className="text-xs font-bold text-brand-text/50">{templateData.galleryImages.length}/10</span>
                     </div>
                     <p className="text-xs text-brand-text/60 mb-4">Upload up to 10 photos of your pandal and celebrations.</p>
                     
                     <div className="grid grid-cols-3 gap-3 mb-4">
                       {templateData.galleryImages.map((img, i) => (
                         <div key={i} className="relative aspect-square rounded-xl overflow-hidden bg-brand-background border border-brand-text/10 group">
                           <img src={img} alt="Gallery upload" className="w-full h-full object-cover" />
                           <button 
                             onClick={() => removeGalleryImage(i)}
                             className="absolute top-1 right-1 bg-red-100 text-red-600 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-sm"
                           >
                             <Trash2 className="w-3 h-3" />
                           </button>
                         </div>
                       ))}
                       {templateData.galleryImages.length < 10 && (
                         <label className="aspect-square rounded-xl border-2 border-dashed border-brand-text/20 flex flex-col items-center justify-center cursor-pointer hover:border-brand-primary hover:bg-brand-primary/5 transition-colors">
                           <Plus className="w-5 h-5 text-brand-text/40 mb-1" />
                           <span className="text-[10px] font-bold text-brand-text/60">Add</span>
                           <input type="file" accept="image/*" multiple className="hidden" onChange={handleGalleryUpload} />
                         </label>
                       )}
                     </div>
                   </div>

                   {/* VIDEOS SECTION */}
                   <div>
                     <h2 className="text-lg font-bold text-brand-text mb-2">Glimpses of Glory (Videos)</h2>
                     <p className="text-xs text-brand-text/60 mb-6">Upload thumbnails and titles for up to 2 memory videos.</p>
                     
                     <div className="space-y-6">
                       {templateData.memories.map((memory) => (
                         <div key={memory.id} className="bg-white p-4 rounded-xl border border-brand-text/10 shadow-sm relative group">
                            <label className="block w-full aspect-video rounded-lg bg-brand-background border-2 border-dashed border-brand-text/20 mb-4 flex flex-col items-center justify-center cursor-pointer hover:border-brand-primary transition-colors relative overflow-hidden">
                              {memory.img ? (
                                <img src={memory.img} className="w-full h-full object-cover" />
                              ) : (
                                <>
                                  <ImageIcon className="w-6 h-6 text-brand-text/30 mb-2" />
                                  <span className="text-xs font-bold text-brand-text/50">Thumbnail {memory.id}</span>
                                </>
                              )}
                              <input type="file" accept="image/*" className="hidden" onChange={(e) => handleMemoryImageUpload(e, memory.id)} />
                            </label>
                            
                            <div className="space-y-3">
                              <input 
                                type="text" 
                                value={memory.title}
                                onChange={(e) => updateMemory(memory.id, "title", e.target.value)}
                                placeholder="Video Title (e.g. Maha Aarti)" 
                                className="w-full bg-transparent border-b border-brand-text/20 pb-1 text-sm font-bold focus:outline-none focus:border-brand-primary transition-colors text-brand-text placeholder-brand-text/30" 
                              />
                              <input 
                                type="text" 
                                value={memory.desc}
                                onChange={(e) => updateMemory(memory.id, "desc", e.target.value)}
                                placeholder="Short Description" 
                                className="w-full bg-transparent border-b border-brand-text/10 pb-1 text-xs focus:outline-none focus:border-brand-primary transition-colors text-brand-text/80 placeholder-brand-text/30" 
                              />
                              
                              <label className="flex items-center justify-center gap-2 w-full bg-brand-primary/10 hover:bg-brand-primary/20 text-brand-primary rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-widest cursor-pointer transition-colors mt-2">
                                {memory.videoUrl ? 'Change Video' : 'Upload Video File'}
                                <input type="file" accept="video/*" className="hidden" onChange={(e) => handleMemoryVideoUpload(e, memory.id)} />
                              </label>
                            </div>
                         </div>
                       ))}
                     </div>
                   </div>
                </div>
              )}

              {activeStep === "payment" && (
                <div className="space-y-6">
                  {/* Committee Donation Settings */}
                  <div>
                    <h2 className="text-lg font-bold text-brand-text mb-2">Donation Details</h2>
                    <p className="text-xs text-brand-text/60 mb-6">How devotees can donate to your Samithi.</p>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-brand-text/60 mb-2">UPI ID</label>
                        <input 
                          type="text" 
                          value={templateData.upiId}
                          onChange={(e) => updateTemplate("upiId", e.target.value)}
                          placeholder="e.g. greenpark@ybl" 
                          className="w-full bg-brand-background border border-brand-text/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-primary transition-colors" 
                        />
                      </div>
                      
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-brand-text/60 mb-2">UPI QR Code</label>
                        <label className="border border-dashed border-brand-text/20 rounded-2xl p-6 flex flex-col items-center justify-center hover:border-brand-primary hover:bg-brand-primary/5 transition-colors cursor-pointer bg-white relative overflow-hidden">
                          {templateData.qrCodeImage ? (
                            <img src={templateData.qrCodeImage} className="w-16 h-16 object-contain mb-2" />
                          ) : (
                            <ImageIcon className="w-6 h-6 text-brand-text/40 mb-2" />
                          )}
                          <span className="text-xs font-bold text-brand-text relative z-10">{templateData.qrCodeImage ? 'Change QR Code' : 'Upload QR Code Image'}</span>
                          <input type="file" accept="image/*" className="hidden" onChange={(e) => handleImageUpload(e, 'qrCodeImage')} />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-brand-text/10 bg-brand-background flex justify-between items-center">
          <button 
            onClick={() => setShowMobilePreview(true)}
            className="md:hidden px-6 py-3 text-xs font-bold uppercase tracking-widest text-brand-text/60 hover:text-brand-primary"
          >
            Preview
          </button>
          
          {activeStep === "payment" ? (
            <button 
              onClick={() => setIsCheckoutOpen(true)}
              className="ml-auto px-8 py-3 bg-brand-primary text-white rounded-full text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity shadow-lg shadow-brand-primary/20"
            >
              Publish Your Vedika
            </button>
          ) : (
            <button 
              onClick={() => {
                const currentIndex = STEPS.findIndex(s => s.id === activeStep);
                if (currentIndex < STEPS.length - 1) {
                  setActiveStep(STEPS[currentIndex + 1].id);
                }
              }}
              className="ml-auto px-8 py-3 bg-brand-text text-brand-background rounded-full text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity shadow-md flex items-center gap-2"
            >
              Next Step <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* RIGHT SIDE - LIVE PREVIEW (IFRAME) */}
      <div className="hidden md:flex flex-1 bg-brand-text/5 relative items-center justify-center p-8">
        
        {/* Toggle Controls */}
        <div className="absolute top-6 right-6 z-20 flex bg-white rounded-full shadow-sm border border-brand-text/10 p-1">
          <button 
            onClick={() => setPreviewMode("mobile")}
            className={`p-2.5 rounded-full transition-colors flex items-center justify-center ${previewMode === "mobile" ? "bg-brand-primary text-white shadow-md" : "text-brand-text/40 hover:text-brand-text"}`}
          >
            <Smartphone className="w-4 h-4" />
          </button>
          <button 
            onClick={() => setPreviewMode("desktop")}
            className={`p-2.5 rounded-full transition-colors flex items-center justify-center ${previewMode === "desktop" ? "bg-brand-primary text-white shadow-md" : "text-brand-text/40 hover:text-brand-text"}`}
          >
            <Monitor className="w-4 h-4" />
          </button>
        </div>

        <div className="absolute inset-0 flex items-center justify-center p-8 mt-10">
            <motion.div 
              layout
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={`w-full bg-brand-background shadow-2xl overflow-hidden relative flex flex-col ${
                previewMode === "mobile" 
                  ? "max-w-[400px] h-[85vh] max-h-[850px] rounded-[3rem] border-[14px] border-brand-text" 
                  : "max-w-[1100px] h-[85vh] max-h-[850px] rounded-xl border border-brand-text/20 shadow-xl"
              }`}
            >
              {/* Fake Mobile Notch (only in mobile mode) */}
              <AnimatePresence>
                {previewMode === "mobile" && (
                  <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-0 inset-x-0 h-7 flex justify-center z-50 pointer-events-none"
                  >
                    <div className="w-40 h-7 bg-brand-text rounded-b-3xl"></div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Fake Browser Top Bar (only in desktop mode) */}
              <AnimatePresence>
                {previewMode === "desktop" && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full h-12 bg-gray-100 flex items-center px-4 gap-2 border-b border-gray-200 z-50"
                  >
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="ml-4 w-full max-w-md h-6 bg-white rounded-md border border-gray-200 flex items-center px-3 text-[10px] text-gray-400 font-mono">
                      vedika.com/preview/ganesh-royal
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Iframe pointing to the preview page */}
              <iframe 
                ref={iframeRef}
                src="/preview/ganesh-royal?mode=builder" 
                className="w-full flex-1 border-none bg-white"
                title="Live Template Preview"
              />
            </motion.div>
        </div>
      </div>

      {/* MOBILE FULLSCREEN PREVIEW MODAL */}
      <AnimatePresence>
        {showMobilePreview && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col md:hidden"
          >
            <div className="flex justify-between items-center p-4 border-b border-brand-text/10 bg-brand-background shadow-sm">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-text">Live Preview</span>
              <button 
                onClick={() => setShowMobilePreview(false)}
                className="p-2 bg-brand-primary/10 text-brand-primary rounded-full hover:bg-brand-primary/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <iframe 
              src="/preview/ganesh-royal?mode=builder" 
              className="w-full flex-1 border-none bg-white"
              title="Mobile Live Template Preview"
              onLoad={(e) => {
                // Sync data when the mobile iframe loads
                const iframe = e.target as HTMLIFrameElement;
                if (iframe.contentWindow) {
                  iframe.contentWindow.postMessage({ 
                    type: 'UPDATE_PREVIEW', 
                    data: { ...templateData, schedule, committee, previewMode: 'mobile' } 
                  }, '*');
                }
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
