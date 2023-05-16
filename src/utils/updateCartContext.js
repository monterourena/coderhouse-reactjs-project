function updateCartContext(productsInCart) {
  let subtotal = 0;
  let estimatedTax = 0;
  let total = 0;
  let itemsInCart = 0;

  productsInCart.forEach((product) => {
    itemsInCart += product.quantitySelected;
    subtotal += product.price*product.quantitySelected;
  });

  estimatedTax = Math.round(subtotal * 0.13);
  total = estimatedTax + subtotal;
  return { subtotal, estimatedTax, total, itemsInCart };
}

export default updateCartContext;
