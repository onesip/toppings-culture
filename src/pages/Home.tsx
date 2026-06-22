import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { toppings } from "../data";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <main className="max-w-7xl mx-auto px-6 lg:px-12 py-12 md:py-20 flex flex-col">
      <div className="mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl lg:text-7xl font-serif leading-tight text-[#1A1A1A] mb-6"
        >
          Choose Your Texture, <br />
          <span className="italic text-[#A1824A]">Discover Chinese Tea.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm text-[#1A1A1A]/60 leading-relaxed max-w-sm"
        >
          For Dutch customers: clear at first glance, lovable at first sip.
          Explore our signature ingredients and understand the cultural bridge in every cup.
        </motion.p>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        {toppings.map((topping) => (
          <motion.div key={topping.id} variants={item}>
            <Link 
              to={`/topping/${topping.id}`}
              className="block group cursor-pointer border border-[#1A1A1A]/10 bg-white p-8 aspect-[4/3] flex flex-col justify-between hover:border-[#1A1A1A] transition-all duration-300"
            >
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-bold uppercase tracking-tighter text-[#1A1A1A]/50 group-hover:text-[#1A1A1A] transition-colors">{topping.number}</span>
                <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300" />
              </div>
              
              <div>
                <h2 className="text-4xl font-serif tracking-tight mb-2 text-[#1A1A1A]">
                  {topping.nameEn}
                </h2>
                <h3 className="text-[11px] font-bold uppercase tracking-widest mb-6 text-[#A1824A]">
                  {topping.nameCn}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {topping.tags.slice(0, 3).map(tag => (
                    <span 
                      key={tag} 
                      className="text-[9px] font-bold uppercase tracking-widest px-2 py-1 border border-[#1A1A1A]/10 text-[#1A1A1A]/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}
