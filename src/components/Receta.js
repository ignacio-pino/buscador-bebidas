import React from "react";

const Receta = ({ receta }) => {
  const { strDrink: nombre, strDrinkThumb: imagen } = receta;

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <img
          className="card-img-top"
          src={imagen}
          alt={`Imagen de ${nombre}`}
        />
        <h5 className="card-header"> {nombre} </h5>

        <div className="card-body">
          <button className="btn btn-block btn-primary" type="button">
            Ver Receta
          </button>
        </div>
      </div>
    </div>
  );
};

export default Receta;
