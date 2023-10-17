import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Login = () => {
  const [rut, setRut] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [exito, setExito] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([rut, password].includes('')) {
      setError('Por favor, rellena todos los campos.');
      return;
    }
    try {
      const response = await axios.post('http://localhost:3001/api/ValidarLogin', {
        rut,
        password,
      });

      if (response.status === 200) {
        setExito(true);
        setError('');
        setTimeout(() => {
          setExito(false);
        }, 5000);
      } else {
        setError('Credenciales inválidas');
      }
    } catch (error) {
      console.error('Error en la llamada a la API:', error);
      setError('Error al iniciar sesión. Verifica tus credenciales.');
    }
  };
  return (
    <section className='section-login'>
      <form-login>
        <h1>Iniciar Sesion</h1>
        <form id='login-container' onSubmit={handleSubmit}>
          {exito && (
            <Alert variant="success" onClose={() => setExito(false)} dismissible>
              Inicio de sesión exitoso.
            </Alert>
          )}
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          <p>Rut del paciente</p>
          <p className="small-text">(Sin puntos ni guion)</p>
          <input
            type="text"
            id='rut'
            value={rut}
            onChange={(e) => setRut(e.target.value)} />
          <p>Password</p>
          <input
            type="password"
            id='password'
            value={password} 
            onChange={(e)=>setPassword(e.target.value)}/>
          <button className='btn-cesfam' type='submit'>Iniciar Sesion</button>
        </form>
        <nav>
          <p>No tienes una cuenta? <Link to="/registrar">Registrate</Link></p>
        </nav>
      </form-login>
    </section>
  )
}

export default Login