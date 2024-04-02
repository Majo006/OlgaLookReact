import React from 'react';
import { Link } from 'react-router-dom';
import tintura from './img/kareya-saleh-tLKOj6cNwe0-unsplash.jpg';
import './serviciodetalle.css'
import HeaderPrincipalComponent from './components/HeaderPrincipalComponent';
import CatalogoServicios from './CatalogoServicio';
import FooterComponent from './components/FooterComponent';



const Tinturap = () => {
    const servicio = {
        nombre: 'Coloración',
        descripcion: 'La coloración de cabello es un tratamiento capilar que consiste en aplicar un colorante para cambiar el color del cabello. Comienza con una consulta para determinar el color deseado y evaluar la condición del cabello. Luego, se mezcla cuidadosamente el colorante según las especificaciones del fabricante y se aplica de manera uniforme en el cabello. El tiempo de procesamiento varía según el tipo de tintura y el color deseado. Después de enjuagar y secar el cabello, se realiza un peinado para mostrar el nuevo color. La tintura de cabello es ideal para cambiar el color del cabello, cubrir las canas o resaltar los tonos naturales.',
        precio: 20000,
        imagenUrl: tintura,
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
};



export default Tinturap;
