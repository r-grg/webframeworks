import { useState } from "react";
import SelectionBox from "./components/SelectionBox";
import SquareRow from "./components/SquareRow";
import { SettingsContext, type Color } from "./context/SettingsContext";

export default function App() {
  const [color, setColor] = useState<Color>("red");

  return (
    <SettingsContext.Provider value={{ color, setColor }}>
      <main
        style={{
          // minHeight: "100vh",
          // width: "100vw",
          display: "grid",
          placeItems: "center",
          //gap: 16,
          padding: 24,
          background: "#f8fafc",
          color: "#0f172a",
        }}
      >
        <SelectionBox />
        <SquareRow />
      </main>
    </SettingsContext.Provider>
  );
}
