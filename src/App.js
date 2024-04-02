import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard.js';
import ListUsuario from './vistas/ListUsuario.js';
import AgregarUsuario from './Usuarios/AgregarUsuario.js';
import ListCitas from './vistas/ListCitas.js';
import LoginForm from './login.js';
import HeaderComponents from './components/headerComponents.js';
import AgregarCita from './vistas/Citas/AgregarCita.js';
import FooterComponent from './components/FooterComponent.js';
import Nosotros from './nosotros.js';
import RegistrationForm from './registro.js';
import Home from './Home.js';
import Paginap from './paginap.js';
import HeaderPrincipalComponent from './components/HeaderPrincipalComponent.js';
import CatalogoServicios from './CatalogoServicio.js';
import Servicio from './Servicios.js';
import ServicioDetalle from './ServicioDedatelle.js';
import Cortepeloi from './Cortepeloi.js';
import UAs from './uñas.js';
import Tinturap from './tinturap.js';
import Nosotrosp from './nosotrosp.js';

function App() {
  return (
    <div className="App">
       
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home/>}></Route>
          <Route path="/" element={<Nosotros/>} />
          <Route path='/nosotros' element={<Nosotrosp/>}/>
          <Route path='/Header' element={<HeaderComponents />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path='/AgregarUsuario' element={<AgregarUsuario />} />
          <Route path='/listausuario' element={<ListUsuario />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/registro' element={<RegistrationForm />} />
          <Route path='/listacitas' element={<ListCitas/>} />
          <Route path='/agregarcita' element={<AgregarCita />} />
          <Route path='/footer' element={<FooterComponent />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/agregarcita' element={<AgregarCita/>} />
          <Route path='/principal' element={<Paginap/>}/>
          <Route path='/header2' element={<HeaderPrincipalComponent/>}></Route>
          <Route path='/catalogo' element={<CatalogoServicios/>}/>
          <Route path='/servicio' element={<Servicio></Servicio>}></Route>
          <Route path='/servicio/:id' element={<ServicioDetalle/>}/>
          <Route path='/corte' element={<Cortepeloi/>}/>
          <Route path='/manicura' element={<UAs/>}/>
          <Route path='/tintura' element={<Tinturap/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
