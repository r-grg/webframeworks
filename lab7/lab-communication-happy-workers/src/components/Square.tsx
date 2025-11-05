import { useEffect, useRef, useState } from "react";

type Props = {
  color: string;
  size?: number;
  work: number;                   // huidige work uit App
  onWork: (delta: number) => void; // vraag parent om work te verhogen
};

export default function Square({ color, size = 100, work, onWork }: Props) {
  const [productivity, setProductivity] = useState(1); // % per klik
  const [clicked, setClicked] = useState(0);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, []);

  const handleClick = () => {
    if (work >= 100) return;           // al klaar
    if (productivity <= 0) return;     // overwerkt

    // registreer klik
    setClicked((c) => {
      const next = c + 1;
      if (next >= 10) {
        // overworked
        setProductivity(0);
        // herstel na 5s
        if (timer.current) window.clearTimeout(timer.current);
        timer.current = window.setTimeout(() => {
          setProductivity(1);
          setClicked(0);
        }, 5000);
      }
      return next;
    });

    // vraag aan parent om work te verhogen
    onWork(productivity);
  };

  // emoji op basis van toestand
  let emoji = "🙂";
  if (work >= 100) emoji = "😍";
  else if (productivity <= 0) emoji = "😫";

  return (
    <button
      onClick={handleClick}
      title={`productivity: ${productivity} • clicked: ${clicked}`}
      style={{
        width: size,
        height: size,
        background: color,
        border: "2px solid #111",
        display: "flex",             // ✅ flex instead of grid
        alignItems: "center",        // ✅ vertical center
        justifyContent: "center",    // ✅ horizontal center
        fontSize: size * 0.45,
        lineHeight: 1,               // ✅ no extra space above/below emoji
        borderRadius: 4,
        cursor: work >= 100 || productivity <= 0 ? "not-allowed" : "pointer",
      }}
    >
      <span style={{ display: "block", lineHeight: 1 }}>{emoji}</span>
    </button>

  );
}
