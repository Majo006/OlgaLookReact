import React from 'react';
import { Link } from 'react-router-dom';
import cabello from './img/cabello.jpeg';
import './serviciodetalle.css'
import HeaderPrincipalComponent from './components/HeaderPrincipalComponent';
import CatalogoServicios from './CatalogoServicio';
import FooterComponent from './components/FooterComponent';


const Cortepeloi = () => {
    const servicio = {
        nombre: 'Corte de pelo',
        descripcion: 'Un corte de cabello básico es un servicio de peluquería que consiste en dar forma y estilo al cabello. Comienza con un análisis del tipo de cabello y las preferencias del cliente. Luego, se lava y se acondiciona el cabello para prepararlo. El estilista procede a cortar el cabello según las indicaciones del cliente, cuidando de mantener la simetría y la longitud deseada. Después del corte, se realiza un secado y un peinado básico para darle el toque final. Un corte de cabello básico es ideal para mantener el cabello con un aspecto saludable y bien cuidado.',
        precio: 12000,
        imagenUrl: cabello,
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
                <Link to="/agendarcliente" className="btn-agendar" onClick={handleAgendarClick}>Agendar</Link>
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
    
};




export default Cortepeloi;
