import React, { useState } from 'react';
import Dashboard from '../Dashboard';
import ListUsuario from '../vistas/ListUsuario'; // Importa tu componente de lista de usuarios
import UsuarioService from '../services/UsuarioService';
import { Link, Navigate } from 'react-router-dom';


export const AgregarUsuario = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correoelectronico, setCorreoelectronico] = useState('');
    const [telefono, setTelefono] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [tipousuario, setTipoUsuario] = useState('');
    const [agregado, setAgregado] = useState(false); // Nuevo estado para controlar si se ha agregado un usuario

    const savedUsuario = (e) => {
        e.preventDefault();
        const usuario = { nombre, apellido, correoelectronico, telefono, contraseña, tipousuario };
        UsuarioService.createUsuario(usuario).then((response)=>{
            console.log(response.data);
            Navigate('/listausuario');
        }).catch(error => {
            console.log(error)
        })

        // Aquí iría la lógica para guardar el usuario en el servidor
        // Simulamos que la operación de guardado es exitosa después de 1 segundo
        setTimeout(() => {
            setAgregado(true);
        }, 1000);
    }

    // Si se ha agregado un usuario correctamente, renderiza la lista de usuarios en lugar del formulario de agregar usuario
    if (agregado) {
        return <ListUsuario />;
    }

    return (
        <div>
            <Dashboard/>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <h2 className='text-center'>Agregar Usuario</h2>
                        <div className='card-body'>
                            <form onSubmit={savedUsuario}>
                                <div className='form-group mb-2'>
                                    <label className='form-label'> Nombre</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder='Nombre'
                                        name='nombre'
                                        value={nombre}
                                        onChange={(e) => setNombre(e.target.value)}
                                    />
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'> Apellido</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder='Apellido'
                                        name='apellido'
                                        value={apellido}
                                        onChange={(e) => setApellido(e.target.value)}
                                    />
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'> Correo Electrónico</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder='Correo Electrónico'
                                        name='correoelectronico'
                                        value={correoelectronico}
                                        onChange={(e) => setCorreoelectronico(e.target.value)}
                                    />
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'> Teléfono</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder='Teléfono'
                                        name='telefono'
                                        value={telefono}
                                        onChange={(e) => setTelefono(e.target.value)}
                                    />
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'> Contraseña</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder='Contraseña'
                                        name='contraseña'
                                        value={contraseña}
                                        onChange={(e) => setContraseña(e.target.value)}
                                    />
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'> Tipo de Usuario</label>
                                    <select
                                        name='tipousuario'
                                        className="form-control"
                                        value={tipousuario}
                                        onChange={(e) => setTipoUsuario(e.target.value)}
                                    >
                                        <option value="">Seleccionar Tipo</option>
                                        <option value="admin">Administrador</option>
                                        <option value="cliente">Cliente</option>
                                        <option value="empleado">Empleado</option>
                                    </select>
                                </div>
                                <button className="btn btn-succes" onClick={(e) => savedUsuario (e)}>Guardar Usuario</button>
                                <Link to='/listausuario' className='btn btn-danger'>Cancelar</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AgregarUsuario;
