import React from 'react';
import img from '../img/img.png';

export const HeaderPrincipalComponent = () => {
    return (
        <div>
             <header className="App-header">
        

        <img src={img}  className="App-logo" alt="logo"/>
        <nosotros/>

      </header>

      <div className='App-header2'>
        <a className="botonN" href="/Nosotrosp">Nosotros</a>
        <a className="botonN" href="/">Cerrar Sesión</a>
        

      </div>
        </div>
    )
}

export default HeaderPrincipalComponent;
