"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      setError("Invalid credentials. Please try again.");
    } else {
      router.push("/");
      router.refresh();
    }
  }

  return (
    <div className="max-w-md mx-auto pt-24 px-6">
      <div className="mb-10">
        <h1 className="text-5xl font-black text-[#FFB800] uppercase tracking-tighter italic">
          Access
        </h1>
        <p className="text-zinc-500 uppercase text-[10px] tracking-[0.3em] mt-2">
          Authenticate your session
        </p>
      </div>

      <form onSubmit={handleLogin} className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-[10px] text-zinc-600 uppercase font-bold tracking-widest ml-1">
            Email
          </label>
          <input name="email" type="email" placeholder="user@amber.com" required className="w-full" />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[10px] text-zinc-600 uppercase font-bold tracking-widest ml-1">
            Password
          </label>
          <input name="password" type="password" placeholder="••••••••" required className="w-full" />
        </div>

        {error && <p className="text-red-500 text-xs font-bold uppercase tracking-widest mt-2">{error}</p>}

        <button type="submit" className="w-full bg-[#FFB800] text-black font-black py-5 mt-4 uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_20px_rgba(255,184,0,0.2)]">
          ENTER
        </button>
      </form>
    </div>
  );
}