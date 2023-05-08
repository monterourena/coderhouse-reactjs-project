import React from "react";

function useSetProductQuantity({ updatedProduct, productsInCart }) {
  const productIndex = productsInCart.findIndex((product) => {
    return (
      product.pid === updatedProduct.pid && product.vid === updatedProduct.vid
    );
  });

  productsInCart[productIndex] = updatedProduct

  return productsInCart;
}

export default useSetProductQuantity;
