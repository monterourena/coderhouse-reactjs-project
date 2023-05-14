import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPurchaseOrderFromFirestore } from "../../firebase/getPurchaseOrder";
import ViewWithHeader from "../../components/ViewWithHeader/ViewWithHeader";

function OrderScreen() {
  const { oid: orderId } = useParams();
  const [order, setOrder] = useState({});

  useEffect(() => {
    (async () => {
      const orderFromFirestore = await getPurchaseOrderFromFirestore(orderId);
      setOrder(orderFromFirestore);
    })();
  }, []);

  console.log("ORDER: ", order)

  return (
    <>
      { order !== undefined &&
        <ViewWithHeader title="Your order" description="Your order has been placed">
        <h1>{order?.oid}</h1>
      </ViewWithHeader>}
    </>
  );
}

export default OrderScreen;

//
