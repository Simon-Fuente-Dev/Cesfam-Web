import '../styles/index.css';
import evento from '../assets/img/evento.png';

const Eventos = () => {
  return (
    <event-section>
      <event-info>
        <h1>Taller de salsa y cueca para todas las edades!</h1>
        <img src={evento} alt="" />
        <p>Horario: Lunes y Miercoles desde las 17:00 hasta las 18:00</p>
        <p>Cupos Disponibles: 50</p>
        <form class="form-event" action="">
            <button>Inscribirse!</button>
        </form>
      </event-info>
    </event-section>

  )
}

export default Eventos