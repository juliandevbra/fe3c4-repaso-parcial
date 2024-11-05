import React from "react";

const Card = ({ nombre, artista }) => {
  return (
    <div>
      <h3>Gracias, {nombre}!</h3>
      <h3>En tu casilla de email recibiras tu entrada para {artista}.</h3>
    </div>
  );
};

export default Card;
