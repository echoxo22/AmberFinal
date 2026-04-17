"use client";
import { useRouter } from "next/navigation";

export default function AddCigarettePage() {
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      brand: formData.get("brand"),
      variant: formData.get("variant"),
    };

    // This hits your Render Postgres via the API we just fixed
    const res = await fetch("/api/review", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (res.ok) {
      router.push("/");
      router.refresh();
    }
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-amber-500 text-3xl font-black mb-8 uppercase italic">
        Add to Humidor
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          name="brand"
          placeholder="BRAND"
          className="bg-zinc-900 border border-zinc-800 p-4 text-white focus:border-amber-500 outline-none uppercase font-bold"
        />
        <input
          name="variant"
          placeholder="VARIANT"
          className="bg-zinc-900 border border-zinc-800 p-4 text-white focus:border-amber-500 outline-none uppercase font-bold"
        />
        <button
          type="submit"
          className="bg-amber-500 text-black font-black py-4 mt-4 hover:bg-amber-400 transition-all"
        >
          SAVE TO COLLECTION
        </button>
      </form>
    </div>
  );
}
