import React from "react";
import "./OrderPriceDisplay.css";

function OrderPriceDisplay({ total, subtotal, tax }) {
  return (
    <div className="OrderPriceDisplay">
      <div className="OrderPriceDisplay--SubtotalTaxContainer">
        <p className="OrderPriceDisplay--SubtotalText">Subtotal</p>
        <p className="OrderPriceDisplay--SubtotalValue">$ {subtotal}</p>
        <p className="OrderPriceDisplay--TaxText">Tax</p>
        <p className="OrderPriceDisplay--TaxValue">$ {tax}</p>
      </div>
      <div className="OrderPriceDisplay--TotalContainer">
        <p className="TotalContainer--TotalText">Total</p>
        <p className="TotalContainer--TotalValue">$ {total}</p>
      </div>
    </div>
  );
}

export default OrderPriceDisplay;
