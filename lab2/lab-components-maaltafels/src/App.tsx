import MultiplicationTable from "./components/MultiplicationTable";

export default function App() {
  return (
    <div className="wrapper">
      <div>
        <h1>lab-components-maaltafels</h1>
        <p>Voorbeeld met <code>max=5</code>:</p>
        <MultiplicationTable max={5} />
        <MultiplicationTable max={10} />
      </div>
    </div>
  );
}
