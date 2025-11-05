import { StatefulSlotMachine } from "./components/StatefulSlotMachine";

export default function App() {
  return (
    <div style={{ minHeight: "100vh", padding: 24, background: "#f6f7fb" }}>
      {/* <h1 style={{ marginBottom: 16 }}>lab-state-slot-machine</h1>
      <p style={{ marginBottom: 24 }}>
        Trek aan de hendel. Win: alle symbolen gelijk (+€20). Verlies: alle verschillend (-€1).
      </p> */}

      <div style={{ display: "grid", gap: 16 }}>
        <StatefulSlotMachine slots={3} startMoney={100} />
        <StatefulSlotMachine slots={4} startMoney={100} />
        <StatefulSlotMachine slots={5} startMoney={100} />
      </div>
    </div>
  );
}
