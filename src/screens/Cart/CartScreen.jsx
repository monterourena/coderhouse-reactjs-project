import React from "react";
import ViewWithHeader from "../../components/ViewWithHeader/ViewWithHeader";
import ProductsInCartWidged from "../../components/ProductsInCartWidget/ProductsInCartWidget";
import CheckoutWidget from "../../components/CheckoutWidget/CheckoutWidget";

function CartScreen() {
  // !Esto llega del cartContext.
  const productsInCart = [
    { pid: 0, vid: 3, quantitySelected: 10 },
    { pid: 4, vid: 2, quantitySelected: 7 },
    { pid: 7, vid: 3, quantitySelected: 3 },
    { pid: 0, vid: 3, quantitySelected: 10 },
    { pid: 4, vid: 2, quantitySelected: 7 },
    { pid: 7, vid: 3, quantitySelected: 10 },
  ];
  const subTotal = 999;
  const estimatedTaxes = 278;
  const total = 1277;

  const currency = { code: "USD", symbol: "$" }; // !Esto viene del GlobalContext

  // !Este estado se actualiza cuando se agrega el producto al carrito. El fetch de la información se hace en la página del producto
  // !El detalle del producto debe sacarse del array cuando el produco se quita del carrito
  const variationsInCartInfo = [
    {
      pid: 0,
      vid: 3,
      price: 999,
      stock: 10,
      title: "iPhone 14 Pro Max",
      description: "256 GB",
      picture: "../../../demo/product/iphone-14/iphone-14-detail.jpg",
    },
    {
      pid: 4,
      vid: 2,
      price: 2999,
      stock: 10,
      title: "iPad Air",
      description: "128 GB",
      picture: "../../../demo/product/iphone-14/iphone-14-detail.jpg",
    },
    {
      pid: 7,
      vid: 3,
      price: 3999,
      stock: 10,
      title: "Macbook Pro",
      description: "1 TB",
      picture: "../../../demo/product/iphone-14/iphone-14-detail.jpg",
    },
  ];
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
        subTotal={subTotal}
        estimatedTaxes={estimatedTaxes}
        total={total}
        currency={currency}
      />
    </ViewWithHeader>
  );
}

export default CartScreen;
