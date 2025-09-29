// import { useState } from "react";
import './App.css'

function App() {
  // 1) Array met getallen, met een bepaald getal dat meerdere keren voorkomt
  const numbers = [3, 7, 3, 12, 5, 3, 9, 7]; // 3 komt meerdere keren voor

  // 3) Array met 5 student-objecten (id, naam, leeftijd)
  const students = [
    { id: 1, name: "Jasper", age: 21 },
    { id: 2, name: "Lina", age: 20 },
    { id: 3, name: "Noah", age: 22 },
    { id: 4, name: "Julia", age: 19 },
    { id: 5, name: "Milan", age: 23 },
  ];

  // Voor de select (6)
  // const [selectedId, setSelectedId] = useState(students[0].id);
  // const selectedStudent = students.find((s) => s.id === Number(selectedId));

  // (5) Namen die met J beginnen via filter + map
  const jStudents = students.filter((s) => s.name.toLowerCase().startsWith("j"));

  return (
    <div>
      <div>
        <header className="space-y-1">
          <h1 className="text-2xl font-bold">lab-basics-lists</h1>
          <p className="text-sm text-gray-600">Voorbeeldoplossing voor lijsten, filter/map, select & table.</p>
        </header>

        {/* 2) Unordered list met getallen */}
        <section className="bg-white rounded-2xl shadow p-5">
          <h2 className="text-lg font-semibold mb-3">Ongeordende lijst (getallen)</h2>
          <ul className="list-disc list-inside space-y-1">
            {numbers.map((n, i) => (
              // Goede key: combinatie van waarde en index (waardes kunnen dubbel voorkomen)
              <li key={i}>{n}</li>
            ))}
          </ul>
        </section>

        {/* 4) Ordered list met alle studentnamen */}
        <section className="bg-white rounded-2xl shadow p-5">
          <h2 className="text-lg font-semibold mb-3">Geordende lijst (alle studenten)</h2>
          <ol>
            {students.map((s) => (
              <li key={s.id}>{s.name}</li>
            ))}
          </ol>
        </section>

        {/* 5) Ordered list met studenten waarvan de naam met J begint (filter + map) */}
        <section className="bg-white rounded-2xl shadow p-5">
          <h2 className="text-lg font-semibold mb-2">Geordende lijst (namen die met J beginnen)</h2>
          <p className="text-sm text-gray-600 mb-3">Gemaakt met <code>filter</code> + <code>map</code>.</p>
          <ol >
            {jStudents.map((s) => (
              <li key={s.id}>{s.name}</li>
            ))}
          </ol>
          {jStudents.length === 0 && (
            <p className="text-sm text-gray-500">Geen studenten met een J.</p>
          )}
        </section>

        {/* 6) Select + options met namen */}
        <section className="bg-white rounded-2xl shadow p-5">
          <h2 className="text-lg font-semibold mb-3">Select (kies een student)</h2>
          <div className="flex items-center gap-3">
            <label htmlFor="student" className="text-sm">Naam:</label>
            <select
            >
              {students.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
            {/* <span className="text-sm text-gray-600">
              Geselecteerd: <strong>{selectedStudent?.name}</strong>
            </span> */}
          </div>
        </section>

        {/* 7) Tabel met namen en leeftijden */}
        <section className="bg-white rounded-2xl shadow p-5">
          <h2 className="text-lg font-semibold mb-3">Tabel (namen & leeftijden)</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="border px-4 py-2">#</th>
                  <th className="border px-4 py-2">Naam</th>
                  <th className="border px-4 py-2">Leeftijd</th>
                </tr>
              </thead>
              <tbody>
                {students.map((s, idx) => (
                  <tr key={s.id} className="odd:bg-white even:bg-gray-50">
                    <td className="border px-4 py-2">{idx + 1}</td>
                    <td className="border px-4 py-2">{s.name}</td>
                    <td className="border px-4 py-2">{s.age}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Bonus: laten zien hoeveel keer een getal voorkomt */}
        <section className="bg-white rounded-2xl shadow p-5">
          <h2 className="text-lg font-semibold mb-3">Bonus: frequenties van getallen</h2>
          <ul className="list-disc list-inside">
            {Object.entries(
              numbers.reduce<Record<number, number>>(
                (acc, n) => ({ ...acc, [n]: (acc[n] || 0) + 1 }),
                {}
              )
            ).map(([value, count]) => (
                <li key={value}>
                  Getal <strong>{value}</strong> komt <strong>{count}x</strong> voor
                </li>
              ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default App


