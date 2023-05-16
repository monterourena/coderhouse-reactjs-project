import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPurchaseOrderFromFirestore } from "../../firebase/getPurchaseOrder";
import OrderDetailsContainer from "../../components/OrderDetailsContainer/OrderDetailsContainer";
import OrderDataDisplay from "../../components/OrderDataDisplay/OrderDataDisplay";
import OrderProductsDisplay from "../../components/OrderProductsDisplay/OrderProductsDisplay";
import OrderPriceDisplay from "../../components/OrderPriceDisplay/OrderPriceDisplay";
import updateCartContext from "../../utils/updateCartContext";
import { useCartContext } from "../../contexts/CartContextProvider";
import { useGlobalContext } from "../../contexts/GlobalContextProvider";

function OrderScreen() {
  const { oid: orderId } = useParams();
  const [order, setOrder] = useState("loading");
  const { productsInCart } = useCartContext();
  const { setGlobalCartCount } = useGlobalContext();

  useEffect(() => {
    (async () => {
      const orderFromFirestore = await getPurchaseOrderFromFirestore(orderId);
      setOrder(orderFromFirestore);
    })();
  }, []);

  // Cart count reset after placing an order
  useEffect(() => {
    const { itemsInCart } = updateCartContext(productsInCart);
    setGlobalCartCount(itemsInCart);
  }, []);

  if (order === "loading") return "";

  const title = order ? "Your order has been placed." : "Order not found.";
  const subtitle = order ? order?.date : "";

  return (
    <OrderDetailsContainer headerTitle={title} headerDate={subtitle}>
      {!!order && (
        <>
          <OrderDataDisplay
            name={order?.userData.name}
            lastName={order?.userData.lastName}
            orderId={order.oid}
            email={order?.userData.email}
            phone={order?.userData.phone}
          />
          <OrderProductsDisplay products={order?.products} />
          <OrderPriceDisplay
            total={order?.price.total}
            subtotal={order?.price.subtotal}
            tax={order?.price.estimatedTax}
          />
        </>
      )}
    </OrderDetailsContainer>
  );
}

export default OrderScreen;

//
