import { useCartContext } from "../../contexts/CartContextProvider";
import useSetProductQuantity from "../../hooks/useSetProductQuantity";
import ProductInCartTemplate from "./ProductInCartTemplate";

function ProductInCart({ productInCart, currency }) {
  const { productsInCart, setProductsInCart } = useCartContext();

  const optionsList = Array.from(Array(productInCart.stock).keys());

  const onSelectorChange = (event) => {
    const updatedProduct = {
      ...productInCart,
      quantitySelected: parseInt(event.target.value),
    };

    const updatedProducts = useSetProductQuantity({
      updatedProduct,
      productsInCart,
    });
    setProductsInCart([...updatedProducts]);
  };

  const onRemove = (productInCart) => {
    const updatedProducts = productsInCart.filter((product)=>product.pid !== productInCart.pid || product.vid !== productInCart.vid)
    setProductsInCart([...updatedProducts]);
  };

  return (
    <ProductInCartTemplate
      productInCart={productInCart}
      currency={currency}
      quantitySelected={productInCart.quantitySelected}
      optionsList={optionsList}
      onChange={onSelectorChange}
      onRemove={onRemove}
    />
  );
}

export default ProductInCart;
