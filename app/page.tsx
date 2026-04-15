import Link from 'next/link';
import { humidorData } from '@/lib/data';
import { Star } from 'lucide-react';

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-12 flex justify-between items-end">
        <h2 className="font-serif text-3xl italic text-primary/80">Trending in the Humidor</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {humidorData.map((cig) => (
          <Link key={cig.id} href={`/cigarette/${cig.id}`} className="group block">
            <div className="pack-poster rounded-sm p-6 flex flex-col justify-between mb-4">
              <span className="text-[10px] font-mono text-primary/20 uppercase tracking-widest">
                {cig.region}
              </span>
              <div className="py-12">
                <h3 className="font-serif text-2xl font-bold leading-tight group-hover:text-accent transition-colors">
                  {cig.brand}
                </h3>
                <p className="text-xs italic text-primary/40 mt-1">{cig.line}</p>
              </div>
              <div className="flex items-center gap-2 border-t border-white/5 pt-4">
                <Star size={12} className="text-accent fill-accent" />
                <span className="font-mono text-xs text-primary/80">{cig.rating}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}