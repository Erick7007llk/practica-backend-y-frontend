const express = require('express');
const cors = require('cors');
const db = require('./conexion');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {});
app.post('/contacto', (req, res) => {
    const { nombre, contacto, mensaje } = req.body;

    const sql = 'INSERT INTO contacto (nombre, contacto, mensaje) VALUES (?, ?, ?)';

    db.query(sql, [nombre, contacto, mensaje], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: err });
        }
        res.json({ mensaje: 'Datos guardados correctamente' });
    });
});
app.listen(port, () => {
    console.log(`server running in: ${port}`);
});