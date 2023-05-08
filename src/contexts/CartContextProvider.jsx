import React, { useState } from "react";
import { createContext, useContext } from "react";

const CartContext = createContext();

function useCartContext() {
  const context = useContext(CartContext);
  return context;
}


function CartContextProvider({ children }) {
  const [productsInCart, setProductsInCart] = useState([]);
  const [subtotal, setSubtotal] = useState(1010);
  const [estimatedTax, setEstimatedTax] = useState(230);
  const [total, setTotal] = useState(1240);
  
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
