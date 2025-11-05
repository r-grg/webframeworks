import { useEffect, useState } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // opruimen wanneer component verdwijnt
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <h2>Timer</h2>
      <p>{seconds} seconden verstreken</p>
    </div>
  );
}
