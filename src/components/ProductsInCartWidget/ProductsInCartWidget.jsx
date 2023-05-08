import React from "react";
import ProductInCart from "../ProductInCart/ProductInCart";
import "./ProductsInCartWidget.css";
import { useCartContext } from "../../contexts/CartContextProvider";
import { useGlobalContext } from "../../contexts/GlobalContextProvider";

function ProductsInCartWidget() {
  // productsInCart = { productsInCart };
  // getVariationDetails = { getVariationDetails };
  // currency = { currency };

  const {productsInCart} = useCartContext()
  const {globalCurrency} = useGlobalContext()



  return (
    <div className="ProductsInCartWidget">
      {productsInCart.map((productInCart, index) => {
        return (
          <ProductInCart
            key={index}
            productInCart={productInCart}
            currency={globalCurrency}
          />
        );
      })}
    </div>
  );
}

export default ProductsInCartWidget;
