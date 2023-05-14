import React, { useEffect } from "react";
import ViewWithHeader from "../../components/ViewWithHeader/ViewWithHeader";
import ProductsInCartWidged from "../../components/ProductsInCartWidget/ProductsInCartWidget";
import CheckoutWidget from "../../components/CheckoutWidget/CheckoutWidget";
import { useGlobalContext } from "../../contexts/GlobalContextProvider";
import { useCartContext } from "../../contexts/CartContextProvider";
import updateCartContext from "../../utils/updateCartContext";

function CartScreen() {
  const {
    setGlobalTheme,
    setGlobalFooterTheme,
    setGlobalCartCount,
    globalCartCount,
    globalCurrency: currency,
  } = useGlobalContext();

  const { total, subtotal, estimatedTax, productsInCart, setProductsInCart } = useCartContext();
  const { setTotal, setSubtotal, setEstimatedTax } = useCartContext();

  useEffect(() => {
    setGlobalTheme("light");
    setGlobalFooterTheme("light");
  }, []);

  useEffect(() => {
    const { subtotal, estimatedTax, total, itemsInCart } =
      updateCartContext(productsInCart);

    setGlobalCartCount(itemsInCart);
    setSubtotal(subtotal);
    setTotal(total);
    setEstimatedTax(estimatedTax);
  }, [productsInCart]);

  return (
    <ViewWithHeader
      title={"Review your bag."}
      description={"Free delivery and free returns."}
      rightPanel={true}
    >
      <ProductsInCartWidged />
      <CheckoutWidget
        subtotal={subtotal}
        estimatedTax={estimatedTax}
        total={total}
        currency={currency}
        globalCartCount={globalCartCount}
        productsInCart={productsInCart}
        setProductsInCart={setProductsInCart}
      />
    </ViewWithHeader>
  );
}

export default CartScreen;
