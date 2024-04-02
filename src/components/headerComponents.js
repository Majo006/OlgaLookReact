import React from 'react';
import img from '../img/img.png';

export const HeaderComponents = () => {
    return (
        <div>
             <header className="App-header">
        

        <img src={img}  className="App-logo" alt="logo"/>
        <nosotros/>

      </header>

      <div className='App-header2'>
        <a className="botonN" href="/nosotros">Nosotros</a>
        <a className="botonN" href="/login">Iniciar Sesión</a>
        <a className="botonN" href='/registro'>Registrarse</a>

      </div>
        </div>
    )
}


export default HeaderComponents;
