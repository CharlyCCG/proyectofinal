//Llamo a la libreria 
const express = require("express");

//llamo a la libreria MySql

const mysql = require("mysql");

//cargo los metodos de express en APP
const app = express();

//Genero conexión con el server y BD

let conexion = mysql.createConnection({
    host: "localhost",
    database: "proyecto",
    user: "carlos",    
    password: "CArlos1234" 
}) 

//declaro la carpeta views como la root

app.set("view engine","ejs");

//###################################################################

// Utilizo esa linea para mostar lo datos del body sino aparecen no definidos porque aun no son objetos
//OJO DEBE OR ANTES DE LA RENDEIZACIÓN
app.use(express.urlencoded({extended:false}));
//para json
app.use(express.json());



//renderizo la pagina registro.ejs
app.get("/", function ( req ,res ){
    res.render("registrarse")
  
})


//utilizo post para validar los datos que vienen del body

app.post("/Validar" , function (req,res){

    //traigo datos del body
    const datos = req.body;
    //asigno a cada variable el dato de cada campo traido
    let dni = datos.dni;
    let nombre = datos.nombre;
    let apellido = datos.apellido;
    let email = datos.email;
    let password = datos.password;
    let pais = datos.pais;

    //genero consulta de insert
    let registrar = "INSERT INTO usuario (dni,nombre,apellido,email,password,pais) VALUES ('"+dni+"','"+nombre+"','"+apellido+"','"+email+"','"+password+"','"+pais+"')";

    //ejecuto la consulta
    conexion.query(registrar, function(error){

        if (error){
            throw error;
        }else{
              console.log("Los datos se guardaron con exito")  
        }
    })



    /* console.log(datos); */
}) 


//manejo de páginas staticas
/* app.use(express.static("public")); */

//##################################################################

//Levanto el server
app.listen(3000,function(){
    console.log("Servidor activo http://localhost:3000");

})

