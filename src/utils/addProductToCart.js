import { showToast } from "./ShowToast";

const addProductToCart = (props) => {
  const { productToBeAdded, productsInCart } = props;
  const productIndex = productsInCart.findIndex(
    (productInCart) =>
      productInCart.pid === productToBeAdded.pid &&
      productInCart.modelIndex === productToBeAdded.modelIndex
  );

  if (productIndex === -1) {
    return [...productsInCart, productToBeAdded];
  }

  const newQuantity =
    productsInCart[productIndex].quantitySelected +
    productToBeAdded.quantitySelected;

  const stock = productsInCart[productIndex].stock;

  if (newQuantity >= stock) {
    showToast("stock-limit");
    productsInCart[productIndex].quantitySelected = stock;
  } else {
    productsInCart[productIndex].quantitySelected = newQuantity;
  }

  return [...productsInCart];
};

export { addProductToCart };

// const productToBeAdded = {
//     ...selectedModel,
//     quantitySelected: productCounter,
//     pid: currentProduct.pid,
//     modelIndex: selectedModelIndex,
//   };
