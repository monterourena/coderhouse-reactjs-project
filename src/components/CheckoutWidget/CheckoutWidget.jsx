import React, { useState } from "react";
import "./CheckoutWidget.css";
import CheckoutWidgetTemplate from "./CheckoutWidgetTemplate";

function CheckoutWidget() {

  const [isCheckout, setIsCheckout]= useState(false)
  const onClick = ()=>{}

  const currency = { code: "USD", symbol: "$" };
  const shipping = "FREE";
  const subtotal = 999;
  const estimatedTax = 278;
  const total = 1277;
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
