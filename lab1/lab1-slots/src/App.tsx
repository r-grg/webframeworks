
import './App.css'

function App() {

  // three random slots, 0..4 inclusive
  const slot1: number = Math.floor(Math.random() * 5);
  const slot2: number = Math.floor(Math.random() * 5);
  const slot3: number = Math.floor(Math.random() * 5);

  // images available in the public folder (served from /)
  const slotImages = [
    '/slot-cherry.png',
    '/slot-lemon.png',
    '/slot-melon.png',
    '/slot-prune.png',
    '/slot-seven.png'
  ];

  const names = ['Kers', 'Citroen', 'Meloen', 'Pruim', 'Zeven'];

  const message = (slot1 === slot2 && slot2 === slot3) ? 'Je hebt gewonnen!' : 'Je hebt verloren!';

  return (
    <div className="App">
      <h1>Lab1-slots</h1>

      <section>
        <h2>Alle mogelijke afbeeldingen</h2>
        <div className="gallery">
          {slotImages.map((src, i) => (
            <img key={i} src={src} alt={names[i]} width={60} height={60} />
          ))}
        </div>
      </section>

      <section>
        <h2>Jouw beurt</h2>
        <div className="slots">
          <img src={slotImages[slot1]} alt={names[slot1]} width={80} height={80} />
          <img src={slotImages[slot2]} alt={names[slot2]} width={80} height={80} />
          <img src={slotImages[slot3]} alt={names[slot3]} width={80} height={80} />
        </div>
        <p className="result">{message}</p>
      </section>
    </div>
  )
}

export default App
