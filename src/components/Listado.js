import React, { useContext } from "react";
import { RecetasContext } from "../context/RecetasContext";
import Receta from "./Receta";
import Spinner from "./Spinner";

const Listado = () => {
  const { recetas } = useContext(RecetasContext);

  return (
    <div className="row mt-5">
      {recetas.length === 0 && <Spinner />}
      {recetas.map((receta) => (
        <Receta key={receta.idDrink} receta={receta} />
      ))}
    </div>
  );
};

export default Listado;
