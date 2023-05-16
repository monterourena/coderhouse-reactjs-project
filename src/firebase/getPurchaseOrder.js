import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase.config";

const getPurchaseOrderFromFirestore = async (orderId) => {
  const orderDocRef = doc(db, "orders", orderId);
  const docSnap = await getDoc(orderDocRef);

  if (!docSnap.exists()) {
    return undefined;
  }

  return { ...docSnap.data(), oid: orderId };
};

export { getPurchaseOrderFromFirestore };
