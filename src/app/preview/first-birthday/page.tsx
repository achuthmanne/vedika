import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function BirthdayPreview() {
  return (
    <div className="min-h-screen bg-brand-background text-brand-text font-body flex flex-col items-center justify-center text-center p-4">
      <Link href="/templates" className="absolute top-8 left-8 flex items-center gap-2 text-brand-text/60 hover:text-brand-text transition-colors text-sm font-bold tracking-widest uppercase">
        <ArrowLeft className="w-4 h-4" /> Back
      </Link>
      
      <Sparkles className="w-8 h-8 text-brand-primary mb-6" />
      <h1 className="font-heading text-4xl md:text-5xl mb-4">First Milestone</h1>
      <p className="text-brand-text/70 max-w-md mx-auto mb-8 leading-relaxed">
        This template is currently being meticulously crafted by our design team. It will feature playful animations and beautiful memory timelines.
      </p>
      
      <div className="px-6 py-2 bg-brand-text/5 rounded-full text-xs font-bold uppercase tracking-widest text-brand-text/50">
        Coming Soon
      </div>
    </div>
  );
}
