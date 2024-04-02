import React, { useEffect, useState } from 'react';
import EmpleadoService from '../services/EmpleadoService';

const ListEmpleado = () => {
    const [empleados, setEmpleados] = useState([]);

    useEffect(() => {
        EmpleadoService.getAllEmpleado()
            .then(response => {
                setEmpleados(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div className='container'>
            <h2 className='text-center'>Lista de Empleados</h2>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Habilidades</th>
                        <th>Correo</th>
                        <th>Teléfono</th>
                        <th>Tipo de Usuario</th>
                    </tr>
                </thead>
                <tbody>
                    {empleados.map(empleado => (
                        <tr key={empleado.id}>
                            <td>{empleado.id}</td>
                            <td>{empleado.nombre}</td>
                            <td>{empleado.apellido}</td>
                            <td>{empleado.habilidades}</td>
                            <td>{empleado.correoelectronico}</td>
                            <td>{empleado.telefono}</td>
                            <td>{empleado.tipousuario}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

ListEmpleado.propTypes = {};

export default ListEmpleado;
