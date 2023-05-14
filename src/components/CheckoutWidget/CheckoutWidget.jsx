import React, { useEffect, useState } from "react";
import "./CheckoutWidget.css";
import CheckoutWidgetTemplate from "./CheckoutWidgetTemplate";
import { useCartContext } from "../../contexts/CartContextProvider";

function CheckoutWidget({ total, subtotal, estimatedTax, globalCartCount, productsInCart, setProductsInCart }) {

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
    const date = new Date();
    const {
      inputEmail: email,
      inputLastName: lastName,
      inputName: name,
      inputPhone: phone,
    } = formFata;

    const purchaseOrder = {
      orderId: "agd89h2uibhd7",
      state:"generated",
      userData:{
        email,
        lastName,
        name,
        phone,
      },
      price:{
        total, 
        subtotal, 
        estimatedTax
      },
      products: productsInCart,
      date: date.toUTCString(),
    };
    console.log("Purchase Order: ", purchaseOrder);
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
