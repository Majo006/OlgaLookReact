import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import Dashboard from '../../Dashboard';
import CitaService from '../../services/CitaService';

const AgregarCita = () => {
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [cliente, setCliente] = useState('');
    const [empleado, setEmpleado] = useState('');
    const [estado, setEstado] = useState('');
    const [servicio, setServicio] = useState('');
    const [agregada, setAgregada] = useState(false);
    const [ setError] = useState('');

    const savedCita = (e) => {
        e.preventDefault();
        const cita = { fecha, hora, cliente, empleado, estado, servicio };
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
        return <Navigate to='/listacita' />;
    }

    return (
        <div>
            <Dashboard/>
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
                                    <label className='form-label'>Estado</label>
                                    
                                    <select
                                    className="form-control"
                                    name='estado'
                                    value={estado}
                                    onChange={(e) => setEstado(e.target.value)}
                                       >
                                    <option value="">Seleccionar Estado</option>
                                    <option value="Agendada">Agendada</option>
                                    <option value="Cancelada">Cancelada</option>
                                    <option value="Reagendada">Reagendada</option>
                                    <option value='Reagendada por Empleado'>Reagendada por empleado</option>
                                    <option value='Cancelada por Empleado'>Cancelada por empleado</option>
                                </select>
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Servicio</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name='servicio'
                                        value={servicio}
                                        onChange={(e) => setServicio(e.target.value)}
                                    />
                                </div>
                                <button className="btn btn-succes" onClick={(e) => savedCita (e)}>Agendar</button>
                                <Link to='/listacita' className='btn btn-danger'>Cancelar</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AgregarCita;
