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
        <legend>Busca bebidas por categoría o ingrediente.</legend>
      </fieldset>

      <div className="row mt-4">
        <div className="col-md-4">
          <input
            type="text"
            name="nombre"
            className="form-control"
            placeholder="Buscar por ingrediente"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-4">
          <select
            name="categoria"
            className="form-control"
            onChange={handleChange}
          >
            <option value=""> Selecionar Categoría</option>
            {categoria.map(({ strCategory }) => (
              <option key={strCategory} value={strCategory}>
                {strCategory}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-4">
          <input
            type="submit"
            value="Buscar bebidas"
            className="btn btn-block btn-primary"
          />
        </div>
      </div>
    </form>
  );
};

export default Formulario;
