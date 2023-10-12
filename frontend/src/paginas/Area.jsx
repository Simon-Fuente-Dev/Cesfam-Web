

const Area = () => {
    return (
        <section-area>
            <form className="area">
                <h1>Seleccione un area para su consulta</h1>
                <select>
                    <option value="default" disabled selected>Seleccione un Area...</option>
                    <option value="MedicinaGeneral">Medicina General</option>
                    <option value="Kinesiologia">Kinesiologia</option>
                    <option value="Dermatologia">Dermatologia</option>
                    <option value="Urologia">Urologia</option>
                </select>
            
                <h1>Seleccione un profesional</h1>
                <select>
                    <option value="default" disabled selected>Seleccione un Profesional...</option>
                    <option value="juanPerez">Juan Perez</option>
                    <option value="micoMicrofono">Mico el microfono</option>
                </select>
                <button >Siguiente</button>
            </form>
        </section-area>
    )
}

export default Area