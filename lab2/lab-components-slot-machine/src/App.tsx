import { SlotMachine } from "./components/SlotMachine";


export default function App() {
return (
<div style={{ minHeight: "100vh", padding: 24, background: "#f6f7fb" , color:"black"}}>
<h1 style={{ marginBottom: 16 }}>lab-components-slot-machine</h1>
<p style={{ marginBottom: 24 }}>
Drie onafhankelijke SlotMachines op één pagina. Refresh de pagina voor nieuwe combinaties.
</p>


<div style={{ display: "grid", gap: 16 }}>
<SlotMachine slots={5} />
<SlotMachine slots={4} />
<SlotMachine slots={3} />
</div>
</div>
);
}