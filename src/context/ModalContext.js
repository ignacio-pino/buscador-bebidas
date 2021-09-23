import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ModalContext = createContext();

const ModalProvider = (props) => {
  const [idreceta, setIdreceta] = useState(null);
  const [ingredientes, setIngredientes] = useState({});

  useEffect(() => {
    if (!idreceta) return;

    const consultarAPI = async () => {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;
      const resultado = await axios.get(url);
      setIngredientes(resultado.data.drinks[0]);
    };
    consultarAPI();
  }, [idreceta]);
  return (
    <ModalContext.Provider
      value={{ setIdreceta, ingredientes, setIngredientes }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
