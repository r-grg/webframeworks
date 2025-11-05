import { useEffect, useState } from "react";

type JokeResponse = { id: string; joke: string; status: number };

const FAVORITE_KEY = "favoriteDadJoke";

export default function DadJoke() {
  const [joke, setJoke] = useState<string>("");
  const [favorite, setFavorite] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  // Fetch new joke
  const loadJoke = async () => {
    setLoading(true);
    setErr(null);
    try {
      const res = await fetch("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data: JokeResponse = await res.json();
      setJoke(data.joke);
    } catch (e: any) {
      setErr(e?.message ?? "Failed to load joke");
    } finally {
      setLoading(false);
    }
  };

  // On mount: load favorite from localStorage or fetch a new joke
  useEffect(() => {
    const stored = localStorage.getItem(FAVORITE_KEY);
    if (stored) setFavorite(stored);
    loadJoke();
  }, []);

  // Save current joke as favorite
  const setAsFavorite = () => {
    if (!joke) return;
    localStorage.setItem(FAVORITE_KEY, joke);
    setFavorite(joke);
  };

  return (
    <div style={{ display: "grid", gap: 16, width: "min(700px, 100%)" }}>
      <h1>Dad Joke</h1>

      {/* Current joke card */}
      <div
        style={{
          padding: "16px 18px",
          border: "1px solid #e5e7eb",
          borderRadius: 12,
          background: "#fff",
          boxShadow: "0 4px 14px rgba(0,0,0,.06)",
          minHeight: 90,
          display: "grid",
          alignContent: "center",
        }}
      >
        {loading ? (
          <em style={{ color: "#64748b" }}>Loading…</em>
        ) : err ? (
          <span style={{ color: "#dc2626" }}>Error: {err}</span>
        ) : (
          <div style={{ lineHeight: 1.45 }}>{joke || <em>No joke yet.</em>}</div>
        )}
      </div>

      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={loadJoke} disabled={loading}>
          {loading ? "Fetching…" : "New Joke"}
        </button>
        <button onClick={setAsFavorite} disabled={!joke || loading}>
          Set as favorite
        </button>
      </div>

      {/* Favorite section */}
      <div
        style={{
          marginTop: 12,
          padding: "16px 18px",
          border: "1px solid #cbd5e1",
          borderRadius: 12,
          background: "#f8fafc",
        }}
      >
        <h2 style={{ margin: "0 0 8px 0", fontSize: 18 }}>⭐ Favorite Joke</h2>
        {favorite ? (
          <p style={{ margin: 0, lineHeight: 1.5 }}>{favorite}</p>
        ) : (
          <p style={{ color: "#64748b", margin: 0 }}>No favorite saved yet.</p>
        )}
      </div>
    </div>
  );
}
