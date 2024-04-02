import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ListServicios extends Component {
    render() {
        return (
            <div className='container'>
            <h2 className='text-center'>Lista de servicios</h2>
            <table className='table table-bordered table striped'>
                <thead>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Duracion Aproximada</th>
                    <th>Precio Aproximado</th>
                </thead>
                <tbody>
                    {
                        servicio.map(
                            servicio=>
                            <tr key={servicio.id}>
                                <td>{servicio.nombre}</td>
                                <td>{servicio.descripcion}</td>
                                <td>{servicio.duracionaprox}</td>
                                <td>{servicio.precioaprox}</td>
                                
                            </tr>
                        )
                    }
                </tbody>
            </table>



        </div>
        );
    }
}


ListServicios.propTypes = {

};


export default ListServicios;
