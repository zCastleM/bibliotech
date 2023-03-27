import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Chaves de acesso ao firebase
const firebaseConfig = {
    apiKey: "AIzaSyCIlr0jI3CWrC7S0e_eeL7vPUdfHBs4xns",
    authDomain: "bibliotech-soulcode.firebaseapp.com",
    projectId: "bibliotech-soulcode",
    storageBucket: "bibliotech-soulcode.appspot.com",
    messagingSenderId: "209776228520",
    appId: "1:209776228520:web:e9ee6b042a2c8ad0afea9d"
  };
  

// Inicializa o app com base nas configurações acima
export const app = initializeApp(firebaseConfig);
// Configurando o Authentication e seus recursos login/cadastro
export const auth = getAuth(app);
// Configura o Firestore e seus recursos de banco de dados
export const db = getFirestore(app);
// Configura o Storage e seus recursos de Upload
export const storage = getStorage(app);