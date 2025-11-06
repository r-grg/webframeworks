import { createContext, useContext, useState, type ReactNode } from "react";

type TextContextValue = {
  text: string;
  setText: (value: string) => void;
};

const TextContext = createContext<TextContextValue | undefined>(undefined);

export function TextProvider({ children }: { children: ReactNode }) {
  const [text, setText] = useState("Knock, Knock, Neo");
  return (
    <TextContext.Provider value={{ text, setText }}>
      {children}
    </TextContext.Provider>
  );
}

export function useText() {
  const ctx = useContext(TextContext);
  if (!ctx) throw new Error("useText must be used inside a TextProvider");
  return ctx;
}
