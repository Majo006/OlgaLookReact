import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import CitaService from '../../services/CitaService';
import HeaderPrincipalComponent from '../../components/HeaderPrincipalComponent';

const ACCUAs = () => {
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [cliente, setCliente] = useState('');
    const [empleado, setEmpleado] = useState('');
    const estado ='Agendada';
    const [agregada, setAgregada] = useState(false);
    const [error, setError] = useState('');
    const servicioFijo = 'Corte de Cabello'; // Aquí defines el servicio fijo

    const savedCita = (e) => {
        e.preventDefault();
        const cita = { fecha, hora, cliente, empleado, estado, servicio: servicioFijo }; // Usamos el servicio fijo
        CitaService.createCita(cita)
            .then(() => {
                setAgregada(true);
            })
            .catch((error) => {
                setError('Error al guardar la cita');
                console.log(error);
            });
    };

    if (agregada) {
        return <Navigate to='/principal' />;
    }

    return (
        <div>
            <HeaderPrincipalComponent/>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <h2 className='text-center'>Agregar Cita</h2>
                        <div className='card-body'>
                            <form onSubmit={savedCita}>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Fecha</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        name='fecha'
                                        value={fecha}
                                        onChange={(e) => setFecha(e.target.value)}
                                    />
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Hora</label>
                                    <input
                                        type="time"
                                        className="form-control"
                                        name='hora'
                                        value={hora}
                                        onChange={(e) => setHora(e.target.value)}
                                        step="1"
                                    />
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Cliente</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name='cliente'
                                        value={cliente}
                                        onChange={(e) => setCliente(e.target.value)}
                                    />
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Empleado</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name='empleado'
                                        value={empleado}
                                        onChange={(e) => setEmpleado(e.target.value)}
                                    />
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Servicio</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={estado} // Mostramos el servicio fijo
                                        disabled
                                    />
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Servicio</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={servicioFijo} // Mostramos el servicio fijo
                                        disabled
                                    />
                                </div>
                                <button className="btn btn-success">Agendar</button>
                                <Link to='/principal' className='btn btn-danger'>Cancelar</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ACCUAs;


