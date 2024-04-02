import React from 'react';
import { Link } from 'react-router-dom';

const Servicio = ({ nombre, descripcion, precio, imagenUrl, enlace }) => {
  return (
    <div className="servicio">
      <h3>{nombre}</h3>
      <img src={imagenUrl} alt={nombre} />
      <p>{descripcion}</p>
      <p>Precio: ${precio}</p>
      <Link to={enlace}>Detalles</Link>
    </div>
  );
};

export default Servicio;

