"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { CheckCircle2, XCircle, Clock, ArrowLeft, RefreshCw } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import AuthModal from "@/components/AuthModal";

export default function AdminPanel() {
  const router = useRouter();
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState<string | null>(null);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  
  // Reject Modal States
  const [rejectModalOpen, setRejectModalOpen] = useState(false);
  const [rejectOrderId, setRejectOrderId] = useState<string | null>(null);
  const [rejectReason, setRejectReason] = useState("");
  const [isRejecting, setIsRejecting] = useState(false);

  // Basic Auth Check - in a real app, verify if the user has an 'admin' role
  useEffect(() => {
    checkAuth();
    
    // Listen for auth changes (like when they log in via the modal)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setAuthModalOpen(false);
        setIsAuthorized(true);
        fetchOrders();
      }
    });
    
    return () => subscription.unsubscribe();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session?.user) {
      setAuthModalOpen(true);
      setLoading(false);
    } else {
      setIsAuthorized(true);
      fetchOrders();
    }
  };

  const handleCloseAuth = () => {
    setAuthModalOpen(false);
    if (!isAuthorized) {
      router.push("/");
    }
  };

  const fetchOrders = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error("Error fetching orders:", error);
      alert("Failed to load orders");
    } else {
      setOrders(data || []);
    }
    setLoading(false);
  };

  const updateOrderStatus = async (orderId: string, newStatus: string) => {
    setIsUpdating(orderId);
    const order = orders.find(o => o.id === orderId);
    
    const updateData: any = { status: newStatus };
    // Clear rejection reason if moving away from REJECTED
    if (newStatus !== 'REJECTED') {
      updateData.rejection_reason = null;
    }
    
    const { error } = await supabase
      .from('orders')
      .update(updateData)
      .eq('id', orderId);

    if (error) {
      console.error("Error updating order:", error);
      alert("Failed to update status");
    } else {
      // Update local state
      setOrders(orders.map(o => o.id === orderId ? { ...o, status: newStatus, rejection_reason: updateData.rejection_reason } : o));
      
      // Send Email Notification if Approved
      if (newStatus === 'APPROVED' && order?.email) {
        try {
          await fetch('/api/notify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: order.email,
              plan_name: order.plan_name,
              status: 'APPROVED'
            })
          });
        } catch (err) {
          console.error("Failed to send approval email", err);
        }
      }
    }
    setIsUpdating(null);
  };

  const openRejectModal = (orderId: string) => {
    setRejectOrderId(orderId);
    setRejectReason("");
    setRejectModalOpen(true);
  };

  const handleRejectSubmit = async () => {
    if (!rejectOrderId || !rejectReason.trim()) return;
    
    setIsRejecting(true);
    const order = orders.find(o => o.id === rejectOrderId);
    
    const { error } = await supabase
      .from('orders')
      .update({ 
        status: 'REJECTED',
        rejection_reason: rejectReason.trim()
      })
      .eq('id', rejectOrderId);

    if (error) {
      console.error("Error rejecting order:", error);
      alert("Failed to reject order");
    } else {
      setOrders(orders.map(o => o.id === rejectOrderId ? { ...o, status: 'REJECTED', rejection_reason: rejectReason.trim() } : o));
      setRejectModalOpen(false);
      
      // Send Email Notification for Rejection
      if (order?.email) {
        try {
          await fetch('/api/notify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: order.email,
              plan_name: order.plan_name,
              status: 'REJECTED',
              rejection_reason: rejectReason.trim()
            })
          });
        } catch (err) {
          console.error("Failed to send rejection email", err);
        }
      }
    }
    setIsRejecting(false);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'PENDING':
        return <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 text-amber-600 rounded-full text-xs font-bold"><Clock className="w-3 h-3" /> PENDING</span>;
      case 'APPROVED':
        return <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-500/10 text-green-600 rounded-full text-xs font-bold"><CheckCircle2 className="w-3 h-3" /> APPROVED</span>;
      case 'DISAPPROVED':
        return <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-500/10 text-red-600 rounded-full text-xs font-bold"><XCircle className="w-3 h-3" /> DISAPPROVED</span>;
      default:
        return <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-500/10 text-gray-600 rounded-full text-xs font-bold">{status}</span>;
    }
  };

  return (
    <div className="min-h-screen bg-brand-background font-body text-brand-text">
      {/* Admin Navbar */}
      <nav className="w-full px-6 py-4 flex items-center justify-between border-b border-brand-text/5 bg-white relative">
        <div className="flex items-center gap-4">
          <Link href="/" className="p-2 hover:bg-brand-text/5 rounded-full transition-colors">
            <ArrowLeft className="w-5 h-5 text-brand-text/70" />
          </Link>
          <div className="relative w-[160px] h-[45px]">
            <Image src="/logo.png" alt="VEDIKA Logo" fill className="object-contain" priority />
          </div>
        </div>
        
        {/* Centered Admin Panel Badge */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
          <span className="px-4 py-1.5 bg-brand-text text-white text-[11px] font-bold uppercase tracking-widest rounded-full shadow-sm">
            Admin Panel
          </span>
        </div>
        
        <button 
          onClick={fetchOrders}
          className="flex items-center gap-2 px-4 py-2 bg-brand-text/5 hover:bg-brand-text/10 rounded-full text-sm font-bold transition-colors"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          Refresh
        </button>
      </nav>

      <main className="max-w-7xl mx-auto p-6 md:p-12">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="font-heading text-3xl text-brand-text mb-2">Order Management</h1>
            <p className="text-brand-text/60">Verify UTRs and approve user template purchases.</p>
          </div>
          
          <div className="flex gap-4">
            <div className="bg-white px-6 py-4 rounded-2xl border border-brand-text/5 shadow-sm text-center">
              <p className="text-2xl font-heading text-brand-text">{orders.length}</p>
              <p className="text-xs font-bold uppercase tracking-widest text-brand-text/50">Total Orders</p>
            </div>
            <div className="bg-white px-6 py-4 rounded-2xl border border-brand-text/5 shadow-sm text-center">
              <p className="text-2xl font-heading text-amber-600">{orders.filter(o => o.status === 'PENDING').length}</p>
              <p className="text-xs font-bold uppercase tracking-widest text-brand-text/50">Pending</p>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="w-full h-64 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-brand-primary border-t-transparent rounded-full animate-spin" />
          </div>
        ) : orders.length === 0 ? (
          <div className="w-full bg-white rounded-[2rem] border border-brand-text/10 p-16 text-center shadow-sm">
            <p className="text-brand-text/50 text-lg">No orders found in the database.</p>
          </div>
        ) : (
          <div className="w-full bg-white rounded-[2rem] border border-brand-text/10 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-brand-text/5 bg-brand-text/5">
                    <th className="p-5 text-xs font-bold uppercase tracking-widest text-brand-text/60">Date</th>
                    <th className="p-5 text-xs font-bold uppercase tracking-widest text-brand-text/60">Plan</th>
                    <th className="p-5 text-xs font-bold uppercase tracking-widest text-brand-text/60">Amount</th>
                    <th className="p-5 text-xs font-bold uppercase tracking-widest text-brand-text/60">WhatsApp</th>
                    <th className="p-5 text-xs font-bold uppercase tracking-widest text-brand-text/60">UTR Number</th>
                    <th className="p-5 text-xs font-bold uppercase tracking-widest text-brand-text/60">Status</th>
                    <th className="p-5 text-xs font-bold uppercase tracking-widest text-brand-text/60 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-text/5">
                  {orders.map((order) => (
                    <tr key={order.id} className="hover:bg-brand-text/[0.02] transition-colors">
                      <td className="p-5 text-sm font-medium text-brand-text/80 whitespace-nowrap">
                        {new Date(order.created_at).toLocaleDateString('en-IN', {
                          day: 'numeric', month: 'short', year: 'numeric',
                          hour: '2-digit', minute: '2-digit'
                        })}
                      </td>
                      <td className="p-5 text-sm font-bold text-brand-text whitespace-nowrap">
                        {order.plan_name}
                      </td>
                      <td className="p-5 text-sm font-bold text-brand-primary whitespace-nowrap">
                        ₹{order.amount}
                      </td>
                      <td className="p-5 text-sm text-brand-text/70 whitespace-nowrap">
                        {order.whatsapp_number}
                      </td>
                      <td className="p-5">
                        <span className="px-3 py-1.5 bg-brand-text/5 border border-brand-text/10 rounded-md font-mono text-sm tracking-wider">
                          {order.utr_number}
                        </span>
                      </td>
                      <td className="p-5 whitespace-nowrap">
                        {getStatusBadge(order.status)}
                      </td>
                      <td className="p-5 text-right whitespace-nowrap">
                        <div className="flex justify-end gap-2">
                          {order.status === 'PENDING' && (
                            <>
                              <button
                                disabled={isUpdating === order.id}
                                onClick={() => updateOrderStatus(order.id, 'APPROVED')}
                                className="px-4 py-2 bg-green-500 text-white rounded-full text-xs font-bold hover:bg-green-600 transition-colors disabled:opacity-50"
                              >
                                {isUpdating === order.id ? '...' : 'APPROVE'}
                              </button>
                              <button
                                disabled={isUpdating === order.id}
                                onClick={() => openRejectModal(order.id)}
                                className="px-4 py-2 bg-red-500 text-white rounded-full text-xs font-bold hover:bg-red-600 transition-colors disabled:opacity-50"
                              >
                                REJECT
                              </button>
                            </>
                          )}
                          
                          {/* If it's already processed, allow reverting back to PENDING */}
                          {order.status !== 'PENDING' && (
                            <button
                              disabled={isUpdating === order.id}
                              onClick={() => updateOrderStatus(order.id, 'PENDING')}
                              className="px-4 py-2 bg-brand-text/10 text-brand-text rounded-full text-xs font-bold hover:bg-brand-text/20 transition-colors disabled:opacity-50"
                            >
                              UNDO
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
      
      {/* Reject Reason Modal */}
      {rejectModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-text/40 backdrop-blur-sm">
          <div className="bg-white rounded-[2rem] w-full max-w-md p-8 shadow-2xl relative animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => setRejectModalOpen(false)}
              className="absolute top-6 right-6 p-2 text-brand-text/50 hover:bg-brand-text/5 rounded-full transition-colors"
            >
              <XCircle className="w-5 h-5" />
            </button>
            
            <h2 className="font-heading text-2xl text-brand-text mb-2">Reject Order</h2>
            <p className="text-brand-text/60 text-sm mb-6">Please select or enter a reason for rejecting this payment. This will be shown to the user.</p>
            
            <div className="flex flex-col gap-3 mb-6">
              {[
                "Payment not received",
                "Invalid UTR / Transaction ID",
                "Partial amount received",
              ].map(reason => (
                <button
                  key={reason}
                  onClick={() => setRejectReason(reason)}
                  className={`text-left px-4 py-3 rounded-xl border text-sm transition-all ${
                    rejectReason === reason 
                      ? 'border-red-500 bg-red-50 text-red-700 font-bold' 
                      : 'border-brand-text/10 text-brand-text/70 hover:bg-brand-text/5'
                  }`}
                >
                  {reason}
                </button>
              ))}
              
              <div className="mt-2">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-text/60 mb-2">Or type custom reason</label>
                <input
                  type="text"
                  value={!["Payment not received", "Invalid UTR / Transaction ID", "Partial amount received"].includes(rejectReason) ? rejectReason : ""}
                  onChange={(e) => setRejectReason(e.target.value)}
                  placeholder="e.g., We couldn't verify your payment..."
                  className="w-full bg-brand-background border border-brand-text/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={() => setRejectModalOpen(false)}
                className="flex-1 py-3.5 bg-brand-text/5 text-brand-text rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-brand-text/10 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleRejectSubmit}
                disabled={!rejectReason.trim() || isRejecting}
                className="flex-1 py-3.5 bg-red-500 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-red-600 transition-colors disabled:opacity-50 flex justify-center items-center gap-2"
              >
                {isRejecting ? "Rejecting..." : "Confirm Reject"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Global Auth Modal */}
      <AuthModal isOpen={authModalOpen} onClose={handleCloseAuth} />
    </div>
  );
}
