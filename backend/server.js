const express = require('express');
const cors = require('cors');
const fromcontac = require('./routes/fromcontac')
const app = express();
const db = require('./conexion.js')
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', require ('./routes/fromcontac'));


app.listen(port, () => {
    console.log(`server running in: ${port}`);
});