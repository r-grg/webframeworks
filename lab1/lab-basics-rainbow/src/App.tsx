
import { useState } from 'react';
import './App.css'

function App() {
  // 100 unieke HSL-kleuren (0° t.e.m. 360°)
  const colors = Array.from({ length: 100 }, (_, i) => `hsl(${(i * 360) / 100}, 100%, 50%)`);

  // Bonus: regenboog omdraaien met flex-direction
  const [reversed, setReversed] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6">
      <div className="max-w-2xl mx-auto space-y-6">
        <header>
          <h1 className="text-2xl font-bold">lab-basics-rainbow</h1>
          <p className="text-sm text-gray-600">100 HSL-kleuren, weergegeven als verticale balken (inline styles).</p>
        </header>

        <label className="inline-flex items-center gap-2 text-sm">
          <input type="checkbox" checked={reversed} onChange={(e) => setReversed(e.target.checked)} />
          Regenboog omdraaien (tip: <code>flex-direction</code>)
        </label>

        {/* Container met flex, kolom of kolom-omgekeerd */}
        <div
          style={{
            display: "flex",
            flexDirection: reversed ? "column-reverse" : "column",
            width: "100%",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          }}
        >
          {colors.map((c, i) => (
            <div key={i} style={{ width: "100%", height: "4px", backgroundColor: c }} />
          ))}
        </div>

        {/* Uitleg */}
        <section className="bg-white rounded-2xl shadow p-5">
          <h2 className="text-lg font-semibold mb-2">Hoe werkt dit?</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>
              De kleuren-array: <code>Array.from(&#123;length: 100&#125;, (_, i) =&gt; `hsl(${"${"}i * 360 / 100${"}"}, 100%, 50%)`)</code>.
            </li>
            <li>
              We tonen elke kleur met <code>map</code> als een <code>&lt;div&gt;</code> met inline <code>style</code> voor breedte, hoogte en achtergrondkleur.
            </li>
            <li>
              Met <code>flex</code> en <code>flex-direction</code> zetten we de balken onder elkaar en kunnen we de volgorde omdraaien.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default App
