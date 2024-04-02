import React from 'react';
import HeaderPrincipalComponent from './components/HeaderPrincipalComponent';
import CatalogoServicios from './CatalogoServicio';
import FooterComponent from './components/FooterComponent';
const Paginap = () => {
    return (
        <div>
            <HeaderPrincipalComponent/>
            <CatalogoServicios/>
            <FooterComponent/>
        </div>
    );
}

export default Paginap;
