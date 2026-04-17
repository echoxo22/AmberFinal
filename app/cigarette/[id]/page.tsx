"use client";
import { useState } from "react";

const params = [
  "taste",
  "smoothness",
  "burn_quality",
  "aroma",
  "smoke_body",
  "packaging",
  "overall",
];

export default function CigarettePage() {
  const [ratings, setRatings] = useState(
    Object.fromEntries(params.map((p) => [p, 0.0]))
  );
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="max-w-6xl mx-auto pt-10 px-6">
      <div className="mb-16 border-b border-white/10 pb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#FFB800]/10 border border-[#FFB800]/30">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FFB800] animate-pulse shadow-[0_0_10px_rgba(255,184,0,0.8)]"></div>
          </div>
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#FFB800] font-bold">Live Assessment</span>
        </div>
        <h1 className="text-7xl md:text-9xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8">
          Gold Flake
        </h1>
        <div className="flex flex-wrap gap-4 items-center">
          <span className="bg-white/5 border border-white/10 px-5 py-2.5 rounded-full text-[11px] text-white font-bold uppercase tracking-[0.2em] shadow-sm">
            Honeydew
          </span>
          <span className="text-zinc-700 mx-2">•</span>
          <span className="text-zinc-500 text-xs uppercase tracking-[0.3em] font-medium">
            Virginia / India
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 bg-[#080808] border border-white/5 p-8 md:p-14 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFB800]/[0.02] rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-14 border-b border-white/10 pb-8 relative z-10">
            <div>
              <h3 className="text-white font-black uppercase tracking-[0.3em] text-[12px] mb-2">
                Detailed Metrics
              </h3>
              <p className="text-zinc-500 text-[10px] uppercase tracking-widest">Sensory Evaluation</p>
            </div>
            <span className="text-[#FFB800] bg-[#FFB800]/10 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mt-4 md:mt-0 border border-[#FFB800]/20">(0.5 Step)</span>
          </div>

          <div className="space-y-10 relative z-10">
            {params.map((p) => (
              <div key={p} className="flex flex-col md:flex-row md:justify-between md:items-center group gap-6 md:gap-0">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400 group-hover:text-white transition-colors w-1/3">
                  {p.replace("_", " ")}
                </span>
                <div className="flex items-center gap-8 flex-1 justify-end">
                  <div className="relative w-full md:w-64 flex items-center group-hover:scale-[1.02] transition-transform">
                    <input
                      type="range"
                      step="0.5"
                      min="0"
                      max="5"
                      className="accent-[#FFB800] w-full h-1.5 bg-zinc-900 rounded-lg appearance-none cursor-pointer hover:bg-zinc-800 transition-colors z-10"
                      value={ratings[p]}
                      onChange={(e) =>
                        setRatings({
                          ...ratings,
                          [p]: parseFloat(e.target.value),
                        })
                      }
                    />
                    {/* Active Track Overlay (CSS fallback visual if accent color isn't enough) */}
                    <div 
                      className="absolute left-0 top-1/2 -translate-y-1/2 h-1.5 bg-[#FFB800] rounded-lg pointer-events-none"
                      style={{ width: `${(ratings[p] / 5) * 100}%` }}
                    ></div>
                  </div>
                  <div className="w-16 h-12 bg-black border border-white/10 rounded-xl flex items-center justify-center group-hover:border-[#FFB800]/50 group-hover:shadow-[0_0_15px_rgba(255,184,0,0.1)] transition-all">
                    <span className="text-white font-mono font-bold text-xl">
                      {ratings[p].toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={() => {
              setIsSaved(true);
              setTimeout(() => setIsSaved(false), 2000);
            }}
            className="relative z-10 w-full bg-[#FFB800] text-black font-black py-6 mt-16 rounded-2xl uppercase tracking-[0.3em] hover:bg-white transition-all duration-500 shadow-[0_0_30px_rgba(255,184,0,0.15)] hover:shadow-[0_0_50px_rgba(255,255,255,0.2)] flex items-center justify-center group"
          >
            {isSaved ? "Saved to Log" : "Post Review"}
          </button>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-6 pt-4">
          <div className="bg-[#080808] border border-white/5 p-8 rounded-3xl">
            <h4 className="text-[10px] text-zinc-500 uppercase tracking-[0.3em] font-bold mb-6">Guidelines</h4>
            <div className="text-zinc-400 text-[11px] uppercase leading-relaxed tracking-widest space-y-8">
              <div className="border-l-2 border-[#FFB800] pl-5">
                <p className="text-white font-bold mb-2 tracking-[0.2em]">Context</p>
                <p className="text-zinc-500 opacity-80">Log your rotation strictly. Compare against your established baseline.</p>
              </div>
              <div className="border-l-2 border-white/10 pl-5 hover:border-white/30 transition-colors">
                <p className="text-white font-bold mb-2 tracking-[0.2em]">Precision</p>
                <p className="text-zinc-500 opacity-80">All metrics evaluate on a strict 0.5 increment scale.</p>
              </div>
              <div className="border-l-2 border-white/10 pl-5 hover:border-white/30 transition-colors">
                <p className="text-white font-bold mb-2 tracking-[0.2em]">Burn Quality</p>
                <p className="text-zinc-500 opacity-80">Burn score heavily accounts for ash integrity and evenness.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-[#FFB800]/5 border border-[#FFB800]/10 p-8 rounded-3xl mt-auto">
            <h4 className="text-[10px] text-[#FFB800] uppercase tracking-[0.3em] font-bold mb-4">Current Score</h4>
            <div className="text-6xl font-mono text-white font-light tracking-tighter">
              {((Object.values(ratings).reduce((a, b) => a + b, 0)) / params.length).toFixed(1)}
              <span className="text-2xl text-zinc-600">/5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
