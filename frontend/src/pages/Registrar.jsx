import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'react-bootstrap';
import { useAuth } from '../layout/AuthContext';

const Registrar = () => {
  const [rut, setRut] = useState('');
  const [dv, setDv] = useState('');
  const [usuario, setUsuario] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [registroExitoso, setRegistroExitoso] = useState(false);
  const [error, setError] = useState('');
  const [camposFaltantes, setCamposFaltantes] = useState([]);
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  if (currentUser) {
    navigate('/');
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    const camposRequeridos = ['rut', 'dv', 'nombre', 'apellido', 'usuario', 'password', 'confirmPass', 'correo'];
    const camposFaltantes = [];

    camposRequeridos.forEach((campo) => {
      if (!eval(campo) && campo !== 'confirmPass') {
        camposFaltantes.push(campo);
      }
    });

    if (camposFaltantes.length > 0) {
      setError('Por favor, rellena todos los campos.');
      setCamposFaltantes(camposFaltantes);
      return;
    }

    if (password !== confirmPass) {
      setError('Las contraseñas no coinciden');
     
      setCamposFaltantes([]);
      return;
    }
    try {
      const response = await axios.post('http://localhost:3001/api/InsertarCuentaPersona_web', {
        p_usuario: usuario,
        p_contrasenia: password,
        p_rut: parseInt(rut, 10),
        p_dv: dv,
        p_nombre: nombre,
        p_apellido: apellido,
        p_correo: correo,
        p_token: null
      });

      if (response.status === 200) {
        setRegistroExitoso(true);
        setError('');
        setCamposFaltantes([]);

        setUsuario('');
        setPassword('');
        setConfirmPass('');
        setRut('');
        setDv('');
        setNombre('');
        setApellido('');
        setCorreo('');

        setTimeout(() => {
          setRegistroExitoso(false);
          navigate('/login');
        }, 5000);
      } else if (response.status === 401) {
        setError('La cuenta ya se encuentra registrada.');
      } else {
        console.error('Error al registrar.');
        setError('Error al registrar.');
      }
    } catch (error) {
      console.error('Error en la llamada a la API:', error);
      setError('Error al insertar el registro. Verifica los campos faltantes.');
    }
  };

  return (
    <section className='section-login'>
      <form-login>
        <h1>Registrarse</h1>
        {registroExitoso && (
          <Alert variant="success" onClose={() => setRegistroExitoso(false)} dismissible>
            Registro insertado exitosamente.
          </Alert>
        )}
        {error && (
          <Alert variant="danger">
            {error}
            {camposFaltantes.length > 0 && (
              <div>
                <p>Campos faltantes:</p>
                <ul>
                  {camposFaltantes.map((campo, index) => (
                    <li key={index}>{campo}</li>
                  ))}
                </ul>
              </div>
            )}
          </Alert>
        )}
        <form id='login-container' onSubmit={handleSubmit}>
          <p>Rut del paciente</p>
          <p className="small-text">(Sin puntos)</p>
          <div className="rutPaciente">
            <input id='rut-registrar'
              type="number"
              value={rut}
              onChange={(e) => setRut(e.target.value)} />
            <p>-</p>
            <input id='dv-registrar'
              type="text"
              value={dv}
              onChange={(e) => setDv(e.target.value)} />
          </div>
          <p>Nombre</p>
          <input type="text"
            id='nombre'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)} />
          <p>Apellido</p>
          <input type="text"
            id='apellido'
            value={apellido}
            onChange={(e) => setApellido(e.target.value)} />
          <p>Correo</p>
          <input
            type="email"
            id="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
          <p>Usuario</p>
          <input type="text"
            id='usuario'
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)} />
          <p>Password</p>
          <input type="password"
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
          <p>Confirmar Password</p>
          <input type="password"
            id='confirmPass'
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)} />
          <button className='btn-cesfam' type='submit'>Registrarse</button>
        </form>
        <nav>
          <p>Ya tienes una cuenta? <Link to='/login'>Inicia Sesión!</Link></p>
        </nav>
      </form-login>
    </section>
  );
}

export default Registrar;
