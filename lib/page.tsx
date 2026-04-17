"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignupPage() {
  const router = useRouter();
  const [error, setError] = useState("");

  async function handleSignup(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      router.push("/login");
    } else {
      const { error } = await res.json();
      setError(error || "Failed to create account.");
    }
  }

  return (
    <div className="max-w-md mx-auto pt-24 px-6">
      <div className="mb-10">
        <h1 className="text-5xl font-black text-[#FFB800] uppercase tracking-tighter italic">
          Join Amber.
        </h1>
        <p className="text-zinc-500 uppercase text-[10px] tracking-[0.3em] mt-2">
          Create your humidor profile
        </p>
      </div>

      <form onSubmit={handleSignup} className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-[10px] text-zinc-600 uppercase font-bold tracking-widest ml-1">Name</label>
          <input name="name" type="text" placeholder="John Doe" className="w-full" />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[10px] text-zinc-600 uppercase font-bold tracking-widest ml-1">Email</label>
          <input name="email" type="email" placeholder="user@amber.com" required className="w-full" />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[10px] text-zinc-600 uppercase font-bold tracking-widest ml-1">Password</label>
          <input name="password" type="password" placeholder="••••••••" required className="w-full" />
        </div>

        {error && <p className="text-red-500 text-xs font-bold uppercase tracking-widest mt-2">{error}</p>}

        <button type="submit" className="w-full bg-[#FFB800] text-black font-black py-5 mt-4 uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_20px_rgba(255,184,0,0.2)]">
          REGISTER
        </button>
      </form>
      
      <div className="mt-8 text-center">
        <Link href="/login" className="text-[10px] text-zinc-500 hover:text-white uppercase tracking-widest transition-colors">
          Already have an account? Login
        </Link>
      </div>
    </div>
  );
}