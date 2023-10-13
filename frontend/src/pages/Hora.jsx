
const Hora = () => {
  return (
    <section-hora>
      <div className="agendar">
        <div className="especialista">
          <h2>Seleccione un especialista con el que desee atenderse</h2>
          <select>
            <option value="">Seleccione un Especialista..</option>
            <option value="Ricardo">Ricardo Perez</option>
            <option value="Juan">Juan Carlos Bodoque</option>
          </select>
        </div>
        <div className="fecha">
          <h2>Elija una fecha para su hora</h2>
          <select>
            <option value="">Seleccione una fecha..</option>
            <option value="Ricardo">15/12/2023</option>
            <option value="Juan">16/12/2023</option>
          </select>
        </div>
        <div className="hora"></div>
      </div>
    </section-hora>
  )
}

export default Hora