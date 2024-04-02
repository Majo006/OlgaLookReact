import React, { useEffect, useState } from 'react';
import RecordatorioService from '../services/RecordatorioService'; // Importa el servicio de recordatorios


const ListRecordatorios = () => {
    const [recordatorios, setRecordatorios] = useState([]);

    useEffect(() => {
        RecordatorioService.getAllRecordatorio()
            .then(response => {
                setRecordatorios(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []); // Agrega una coma después del array vacío para que useEffect se ejecute solo una vez al montar el componente

    return (
        <div className='container'>
            <h2 className='text-center'>Lista de Recordatorios</h2>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr> {/* Corrige la estructura de la tabla, el encabezado debe estar dentro de una fila (tr) */}
                        <th>Id</th>
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Mensaje</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {recordatorios.map(recordatorio => (
                        <tr key={recordatorio.id}>
                            <td>{recordatorio.id}</td> {/* Agrega el campo 'id' en la tabla */}
                            <td>{recordatorio.fecha}</td>
                            <td>{recordatorio.hora}</td>
                            <td>{recordatorio.mensaje}</td>
                            <td>{recordatorio.estado_recordatorio}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

ListRecordatorios.propTypes = {};

export default ListRecordatorios;
