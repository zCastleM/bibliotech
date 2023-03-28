import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Cadastro } from "./pages/Cadastro/Cadastro";
import { Root } from "./pages/Root/Root";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
import { AuthContext } from "./contexts/AuthContext";
import { AdicionarLivro } from "./pages/AdicionarLivro/AdicionarLivro";

export function App() {
  const [usuarioLogado, setUsuarioLogado] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUsuarioLogado(user);
    });
  },
  );


    return (
      <>
        <AuthContext.Provider value={usuarioLogado}>
          <BrowserRouter>
            <Routes> 
              <Route path="/" element={<Root />}>
                <Route path="/" element={<Home />} />
                <Route path="/livros/add" element={<AdicionarLivro />} />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
            </Routes>
          </BrowserRouter>
        </AuthContext.Provider>
        <Toaster />
      </>
    );
  }