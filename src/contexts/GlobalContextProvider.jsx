import React, { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import { getProductsFromFirestore } from "../firebase/getDocument";
import { getCategoriesFromFirestore } from "../firebase/getDocument";
import { getModelsFromFirestore } from "../firebase/getDocument";

const GlobalContext = createContext();

function useGlobalContext() {
  const context = useContext(GlobalContext);
  return context;
}

function GlobalContextProvider({ children }) {
  const [globalTheme, setGlobalTheme] = useState("light");
  const [globalCartCount, setGlobalCartCount] = useState(0);
  const [globalCurrency, setGlobalCurrency] = useState({code:"USD",symbol:"$"})
  const [globalProducts, setGlobalProducts] = useState([])
  const [globalCategories, setGlobalCategories] = useState([])
  const [globalModels, setGlobalModels] = useState([])

  useEffect(()=>{
    (async()=>{
      const products = await getProductsFromFirestore();
      const categories = await getCategoriesFromFirestore();
      const models = await getModelsFromFirestore();
      setGlobalProducts(products);
      setGlobalCategories(categories)
      setGlobalModels(models)
    })()
  },[])  

  console.log("Global Products:", globalProducts)
  console.log("Global Categories:", globalCategories)
  console.log("Global Models:", globalModels)

  return (
    <GlobalContext.Provider
      value={{
        globalTheme,
        setGlobalTheme,
        globalCartCount,
        setGlobalCartCount,
        globalCurrency,
        setGlobalCurrency,
        globalProducts,
        globalCategories,
        globalModels
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export { useGlobalContext, GlobalContextProvider };
