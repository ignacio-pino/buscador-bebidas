import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const RecetasProvider = (props) => {
  const [recetas, setRecetas] = useState([]);

  const [busquedas, fetchBusqueda] = useState({
    nombre: "",
    categoria: "",
  });

  const { nombre, categoria } = busquedas;

  useEffect(() => {
    if (nombre.trim() === "") {
      return;
    }

    const consultarAPI = async () => {
      setRecetas([]);
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
      const resultado = await axios.get(url);
      setRecetas(resultado.data.drinks);
    };

    consultarAPI();
  }, [busquedas]);

  return (
    <RecetasContext.Provider value={{ fetchBusqueda, recetas, busquedas }}>
      {props.children}
    </RecetasContext.Provider>
  );
};

export default RecetasProvider;

export const RecetasContext = createContext();
