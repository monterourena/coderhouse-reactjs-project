import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase.config";

const addOrderToFirestore = async (order) => {
  const productsCollectionRef = collection(db, "orders");
  const generatedOrder = await addDoc(productsCollectionRef, order);
  return generatedOrder.id;
};

const generateOrder = async ({ formData, price, productsInCart }) => {
  const date = new Date();
  const {
    inputEmail: email,
    inputLastName: lastName,
    inputName: name,
    inputPhone: phone,
  } = formData;

  const purchaseOrder = {
    state: "generated",
    userData: {
      email,
      lastName,
      name,
      phone,
    },
    price,
    products: productsInCart,
    date: date.toUTCString(),
  };

  const generatedOrderId = await addOrderToFirestore(purchaseOrder);

  return generatedOrderId;
};

export { generateOrder };
