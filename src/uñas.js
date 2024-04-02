import React from 'react';
import { Link } from 'react-router-dom';
import uñas from './img/manicura.jpg';
import './serviciodetalle.css'
import HeaderPrincipalComponent from './components/HeaderPrincipalComponent';
import CatalogoServicios from './CatalogoServicio';
import FooterComponent from './components/FooterComponent';

const UAs = () => {
    
    const servicio = {
        nombre: 'Manicura',
        descripcion: 'La manicura básica es un tratamiento que incluye el cuidado y embellecimiento de las uñas de las manos. Comienza con un suave remojo para ablandar la cutícula, seguido de la eliminación cuidadosa de la piel sobrante. Luego, se da forma a las uñas y se eliminan las impurezas. Después, se aplica un esmalte de color o transparente, según la preferencia del cliente, y se finaliza con un masaje relajante en las manos. La manicura básica es ideal para mantener las uñas saludables y con un aspecto pulido y cuidado.',
        precio: 20000,
        imagenUrl: uñas,
      };
    
      const handleAgendarClick = () => {
        alert('¡Servicio agendado!');
      };
    
      return (
        <>
        <HeaderPrincipalComponent/>
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
              <Link to="/principal">Volver al catálogo</Link>
            </div>
          </div>
        </div>
        <CatalogoServicios/>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <FooterComponent/>
        </>
      );
}

export default UAs;
