import React from "react";
import img from './img/img.png';
import SidebarComponent from "./siderbar";

function Dashboard() {
    return (
      <div className="Dashboard">
        <header className="App-header">
          
  
          <img src={img}  className="App-logo" alt="logo"/>
          <SidebarComponent/>
  
        </header>
        <h2>Olga Look</h2>
        <p>La belleza esta tanto dentro como por fuera</p>

      </div>
    );
  }
  
  export default Dashboard;