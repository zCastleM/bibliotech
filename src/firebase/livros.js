import { addDoc } from "firebase/firestore";
import { livrosCollection } from "./collections";

export async function addLivro(data) {
    await addDoc(livrosCollection, data);
}