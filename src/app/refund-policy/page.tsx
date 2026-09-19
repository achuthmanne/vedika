"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ShieldAlert, RefreshCcw, HandCoins } from "lucide-react";

export default function RefundPolicyPage() {
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
      <section className="px-4 py-20 md:py-32 max-w-4xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading text-4xl md:text-6xl text-brand-text mb-6"
        >
          Payments & <span className="text-brand-primary italic">Refunds.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-brand-text/80 max-w-2xl mx-auto font-light leading-relaxed"
        >
          To ensure absolute security and premium quality, every transaction undergoes a strict manual review process. Please read our guidelines carefully.
        </motion.p>
      </section>

      {/* Content */}
      <section className="px-4 pb-32 max-w-4xl mx-auto">
        <div className="flex flex-col gap-12 md:gap-16">
          
          {/* Point 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row gap-6 md:gap-10 items-start"
          >
            <div className="p-4 bg-brand-primary/10 backdrop-blur-md rounded-2xl text-brand-primary">
              <ShieldAlert className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-heading text-2xl md:text-3xl mb-3 text-brand-text">Manual Verification.</h3>
              <p className="text-brand-text/70 leading-relaxed text-base md:text-lg">
                Every transaction on Vedika is <strong className="text-brand-text font-semibold">manually reviewed</strong> by our team for absolute security. Once you submit your 12-digit UTR, it goes into review. Your digital space will be approved and published live within <strong className="text-brand-primary font-semibold">2 to 24 hours</strong>. If the details provided are invalid, the booking will be disapproved.
              </p>
            </div>
          </motion.div>

          {/* Point 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row gap-6 md:gap-10 items-start"
          >
            <div className="p-4 bg-brand-accent/10 backdrop-blur-md rounded-2xl text-brand-accent">
              <HandCoins className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-heading text-2xl md:text-3xl mb-3 text-brand-text">Non-Refundable Policy.</h3>
              <p className="text-brand-text/70 leading-relaxed text-base md:text-lg">
                Because Vedika provides personalized, bespoke digital galleries requiring manual design labor and immediate server allocation, <strong className="text-brand-text font-semibold">all successful bookings are strictly non-refundable</strong> once the payment is verified and the digital space goes live.
              </p>
            </div>
          </motion.div>

          {/* Point 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row gap-6 md:gap-10 items-start"
          >
            <div className="p-4 bg-brand-primary/10 backdrop-blur-md rounded-2xl text-brand-primary">
              <RefreshCcw className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-heading text-2xl md:text-3xl mb-3 text-brand-text">Disapproved Bookings.</h3>
              <p className="text-brand-text/70 leading-relaxed text-base md:text-lg">
                If your booking is disapproved, it means the UTR details submitted were invalid, incomplete, or from an unsupported UPI app. If money was deducted from your bank account but the booking was rejected, please reach out to our WhatsApp support team immediately with your exact 12-digit UTR and payment screenshot for manual resolution.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Footer Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-20 pt-10 border-t border-brand-text/10 text-center flex flex-col items-center"
        >
          <p className="text-brand-text/50 text-sm font-medium mb-4">
            If you face any payment issues, do not hesitate to contact our team.
          </p>
          <Link 
            href="/payment-support?from=checkout"
            className="inline-flex py-3 px-8 bg-brand-primary/10 text-brand-primary rounded-full font-body font-bold text-xs uppercase tracking-[0.15em] hover:bg-brand-primary hover:text-white transition-all duration-300"
          >
            Contact Support
          </Link>
        </motion.div>
      </section>

    </main>
  );
}
