
import './App.css'

function App() {
  const NUMBER_SLOTS = 3;
  // three random slots, 0..4 inclusive
  // const slot1: number = Math.floor(Math.random() * 5);
  // const slot2: number = Math.floor(Math.random() * 5);
  // const slot3: number = Math.floor(Math.random() * 5);

  // images available in the public folder (served from /)
  const slotImages = [
    '/slot-cherry.png',
    '/slot-lemon.png',
    '/slot-melon.png',
    '/slot-prune.png',
    '/slot-seven.png'
  ];
  const getRandomslots = (numberOfSlots: number) => {
    let slots : number[] = [];
    for(let i = 0; i< numberOfSlots; i++){
      slots.push(Math.floor(Math.random() * 5))
    };
    return slots;
  }
  let slots = getRandomslots(NUMBER_SLOTS);
  const names = ['Kers', 'Citroen', 'Meloen', 'Pruim', 'Zeven'];


  let winningSlot: boolean = slots.every((slot) => slot === slots[0]);


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
          {slots.map((slot,i) => 
            <img src={slotImages[slot]} alt={names[i]} width={60} height={60}  />
          )}
        </div>
         <p className="result">{winningSlot ? 'Je hebt gewonnen!' : 'Je hebt verloren!'}</p>
      </section>
    </div>
  )
}

export default App
