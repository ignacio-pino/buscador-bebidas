import React, { useContext, useState } from "react";
import { CategoriasContext } from "../context/CategoriasContext";
import { RecetasContext } from "../context/RecetasContext";

const Formulario = () => {
  const { categoria } = useContext(CategoriasContext);
  const { fetchBusqueda } = useContext(RecetasContext);

  const [busqueda, setBusqueda] = useState({
    nombre: "",
    categoria: "",
  });

  const handleChange = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      className="col-12"
      onSubmit={(e) => {
        e.preventDefault();
        fetchBusqueda(busqueda);
      }}
    >
      <fieldset className="text-center">
        <legend>Find drinks by category or ingredients</legend>
      </fieldset>

      <div className="row mt-4">
        <div className="col-md-4 mt-2">
          <input
            type="text"
            name="nombre"
            className="form-control"
            placeholder="Search by ingredient"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-4 mt-2">
          <select
            name="categoria"
            className="form-control"
            onChange={handleChange}
          >
            <option value=""> Select category</option>
            {categoria.map(({ strCategory }) => (
              <option key={strCategory} value={strCategory}>
                {strCategory}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-4 mt-2">
          <input
            type="submit"
            value="Find drinks"
            className="btn btn-block btn-info"
          />
        </div>
      </div>
    </form>
  );
};

export default Formulario;
