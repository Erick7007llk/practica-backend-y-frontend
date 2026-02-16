const express = require('express');
const router = express.Router();
const db = require('../conexion'); 

router.post('/contacto', (req, res) => {
    const { nombre, contacto, mensaje } = req.body.data; 

    const sql = 'INSERT INTO contacto (nombre, contacto, mensaje) VALUES (?, ?, ?)';
    db.query(sql, [nombre, contacto, mensaje], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ mensaje: 'Error al guardar los datos', error: err });
        }
        res.json({ mensaje: 'Datos guardados correctamente' });
    });
});

module.exports = router;
