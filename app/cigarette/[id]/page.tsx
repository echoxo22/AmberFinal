"use client";
import { useState } from "react";
import { useRouter, useParams } from "next/navigation";

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
  const router = useRouter();
  const paramsHook = useParams();
  const id = paramsHook.id as string;

  const [ratings, setRatings] = useState(
    Object.fromEntries(params.map((p) => [p, 0.0])),
  );

  async function handleSubmit() {
    const payload = {
      cigarette_id: parseInt(id, 10),
      ...ratings,
    };

    const res = await fetch("/api/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      router.push("/");
      router.refresh();
    }
  }

  return (
    <div className="max-w-5xl mx-auto pt-10 px-6">
      <div className="mb-12">
        <h1 className="text-7xl font-black text-[#FFB800] uppercase tracking-tighter leading-none">
          Gold Flake
        </h1>
        <div className="flex gap-4 mt-4 items-center">
          <span className="bg-zinc-900 px-3 py-1 text-[10px] text-zinc-400 font-bold uppercase tracking-widest">
            Honeydew
          </span>
          <span className="text-zinc-600">•</span>
          <span className="text-zinc-500 text-xs uppercase tracking-[0.2em]">
            Virginia / India
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 bg-[#080808] border border-zinc-900 p-10 rounded-sm shadow-2xl">
          <h3 className="text-[#FFB800] font-bold uppercase tracking-[0.3em] mb-10 text-[10px] border-b border-zinc-800 pb-4">
            Detailed Metrics (0.5 Step)
          </h3>

          <div className="space-y-8">
            {params.map((p) => (
              <div key={p} className="flex justify-between items-center group">
                <span className="text-[11px] uppercase tracking-[0.2em] text-zinc-500 group-hover:text-white transition-colors">
                  {p.replace("_", " ")}
                </span>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    step="0.5"
                    min="0"
                    max="5"
                    className="accent-[#FFB800] w-32 h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
                    value={ratings[p]}
                    onChange={(e) =>
                      setRatings({
                        ...ratings,
                        [p]: parseFloat(e.target.value),
                      })
                    }
                  />
                  <span className="text-[#FFB800] font-mono font-bold w-8 text-right text-lg">
                    {ratings[p].toFixed(1)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={handleSubmit}
            className="w-full bg-[#FFB800] text-black font-black py-5 mt-12 uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_20px_rgba(255,184,0,0.2)]"
          >
            POST REVIEW
          </button>
        </div>

        <div className="text-zinc-600 text-[10px] uppercase leading-relaxed tracking-widest space-y-4">
          <p>/ Log your rotation.</p>
          <p>/ All metrics are strictly 0.5 increment.</p>
          <p>/ Burn quality accounts for ash integrity.</p>
        </div>
      </div>
    </div>
  );
}
