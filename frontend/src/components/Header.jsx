import React from 'react'
import '../styles/index.css';
import logoCesfam from '../assets/img/logoCesfam2.png';
import logoUser from '../assets/img/iconoUser.png';
import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <header>
            <div className="info-pag">
                <p>Cesfam Maffioletti</p>
                <p>Avenida Central 30; La Florida</p>
            </div>
            <Link to="/">
                <img className='logo' src={logoCesfam} alt="" />
            </Link>
            <div className="login">
                <Link to="/login">Iniciar Sesion</Link>
                <Link to="/login">
                    <img src={logoUser} alt="" />
                </Link>
            </div>
        </header>
    )
}

export default Header