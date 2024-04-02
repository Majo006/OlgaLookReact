import React from "react";
import img from './img/img.png';
import ListUsuario from "./vistas/ListUsuario";
import SidebarComponent from "./siderbar";

const dashboarUsuario = () => {
    return (
      <div className="Dashboard">
        <header className="App-header">
          <img src={img} className="App-logo" alt="logo"/>
          <h1>Nosotros</h1>
        </header>
  
        <SidebarComponent />
        <ListUsuario />
      </div>
    );
}

export default dashboarUsuario;
