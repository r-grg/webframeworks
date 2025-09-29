export default function MultiplicationTable() {
  const size = 30;
  const rows = Array.from({ length: size }, (_, i) => i + 1);
  const cols = Array.from({ length: size }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6">
      <div className="max-w-5xl mx-auto space-y-8">
        <header>
          <h1 className="text-2xl font-bold">lab-basics-multiplication-tables</h1>
          <p className="text-sm text-gray-600">
            Vermenigvuldigingstabellen van 1 t.e.m. 10.
          </p>
        </header>

        <section className="bg-white rounded-2xl shadow p-5 overflow-x-auto">
          <table className="border-collapse min-w-full text-center">
            <thead>
              <tr>
                <th className="border px-3 py-2 bg-gray-100">×</th>
                {cols.map((c) => (
                  <th key={c} className="border px-3 py-2 bg-gray-100">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r}>
                  <th className="border px-3 py-2 bg-gray-100">{r}</th>
                  {cols.map((c) => (
                    <td key={c} className="border px-3 py-2">
                      {r * c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}
