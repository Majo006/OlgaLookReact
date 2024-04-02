import React from 'react';
import './nosotros.css';
import HeaderPrincipalComponent from './components/HeaderPrincipalComponent.js';
import FooterComponent from './components/FooterComponent.js';
import Paginap from './paginap.js';

const Nosotrosp = () => {
  return (
    <>
    <Paginap/>
      <HeaderPrincipalComponent/>
      <div className="nosotros-container">
        <div className="section">
          <h2>Nosotros</h2>
          <p>En Olga Look, nos dedicamos a realzar la belleza y el bienestar de nuestros clientes, ofreciendo servicios de alta calidad en un ambiente acogedor y profesional. Desde nuestro inicio en 2007, nos hemos comprometido a brindar una experiencia única y personalizada a cada persona que nos visita.</p>
        </div>
        <div className="section">
        <h3>Nuestra historia</h3>
        <p>Olga Look fue fundado en 2007 por las hermanas Olga y Luz Cendales, con la visión de crear un espacio donde la belleza se fusionara con la atención personalizada y el cuidado integral. Desde entonces, hemos crecido y evolucionado, pero nuestro compromiso con la excelencia y la satisfacción del cliente sigue siendo el mismo. Estamos orgullosos de nuestra historia y emocionados por lo que el futuro nos depara.</p>
      </div>
      <div className="section">
        <h3>Nuestra misión</h3>
        <p>Nuestra misión en Olga Look es ser el destino preferido de nuestros clientes en busca de servicios de belleza excepcionales. Nos esforzamos por superar las expectativas de nuestros clientes mediante la excelencia en el servicio, la innovación en los tratamientos y el cuidado especializado.</p>
      </div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>

      </div>
      <FooterComponent/>
    </>
  );
};

export default Nosotrosp;
