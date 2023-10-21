const express = require('express');
const router = express.Router();
const db = require('../bd/conexionbd');

router.post('/InsertarCuentaPersona_web', (req, res) => {
  const { p_usuario, p_contrasenia, p_rut, p_dv, p_nombre, p_apellido, p_correo, p_token } = req.body;
  db.query('CALL InsertarCuentaPersona_web(?, ?, ?, ?, ?, ?, ?, ?)', [p_usuario, p_contrasenia, p_rut, p_dv, p_nombre, p_apellido, p_correo, p_token], (err, results) => {
    if (err) {
      console.error('Error al insertar datos:', err);
      res.status(500).json({ error: 'Error al insertar datos.' });
    } else {
      if (results && results[0] && results[0][0] && results[0][0].respuesta === 1) {
        console.log('Cuenta registrada correctamente');
        res.status(200).json({ message: 'Cuenta registrada correctamente' });
      } else {
        res.status(401).json({ error: 'Persona ya se encuentra registrada.' });
      }
    }
  });
});


router.post('/ValidarLogin_web', (req, res) => {
  const { p_rut, p_contrasenia } = req.body;
  db.query(
    'CALL ValidarLogin_web_id(?, ?)',
    [p_rut, p_contrasenia],
    (err, results) => {
      if (err) {
        console.error('Error al verificar credenciales:', err);
        res.status(500).json({ error: 'Error al verificar credenciales.' });
        return;
      }

      const userResult = results[0][0];

      if (userResult && userResult.id_cuenta) {
        const { id_cuenta, token_cuenta } = userResult;
        res.status(200).json({ message: 'Credenciales válidas', id_cuenta, token_cuenta });
      } else {
        res.status(401).json({ error: 'Credenciales inválidas' });
      }
    }
  );
});



router.get('/obtenerUsuario/:rut', (req, res) => {
  const rut = req.params.rut;
  db.query('SELECT usuario_cuenta FROM cuenta WHERE rut_persona_cuenta = ?', [rut], (err, results) => {
    if (err) {
      console.error('Error al obtener el nombre de usuario:', err);
      res.status(500).json({ error: 'Error al obtener el nombre de usuario.' });
    } else {
      if (results.length > 0) {
        const usuario_cuenta = results[0].usuario_cuenta;
        res.status(200).json({ usuario_cuenta });
      } else {
        res.status(404).json({ error: 'Usuario no encontrado.' });
      }
    }
  });
});

router.get('/obtenerEventos', (req, res) => {
  db.query('CALL obtener_eventos_web()', (err, results) => {
      if (err) {
          console.error('Error al obtener eventos:', err);
          res.status(500).json({ error: 'Error al obtener eventos.' });
      } else {
          res.status(200).json(results[0]);
      }
  });
});
router.get('/obtenerEvento/:eventoId', (req, res) => {
  const eventoId = req.params.eventoId;
  db.query('CALL obtener_evento_por_id(?)', [eventoId], (err, results) => {
      if (err) {
          console.error('Error al obtener el evento:', err);
          res.status(500).json({ error: 'Error al obtener el evento.' });
      } else {
          res.status(200).json(results[0]);
      }
  });
});
router.post('/inscribirEvento', (req, res) => {
  const { idCuenta, idEvento } = req.body;


  db.query('SELECT cupos_disponible_evento FROM evento WHERE id_evento = ?', [idEvento], (err, results) => {
    if (err) {
      console.error('Error al obtener la información del evento:', err);
      res.status(500).json({ error: 'Error al obtener la información del evento.' });
    } else {
      const cuposDisponibles = results[0].cupos_disponible_evento;

      if (cuposDisponibles <= 0) {
        res.status(400).json({ error: 'No hay cupos disponibles para este evento.' });
      } else {

        db.query('CALL IncribirUsuarioEnEvento(?, ?)', [idCuenta, idEvento], (err) => {
          if (err) {
            console.error('Error al inscribir al usuario en el evento:', err);
            res.status(500).json({ error: 'Error al inscribir al usuario en el evento.' });
          } else {
            res.status(200).json({ message: 'Inscripción exitosa en el evento.' });
          }
        });
      }
    }
  });
});

module.exports = router;
