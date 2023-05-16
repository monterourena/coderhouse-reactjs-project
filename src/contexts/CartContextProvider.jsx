import React, { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

const CartContext = createContext();

function useCartContext() {
  const context = useContext(CartContext);
  return context;
}


function CartContextProvider({ children }) {

  const initialCart = getLocalStorage("cart")
  const [productsInCart, setProductsInCart] = useState(initialCart);
  const [subtotal, setSubtotal] = useState(1010);
  const [estimatedTax, setEstimatedTax] = useState(230);
  const [total, setTotal] = useState(1240);

  useEffect(()=>{
    setLocalStorage("cart", productsInCart)
  },[productsInCart])



  
  return (
    <CartContext.Provider
      value={{
        productsInCart,
        setProductsInCart,
        subtotal,
        setSubtotal,
        estimatedTax,
        setEstimatedTax,
        total,
        setTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { useCartContext, CartContextProvider };
