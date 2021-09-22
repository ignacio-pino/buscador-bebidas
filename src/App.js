import React from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import CategoriasProvider from "./context/CategoriasContext";
import RecetasProvider from "./context/RecetasContext";
import Listado from "./components/Listado";

function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <Header />

        <div className="container mt-5">
          <div className="row">
            <Formulario />
          </div>
          <Listado />
        </div>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
