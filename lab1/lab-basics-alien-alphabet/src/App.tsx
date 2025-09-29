
import { useMemo} from 'react';
import './App.css'

function App() {
  // 1) Alle letters van het alfabet (A..Z) via ASCII codes
  //    65 = 'A', 90 = 'Z'
  const letters = useMemo(
    () => Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)),
    []
  );

  // 2) URLs naar de afbeeldingen in de GitHub repo (hoofdletters)
  const alphabetImages = useMemo(
    () => letters.map((L) => `https://raw.githubusercontent.com/slimmii/alien-alphabet/master/${L}.png`),
    [letters]
  );



  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="space-y-1">
          <h1 className="text-2xl font-bold">lab-basics-alien-alphabet</h1>
          <p className="text-sm text-gray-600">
            Weergave van een buitenaards alfabet: 26 letters met bijhorende afbeelding.
          </p>
        </header>

        {/* 3) Map: elk element als <img> in een <button> */}
        <section className="bg-white rounded-2xl shadow p-5">
          <h2 className="text-lg font-semibold mb-4">Alphabet grid</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
            {alphabetImages.map((src, i) => (
              <button
                type="button"
                key={letters[i]}
                // onClick={() => setSelected(letters[i])}
                className="group rounded-2xl border bg-gray-50 hover:bg-gray-100 transition p-3 flex flex-col items-center"
                aria-label={`Kies letter ${letters[i]}`}
              >
                <img
                  src={src}
                  alt={`Alien letter ${letters[i]}`}
                  className="w-16 h-16 object-contain"
                />
                <span className="mt-2 text-xs text-gray-700">
                  {letters[i]}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Uitleg: ASCII -> string */}
        <section className="bg-white rounded-2xl shadow p-5">
          <h2 className="text-lg font-semibold mb-2">ASCII naar letter</h2>
          <p className="text-sm text-gray-700">
            We maken de letters met <code>Array.from</code> en
            {" "}
            <code>String.fromCharCode(65 + i)</code>, waarbij 65 staat voor 'A'.
          </p>
        </section>
      </div>
    </div>
  );
}

export default App
