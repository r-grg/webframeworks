type CounterProps = {
  value: number;
  index: number;
  onIncrease: (index: number) => void;
  onDecrease: (index: number) => void;
};

export default function Counter({
  value,
  index,
  onIncrease,
  onDecrease,
}: CounterProps) {
  let color = "black";
  if (value > 0) color = "green";
  else if (value < 0) color = "red";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        marginBottom: 6,
      }}
    >
      <button onClick={() => onDecrease(index)}>Omlaag</button>
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color,
        }}
      >
        Count: {value}
      </div>
      <button onClick={() => onIncrease(index)}>Omhoog</button>
    </div>
  );
}
