"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Mail, MessageCircle, AlertCircle } from "lucide-react";

export default function PaymentSupportPage() {
  const router = useRouter();
  const [backText, setBackText] = useState("Back to Home");
  const [isFromCheckout, setIsFromCheckout] = useState(false);

  useEffect(() => {
    if (window.location.search.includes("from=checkout") || document.referrer.includes("/checkout")) {
      setBackText("Back to Payment");
      setIsFromCheckout(true);
    }
  }, []);

  const handleBack = () => {
    if (isFromCheckout) {
      router.back();
    } else {
      router.push("/?section=explore");
    }
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
        <button 
          onClick={handleBack} 
          className="text-xs md:text-sm font-bold tracking-widest uppercase text-brand-text/70 hover:text-brand-primary transition-colors"
        >
          {backText}
        </button>
      </nav>

      {/* Hero Header */}
      <section className="px-4 py-20 md:py-24 max-w-3xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading text-4xl md:text-6xl text-brand-text mb-6"
        >
          Payment & <span className="text-brand-primary italic">Support.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-brand-text/80 max-w-2xl mx-auto font-light leading-relaxed mb-10"
        >
          Need help verifying a transaction? Having trouble with PhonePe, GPay, or Paytm? Reach out to our team instantly via WhatsApp. We are here to help.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-brand-primary/5 border border-brand-primary/10 rounded-2xl p-4 flex items-center justify-center gap-3 text-sm text-brand-text/80 max-w-md mx-auto"
        >
          <AlertCircle className="w-5 h-5 text-brand-primary shrink-0" />
          <p>Please keep your <strong>12-digit UTR Number</strong> ready before contacting support.</p>
        </motion.div>
      </section>

      {/* Contact Cards */}
      <section className="px-4 pb-32 max-w-3xl mx-auto">
        <div className="flex flex-col gap-6 md:gap-8">
          
          {/* WhatsApp Card */}
          <motion.a 
            href="https://wa.me/918121648629?text=Hi%20Vedika%20Team!%20I%20need%20help%20with%20my%20payment%20verification."
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:p-8 bg-brand-primary/10 hover:bg-brand-primary/20 border border-brand-primary/20 rounded-3xl transition-all duration-300 backdrop-blur-md cursor-pointer"
          >
            <div className="flex items-center gap-6 mb-4 md:mb-0">
              <div className="p-4 bg-white/50 rounded-2xl text-brand-primary group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <MessageCircle className="w-8 h-8" />
              </div>
              <div>
                <p className="text-xs md:text-sm font-bold tracking-widest uppercase text-brand-primary/70 mb-1">Instant Payment Support</p>
                <h3 className="font-heading text-2xl md:text-3xl text-brand-text">Chat on WhatsApp</h3>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full border border-brand-primary/30 flex items-center justify-center group-hover:border-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors self-end md:self-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
          </motion.a>

          {/* Email Card */}
          <motion.a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=vedika.support@gmail.com&su=Payment%20Support%20Request&body=Hi%20Vedika%20Team%2C%0A%0AI%20need%20help%20with%20my%20payment%20verification.%0A%0AMy%20WhatsApp%20Number%3A%20%0A12-Digit%20UTR%3A%20%0A%0APlease%20let%20me%20know%20when%20it%20will%20be%20approved.%0A%0AThanks!"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:p-8 bg-brand-text/5 hover:bg-brand-text/10 border border-brand-text/10 rounded-3xl transition-all duration-300 backdrop-blur-md cursor-pointer"
          >
            <div className="flex items-center gap-6 mb-4 md:mb-0">
              <div className="p-4 bg-brand-text/10 rounded-2xl text-brand-text group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8" />
              </div>
              <div>
                <p className="text-xs md:text-sm font-bold tracking-widest uppercase text-brand-text/50 mb-1">Email Support</p>
                <h3 className="font-heading text-xl md:text-2xl text-brand-text break-all">vedika.support@gmail.com</h3>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full border border-brand-text/10 flex items-center justify-center group-hover:border-brand-text group-hover:text-brand-text transition-colors self-end md:self-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
          </motion.a>

        </div>
      </section>

    </main>
  );
}
