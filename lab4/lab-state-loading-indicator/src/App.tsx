import { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import "./App.css";

export default function App() {
  const [loading, setLoading] = useState(false);

  const handleStart = () => {
    setLoading(true);

    // Na 3 seconden weer stoppen met laden
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <div className="container">
      {loading ? (
        <TailSpin
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="loading"
        />
      ) : (
        <button onClick={handleStart}>Start loading</button>
      )}
    </div>
  );
}
