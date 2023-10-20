import React from 'react'
import '../styles/index.css';
import logoCesfam from '../assets/img/logoCesfam2.png';
import logoUser from '../assets/img/iconoUser.png';
import { Link } from 'react-router-dom'
const Header = () => {
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
                <Link className='login-text' to="/login">
                    <p>Login</p>
                </Link>
                <Link className='login-text' to="/Registrar">
                    <p>Registrar</p>
                </Link>
            </div>
        </header>
    )
}

export default Header