import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#000", minHeight: "100vh" }}>
        <nav
          style={{
            padding: "20px 40px",
            borderBottom: "1px solid #222",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <a
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
          </a>
          <a
            href="/profile"
            style={{
              color: "#ffbf00",
              textDecoration: "none",
              fontSize: "0.75rem",
              letterSpacing: "1px",
            }}
          >
            PROFILE
          </a>
        </nav>
        {children}
      </body>
    </html>
  );
}
