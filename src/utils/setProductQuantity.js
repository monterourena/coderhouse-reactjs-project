function setProductQuantity({ updatedProduct, productsInCart }) {
  const productIndex = productsInCart.findIndex((product) => {
    return (
      product.pid === updatedProduct.pid && product.modelIndex === updatedProduct.modelIndex
    );
  });

  productsInCart[productIndex] = updatedProduct

  return productsInCart;
}

export default setProductQuantity;
