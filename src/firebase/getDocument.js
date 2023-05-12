import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase.config";

const productsCollectionRef = collection(db, "products");
const categoriesCollectionRef = collection(db, "categories");
const modelsCollectionRef = collection(db, "models");

const getProductsFromFirestore = async () => {
  const data = await getDocs(productsCollectionRef);
  return data.docs.map((doc) => ({ ...doc.data(), pid: doc.id }));
};

const getCategoriesFromFirestore = async () => {
  const data = await getDocs(categoriesCollectionRef);
  return data.docs.map((doc) => ({ ...doc.data(), cid: doc.id }));
};

const getModelsFromFirestore = async () => {
  const data = await getDocs(modelsCollectionRef);
  return data.docs.map((doc) => ({ ...doc.data(), modelsId: doc.id }));
};

export {
  getProductsFromFirestore,
  getCategoriesFromFirestore,
  getModelsFromFirestore,
};
