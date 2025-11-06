import { createContext, useContext } from "react";

export type Color = "red" | "blue" | "green";

export type SettingsContextValue = {
  color: Color;
  setColor: (c: Color) => void;
};

export const SettingsContext = createContext<SettingsContextValue | null>(null);

export function useSettings() {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error("useSettings must be used inside SettingsContext.Provider");
  return ctx;
}
