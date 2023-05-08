import React, { useState } from "react";
import { createContext, useContext } from "react";

const GlobalContext = createContext();

function useGlobalContext() {
  const context = useContext(GlobalContext);
  return context;
}

function GlobalContextProvider({ children }) {
  const [globalTheme, setGlobalTheme] = useState("light");
  const [globalCartCount, setGlobalCartCount] = useState(0);
  const [globalCurrency, setGlobalCurrency] = useState({code:"USD",symbol:"$"})
  

  return (
    <GlobalContext.Provider
      value={{
        globalTheme,
        setGlobalTheme,
        globalCartCount,
        setGlobalCartCount,
        globalCurrency,
        setGlobalCurrency
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export { useGlobalContext, GlobalContextProvider };
