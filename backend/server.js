const express = require('express');
const cors = require('cors');
const db = require('./conexion');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/contacto', (req, res) => {

  const { nombre, contacto, mensaje } = req.body;
  const sql = `INSERT INTO contacto (nombre, contacto, mensaje) VALUES (?, ?, ?)`;

  db.query(sql, [nombre, contacto, mensaje], (err, result) => {
    if (err) {
      console.error("Error en la base de datos:", err);
      return res.status(500).json({ error: "Error al guardar en la base de datos" });
    }

    res.status(200).json({ mensaje: "Datos guardados correctamente" });
  });

});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
