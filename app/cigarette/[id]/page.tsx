import Link from 'next/link';
import { getAllCigarettes } from '@/lib/data'; // Switch to this
import { Star } from 'lucide-react';

export default async function Home() {
  const cigarettes = await getAllCigarettes(); // Fetch the real data

  return (
    <main style={{ padding: '20px', backgroundColor: '#000', color: '#ffbf00', minHeight: '100vh' }}>
      <h1>Amber Humidor</h1>
      <div style={{ display: 'grid', gap: '20px', marginTop: '20px' }}>
        {cigarettes.map((c) => (
          <Link key={c.id} href={`/cigarette/${c.id}`} style={{ border: '1px solid #333', padding: '15px', borderRadius: '8px', textDecoration: 'none', color: 'inherit' }}>
            <h3>{c.brand_name} {c.variant}</h3>
            <p>{c.blend_type} • {c.origin}</p>
          </Link>
        ))}
      </div>
      <Link href="/add" style={{ marginTop: '20px', display: 'inline-block', color: '#fff' }}>+ Add New Blend</Link>
    </main>
  );
}