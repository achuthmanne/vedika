"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft, ShieldCheck, Smartphone, Info, CheckCircle2, Copy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";
import { User } from "@supabase/supabase-js";

function CheckoutContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const amount = searchParams.get("amount") || "1499";
  const plan = searchParams.get("plan") || "Vedika Premium Template";
  const upiId = "8121648629@ptyes";
  
  const [utr, setUtr] = useState("");
  const [phone, setPhone] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [copied, setCopied] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session?.user) {
        alert("Please sign in to continue with your booking.");
        router.push("/?section=explore");
      } else {
        setUser(session.user);
      }
      setIsLoadingAuth(false);
    });
  }, [router]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(upiId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!utr || !phone || !user) return;
    
    setIsProcessing(true);
    
    try {
      const { error } = await supabase
        .from('orders')
        .insert([
          {
            user_id: user.id,
            whatsapp_number: phone,
            utr_number: utr,
            amount: amount,
            plan_name: plan,
            status: 'PENDING'
          }
        ]);

      if (error) {
        console.error("Supabase Error:", error.message, error.details, error.hint, error);
        alert(`Error: ${error.message || "Failed to save order"}. Please contact support.`);
      } else {
        router.push("/under-review");
      }
    } catch (err) {
      console.error("Unknown Error:", err);
      alert("Something went wrong. Please check your internet connection and try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  if (isLoadingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-background">
        <div className="w-8 h-8 border-2 border-brand-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen lg:h-screen bg-brand-background font-body flex flex-col lg:overflow-hidden overflow-x-hidden">
      {/* Navbar - Matched exact height of homepage */}
      <nav className="w-full px-4 sm:px-8 lg:px-12 py-4 flex items-center justify-between border-b border-brand-text/5 bg-brand-background flex-shrink-0">
        <div className="flex-shrink-0 flex items-center">
          <Link href="/" className="relative w-[170px] h-[54px]">
            <Image src="/logo.png" alt="VEDIKA Logo" fill className="object-contain" priority />
          </Link>
        </div>
        
        <button 
          onClick={() => router.push("/payment-cancelled")}
          className="text-xs md:text-sm font-bold tracking-widest uppercase text-brand-text/50 hover:text-brand-primary transition-colors flex items-center gap-2 group"
        >
          <span className="hidden sm:inline">Cancel Payment</span>
          <span className="sm:hidden">Cancel</span>
        </button>
      </nav>

      {/* Main Content - Scrolls on mobile, fixed on desktop */}
      <div className="flex-1 w-full max-w-7xl mx-auto px-6 sm:px-12 py-10 lg:py-0 flex flex-col lg:flex-row gap-10 lg:gap-16 items-center justify-center">
        
        {/* LEFT COLUMN - Order Summary */}
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <p className="font-body text-xs sm:text-sm text-brand-text/60 uppercase tracking-[0.2em] font-medium mb-4">Order Summary</p>
          <h1 className="font-heading text-5xl lg:text-6xl text-brand-text leading-tight mb-4">{plan}</h1>
          
          <p className="font-body text-base sm:text-lg text-brand-text/80 leading-relaxed mb-10 max-w-md">
            Includes Lifetime Access, Premium Hosting, and all Digital Darshan features for your special occasion.
          </p>
          
          <div className="pt-8 border-t border-brand-text/20 flex justify-between items-end mb-10">
            <span className="font-body text-xs text-brand-text/60 uppercase tracking-[0.2em] font-medium mb-2">Total Payable</span>
            <span className="font-heading text-6xl sm:text-7xl text-brand-primary">₹{amount}</span>
          </div>
          
          <div className="flex items-center gap-3 text-brand-text/60">
            <ShieldCheck className="w-5 h-5 text-brand-accent" />
            <span className="font-body text-[11px] font-bold uppercase tracking-[0.15em]">100% Secure Vedika Checkout</span>
          </div>
        </div>

        {/* RIGHT COLUMN - Payment Area */}
        <div className="w-full lg:w-7/12 flex flex-col border border-brand-text/10 rounded-3xl overflow-hidden lg:max-h-[85vh]">
          
          <div className="flex flex-col md:flex-row h-full">
            {/* QR Side */}
            <div className="w-full md:w-5/12 p-8 sm:p-10 bg-brand-text/5 border-b md:border-b-0 md:border-r border-brand-text/10 flex flex-col items-center justify-center">
              <h3 className="font-heading text-3xl text-brand-text mb-2 text-center">Scan & Pay</h3>
              <p className="font-body text-[13px] text-brand-text/70 text-center mb-8 leading-relaxed max-w-[250px]">
                We accept payments ONLY via <strong className="text-brand-text font-bold">GPay, PhonePe,</strong> or <strong className="text-brand-text font-bold">Paytm</strong>.
              </p>
              
              <div className="p-4 bg-white border border-brand-text/10 rounded-2xl mb-8">
                <div className="relative w-44 h-44 mix-blend-multiply">
                  <Image src="/vedika-qr.jpeg" alt="UPI QR Code" fill className="object-contain" unoptimized />
                </div>
              </div>
              
              <div 
                onClick={copyToClipboard}
                className="w-full flex items-center justify-between p-4 border border-brand-text/10 rounded-xl bg-white/50 group cursor-pointer hover:bg-brand-primary/5 hover:border-brand-primary/20 transition-all"
                title="Copy UPI ID"
              >
                <span className="font-body text-[10px] sm:text-xs text-brand-text/50 uppercase tracking-[0.2em] font-medium group-hover:text-brand-primary/70 transition-colors shrink-0 mr-2">UPI ID</span>
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  <span className="font-body text-xs sm:text-sm font-bold text-brand-text tracking-wide truncate">
                    {upiId}
                  </span>
                  {copied ? (
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                  ) : (
                    <Copy className="w-4 h-4 text-brand-text/40 group-hover:text-brand-primary transition-colors shrink-0" />
                  )}
                </div>
              </div>

              <div className="flex items-center justify-center gap-8 mt-8 w-full">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg" 
                  alt="Google Pay" 
                  className="h-4 sm:h-5 object-contain" 
                />
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/71/PhonePe_Logo.svg" 
                  alt="PhonePe" 
                  className="h-5 sm:h-6 object-contain" 
                />
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/2/24/Paytm_Logo_%28standalone%29.svg" 
                  alt="Paytm" 
                  className="h-3 sm:h-4 object-contain" 
                />
              </div>
            </div>

            {/* Form Side */}
            <div className="w-full md:w-7/12 p-8 sm:p-10 flex flex-col justify-center bg-transparent">
              
              <div className="mb-8 bg-brand-primary/5 border border-brand-primary/10 rounded-xl p-4 flex gap-3">
                <Info className="w-5 h-5 text-brand-primary shrink-0" />
                <p className="font-body text-[13px] text-brand-text/80 leading-relaxed">
                  Please complete your payment of <strong className="text-brand-primary">₹{amount}</strong> via GPay, PhonePe, or Paytm ONLY, and enter the 12-digit Transaction ID / UTR below to activate your digital Vedika.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-text/60 mb-2">
                    WhatsApp Number
                  </label>
                  <input 
                    type="tel" 
                    required
                    maxLength={10}
                    minLength={10}
                    pattern="[0-9]{10}"
                    value={phone}
                    onChange={(e) => {
                      const val = e.target.value.replace(/[^0-9]/g, '');
                      setPhone(val);
                    }}
                    placeholder="10-digit mobile number" 
                    className="w-full bg-brand-background border border-brand-text/20 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-brand-primary transition-colors placeholder:text-brand-text/30"
                  />
                </div>
                
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-text/60 mb-2">
                    12-Digit Transaction ID / UTR <span className="text-brand-primary">*</span>
                  </label>
                  <input 
                    type="text" 
                    required
                    maxLength={12}
                    minLength={12}
                    pattern="[0-9]{12}"
                    value={utr}
                    onChange={(e) => {
                      const val = e.target.value.replace(/[^0-9]/g, '');
                      setUtr(val);
                    }}
                    placeholder="e.g. 321456789012" 
                    className="w-full bg-brand-background border border-brand-text/20 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-brand-primary transition-colors placeholder:text-brand-text/30"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isProcessing || phone.length !== 10 || utr.length !== 12}
                  className="w-full py-4 mt-2 bg-brand-text text-brand-background rounded-xl font-body font-bold text-xs uppercase tracking-[0.15em] hover:bg-brand-primary transition-colors disabled:opacity-40"
                >
                  {isProcessing ? "Verifying..." : "Confirm Payment"}
                </button>
                
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-[12px] sm:text-[13px] font-semibold text-brand-text/90">
                  <Link href="/refund-policy?from=checkout" className="hover:text-brand-primary transition-colors">
                    Refund Policy
                  </Link>
                  <span className="hidden sm:inline text-brand-text/30">•</span>
                  <Link href="/payment-support?from=checkout" className="hover:text-brand-primary transition-colors">
                    Contact Support
                  </Link>
                </div>
              </form>
            </div>
            
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="h-screen bg-brand-background flex items-center justify-center">Loading...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}
