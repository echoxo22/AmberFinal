export default function Profile() {
  return (
    <main style={{ padding: "40px" }}>
      <h1 style={{ fontSize: "2rem" }}>User's Collection</h1>
      <p style={{ color: "#666" }}>You haven't favorited any blends yet.</p>
      <hr style={{ borderColor: "#222", margin: "40px 0" }} />
      <a href="/" style={{ color: "#ffbf00" }}>
        Back to Humidor
      </a>
    </main>
  );
}
