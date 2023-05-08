import React, { useEffect } from "react";
import ViewWithHeader from "../../components/ViewWithHeader/ViewWithHeader";
import ProductsInCartWidged from "../../components/ProductsInCartWidget/ProductsInCartWidget";
import CheckoutWidget from "../../components/CheckoutWidget/CheckoutWidget";
import { useGlobalContext } from "../../contexts/GlobalContextProvider";
import { useCartContext } from "../../contexts/CartContextProvider";

function CartScreen() {
  useEffect(()=>{
    setGlobalTheme("light");
  },[])
  
  const { setGlobalTheme, globalCurrency:currency } = useGlobalContext();
  const {total, subtotal, estimatedTax, productsInCart} = useCartContext()
  

  // !Este estado se actualiza cuando se agrega el producto al carrito. El fetch de la información se hace en la página del producto
  // !El detalle del producto debe sacarse del array cuando el produco se quita del carrito
  const variationsInCartInfo = [
    {
      pid: 0,
      vid: 0,
      title: "iPhone 14 Pro",
      description: "128 Gb",
      price: 999,
      stock: 10,
      picture: "../../../demo/product/iphone-14/iphone-14-detail.jpg"
    },
    {
      pid: 0,
      vid: 1,
      title: "iPhone 14 Pro",
      description: "256 Gb",
      price: 1099,
      stock: 10,
      picture: "../../../demo/product/iphone-14/iphone-14-detail.jpg"
    },
    {
      pid: 0,
      vid: 2,
      title: "iPhone 14 Pro Max",
      description: "128 Gb",
      price: 1999,
      stock: 10,
      picture: "../../../demo/product/iphone-14/iphone-14-detail.jpg"
    },
    {
      pid: 0,
      vid: 3,
      title: "iPhone 14 Pro Max",
      description: "259 Gb",
      price: 2499,
      stock: 10,
      picture: "../../../demo/product/iphone-14/iphone-14-detail.jpg"
    },
    {
      pid: 0,
      vid: 4,
      title: "iPhone 14 Pro Max",
      description: "1 Tb",
      price: 3899,
      stock: 10,
      picture: "../../../demo/product/iphone-14/iphone-14-detail.jpg"
    }
  ]
  const getVariationDetails = (pid, vid) =>
    variationsInCartInfo.find(
      (variation) => variation.pid === pid && variation.vid === vid
    );

  return (
    <ViewWithHeader
      title={"Review your bag."}
      description={"Free delivery and free returns."}
      rightPanel={true}
    >
      <ProductsInCartWidged
        productsInCart={productsInCart}
        getVariationDetails={getVariationDetails}
        currency={currency}
      />
      <CheckoutWidget
        subtotal={subtotal}
        estimatedTax={estimatedTax}
        total={total}
        currency={currency}
      />
    </ViewWithHeader>
  );
}

export default CartScreen;
