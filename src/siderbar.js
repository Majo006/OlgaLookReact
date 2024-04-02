import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import './App.css';
import {Link} from 'react-router-dom';


const SidebarComponent = () => {
  return (

    <Sidebar className='siderbar' width="200px">
      <Menu>
        <SubMenu title="Charts" >
          
          <MenuItem>
          
            <Link to='/listausuario'> 
            Usuario
            </Link>


          </MenuItem>
          <MenuItem>
          <Link to='/AgregarUsuario'>
            Agregar Usuario
            </Link>
          </MenuItem>
          
          <MenuItem>
          <Link to='/listacitas'>
            Citas
            </Link>
            </MenuItem>
            <MenuItem>
            <Link to='/agregarcita'>
            Agregar Cita
            </Link>
            </MenuItem>
        </SubMenu>

      </Menu>
    </Sidebar>
    

  );
};

export default SidebarComponent;
