import { getAllCigarettes } from "@/lib/data";
import Link from "next/link";

export default async function Home() {
  const cigarettes = await getAllCigarettes();

  return (
    <main style={{ padding: "40px" }}>
      <h2
        style={{
          fontSize: "1rem",
          textTransform: "uppercase",
          letterSpacing: "2px",
          color: "#888",
          marginBottom: "30px",
        }}
      >
        Humidor
      </h2>

      <div style={{ display: "grid", gap: "20px" }}>
        {cigarettes.map((c) => (
          <Link
            key={c.id}
            href={`/cigarette/${c.id}`}
            className="humidor-card"
            style={{
              display: "block",
              border: "1px solid #333",
              padding: "20px",
              borderRadius: "4px",
              textDecoration: "none",
              color: "inherit",
              transition: "all 0.2s",
            }}
          >
            {/* NO onMouseOver here! Interactivity happens in globals.css */}
            <h3 style={{ margin: 0, color: "#ffbf00" }}>
              {c.brand_name} {c.variant}
            </h3>
            <p style={{ margin: "5px 0 0", color: "#666", fontSize: "0.9rem" }}>
              {c.blend_type} • {c.origin}
            </p>
          </Link>
        ))}
      </div>

      <Link
        href="/add"
        style={{
          display: "inline-block",
          marginTop: "40px",
          color: "#fff",
          fontSize: "0.8rem",
          textDecoration: "none",
          border: "1px solid #333",
          padding: "10px 20px",
          borderRadius: "4px",
        }}
      >
        + Add New Blend
      </Link>
    </main>
  );
}
