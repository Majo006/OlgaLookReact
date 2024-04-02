import React, { useEffect, useState } from 'react';
import CitaService from '../services/CitaService';
import Dashboard from '../Dashboard';

const ListCitas = () => {
    const [citas, setCitas] = useState([]);

    useEffect(() => {
        CitaService.getAllCita()
            .then(response => {
                setCitas(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []); // El segundo argumento [] indica que useEffect se ejecutará solo una vez, al montar el componente

    return (
        <div>
            <Dashboard/>
        <div className='container'>
            <h2 className='text-center'>Lista de Citas</h2>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                    
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>cliente</th>
                        <th>Empleado</th>
                        <th>Estado</th>
                        <th>Servicio</th>
                    </tr>
                </thead>
                <tbody>
                    {citas.map(cita => (
                        <tr key={cita.id}>
                            <td>{cita.fecha}</td>
                            <td>{cita.hora}</td>
                            <td>{cita.cliente}</td>
                            <td>{cita.empleado}</td>
                            <td>{cita.estado}</td>
                            <td>{cita.servicio}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default ListCitas;
