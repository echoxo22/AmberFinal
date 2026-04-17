"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSave(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    const res = await fetch("/api/review", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (res.ok) {
      router.push("/");
      router.refresh();
    } else {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="max-w-3xl mx-auto pt-16 px-6">
      <div className="mb-16 border-b border-white/10 pb-10 text-center">
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter leading-none">
          Add to <span className="text-[#FFB800] block mt-2">Humidor</span>
        </h1>
        <p className="text-zinc-500 uppercase text-[11px] tracking-[0.4em] font-medium">
          Catalog a New Blend
        </p>
      </div>

      <form onSubmit={handleSave} className="flex flex-col gap-10 bg-[#080808] border border-white/5 p-8 md:p-14 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#FFB800]/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
          <div className="flex flex-col gap-4 group">
            <label className="text-[10px] text-zinc-500 group-focus-within:text-[#FFB800] uppercase font-bold tracking-[0.3em] ml-2 transition-colors">
              Brand
            </label>
            <input
              name="brand"
              placeholder="e.g. Marlboro"
              required
              className="bg-black border border-white/10 rounded-2xl p-5 text-white placeholder:text-zinc-700 focus:border-[#FFB800] focus:ring-1 focus:ring-[#FFB800] outline-none transition-all duration-300 text-lg"
            />
          </div>

          <div className="flex flex-col gap-4 group">
            <label className="text-[10px] text-zinc-500 group-focus-within:text-[#FFB800] uppercase font-bold tracking-[0.3em] ml-2 transition-colors">
              Variant
            </label>
            <input
              name="variant"
              placeholder="e.g. Red"
              required
              className="bg-black border border-white/10 rounded-2xl p-5 text-white placeholder:text-zinc-700 focus:border-[#FFB800] focus:ring-1 focus:ring-[#FFB800] outline-none transition-all duration-300 text-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
          <div className="flex flex-col gap-4 group">
            <label className="text-[10px] text-zinc-500 group-focus-within:text-[#FFB800] uppercase font-bold tracking-[0.3em] ml-2 transition-colors">
              Blend Type
            </label>
            <input
              name="blend"
              placeholder="e.g. Virginia"
              className="bg-black border border-white/10 rounded-2xl p-5 text-white placeholder:text-zinc-700 focus:border-[#FFB800] focus:ring-1 focus:ring-[#FFB800] outline-none transition-all duration-300 text-lg"
            />
          </div>
          
          <div className="flex flex-col gap-4 group">
            <label className="text-[10px] text-zinc-500 group-focus-within:text-[#FFB800] uppercase font-bold tracking-[0.3em] ml-2 transition-colors">
              Origin
            </label>
            <input
              name="origin"
              placeholder="e.g. USA"
              className="bg-black border border-white/10 rounded-2xl p-5 text-white placeholder:text-zinc-700 focus:border-[#FFB800] focus:ring-1 focus:ring-[#FFB800] outline-none transition-all duration-300 text-lg"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="relative z-10 bg-[#FFB800] text-black font-black py-6 rounded-2xl uppercase tracking-[0.3em] mt-6 hover:bg-white transition-all duration-500 shadow-[0_0_20px_rgba(255,184,0,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] flex items-center justify-center gap-3 disabled:opacity-70 disabled:hover:bg-[#FFB800] disabled:cursor-not-allowed group"
        >
          {isSubmitting ? (
            <span className="animate-pulse">Saving...</span>
          ) : (
            <>
              <span>Save to Collection</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
