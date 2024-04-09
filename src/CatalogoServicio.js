import React from 'react';
import Servicio from './Servicios';
import './servicios.css';
import cabello from './img/cabello.jpeg';
import uñas from './img/manicura.jpg';
import tintura from './img/kareya-saleh-tLKOj6cNwe0-unsplash.jpg';

const CatalogoServicios = () => {
  const servicios = [
    { id: 1, nombre: 'Corte de pelo', descripcion: 'Corte de pelo básico', precio: 12000, imagenUrl: cabello , enlace: '/corte'},
    { id: 2, nombre: 'Coloración', descripcion: 'Coloración de cabello', precio: 120000, imagenUrl: tintura, enlace: '//tintura'},
    { id: 3, nombre: 'Manicura', descripcion: 'Manicura básica', precio: 20000, imagenUrl: uñas, enlace: '/manicura' },
  ];

  return (
    <div className="catalogo-servicios">
      {servicios.map((servicio, index) => (
        <Servicio key={index} {...servicio} />
      ))}
    </div>
  );
  
};

export default CatalogoServicios;
