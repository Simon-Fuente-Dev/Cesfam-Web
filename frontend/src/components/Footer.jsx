import logoFace from '../assets/img/logoFacebook.png';
import logoInsta from '../assets/img/logoInsta.png';
import logoTwitt from '../assets/img/logoTwitter.png';

const Footer = () => {
    return (
        <footer>
            <p>Siguenos en nuestras redes sociales!</p>
            <div className="logo-container">
                <img src={logoFace} alt="" />
                <img src={logoInsta} alt="" />
                <img src={logoTwitt} alt="" />
            </div>
        </footer>
    )
}

export default Footer