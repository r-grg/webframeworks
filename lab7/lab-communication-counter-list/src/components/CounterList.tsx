import { useState } from "react";
import Counter from "./Counter";

export default function CounterList() {
  const [counters, setCounters] = useState<number[]>([]);

  const addCounter = () => setCounters([...counters, 0]);

  const increaseCounter = (index: number) =>
    setCounters((prev) =>
      prev.map((val, i) => (i === index ? val + 1 : val))
    );

  const decreaseCounter = (index: number) =>
    setCounters((prev) =>
      prev.map((val, i) => (i === index ? val - 1 : val))
    );

  const sum = counters.reduce((a, b) => a + b, 0);

  return (
    <div style={{ display: "grid", gap: 8, placeItems: "center" }}>
      {counters.map((value, index) => (
        <Counter
          key={index}
          value={value}
          index={index}
          onIncrease={increaseCounter}
          onDecrease={decreaseCounter}
        />
      ))}

      <p>Som van de tellers: {sum}</p>
      <button onClick={addCounter}>Voeg teller toe</button>
    </div>
  );
}
