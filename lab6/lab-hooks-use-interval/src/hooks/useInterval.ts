import { useEffect, useRef } from "react";

/**
 * Roept `callback` elke `delay` ms aan zolang `running === true`.
 * Veranderingen aan `callback` of `delay` worden veilig opgepikt.
 */
export function useInterval(
  callback: () => void,
  delay: number,
  running: boolean
) {
  const savedCallback = useRef<() => void>(() => {});

  // Hou de nieuwste callback bij zonder het interval te resetten
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Beheer het interval
  useEffect(() => {
    if (!running) return;                 // uit => geen interval
    if (delay == null || delay < 0) return;

    const id = setInterval(() => {
      savedCallback.current();
    }, delay);

    return () => clearInterval(id);       // opruimen/herstart bij wijzigingen
  }, [running, delay]);
}
