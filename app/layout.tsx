import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Search, User } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="max-w-6xl mx-auto px-6 py-8 flex justify-between items-center border-b border-white/5">
          <Link href="/" className="font-serif text-4xl font-bold tracking-tighter hover:text-accent transition-colors">
            Amber.
          </Link>
          <div className="flex items-center gap-8">
            <Search size={22} className="text-primary/30 cursor-pointer hover:text-primary transition-colors" />
            <Link href="/profile" className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-primary/60 hover:text-accent transition-colors">
              <User size={18} /> Profile
            </Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}