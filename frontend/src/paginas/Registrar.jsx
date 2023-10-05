import { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Registrar = () => {
  return (
    <section-login>
      <form-login>
        <h1>Registrarse</h1>
        <form id='login-container' action="">
          <p>Rut del paciente</p>
          <p className="small-text">(Sin puntos)</p>
          <div className="rutPaciente">
            <input id='rut-registrar' type="text" />
            <p>-</p>
            <input id='dv-registrar' type="text" />
          </div>
          <p>Nombre</p>
          <input type="text" />
          <p>Apellido</p>
          <input type="text" />
          <p>Telefono</p>
          <input type="text" />
          <p>Password</p>
          <input type="password" />
          <p>Confirmar Password</p>
          <input type="password" />
          <button className='btn-cesfam' type='submit'>Registrarse</button>
        </form>
        <nav>
          <p>Ya tienes una cuenta? <Link to='/login'>Inicia Sesion!</Link></p>
        </nav>
      </form-login>
    </section-login>
  )
}

export default Registrar