import React from "react";
import ProductInCart from "../ProductInCart/ProductInCart";
import NotFoundScreen from "../../screens/Messages/NotFoundScreen";
import { useCartContext } from "../../contexts/CartContextProvider";
import { useGlobalContext } from "../../contexts/GlobalContextProvider";
import "./ProductsInCartWidget.css";

function ProductsInCartWidget() {
  // productsInCart = { productsInCart };
  // getVariationDetails = { getVariationDetails };
  // currency = { currency };

  const { productsInCart } = useCartContext();
  const { globalCurrency } = useGlobalContext();

  if (!productsInCart.length) {
    return (
      <NotFoundScreen
        fullScreen={false}
        title="You have not added products to your cart yet."
        ctaMessage="Discover our products"
        theme={"light"}
      />
    );
  }

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
