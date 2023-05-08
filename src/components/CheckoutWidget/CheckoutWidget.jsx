import React, { useState } from "react";
import "./CheckoutWidget.css";
import CheckoutWidgetTemplate from "./CheckoutWidgetTemplate";

function CheckoutWidget({total, subtotal, estimatedTax}) {

  const [isCheckout, setIsCheckout]= useState(true)
  const onClick = ()=>{}

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
      onClick={onClick}
    />
  );
}

export default CheckoutWidget;
