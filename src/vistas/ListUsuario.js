import React, { useEffect, useState } from 'react';
import UsuarioService from '../services/UsuarioService';
import Dashboard from '../Dashboard';


const ListUsuario = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        UsuarioService.getAllUsuario()
            .then(response => {
                setUsuarios(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <Dashboard/>
        <div className='container'>
            <h2 className='text-center'>Lista de Usuarios</h2>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Correo</th>
                        <th>Telefono</th>
                        <th>Tipo de Usuario</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map(usuario => (
                        <tr key={usuario.id}>
                            <td>{usuario.id}</td>
                            <td>{usuario.nombre}</td>
                            <td>{usuario.apellido}</td>
                            <td>{usuario.correoelectronico}</td>
                            <td>{usuario.telefono}</td>
                            <td>{usuario.tipousuario}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default ListUsuario;