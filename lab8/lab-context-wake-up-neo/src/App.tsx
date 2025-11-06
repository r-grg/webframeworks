import { TextProvider, useText } from "./context/TextContext";

interface LineProps {}

/** Lines now read from context (no props needed) */
const FourthLine = (_props: LineProps) => {
  const { text } = useText();
  return <p>{text}</p>;
};

const ThirdLine = () => (
  <>
    <p>Follow the white rabbit.</p>
    <FourthLine />
  </>
);

const SecondLine = () => (
  <>
    <p>The matrix has you...</p>
    <ThirdLine />
  </>
);

const FirstLine = () => (
  <>
    <p>Wake Up, Neo...</p>
    <SecondLine />
  </>
);

/** Separate component to show the input + console */
function Console() {
  const { text, setText } = useText();

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ marginBottom: 12 }}
      />
      <div
        style={{
          backgroundColor: "black",
          color: "#4AF626",
          display: "flex",
          flexDirection: "column",
          padding: 20,
          borderRadius: 8,
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, monospace",
        }}
      >
        <FirstLine />
      </div>
    </>
  );
}

export default function App() {
  return (
    <TextProvider>
      <Console />
    </TextProvider>
  );
}
