import React from 'react'
import '../styles/index.css';
import logoCesfam from '../assets/img/logoCesfam2.png';
import { useAuth } from '../layout/AuthContext';
import { Link } from 'react-router-dom'
const Header = () => {
    const { currentUser, logout } = useAuth();

    return (
        <header>
            <div className="header">
                <div className="info-pag">
                    <p>Cesfam Maffioletti</p>
                    <p className='visible'>Avenida Central 30; La Florida</p>
                </div>
                <div className="logo-cesfam">
                    <Link to="/">
                        <img className='logo' src={logoCesfam} alt="" />
                    </Link>
                </div>
                <div className="login">
                    {currentUser ? (
                        <>
                            <p className='login-text'>Bienvenido, {currentUser.userName}</p>
                            <a className='login-text cerrar-text' onClick={logout}>Cerrar sesión</a>
                        </>
                    ) : (
                        <>
                            <Link className='login-text' to="/login">
                                Iniciar Sesion
                            </Link>
                            <Link className='login-text' to="/Registrar">
                                Registrarse
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header