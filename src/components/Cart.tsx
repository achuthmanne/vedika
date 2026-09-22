"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { supabase } from "@/lib/supabase";

interface Order {
  id: string;
  plan_name: string;
  amount: string;
  status: string;
  created_at: string;
  utr_number: string;
  rejection_reason?: string;
}

export default function Cart({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      const fetchOrders = async () => {
        setLoading(true);
        
        // Artificial delay so the user can enjoy the custom cart animation!
        await new Promise(resolve => setTimeout(resolve, 2000));

        const { data, error } = await supabase
          .from('orders')
          .select('*')
          .order('created_at', { ascending: false });
          
        if (data && !error) {
          setOrders(data);
        }
        setLoading(false);
      };
      
      fetchOrders();
    }
  }, [isOpen]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-text/20 backdrop-blur-sm z-[100]"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-brand-background shadow-2xl z-[101] flex flex-col font-body"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-brand-text/5">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-brand-primary" />
                <h2 className="font-heading text-xl text-brand-text">Your Purchases</h2>
              </div>
              <button 
                onClick={onClose}
                className="p-2 bg-brand-text/5 rounded-full hover:bg-brand-text/10 transition-colors text-brand-text/50 hover:text-brand-text"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
                {loading ? (
                  <div className="flex flex-col items-center justify-center h-full w-full px-8 text-center">
                    <div className="relative w-full max-w-[200px] h-16 mb-4">
                      {/* The Road / Loading Bar */}
                      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-brand-text/10 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-brand-primary"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                        />
                      </div>
                      
                      {/* The Cart Vehicle driving on the road */}
                      {/* x: -85% ensures the loading bar tip perfectly touches the front tire inside the image padding */}
                      <motion.div
                        className="absolute bottom-1.5 w-12 h-12"
                        initial={{ left: "0%" }}
                        animate={{ left: "100%" }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                        style={{ x: "-85%" }}
                      >
                        <Image src="/cart.png" alt="Loading Cart" fill className="object-contain" />
                      </motion.div>
                    </div>
                    <p className="text-brand-text/50 font-medium text-sm uppercase tracking-widest">Getting your orders...</p>
                  </div>
                ) : orders.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <div className="relative w-24 h-24 mb-6 opacity-40 grayscale">
                      <Image src="/cart.png" alt="Empty Cart" fill className="object-contain" />
                    </div>
                    <p className="text-brand-text/70 font-medium text-lg mb-2">Your cart feels a bit empty.</p>
                    <p className="text-brand-text/50 text-sm mb-8 px-4">Looks like you haven't made any recent purchases yet.</p>
                    <Link 
                      href="/templates"
                      onClick={onClose}
                      className="px-8 py-3 bg-brand-text text-brand-background rounded-full text-xs font-bold uppercase tracking-[0.15em] hover:bg-brand-primary transition-colors"
                    >
                      Explore Templates
                    </Link>
                  </div>
                ) : (
                <div className="flex flex-col gap-4">
                  {orders.map((order, i) => (
                    <div key={i} className="bg-brand-text/5 border border-brand-text/10 rounded-2xl p-5 relative overflow-hidden group">
                      
                      {/* Status indicator */}
                      <div className="absolute top-5 right-5">
                        {order.status === 'PENDING' ? (
                          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-amber-500/10 text-amber-600 rounded-full text-[10px] font-bold tracking-wider uppercase border border-amber-500/20">
                            <Clock className="w-3 h-3" /> Review
                          </div>
                        ) : order.status === 'APPROVED' ? (
                          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-green-500/10 text-green-600 rounded-full text-[10px] font-bold tracking-wider uppercase border border-green-500/20">
                            <CheckCircle2 className="w-3 h-3" /> Live
                          </div>
                        ) : (
                          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-red-500/10 text-red-600 rounded-full text-[10px] font-bold tracking-wider uppercase border border-red-500/20">
                            <AlertCircle className="w-3 h-3" /> Error
                          </div>
                        )}
                      </div>

                      <h3 className="font-heading text-xl text-brand-text mb-1 pr-20">{order.plan_name}</h3>
                      <p className="text-brand-text/50 text-xs font-medium mb-4">
                        {new Date(order.created_at).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </p>
                      
                      <div className="flex items-end justify-between mt-2 pt-4 border-t border-brand-text/5">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-brand-text/40 mb-1">Amount</p>
                          <p className="text-brand-text font-medium text-sm">₹{order.amount}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-brand-text/40 mb-1">UTR</p>
                          <p className="text-brand-text font-mono text-xs">{order.utr_number}</p>
                        </div>
                      </div>

                      {(order.status === 'REJECTED' || order.status === 'DISAPPROVED') && order.rejection_reason && (
                        <div className="mt-4 p-4 bg-brand-text/5 border-l-2 border-l-red-500 rounded-r-xl">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-brand-text/50 mb-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3 text-red-500" />
                            Reason for Rejection
                          </p>
                          <p className="text-brand-text text-sm font-medium mb-4 pl-4 border-l border-brand-text/10 ml-1.5 py-1">{order.rejection_reason}</p>
                          <Link 
                            href={`/checkout?plan=${encodeURIComponent(order.plan_name)}&amount=${order.amount}`}
                            onClick={onClose}
                            className="inline-block px-4 py-3 bg-brand-text text-brand-background rounded-xl text-xs font-bold transition-colors hover:bg-brand-text/90 w-full text-center uppercase tracking-wider"
                          >
                            Retry Payment
                          </Link>
                        </div>
                      )}

                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Footer */}
            {orders.length > 0 && (
              <div className="p-6 border-t border-brand-text/5 bg-brand-background">
                <Link 
                  href="/payment-support"
                  onClick={onClose}
                  className="w-full flex items-center justify-center gap-2 py-4 bg-brand-text/5 text-brand-text rounded-full font-bold text-xs uppercase tracking-[0.15em] hover:bg-brand-text/10 transition-colors"
                >
                  <AlertCircle className="w-4 h-4" /> Need Help?
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
