import React, { useEffect } from "react";
import updateCartContext from "../utils/updateCartContext";
import { useCartContext } from "./CartContextProvider";
import { useGlobalContext } from "./GlobalContextProvider";

function UpdateCartCount({ children }) {
  const { setGlobalCartCount } = useGlobalContext();
  const { productsInCart } = useCartContext();

  useEffect(() => {
    const { itemsInCart } = updateCartContext(productsInCart);
    setGlobalCartCount(itemsInCart);
  }, [productsInCart]);
  return <>{children}</>;
}

export default UpdateCartCount;
