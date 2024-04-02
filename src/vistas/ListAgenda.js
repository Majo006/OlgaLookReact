import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ListAgenda extends Component {
    render() {
        return (
            <div className='container'>
            <h2 className='text-center'>Lista de Agenda</h2>
            <table className='table table-bordered table striped'>
                <thead>
                    <th>Id</th>
                    <th>Fecha</th>
                    <th>Hora</th>
                </thead>
                <tbody>
                    {
                        agenda.map(
                            agenda=>
                            <tr key={agenda.id}>
                                <td>{agenda.fecha}</td>
                                <td>{agenda.hora}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>



        </div>
        );
    }
}


ListAgenda.propTypes = {

};


export default ListAgenda;
