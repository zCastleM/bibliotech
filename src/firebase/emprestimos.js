import { addDoc } from "firebase/firestore";
import { emprestimoCollection } from "./collections";

export async function adicionarEmprestimo(data) {
    await addDoc(emprestimoCollection, data);
}