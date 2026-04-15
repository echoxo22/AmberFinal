import Link from 'next/link';
// Remove the broken import
// import { humidorData, userData } from '../../lib/data'; 

export default function Profile() {
  // Temporary mock data so it doesn't crash
  const user = { name: "User", favorites: [] }; 

  return (
    <main style={{ padding: '20px', backgroundColor: '#000', color: '#ffbf00' }}>
      <h1>{user.name}'s Collection</h1>
      <p>Favorite blends will appear here.</p>
      <Link href="/">Back to Humidor</Link>
    </main>
  );
}