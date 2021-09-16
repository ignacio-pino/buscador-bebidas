import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

export const CategoriasContext = createContext();

const CategoriasProvider = (props) => {
  const [categoria, setCategoria] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
      const categorias = await axios.get(url);

      setCategoria(categorias.data.drinks);
    };
    consultarAPI();
  }, []);

  return (
    <CategoriasContext.Provider
      value={{
        categoria,
        setCategoria,
      }}
    >
      {props.children}
    </CategoriasContext.Provider>
  );
};
export default CategoriasProvider;
