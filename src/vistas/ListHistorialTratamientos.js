import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ListHistorialTratamientos extends Component {
    render() {
        return (
            <div className='container'>
            <h2 className='text-center'>Lista de Historial de Tratamientos</h2>
            <table className='table table-bordered table striped'>
                <thead>
                    <th>Id</th>
                    <th>Cita</th>
                    <th>Usuario</th>
                    <th>Empleados</th>
                    
                </thead>
                <tbody>
                    {
                        historial.map(
                            hitorial=>
                            <tr key={servicio.id}>
                                <td>{servicio.cita}</td>
                                <td>{servicio.usuario}</td>
                                <td>{servicio.empleados}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>



        </div>
        );
    }
}


ListHistorialTratamientos.propTypes = {

};


export default ListHistorialTratamientos;
