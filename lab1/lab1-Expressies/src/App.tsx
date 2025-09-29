import './App.css'
import { type JSX } from "react";

function App() {
  let random: number = Math.random();
  let getal1: number = Math.floor(Math.random() * 10);
  let getal2: number = Math.floor(Math.random() * 10);

  function add(a: number, b: number){
    return a + b;
  }
  function multiply(a: number, b: number){
    return a * b;
  }

  let condRend:  JSX.Element;
  if(random < 0.5){
    condRend = <p>{getal1} + {getal2} : {add(getal1,getal2)}</p>
  }else{
    condRend = <p>{getal1} * {getal2} : {multiply(getal1,getal2)}</p>

  }
  return (
    <>
      <div>
        <h1>lab1: Expressies</h1>
        <div >
          <p>Random: {random}</p>
          <p>Getal 1: {getal1}</p>
          <p>Getal 2: {getal2}</p>
          <p>{condRend}</p>
        </div>
      </div>
    </>
  )
}

export default App
