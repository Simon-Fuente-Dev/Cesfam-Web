import React from 'react'
import { useNavigate } from 'react-router-dom'
const Receta = () => {
    const navigate = useNavigate();
    const verDetalle = () => {
        navigate('/detalle');
    };
    return (
        <section className='section-receta'>
                <h1>Elija una receta para solicitar sus medicamentos</h1>
                <div className="recetas-container">
                    <div className="receta-card">
                        <p>Receta medica dia 15/07 a las 08:00</p>
                        <p>Profesional Juan Perez - Medicina General</p>
                        <button onClick={verDetalle}>Ver Receta</button>
                    </div>
                    <div className="receta-card">
                        <p>Receta medica dia 15/07 a las 08:00</p>
                        <p>Profesional Juan Perez - Medicina General</p>
                        <button onClick={verDetalle}>Ver Receta</button>
                    </div>
                    <div className="receta-card">
                        <p>Receta medica dia 15/07 a las 08:00</p>
                        <p>Profesional Juan Perez - Medicina General</p>
                        <button onClick={verDetalle}>Ver Receta</button>
                    </div>
                    <div className="receta-card">
                        <p>Receta medica dia 15/07 a las 08:00</p>
                        <p>Profesional Juan Perez - Medicina General</p>
                        <button onClick={verDetalle}>Ver Receta</button>
                    </div>
                    <div className="receta-card">
                        <p>Receta medica dia 15/07 a las 08:00</p>
                        <p>Profesional Juan Perez - Medicina General</p>
                        <button onClick={verDetalle}>Ver Receta</button>
                    </div>
                </div>
        </section>
    )
}

export default Receta