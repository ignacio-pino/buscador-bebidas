import React, { useContext, useState } from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import { ModalContext } from "../context/ModalContext";
import Spinner from "./Spinner";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Receta = ({ receta }) => {
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { idDrink: id, strDrink: nombre, strDrinkThumb: imagen } = receta;

  const { setIdreceta, ingredientes, setIngredientes } =
    useContext(ModalContext);

  const listarIngredientes = (informacion) => {
    let ingredientes = [];
    for (let i = 1; i < 16; i++) {
      if (informacion[`strIngredient${i}`]) {
        ingredientes.push(
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            key={i}
          >
            {informacion[`strIngredient${i}`]}
            <span className="badge badge-info">
              {informacion[`strMeasure${i}`]}
            </span>
          </li>
        );
      }
    }
    return ingredientes;
  };

  return (
    <div className="col-md-4 mb-3">
      <div className="card text-center rounded-bottom">
        <img
          className="card-img-top"
          src={imagen}
          alt={`Imagen de ${nombre}`}
        />
        <h5 className="card-header"> {nombre} </h5>

        <div className="card-body">
          <button
            className="btn btn-block btn-outline-info"
            type="button"
            onClick={() => {
              setIdreceta(id);
              handleOpen();
            }}
          >
            View Recipe
          </button>

          <Modal
            open={open}
            onClose={() => {
              setIdreceta(null);
              setIngredientes([]);
              handleClose();
            }}
          >
            <div style={modalStyle} className={classes.paper}>
              {ingredientes.length === 0 && <Spinner />}
              <h5 className="text-center mb-3">{nombre}</h5>
              <img
                src={ingredientes.strDrinkThumb}
                alt={nombre}
                className="img-thumbnail"
              />
              <p className="text-center m-3">{ingredientes.strInstructions}</p>
              <ul className="list-group list-group-flush">
                {listarIngredientes(ingredientes)}
              </ul>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Receta;
