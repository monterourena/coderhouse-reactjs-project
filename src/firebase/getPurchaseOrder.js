import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase.config";


const getPurchaseOrderFromFirestore = async (orderId) => {
    const orderDocRef = doc(db, "orders", orderId);
    const docSnap = await getDoc(orderDocRef);
    const data = {...docSnap.data(),oid:orderId}
  return data;
};


export {getPurchaseOrderFromFirestore}