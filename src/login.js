import React, { useState } from 'react';
import './login.css';
import HeaderComponents from './components/headerComponents';
import FooterComponent from './components/FooterComponent';

function LoginForm() {
  const [correoelectronico, setcorreoelectronico] = useState('');
  const [contraseña, setcontraseña] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', correoelectronico);
    console.log('Contraseña:', contraseña);

    if (correoelectronico === 'admin@example.com' && contraseña === 'admin123') {
      window.location.href = '/dashboard';
    } else if (correoelectronico === 'cliente@example.com' && contraseña === 'cliente123') {
      window.location.href = '/principal';
    } else {
      alert('Usuario no encontrado o contraseña incorrecta');
    }
  };

  return (
    <>
      <HeaderComponents />
      <div className='container'>
        <div className='row'>
          <div className='card col-md-6 offset-md-3 offset-md-3'>
            <h2 className='text-center'>Inicio de Sesión</h2>
            <div className='card-body'>
              <form onSubmit={handleSubmit}>
                <div className='form-group mb-2'>
                  <label className='form-label'>Correo Electrónico</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder='Correo Electrónico'
                    value={correoelectronico}
                    onChange={(e) => setcorreoelectronico(e.target.value)}
                    required
                  />
                </div>
                <div className='form-group mb-2'>
                  <label className='form-label'>Contraseña</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder='Contraseña'
                    value={contraseña}
                    onChange={(e) => setcontraseña(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">Iniciar sesión</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
}

export default LoginForm;
