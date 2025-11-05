import { useEffect, useMemo, useState } from "react";

type PokedexProps = { limit?: number };
type PokemonListItem = { name: string; url: string };

const spriteUrl = (url: string) => {
  // url looks like ".../pokemon/25/"
  const id = url.split("/").filter(Boolean).pop();
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
};

export default function Pokedex({ limit = 151 }: PokedexProps) {
  const [fetchLimit, setFetchLimit] = useState<number>(limit); // used for API calls
  const [limitInput, setLimitInput] = useState<string>(String(limit)); // controlled input
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [pokemon, setPokemon] = useState<PokemonListItem[]>([]);

  // Fetch when component mounts and whenever fetchLimit changes
  useEffect(() => {
    const controller = new AbortController();
    const run = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=${fetchLimit}`,
          { signal: controller.signal }
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data: { results: PokemonListItem[] } = await res.json();
        setPokemon(data.results);
      } catch (e: any) {
        if (e.name !== "AbortError") setError(e.message ?? "Failed to load");
      } finally {
        setLoading(false);
      }
    };
    run();
    return () => controller.abort();
  }, [fetchLimit]);

  // Client-side name filter (updates on each keystroke)
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return pokemon;
    return pokemon.filter((p) => p.name.includes(q));
  }, [pokemon, search]);

  const applyLimit = () => {
    const n = Math.max(1, Math.min(1302, Number(limitInput) || 1)); // clamp to PokeAPI current count
    setFetchLimit(n);
  };

  return (
    <div style={{ display: "grid", gap: 16, width: "min(1000px, 100%)" }}>
      <header style={{ display: "grid", gap: 8 }}>
        <h1 style={{ margin: 0 }}>Pokédex</h1>
        <input
          type="text"
          placeholder="Filter by name…"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          style={{ padding: "8px 10px" }}
          aria-label="Filter Pokémon by name"
        />
      </header>

      {/* Content */}
      {loading ? (
        <p style={{ color: "#64748b" }}>Loading Pokémon…</p>
      ) : error ? (
        <p style={{ color: "#dc2626" }}>Error: {error}</p>
      ) : (
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
            gap: 12,
          }}
        >
          {filtered.map((p) => (
            <li
              key={p.name}
              style={{
                display: "flex",
                gap: 10,
                alignItems: "center",
                padding: 10,
                border: "1px solid #e5e7eb",
                borderRadius: 10,
                background: "#fff",
              }}
            >
              <img
                src={spriteUrl(p.url)}
                alt={p.name}
                width={56}
                height={56}
                loading="lazy"
                style={{ imageRendering: "pixelated" }}
              />
              <span style={{ textTransform: "capitalize" }}>{p.name}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Bottom controls: limit via API (only refetch on button click) */}
      <footer style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <label>
          Show
          <input
            type="number"
            min={1}
            max={1302}
            value={limitInput}
            onChange={(e) => setLimitInput(e.target.value)}
            style={{ width: 90, marginLeft: 8, padding: "6px 8px" }}
            aria-label="Limit"
          />
        </label>
        <button onClick={applyLimit} disabled={loading}>
          {loading ? "Applying…" : "Apply limit"}
        </button>
        <span style={{ color: "#64748b" }}>Current: {fetchLimit}</span>
      </footer>
    </div>
  );
}
