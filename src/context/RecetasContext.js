import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const RecetasProvider = (props) => {
  const [recetas, setRecetas] = useState([]);

  const [busqueda, fetchBusqueda] = useState({
    nombre: "",
    categoria: "",
  });

  const { nombre, categoria } = busqueda;

  useEffect(() => {
    if (nombre.trim() === "") {
      return;
    }

    const consultarAPI = async () => {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
      const resultado = await axios.get(url);

      setRecetas(resultado.data.drinks);
    };

    consultarAPI();
  }, [busqueda, categoria, nombre]);

  return (
    <RecetasContext.Provider value={{ fetchBusqueda }}>
      {props.children}
    </RecetasContext.Provider>
  );
};

export default RecetasProvider;

export const RecetasContext = createContext();
