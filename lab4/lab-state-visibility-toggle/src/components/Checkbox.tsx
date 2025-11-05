import { useState } from "react";

type Props = {
  image?: string;
};

export default function Checkbox({ 
  image = "https://media.giphy.com/media/Vuw9m5wXviFIQ/giphy.gif" // voorbeeld
}: Props) {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div style={{ display: "grid", gap: 10, width: 800, maxWidth: "100%" }}>
      <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <input
          type="checkbox"
          checked={show}
          onChange={(e) => setShow(e.target.checked)}
        />
        <span>Show/Hide</span>
      </label>

      {show && (
        <div
          role="img"
          aria-label="background"
          style={{
            height: 260,
            border: "2px solid #444",
            borderRadius: 8,
            backgroundImage: `url(${image})`,
            backgroundRepeat: "repeat",      // zoals in je screenshot (getiled)
            backgroundSize: "200px auto",
            backgroundPosition: "center",
          }}
        />
      )}
    </div>
  );
}
