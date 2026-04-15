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
          marginBottom: "30px",
        }}
      >
        Humidor
      </h2>

      <div style={{ display: "grid", gap: "20px" }}>
        {cigarettes.map((c) => (
          <a
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
              transition: "border-color 0.2s, background-color 0.2s",
            }}
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
      </a>
    </main>
  );
}
