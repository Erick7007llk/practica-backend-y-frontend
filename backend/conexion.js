const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Eusebio070120',
    database: 'test'
});

db.connect((err) => {
    if (err) {
        console.log('Error de conexión:', err);
    } else {
        console.log('Conexión exitosa');
    }
});

module.exports = db;
