import './globals.css'; // We will create this next

export const metadata = {
  title: 'Amber',
  description: 'The Cigarette Catalog',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{
        margin: 0,
        backgroundColor: '#000',
        color: '#ffbf00',
        fontFamily: 'serif',
        minHeight: '100vh'
      }}>
        {/* Simple Header */}
        <nav style={{ padding: '20px', borderBottom: '1px solid #222', display: 'flex', justifyContent: 'space-between' }}>
          <a href="/" style={{ color: '#ffbf00', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.5rem' }}>Amber.</a>
          <a href="/profile" style={{ color: '#ffbf00', textDecoration: 'none', fontSize: '0.9rem' }}>PROFILE</a>
        </nav>

        {children}
      </body>
    </html>
  );
}
