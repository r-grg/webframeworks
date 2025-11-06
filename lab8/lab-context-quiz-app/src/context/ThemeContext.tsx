import { createContext, useContext, useMemo, useState } from "react";

type Mode = "light" | "dark";
type Theme = {
  mode: Mode;
  setMode: (m: Mode) => void;
  // tokens
  bg: string; card: string; text: string; subtle: string;
  border: string; correct: string; wrong: string;
};

const ThemeContext = createContext<Theme | null>(null);
export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used in <ThemeProvider>");
  return ctx;
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<Mode>("light");
  const t = useMemo<Theme>(() => {
    const isDark = mode === "dark";
    return {
      mode,
      setMode,
      bg: isDark ? "#0f172a" : "#f8fafc",
      card: isDark ? "#111827" : "#ffffff",
      text: isDark ? "#e5e7eb" : "#0f172a",
      subtle: isDark ? "#94a3b8" : "#64748b",
      border: isDark ? "#374151" : "#e5e7eb",
      correct: isDark ? "#16653455" : "#22c55e33",
      wrong: isDark ? "#7f1d1d55" : "#ef444433",
    };
  }, [mode]);

  return <ThemeContext.Provider value={t}>{children}</ThemeContext.Provider>;
}
