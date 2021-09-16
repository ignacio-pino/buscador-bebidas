import React, { useContext } from "react";
import { CategoriasContext } from "../context/CategoriasContext";

const Formulario = () => {
  const { categoria } = useContext(CategoriasContext);

  return (
    <form className="col-12">
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
          />
        </div>
        <div className="col-md-4">
          <select name="categoria" className="form-control">
            <option value=""> Selecionar Categoría</option>
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