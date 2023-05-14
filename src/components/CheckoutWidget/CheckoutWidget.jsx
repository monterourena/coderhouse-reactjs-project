import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./CheckoutWidget.css";
import CheckoutWidgetTemplate from "./CheckoutWidgetTemplate";
import { generateOrder } from "../../firebase/setPurchaseOrder";

function CheckoutWidget({
  total,
  subtotal,
  estimatedTax,
  globalCartCount,
  productsInCart,
  setProductsInCart,
}) {
  const [isCheckout, setIsCheckout] = useState(true);
  const navigate = useNavigate();
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

  const onClickConfirm = async (formData) => {
    const price = { total, subtotal, estimatedTax };
    const orderId = await generateOrder({ formData, price, productsInCart });

    setIsCheckout(!isCheckout);
    setProductsInCart([]);
    navigate(`/order/${orderId}`);
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
