import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import { toppings } from "../data";
import { ArrowLeft, Share2, Check } from "lucide-react";

export default function Detail() {
  const { id } = useParams();
  const topping = toppings.find(t => t.id === id);
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!topping) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-[#F5F2ED] relative flex flex-col">
      <main className="flex-1 max-w-[1200px] w-full mx-auto px-6 lg:px-16 py-12 md:py-24 relative z-10 flex flex-col justify-center">
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:absolute lg:top-12 lg:left-12 flex items-center gap-2 mb-12 lg:mb-0"
        >
          <Link 
            to="/" 
            className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/50 hover:text-[#1A1A1A] transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Collection
          </Link>
        </motion.div>

        <div className="absolute top-12 right-12 hidden md:flex items-center gap-3">
          <span className="text-[9px] uppercase tracking-widest opacity-40 font-bold">{copied ? 'Link Copied!' : 'Share this flavor'}</span>
          <div className="w-8 h-8 border border-[#1A1A1A]/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-colors" onClick={handleShare}>
            {copied ? <Check size={12} className="opacity-70 text-emerald-600" /> : <Share2 size={12} className="opacity-70" />}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <span className="text-[#A1824A] font-serif italic text-xl mb-2 block">NO. {topping.number}</span>
          <h1 className="text-6xl md:text-7xl lg:text-[100px] font-serif leading-[0.9] tracking-tighter mb-4 text-[#1A1A1A]">
            {topping.nameEn}
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-12 text-[#1A1A1A]/60">
            {topping.nameCn}
          </h2>

          <div className="flex flex-wrap gap-8 md:gap-12 mb-12">
             {topping.tags.map((tag, idx) => (
                <div key={tag}>
                  <span className="block text-[10px] uppercase tracking-widest opacity-40 mb-1 font-bold">Tag 0{idx + 1}</span>
                  <span className="text-sm font-medium">{tag}</span>
                </div>
             ))}
          </div>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-24 mb-16">
            <div>
              <p className="text-xl md:text-2xl leading-relaxed text-[#1A1A1A] mb-8 font-serif italic">
                "{topping.heroLineEn}"
              </p>
              <p className="text-sm leading-relaxed text-[#1A1A1A]/60 mb-6 whitespace-pre-wrap">
                {topping.storyEn}
              </p>
            </div>
            
            <div className="space-y-8">
               <div className="bg-white/50 border border-[#1A1A1A]/10 p-6 md:p-8">
                  <span className="text-[10px] uppercase tracking-widest text-[#A1824A] font-bold block mb-4">中文解读 (Story)</span>
                  <p className="text-sm leading-relaxed text-[#1A1A1A]/70 mb-6 whitespace-pre-wrap">
                    {topping.storyCn}
                  </p>
               </div>
            </div>
          </div>
        </motion.div>
      </main>
      
      <footer className="h-12 border-t border-[#1A1A1A]/10 px-6 lg:px-16 flex items-center justify-between text-[9px] uppercase tracking-[0.2em] opacity-40 font-bold bg-[#FDFCFB] relative z-20">
        <span>© 2026 OneSip Topping Lab</span>
        <span className="hidden sm:inline">All ingredients are carefully selected</span>
        <span>onesip.nl/toppings</span>
      </footer>
    </div>
  );
}
