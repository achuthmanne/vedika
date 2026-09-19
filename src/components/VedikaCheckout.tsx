import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ShieldCheck, Smartphone, Info } from "lucide-react";
import Image from "next/image";

interface VedikaCheckoutProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
  qrImage: string;
  upiId: string;
  planName: string;
  onSuccess: (utr: string, phone: string) => void;
}

export default function VedikaCheckout({
  isOpen,
  onClose,
  amount,
  qrImage,
  upiId,
  planName,
  onSuccess,
}: VedikaCheckoutProps) {
  const [utr, setUtr] = useState("");
  const [phone, setPhone] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!utr || !phone) return;
    
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onSuccess(utr, phone);
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6 font-body">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#000000] bg-opacity-70 backdrop-blur-sm"
            onClick={() => !isProcessing && onClose()}
          />
          
          {/* Main Checkout Card (Landscape/Wide Layout) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden border border-gray-200 h-auto md:h-[500px]"
          >
            {/* Close Button (Mobile) */}
            <button 
              onClick={() => !isProcessing && onClose()}
              className="md:hidden absolute top-4 right-4 z-20 p-2 text-gray-500 hover:text-gray-900 bg-white/80 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            {/* LEFT SIDE - Order Details (Dark Theme like Razorpay Left Panel) */}
            <div className="w-full md:w-[40%] bg-[#1c2434] text-white p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-12">
                  <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center text-[#1c2434] font-bold text-xl">
                    V
                  </div>
                  <div>
                    <h2 className="font-bold text-lg leading-tight">Vedika</h2>
                    <p className="text-gray-400 text-xs">Platform Services</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Amount to pay</p>
                    <div className="flex items-end gap-1">
                      <span className="text-2xl font-medium text-gray-300">₹</span>
                      <span className="text-4xl font-bold">{amount.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-white/10">
                    <p className="text-gray-400 text-sm mb-2">Order Details</p>
                    <p className="font-medium text-white">{planName}</p>
                    <p className="text-gray-400 text-sm mt-1">Lifetime Access & Hosting</p>
                  </div>
                </div>
              </div>

              <div className="hidden md:flex items-center gap-2 text-gray-400 text-xs mt-12">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Secured by Vedika 128-bit Encryption</span>
              </div>
            </div>

            {/* RIGHT SIDE - Payment Action (White Theme) */}
            <div className="w-full md:w-[60%] bg-white p-8 relative flex flex-col overflow-y-auto">
              {/* Close Button (Desktop) */}
              <button 
                onClick={() => !isProcessing && onClose()}
                className="hidden md:block absolute top-6 right-6 text-gray-400 hover:text-gray-800 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Complete your payment</h3>
                <p className="text-gray-500 text-sm">Scan the QR code with any UPI app</p>
              </div>

              <div className="flex-1 flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                
                {/* QR Code Section */}
                <div className="w-full md:w-1/2 flex flex-col items-center">
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-sm w-full flex flex-col items-center">
                    <div className="relative w-40 h-40 mb-3 mix-blend-multiply">
                      <Image 
                        src={qrImage} 
                        alt="Payment QR" 
                        fill 
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                    <div className="bg-white px-4 py-2 rounded-lg border border-gray-200 w-full text-center">
                      <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">UPI ID</p>
                      <p className="text-sm font-semibold text-gray-800 select-all">{upiId}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 mt-4 items-center opacity-60">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                        <Smartphone className="w-4 h-4 text-gray-600" />
                      </div>
                      <span className="text-[9px] font-bold">GPay</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                        <Smartphone className="w-4 h-4 text-gray-600" />
                      </div>
                      <span className="text-[9px] font-bold">PhonePe</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                        <Smartphone className="w-4 h-4 text-gray-600" />
                      </div>
                      <span className="text-[9px] font-bold">Paytm</span>
                    </div>
                  </div>
                </div>

                {/* Form Section */}
                <form onSubmit={handleSubmit} className="w-full md:w-1/2 flex flex-col h-full justify-between gap-4 md:gap-6">
                  <div className="space-y-4">
                    <div className="bg-blue-50 text-blue-800 text-xs p-3 rounded-lg flex items-start gap-2 border border-blue-100">
                      <Info className="w-4 h-4 shrink-0 mt-0.5" />
                      <p>After scanning and paying ₹{amount}, please enter your transaction details below.</p>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">Phone Number</label>
                      <input 
                        type="tel" 
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="10-digit mobile number" 
                        className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">12-Digit UTR Number</label>
                      <input 
                        type="text" 
                        required
                        value={utr}
                        onChange={(e) => setUtr(e.target.value)}
                        placeholder="e.g. 321456789012" 
                        className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-400 font-mono tracking-wider"
                      />
                    </div>
                  </div>

                  <button 
                    type="submit"
                    disabled={isProcessing || !phone || !utr}
                    className="w-full mt-4 md:mt-0 py-3.5 bg-[#3366ff] text-white rounded-lg font-semibold text-sm hover:bg-[#2952cc] transition-all flex items-center justify-center shadow-lg shadow-blue-500/20 disabled:opacity-50 disabled:shadow-none"
                  >
                    {isProcessing ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Verifying Payment...
                      </div>
                    ) : (
                      "Confirm Payment"
                    )}
                  </button>
                </form>
                
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
