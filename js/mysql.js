
const mysql = require('mysql')

const conection = mysql.createConnection({
    host:'localhost',
    user:'carlos',
    password:'carlos',
    database:'proyecto',
})

conection.connect((err)=> {
    if(err) throw err
    console.log('La conexion funciona')
})

const insertar = "INSERT INTO usuario(dni, nombre, apellido,email,password,pais) VALUES (6,'tatu','Lopez', 'email1','pepe','ARG')" 
conection.query(insertar, (err,rows) =>{
    if(err) throw err
})

conection.query('SELECT * FROM usuario', (err,rows) => {
if(err) throw err
console.log('Los datos de la tabla son:')
console.log(rows)
})

conection.end 

 