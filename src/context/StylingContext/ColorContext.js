import { createContext, useContext } from "react";

const ColorContext = createContext();

export function useColors() {
  return useContext(ColorContext);
}

export function ColorProvider({ children }) {
  const colors = {
    primary: "#56c596",
    secondary: "#205072",
    light: "#cff4d2",
    shadowHard: "#329d9c",
    shadowLight: "#7be495",
    text: "#fff",
    error: "#C73E1D",
  };

  return (
    <ColorContext.Provider value={colors}>{children}</ColorContext.Provider>
  );
}
