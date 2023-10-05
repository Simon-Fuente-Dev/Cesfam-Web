const express = require('express');
const router = express.Router();
const db = require('../bd/conexionbd');

router.post('/InsertarCuentaPersona', (req, res) => {
  const { usuario, password, telefono, rut, dv, nombre, apellido } = req.body;
  db.query('CALL InsertarCuentaPersona(?, ?, ?, ?, ?, ?, ?)', [usuario, password, telefono, rut, dv, nombre, apellido], (err, results) => {
    if (err) {
      console.error('Error al insertar datos:', err);
      res.status(500).json({ error: 'Error al insertar datos.' });
    } else {
      const resultado = results[0][0];
      if (resultado && resultado.respuesta === 1) {
        console.log('Cuenta registrada correctamente');
        res.status(200).json({ message: 'Cuenta registrada correctamente' });
      } else {
        res.status(401).json({ error: 'Persona ya se encuentra registrada!' });
      }
    }
  });
});


router.post('/ValidarLogin', (req, res) => {
  const { rut, password } = req.body;
  db.query('CALL ValidarLogin(?, ?)', [rut, password], (err, results) => {
    if (err) {
      console.error('Error al verificar credenciales:', err);
      res.status(500).json({ error: 'Error al verificar credenciales.' });
    } else {
      const resultado = results[0][0];

      if (resultado && resultado.respuesta === 1) {
        res.status(200).json({ message: 'Credenciales válidas' });
      } else if (resultado && resultado.respuesta === 0) {
        res.status(401).json({ error: 'Contraseña incorrecta' });
      } else {
        res.status(401).json({ error: 'Usuario no encontrado' });
      }
    }
  });
});
module.exports = router;
