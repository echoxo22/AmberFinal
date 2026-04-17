import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-black">
      <body className="bg-black min-h-screen m-0 text-white font-sans">
        <header className="px-10 py-5 border-b border-zinc-900 flex justify-between items-center sticky top-0 bg-black z-50">
          <Link
            href="/"
            className="text-amber-500 font-black text-2xl tracking-tighter hover:opacity-80 transition-opacity"
          >
            Amber.
          </Link>

          <div className="flex items-center gap-10">
            {/* Search link for the catalog */}
            <Link
              href="/search"
              className="text-zinc-500 hover:text-amber-500 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </Link>

            <Link
              href="/profile"
              className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 hover:text-amber-500 uppercase transition-colors"
            >
              PROFILE
            </Link>
          </div>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
