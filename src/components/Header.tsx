import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="border-b border-[#1A1A1A]/10 bg-[#FDFCFB]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-end justify-between">
        <Link to="/" className="flex flex-col">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#A1824A]">OneSip</span>
          <span className="text-3xl font-serif italic leading-none mt-1 text-[#1A1A1A]">Toppings & Tea Culture.</span>
        </Link>
        <div className="hidden sm:flex text-[11px] uppercase tracking-widest font-medium mb-1 text-[#1A1A1A]">
            <Link to="/" className="border-b border-[#1A1A1A]">Collection</Link>
        </div>
      </div>
    </header>
  );
}
