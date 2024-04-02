import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ListCitaEmpleado extends Component {
    render() {
        return (
            <div className='container'>
            <h2 className='text-center'>Lista de Cita Empleados</h2>
            <table className='table table-bordered table striped'>
                <thead>
                    <th>Id</th>
                    <th>Cita</th>
                </thead>
                <tbody>
                    {
                        citaEmpleado.map(
                            citaEmpleado=>
                            <tr key={citaEmpleado.id}>
                                <td>{citaEmpleado.cita}</td>
                          
                            </tr>
                        )
                    }
                </tbody>
            </table>



        </div>
        );
    }
}


ListCitaEmpleado.propTypes = {

};


export default ListCitaEmpleado;
