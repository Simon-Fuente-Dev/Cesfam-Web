import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Area = () => {
    const [area, setArea] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if ( area == '') {
            MySwal.fire({
                title: "Debe seleccionar un area",
                icon: "error",
                button: "Aceptar"
            });
            return;
        };

        try {
            navigate('/Hora')
        } catch (error) {
            
        };
    }

    return (
        <section className='section-area'>
            <form className="area" onSubmit={handleSubmit}>
                <h1>Seleccione un area para su consulta</h1>
                <select
                    value={area}
                    onChange={(e) => setArea(e.target.value)}>
                    <option value="">Seleccione un Area...</option>
                    <option value="MedicinaGeneral">Medicina General</option>
                    <option value="Kinesiologia">Kinesiologia</option>
                    <option value="Dermatologia">Dermatologia</option>
                    <option value="Urologia">Urologia</option>
                </select>
                <button type='submit' >Siguiente</button>
            </form>
            
        </section>
    )
}

export default Area