import { humidorData } from '../../../lib/data';
import { Star } from 'lucide-react';

export default function Detail({ params }: { params: { id: string } }) {
  const cig = humidorData.find(c => c.id === params.id);
  if (!cig) return <div className="p-20 text-center font-mono uppercase">Blend not found.</div>;

  return (
    <main className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-12 gap-20">
      <div className="md:col-span-4">
        <div className="pack-poster w-full p-10 flex flex-col justify-between">
           <span className="font-mono text-xs text-primary/20 tracking-widest uppercase">{cig.region}</span>
           <div className="text-center py-20">
              <h1 className="text-6xl font-serif font-bold mb-2">{cig.brand}</h1>
              <p className="text-2xl italic text-primary/40">{cig.line}</p>
           </div>
           <div className="flex justify-between items-center border-t border-white/5 pt-8">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} className={i < Math.floor(cig.rating) ? "text-accent fill-accent" : "text-white/5"} />)}
              </div>
              <span className="font-mono text-2xl font-bold">{cig.rating}</span>
           </div>
        </div>
      </div>
      <div className="md:col-span-8">
        <h2 className="font-mono text-xs uppercase tracking-[0.4em] text-accent mb-12 border-b border-white/10 pb-4">Technical Profile</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {Object.entries(cig.metrics).map(([key, val]) => (
            <div key={key}>
              <div className="flex justify-between font-mono text-[10px] uppercase tracking-[0.2em] mb-3">
                <span className="text-primary/40">{key}</span>
                <span className="text-primary font-bold">{val} / 5.0</span>
              </div>
              <div className="h-[3px] w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-accent" style={{ width: `${((val as number) / 5) * 100}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}