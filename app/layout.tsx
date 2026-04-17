import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#030303] text-zinc-200 min-h-screen font-sans selection:bg-[#FFB800] selection:text-black antialiased">
        <header className="sticky top-0 z-50 bg-[#030303]/80 backdrop-blur-xl flex justify-between items-center px-6 md:px-12 py-5 border-b border-white/5">
          <Link
            href="/"
            className="group flex items-center gap-2"
          >
            <div className="w-3 h-3 bg-[#FFB800] rounded-sm group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-[0_0_15px_rgba(255,184,0,0.4)]"></div>
            <span className="text-white font-black text-2xl tracking-tighter group-hover:text-[#FFB800] transition-colors">
              Amber.
            </span>
          </Link>
          <nav className="flex gap-8 items-center">
            <Link
              href="/profile"
              className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 hover:text-[#FFB800] uppercase transition-colors"
            >
              PROFILE
            </Link>
          </nav>
        </header>
        <main className="pb-24 pt-6">{children}</main>
      </body>
    </html>
  );
}
