import Link from "next/link"; // Add this line
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#000", minHeight: "100vh", margin: 0 }}>
        <nav
          style={{
            padding: "20px 40px",
            borderBottom: "1px solid #222",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Use <Link> instead of <a> to make the error go away */}
          <Link
            href="/"
            style={{
              color: "#ffbf00",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "1.5rem",
              letterSpacing: "-1px",
            }}
          >
            Amber.
          </Link>
          <Link
            href="/profile"
            style={{
              color: "#ffbf00",
              textDecoration: "none",
              fontSize: "0.75rem",
              letterSpacing: "1px",
            }}
          >
            PROFILE
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
