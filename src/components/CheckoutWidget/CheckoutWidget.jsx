import React, { useEffect, useState } from "react";
import "./CheckoutWidget.css";
import CheckoutWidgetTemplate from "./CheckoutWidgetTemplate";
import { useCartContext } from "../../contexts/CartContextProvider";

function CheckoutWidget({ total, subtotal, estimatedTax, globalCartCount }) {
  const { setProductsInCart } = useCartContext();

  const [isCheckout, setIsCheckout] = useState(true);

  // Form is disabled if there are no items in the cart
  useEffect(() => {
    if (!globalCartCount) {
      setIsCheckout(true);
    }
  }, [globalCartCount]);

  const onClickCheckout = () => {
    if (globalCartCount) {
      setIsCheckout(!isCheckout);
    }
  };

  const onClickConfirm = (formFata) => {
    console.log(formFata);
    setIsCheckout(!isCheckout);
    setProductsInCart([]);
  };

  const currency = { code: "USD", symbol: "$" };
  const shipping = "FREE";

  return (
    <CheckoutWidgetTemplate
      isCheckout={isCheckout}
      currency={currency}
      shipping={shipping}
      subtotal={subtotal}
      estimatedTax={estimatedTax}
      total={total}
      onClickCheckout={onClickCheckout}
      onClickConfirm={onClickConfirm}
      globalCartCount={globalCartCount}
    />
  );
}

export default CheckoutWidget;
