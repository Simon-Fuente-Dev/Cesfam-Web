import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import emailjs from 'emailjs-com'

const MySwal = withReactContent(Swal);

const Hora = () => {
  const [especialista, setEspecialista] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [habilitado, setHabilitado] = useState(true);

  const selectEspecialista = e => {
    e.preventDefault();
    const especialistaSeleccionado = e.target.value;

    setEspecialista(especialistaSeleccionado);
    
    if (especialistaSeleccionado === "") {
      MySwal.fire({
        title: "Debe seleccionar un especialista",
        icon: "error"
      });
      setHabilitado(true);
      setFecha("")
    } else {
      // Deshabilitar el select de fecha si se selecciona un especialista
      setHabilitado(false);
    }
  }


  const seleccionarHora = e => {
    e.preventDefault();
    const horaSeleccionada = e.currentTarget.getAttribute("data-value");

    MySwal.fire({
      title: `¿ Desea agendar la hora de las ${horaSeleccionada} ?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sí",
      cancelButtonText: "No",
    }).then((result) => {

      if (result.isConfirmed) {
        MySwal.fire({
          title: "Hora agendada con exito!",
          text: "Revise su correo con los detalles de la hora",
          icon: "success"
        })
        //Llamar funcion que recarga las horas
        
        // Aqui va procedimiento de insercion
        emailjs.send("service_9caz3ty", "template_mvs6qqb", {
          nom_paciente: "simon" ,
          area: "kinesiologia",
          dia_hora: fecha,
          hora: horaSeleccionada,
          nom_especialista: especialista,
          user_email: "simon.soloskate@gmail.com",
        }, 'kqxltPzfZim80IcOt')
          .then((response) => {
            // Éxito: el correo se envió correctamente
            console.log("Correo enviado con éxito", response);
          })
          .catch((error) => {
            // Error: manejar el error aquí
            console.error("Error al enviar el correo", error);
          });
      }
    });
  }

  return (
    <section className="section-hora">
      <div className="agendar">
        <div className="especialista">
          <h2>Seleccione un especialista con el que desee atenderse</h2>
          <select
            value={especialista}
            onChange={selectEspecialista}>
            <option value="">Seleccione un Especialista..</option>
            <option value="Ricardo">Ricardo Perez</option>
            <option value="Juan">Juan Carlos Bodoque</option>
          </select>
        </div>
        <div className="fecha">
          <h2>Elija una fecha para su hora</h2>
          <select
            disabled={habilitado}
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}>
            <option value="">Seleccione una fecha..</option>
            <option value="15/12">15/12</option>
            <option value="16/12">16/12</option>
          </select>
        </div>
        <div className="hora">
          <h2>Elija una hora para agendar</h2>
          <div className="horas">
            {/* Aqui hay que hacer un select de las horas disponibles segun el especialista y la fecha que se ponen arriba */}
            <div className="hora-card"
              onClick={seleccionarHora}
              data-value="08:00">
              <p>08:00</p>
            </div>
            <div className="hora-card"
              onClick={seleccionarHora}
              data-value="08:30">
              <p>08:30</p>
            </div>
            <div className="hora-card"
              onClick={seleccionarHora}
              data-value="09:00">
              <p>09:00</p>
            </div>
            <div className="hora-card"
              onClick={seleccionarHora}
              data-value="09:30">
              <p>09:30</p>
            </div>
            <div className="hora-card"
              onClick={seleccionarHora}
              data-value="10:00">
              <p>10:00</p>
            </div>
            <div className="hora-card"
              onClick={seleccionarHora}
              data-value="10:30">
              <p>10:30</p>
            </div>
            <div className="hora-card"
              onClick={seleccionarHora}
              data-value="10:30">
              <p>10:30</p>
            </div>
            <div className="hora-card"
              onClick={seleccionarHora}
              data-value="10:30">
              <p>10:30</p>
            </div>
            <div className="hora-card"
              onClick={seleccionarHora}
              data-value="10:30">
              <p>10:30</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hora