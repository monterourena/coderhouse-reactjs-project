import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase.config";


const addProductToFirestore = async (product, collectionName)=>{
    const productsCollectionRef = collection(db, collectionName);
    await addDoc(productsCollectionRef, product)
}


export { addProductToFirestore }