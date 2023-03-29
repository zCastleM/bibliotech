import { addDoc, getDocs } from "firebase/firestore";
import { emprestimoCollection } from "./collections";

export async function adicionarEmprestimo(data) {
    await addDoc(emprestimoCollection, data);
}

export async function getEmprestimos() {
    const snapshot = await getDocs(emprestimoCollection);
    let emprestimos = [];
    snapshot.forEach((doc) => {
        emprestimos.push({ ...doc.data(), id: doc.id });
    });
    return emprestimos;
  }