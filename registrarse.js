
var nombre = document.getElementById('nombre');
var apellido = document.getElementById('apellido')
var email = document.getElementById('')
var password = document.getElementById('password')
var pais = document.getElementById('pais')

function enviarformulario(){

    alert('prueba');

const mysql = require('mysql')

const conection = mysql.createConnection({
    host:'localhost',
    user:'carlos',
    password:'CArlos1234',
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

} 