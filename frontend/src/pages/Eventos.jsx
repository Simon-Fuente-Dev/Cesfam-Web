import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../layout/AuthContext';
import Alert from 'react-bootstrap/Alert';
import Swal from "sweetalert2";

const Eventos = () => {
  const { eventoId } = useParams();
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [detalleEvento, setDetalleEvento] = useState({});
  const [inscripcionExitosa, setInscripcionExitosa] = useState(false);

  useEffect(() => {
    if (!currentUser) {
      setShowAlert(true);
      setShowContent(false);

      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } else {
      setShowAlert(false);
      setShowContent(true);

      obtenerDetallesEvento();
    }
  }, [currentUser, navigate]);

  const obtenerDetallesEvento = async () => {
    try {
      const respuesta = await fetch(`http://localhost:3001/api/obtenerEvento/${eventoId}`);
      const data = await respuesta.json();
      setDetalleEvento(data[0]);
    } catch (error) {
      console.error("Error", error);
    }
  };

  const inscribirseEnEvento = async () => {
    if (!currentUser) {
      navigate('/login');
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/api/inscribirEvento', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ idCuenta: currentUser.id_cuenta, idEvento: eventoId }),
      });

      if (response.status === 200) {
        setInscripcionExitosa(true);
        setDetalleEvento((prevDetalleEvento) => ({
          ...prevDetalleEvento,
          cupos_disponible_evento: prevDetalleEvento.cupos_disponible_evento - 1,
        }));
      } else {
        console.error('Error al inscribirse en el evento');
      }
    } catch (error) {
      console.error('Error al inscribirse en el evento', error);
    }
  };

  const handleVolverClick = () => {
    navigate('/');
  };


  const formatearFecha = (fecha) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(fecha).toLocaleDateString(undefined, options);
  };

  const formatearHora = (hora) => {
    const horaFormateada = String(hora);
    const horaConDosDigitos = horaFormateada.padStart(4, '0');
    return `${horaConDosDigitos.slice(0, 2)}:${horaConDosDigitos.slice(2)}`;
  };

  return (
    <section>
      <event-info>
        {showAlert && (
          <Alert variant="danger">
            No se mostrará información hasta iniciar sesión. Redirigiendo a la página de inicio de sesión...
          </Alert>
        )}

        {showContent && (
          <>
            <h1>{detalleEvento.nombre_evento}</h1>
            <img src={detalleEvento.imagen_evento} alt="Imagen del evento" />
            <p>Dirección: {detalleEvento.direccion_evento}</p>
            <p>Fecha: {formatearFecha(detalleEvento.fecha_evento)}</p>
            <p>Hora: {formatearHora(detalleEvento.hora_evento)}</p>
            <p>Cupos Disponibles: {detalleEvento.cupos_disponible_evento === 0 ? 'No hay cupos disponibles' : detalleEvento.cupos_disponible_evento}</p>
            {currentUser ? (
              detalleEvento.cupos_disponible_evento > 0 ? (
                inscripcionExitosa ? (
                  <p>Inscripción exitosa en el evento.</p>
                ) : (
                  <button className='btn-cesfam' onClick={inscribirseEnEvento}>
                    Inscribirse
                  </button>
                )
              ) : (
                <button className='btn-cesfam' onClick={handleVolverClick}>
                  Volver
                </button>
              )
            ) : null}
          </>
        )}
      </event-info>
    </section>
  );
}

export default Eventos;
