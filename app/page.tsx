import { getAllCigarettes } from "@/lib/data";
import Link from "next/link";

export default async function Home() {
  const cigarettes = await getAllCigarettes();

  return (
    <div className="max-w-6xl mx-auto pt-10 px-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 border-b border-white/10 pb-8 gap-6">
        <div>
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter uppercase mb-2">
            Humidor
          </h2>
          <p className="text-zinc-500 uppercase text-[11px] tracking-[0.3em] font-medium">
            Your Personal Collection
          </p>
        </div>
        <Link
          href="/add"
          className="group flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] text-[#FFB800] hover:text-black uppercase transition-all duration-300 px-6 py-3 border border-[#FFB800]/30 hover:border-[#FFB800] rounded-full bg-[#FFB800]/5 hover:bg-[#FFB800]"
        >
          <span>+ Add New Blend</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cigarettes.map((c) => (
          <Link
            key={c.id}
            href={`/cigarette/${c.id}`}
            className="group relative flex flex-col bg-[#080808] border border-white/5 hover:border-[#FFB800]/40 p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFB800]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="flex justify-between items-start mb-12 relative z-10">
              <h3 className="text-2xl font-black text-white group-hover:text-[#FFB800] transition-colors leading-tight uppercase tracking-tight">
                {c.brand_name} <br />
                <span className="text-zinc-500 font-medium text-lg tracking-normal">{c.variant}</span>
              </h3>
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#FFB800]/50 group-hover:bg-[#FFB800]/10 transition-colors">
                <span className="text-zinc-400 group-hover:text-[#FFB800] text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">↗</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 items-center mt-auto relative z-10">
              <span className="bg-white/5 px-3 py-1.5 rounded-full text-[10px] text-zinc-300 font-bold uppercase tracking-[0.2em] border border-white/5 group-hover:border-[#FFB800]/20 transition-colors">
                {c.blend_type || 'Unknown'}
              </span>
              <span className="text-zinc-500 text-[10px] uppercase tracking-[0.2em] border border-white/5 px-3 py-1.5 rounded-full group-hover:text-zinc-400 transition-colors">
                {c.origin || 'Unknown'}
              </span>
            </div>
          </Link>
        ))}
        {cigarettes.length === 0 && (
          <div className="col-span-full py-20 text-center border border-dashed border-white/10 rounded-3xl flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6">
              <span className="text-2xl opacity-50">💨</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-widest text-[14px]">Empty Humidor</h3>
            <p className="text-zinc-500 text-[11px] uppercase tracking-[0.2em] mb-8">Begin your cataloging journey.</p>
            <Link
              href="/add"
              className="text-[10px] font-bold tracking-[0.2em] text-black uppercase transition-all duration-300 px-8 py-4 rounded-full bg-[#FFB800] hover:bg-white hover:scale-105 shadow-[0_0_20px_rgba(255,184,0,0.2)]"
            >
              Add First Blend
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
