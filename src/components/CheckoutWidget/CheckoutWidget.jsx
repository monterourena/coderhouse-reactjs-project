import React from "react";
import "./CheckoutWidget.css";
import CheckoutWidgetTemplate from "./CheckoutWidgetTemplate";

function CheckoutWidget() {
  const currency = { code: "USD", symbol: "$" };
  const shipping = "FREE";
  const subtotal = 999;
  const estimatedTax = 278;
  const total = 1277;
  return (
    <CheckoutWidgetTemplate
      currency={currency}
      shipping={shipping}
      subtotal={subtotal}
      estimatedTax={estimatedTax}
      total={total}
    />
  );
}

export default CheckoutWidget;
