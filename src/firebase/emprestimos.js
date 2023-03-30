import { addDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { emprestimoCollection } from "./collections";

export async function adicionarEmprestimo(data) {
    await addDoc(emprestimoCollection, data);
}

export async function getEmprestimos() {
    const snapshot = await getDocs(emprestimoCollection);
    let emprestimos = [];
    snapshot.forEach(doc => {
        emprestimos.push({...doc.data(), id: doc.id});
    });
    return emprestimos;
}

export async function getEmprestimo(id) {
    const document = await getDoc(doc(emprestimoCollection, id));
    return {...document.data(), id: document.id};
}

export async function updateEmprestimo(id, data) {
    await updateDoc(doc(emprestimoCollection, id), data);
}