import React from 'react'
import '../styles/index.css';
import logoCesfam from '../assets/img/logoCesfam2.png';
import logoUser from '../assets/img/iconoUser.png';
import { useAuth } from '../layout/AuthContext';
import { Link } from 'react-router-dom'
const Header = () => {
    const { currentUser, logout } = useAuth();

    return (
        <header>
            <div className="info-pag">
                <p>Cesfam Maffioletti</p>
                <p>Avenida Central 30; La Florida</p>
            </div>
            <div className="logo-cesfam">
                <Link to="/">
                    <img className='logo' src={logoCesfam} alt="" />
                </Link>
            </div>
            <div className="login">
                {currentUser ? (
                    <>
                        <span>Bienvenido, {currentUser.userName}</span>
                        <button onClick={logout}>Cerrar sesión</button>
                    </>
                ) : (
                    <>
                        <Link className='login-text' to="/login">
                            <p>Login</p>
                        </Link>
                        <Link className='login-text' to="/Registrar">
                            <p>Registrar</p>
                        </Link>
                    </>
                )}
            </div>
        </header>
    )
}

export default Header