import React from 'react';
import { Link } from 'react-router-dom';
import cabello from './img/cabello.jpeg';
import './serviciodetalle.css'

const ServicioDetalle = () => {
  const servicio = {
    nombre: 'Corte de pelo',
    descripcion: 'Corte de pelo básico',
    precio: 12000,
    imagenUrl: cabello,
  };

  const handleAgendarClick = () => {
    alert('¡Servicio agendado!');
  };

  return (
    <div className="servicio-detalle">
      <div className="imagen-servicio">
        <img src={servicio.imagenUrl} alt={servicio.nombre} />
      </div>
      <div className="detalles-servicio">
        <h1>{servicio.nombre}</h1>
        <p>{servicio.descripcion}</p>
        <p>Precio: ${servicio.precio}</p>
        <div className="botones">
          <button onClick={handleAgendarClick}>Agendar</button>
          <Link to="/">Volver al catálogo</Link>
        </div>
      </div>
    </div>
  );
};

export default ServicioDetalle;
