import React, { createContext, useState } from "react";

const RecetasProvider = (props) => {
  const [recetas, setRecetas] = useState([]);

  const [busqueda, fetchBusqueda] = useState({
    ingrediente: "",
    categoria: "",
  });

  return (
    <RecetasContext.Provider value={{ fetchBusqueda }}>
      {props.children}
    </RecetasContext.Provider>
  );
};

export default RecetasProvider;

export const RecetasContext = createContext();
