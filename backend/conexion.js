const mysql = require('mysql2');
const db = mysql.createConnection ({
    host:'localhost' ,
    database: 'test',
    user: 'root',
    password: 'Eusebio070120'
});

db.connect(function (err){ 
    if(err)
        console.log (err)
    else 
        console.log ('conexion exitosa')
});