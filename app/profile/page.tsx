import { getAllCigarettes } from "@/lib/data";
import Link from "next/link";

export default async function ProfilePage() {
  const cigarettes = await getAllCigarettes();

  return (
    <div className="max-w-6xl mx-auto pt-10 px-6">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-20 border-b border-white/10 pb-16">
        <div className="relative">
          <div className="absolute inset-0 bg-[#FFB800] rounded-full blur-2xl opacity-20 animate-pulse"></div>
          <div className="relative w-32 h-32 md:w-40 md:h-40 bg-black rounded-full border border-white/10 flex items-center justify-center shadow-2xl z-10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FFB800]/20 to-transparent"></div>
            <span className="text-5xl md:text-6xl font-black text-white mix-blend-overlay">AF</span>
          </div>
        </div>
        
        <div className="flex flex-col items-center md:items-start flex-1 w-full">
          <div className="mb-8 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase mb-3 leading-none">
              Aficionado
            </h1>
            <p className="text-zinc-500 uppercase text-[11px] tracking-[0.4em] font-medium flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500/80"></span>
              Active Member Since '26
            </p>
          </div>
          
          <div className="flex gap-8 md:gap-16 w-full md:w-auto bg-[#080808] border border-white/5 p-8 rounded-3xl justify-center md:justify-start">
            <div className="text-center md:text-left">
              <span className="block text-4xl font-mono text-white mb-2 font-light">{cigarettes.length}</span>
              <span className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-bold">Blends Logged</span>
            </div>
            <div className="w-px bg-white/10"></div>
            <div className="text-center md:text-left">
              <span className="block text-4xl font-mono text-white mb-2 font-light">0</span>
              <span className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-bold">Total Reviews</span>
            </div>
            <div className="w-px bg-white/10 hidden sm:block"></div>
            <div className="text-center md:text-left hidden sm:block">
              <span className="block text-4xl font-mono text-[#FFB800] mb-2 font-light">--</span>
              <span className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-bold">Avg Rating</span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-10">
        <div className="flex justify-between items-end border-b border-white/10 pb-6">
          <h3 className="text-[11px] uppercase tracking-[0.3em] text-white font-bold">Humidor Archive</h3>
          <span className="text-[10px] text-zinc-500 uppercase tracking-widest">{cigarettes.length} Entries</span>
        </div>
        
        {cigarettes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cigarettes.map((c) => (
              <Link
                key={c.id}
                href={`/cigarette/${c.id}`}
                className="group flex flex-col bg-[#080808] border border-white/5 hover:border-[#FFB800]/40 p-6 rounded-2xl transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#FFB800] transition-colors leading-tight uppercase tracking-tight">
                    {c.brand_name} <br />
                    <span className="text-zinc-500 font-medium text-sm tracking-normal">{c.variant}</span>
                  </h3>
                </div>
                <div className="flex gap-2 items-center mt-auto">
                  <span className="bg-white/5 px-2.5 py-1 rounded-sm text-[9px] text-zinc-400 font-bold uppercase tracking-[0.1em]">
                    {c.blend_type || 'Unknown'}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-[#080808] border border-white/5 rounded-3xl p-16 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6">
              <span className="text-2xl opacity-30">📭</span>
            </div>
            <p className="text-zinc-400 text-sm uppercase tracking-[0.2em] font-medium mb-2">No activity recorded</p>
            <p className="text-zinc-600 text-[11px] uppercase tracking-widest">Your archive is currently empty.</p>
          </div>
        )}
      </div>
    </div>
  );
}
