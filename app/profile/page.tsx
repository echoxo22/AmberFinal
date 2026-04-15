import { humidorData, userData } from '../../lib/data';
import Link from 'next/link';
export default function Profile() {
  const favorites = humidorData.filter(c => userData.favorites.includes(c.id));
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <header className="flex items-center gap-12 mb-20 border-b border-white/5 pb-12">
        <div className="w-32 h-32 bg-surface rounded-full border-2 border-accent/20 flex items-center justify-center text-4xl font-serif text-accent/40">{userData.username[0]}</div>
        <div><h1 className="text-5xl font-bold font-serif mb-4">{userData.username}</h1><div className="flex gap-10 font-mono text-[11px] uppercase tracking-[0.2em] text-primary/40"><div><span className="text-2xl text-primary block font-bold mb-1">{userData.stats.total_logs}</span> Total Logs</div><div><span className="text-2xl text-primary block font-bold mb-1">{userData.stats.this_year}</span> 2026 logs</div></div></div>
      </header>
      <section><h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/30 mb-8">Favorite Four</h3><div className="grid grid-cols-4 gap-6">{favorites.map(cig => (<Link key={cig.id} href={`/cigarette/${cig.id}`} className="pack-poster bg-surface border border-white/10 p-6 flex flex-col justify-center text-center group"><span className="font-serif text-xl leading-tight group-hover:text-accent transition-colors">{cig.brand}</span></Link>))}</div></section>
    </main>
  );
}
