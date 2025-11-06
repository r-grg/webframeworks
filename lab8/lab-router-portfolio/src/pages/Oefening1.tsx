import { createContext, useContext, useState } from "react";

type Ctx = { text: string; setText: (v: string) => void };
const TextCtx = createContext<Ctx | null>(null);
const useText = () => {
  const v = useContext(TextCtx);
  if (!v) throw new Error("useText outside provider");
  return v;
};

const FourthLine = () => <p>{useText().text}</p>;
const ThirdLine = () => (<><p>Follow the white rabbit.</p><FourthLine /></>);
const SecondLine = () => (<><p>The matrix has you...</p><ThirdLine /></>);
const FirstLine  = () => (<><p>Wake Up, Neo...</p><SecondLine /></>);

export default function Oefening1() {
  const [text, setText] = useState("Knock, Knock, Neo");
  return (
    <TextCtx.Provider value={{ text, setText }}>
      <h2>Wake Up Neo</h2>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <div style={{background:"#000",color:"#4AF626",display:"flex",flexDirection:"column",padding:20,marginTop:12,borderRadius:8}}>
        <FirstLine />
      </div>
    </TextCtx.Provider>
  );
}
