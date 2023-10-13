
import '../styles/index.css';
import evento from '../assets/img/evento.png';
import evento2 from '../assets/img/evento_2.png';
import iconoAgendar from '../assets/img/iconoAgendar.png';
import iconoReceta from '../assets/img/iconoReceta.png';
import { Link } from 'react-router-dom'

function Index() {
  return (
    <>
      <main>
        {/* Seccion de los servicios de la pagina */}
        <section-services>
          <h2 id='title'>Nuestros Servicios</h2>
          <div className="services">
            <Link to={'/Area'} className="service-card">
              <div className="service-info">
                <img src={iconoAgendar} alt="" />
                <p>Agendar Hora</p>
              </div>
            </Link>

            <a className="service-card">
              <div className="service-info">
                <img src={iconoReceta} alt="" />
                <p>Ver Receta Medica</p>
              </div>
            </a>
          </div>
        </section-services>

        <carrousel>
          <h2 id='title'>Proximos Eventos y Talleres!</h2>
          <div id="carouselExampleCaptions" className="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <Link to="/Eventos">
                  <img src="https://www.plaqueservicios.com/wp-content/uploads/2019/09/deporte1.jpg"className="d-block" alt="..." />
                </Link>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Evento de baile de abuelitos</h5>
                  <p>Presione la imagen para incribirse al evento</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={evento2} className="d-block " alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </carrousel>

        <section-info>
          <div className="cesfam-info">
            <div className="ubication">
              <h3>Donde nos ubicamos?</h3>

              <iframe
                className="mapa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.7467683690397!2d-70.5808420243045!3d-33.55995517334625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d0d443ac02d9%3A0x9b0eccb7c381ab78!2sCESFAM%20Maffioletti!5e0!3m2!1ses!2scl!4v1693696027800!5m2!1ses!2scl"
                width="600"
                height="450"
                style={{ border: '0' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

            </div>
            <div className="contact">
              <h3>Mas informacion</h3>
              <ul>
                <li>Correo: oirsmaffioletti@gmail.com</li>
                <li>Telefono: 226112952</li>
                <li className="horario">Horario</li>
                <li>Lunes a jueves: 8:00 a 17:30 hrs</li>
                <li>Viernes: 8:00 a 16:30 hrs.</li>
              </ul>
            </div>
          </div>
        </section-info>
      </main>
    </>
  )
}

export default Index
