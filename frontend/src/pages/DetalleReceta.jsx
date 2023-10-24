import React from 'react'
import Swal from 'sweetalert2'
import withReactContent from "sweetalert2-react-content"
import jsPDF from 'jspdf'
import logoCesfam2 from '../assets/img/logoCesfam2.png'
import emailjs from 'emailjs-com'


const MySwal = withReactContent(Swal);

const DetalleReceta = () => {
  const hayMedic = true;
  const solicitarMedic = (e) => {
    e.preventDefault();
    if (hayMedic) {
      //Id de la boleta
      const numeroBoleta = Math.floor(Math.random() * 1000) + 1;

      // Crear una instancia de jsPDF
      const doc = new jsPDF();
      doc.setFont('Arial');
      doc.setFontSize(25);

      // Agregar imagen
      doc.addImage(logoCesfam2, 'JPEG', 10, 10, 200, 100)

      // Agregar contenido
      doc.text('Boleta solicitud de medicamentos cesfam', 20, 10)
      doc.text('Su numero de boleta es: ' + numeroBoleta, 20, 120);
      doc.text('Medicamentos solicitados:', 20, 140);



      // Agregar una lista
      const lista = [
        'Paracetamol 15g',
        'Ibuprofeno 10g',
        'Metformina 20g',
      ];

      const x = 20; // Posición x de la lista
      let y = 160; // Posición inicial y de la lista

      lista.forEach((item) => {
        doc.text(item, x, y);
        y += 20; // Ajusta la posición y para el próximo elemento de la lista
      });

      MySwal.fire({
        titleText: 'Medicamentos solicitados con exito',
        icon: 'success',
        html: `Su numero de boleta es ${numeroBoleta} <br>Presione el boton para descargar su boleta`,
        confirmButtonText: 'Descargar boleta'
      }).then((result) => {
        MySwal.fire({
          titleText: "Boleta descargada con exito",
          icon: 'success',
          text: 'Revise su carpeta de descargas'
        })
        doc.save(`BoletaSimon${numeroBoleta}.pdf`)
        emailjs.send("service_9caz3ty", "template_40ek8tb", {
          nom_paciente: "simon" /*Aqui va el nombre concatenado del apellido*/,
          numero_boleta: numeroBoleta,
          user_email: "simon.soloskate@gmail.com" //Aqui va el email del usuario,
        }, 'kqxltPzfZim80IcOt')
        .then((response) => {
          // Éxito: el correo se envió correctamente
          console.log("Correo enviado con éxito", response);
        })
          .catch((error) => {
            // Error: manejar el error aquí
            console.error("Error al enviar el correo", error);
          });;
      })
    }
  };

  return (
    <section>
      <div className='receta-info'>
        <h1>Receta Medicina general</h1>
        <div className='desc-receta'>
          <h2>Descripción de la receta: </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan rhoncus turpis nec semper. Vestibulum id risus sit amet odio gravida mattis a a libero. Suspendisse elementum eleifend urna, eu lobortis erat rutrum at. Sed nec accumsan augue, in facilisis mauris. Morbi magna erat, rhoncus efficitur porttitor in, varius et est. Quisque feugiat vitae augue non dignissim. Nulla facilisi. Sed id dolor sit amet diam egestas euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin aliquam mollis dui, id congue est imperdiet quis. Suspendisse sollicitudin eu orci et vestibulum. Aliquam laoreet sed nisl a interdum. Proin at tristique libero, a dignissim massa. Nam facilisis mattis dolor, ut posuere leo volutpat vestibulum. Cras posuere pretium finibus. Nunc mollis, erat vitae iaculis congue, mauris dui consequat magna, vitae congue libero lorem non dolor.</p>

        </div>
        <div className="medic-receta">
          <h2>Medicamentos: </h2>
          <li>Paracetamol 15g</li>
          <li>Hibuprofeno 10g</li>
          <li>Metformina 20g</li>
        </div>
        <div className="solicitar">
          <button className='btn-solicitar' onClick={solicitarMedic}>Solicitar medicamentos</button>
        </div>
      </div>
    </section>
  )
}

export default DetalleReceta