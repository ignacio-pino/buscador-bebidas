import React, { createContext, useState } from "react";

export const CategoriasContext = createContext();

const CategoriasProvider = (props) => {
  const [categoria, setCategoria] = useState([]);

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
