import { getAllCigarettes } from "@/lib/data";

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
        }}
      >
        Humidor
      </h2>

      <div style={{ display: "grid", gap: "20px", marginTop: "20px" }}>
        {cigarettes.map((c) => (
          <a
            key={c.id}
            href={`/cigarette/${c.id}`}
            style={{
              display: "block",
              border: "1px solid #333",
              padding: "20px",
              borderRadius: "4px",
              textDecoration: "none",
              transition: "border-color 0.2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.borderColor = "#ffbf00")}
            onMouseOut={(e) => (e.currentTarget.style.borderColor = "#333")}
          >
            <h3 style={{ margin: 0, color: "#ffbf00" }}>
              {c.brand_name} {c.variant}
            </h3>
            <p style={{ margin: "5px 0 0", color: "#666", fontSize: "0.9rem" }}>
              {c.blend_type} • {c.origin}
            </p>
          </a>
        ))}
      </div>

      <a
        href="/add"
        style={{
          display: "block",
          marginTop: "30px",
          color: "#fff",
          fontSize: "0.8rem",
          textDecoration: "none",
        }}
      >
        + Add New Blend
      </a>
    </main>
  );
}
