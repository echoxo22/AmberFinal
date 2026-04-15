import { getCigaretteById } from "@/lib/data";

export default async function CigarettePage({
  params,
}: {
  params: { id: string };
}) {
  const cigarette = await getCigaretteById(params.id);

  if (!cigarette) {
    return (
      <main style={{ padding: "40px" }}>
        <h1>Blend Not Found</h1>
      </main>
    );
  }

  return (
    <main style={{ padding: "40px", maxWidth: "600px" }}>
      <h1 style={{ fontSize: "3rem", margin: 0 }}>{cigarette.brand_name}</h1>
      <p style={{ fontSize: "1.2rem", color: "#888" }}>{cigarette.variant}</p>

      <div
        style={{ marginTop: "40px", padding: "20px", border: "1px solid #222" }}
      >
        <h3>Technicalities</h3>
        <p>Blend: {cigarette.blend_type}</p>
        <p>Menthol: {cigarette.is_menthol ? "Yes" : "No"}</p>
        <p>Origin: {cigarette.origin}</p>
      </div>

      <div style={{ marginTop: "40px" }}>
        <h3>Submit Rating</h3>
        <input
          type="number"
          step="0.5"
          min="0"
          max="5"
          placeholder="0.0"
          style={{
            background: "none",
            border: "1px solid #ffbf00",
            color: "#ffbf00",
            padding: "10px",
            width: "60px",
          }}
        />
        <button
          style={{
            marginLeft: "10px",
            padding: "10px 20px",
            backgroundColor: "#ffbf00",
            border: "none",
            fontWeight: "bold",
          }}
        >
          RATE
        </button>
      </div>
    </main>
  );
}
