import React from "react";
import ProductInCart from "../ProductInCart/ProductInCart";
import "./ProductsInCartWidget.css"

function ProductsInCartWidget({productsInCart, getVariationDetails, currency}) {
  console.log(productsInCart)
  return (
    <div className="ProductsInCartWidget">
      {productsInCart.map((productInCart, index) => {
        const details = getVariationDetails(
          productInCart.pid,
          productInCart.vid
        );
        return <ProductInCart quantitySelected={productInCart.quantitySelected} key={index} details={details} currency={currency}/>;
      })}
    </div>
  );
}

export default ProductsInCartWidget;
