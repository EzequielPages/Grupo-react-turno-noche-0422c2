import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import "./Card.css";
import MaterialUIPickers from "./CardDatePicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal({ addToCart, id}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        variant="contained"
        color="success"
        className="italic"
        onClick={handleOpen}>
        Agregar al carrito
      </Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description">
        <Box className="text-center" sx={{ ...style, width: 200 }}>
          <p className="mb-2 text-center italic">
            ¿Está seguro que desea agregar esto al carrito?
          </p>
          <Button className="mb-2 italic" onClick={() => addToCart(id)}>
            AGREGAR
          </Button>
          <Button color="error" className="mb-2 italic" onClick={handleClose}>
            CERRAR
          </Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function NestedModal({ destino, id , addToCart}) {
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="flex justify-center">
      <button variant="outlined" className="w-64 h-12 btn btn-primary text-sm font-medium"
        onClick={handleOpen}>
        Seleccionar Fecha
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description">
        <Box className="modalSize" sx={{ ...style, width: 600 }}>
          <div className="flex justify-between">
            <h2 id="parent-modal-title" className="italic">
              Tu viaje a {destino}
            </h2>            
            <button>
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="text-error"
                onClick={handleClose}
              />
            </button>
          </div>
          <p id="parent-modal-description" className="mb-5">
            Selecciona la fecha ideal para tu viaje
          </p>
          <MaterialUIPickers></MaterialUIPickers>
          <div className="text-center mt-12">
            <ChildModal addToCart={addToCart} id={id} />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
