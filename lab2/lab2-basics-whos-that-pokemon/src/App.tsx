import { useState } from "react";
import { PokemonImage } from "./components/PokemonImage";

const roll = () => Math.floor(Math.random() * 151) + 1;

export default function App() {
  const [id, setId] = useState<number>(roll);

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center", gap: "1rem" }}>
      <h1>lab-components-whos-that-pokemon</h1>

      <div style={{ display: "flex", gap: "1rem" }}>
        <PokemonImage id={id} visible={false} size={200} />
        <PokemonImage id={id} visible={true} size={200} />
      </div>

      <button onClick={() => setId(roll())}>Nieuwe Pokémon</button>
    </div>
  );
}
