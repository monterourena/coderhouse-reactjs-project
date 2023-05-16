import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPurchaseOrderFromFirestore } from "../../firebase/getPurchaseOrder";
import OrderDetailsContainer from "../../components/OrderDetailsContainer/OrderDetailsContainer";
import OrderDataDisplay from "../../components/OrderDataDisplay/OrderDataDisplay";
import OrderProductsDisplay from "../../components/OrderProductsDisplay/OrderProductsDisplay";
import OrderPriceDisplay from "../../components/OrderPriceDisplay/OrderPriceDisplay";

function OrderScreen() {
  const { oid: orderId } = useParams();
  const [order, setOrder] = useState("loading");

  useEffect(() => {
    (async () => {
      const orderFromFirestore = await getPurchaseOrderFromFirestore(orderId);
      setOrder(orderFromFirestore);
    })();
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
