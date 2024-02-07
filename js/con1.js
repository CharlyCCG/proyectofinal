/* ZONA DE PORUEBAS*/

/* function prueba(){  
    alert("Prueba");
    return 
}
*/

/* ################ Llamo a la libreria de mysql y genero conexión a la base ################ */ 
/* ########################################################################################## */

let mysql = require("mysql");

let conexion = mysql.createConnection({
    host:"localhost",
    database:"proyecto",
    user:"carlos",
    password:"CArlos1234"
})


/* ################  Verifico conexión a la base ################ */
/* ############################################################## */ 

conexion.connect(function(err){

    if (err){
        throw err;
    }else{
        console.log("Conexion exitosa");
    }
}
);

/* ################ Insertar datos en una tabla ################ */
/* ############################################################# */

/* insertar()

function insertar(){
 */

    const insertarusuarios= "INSERT INTO usuario (dni,nombre,apellido,email,password,pais) VALUES ('77','luis','NAN','SAPE@uu.uu','noseeeeee','URU')"

conexion.query(insertarusuarios,function(error,rows){
    if (error){
        throw error;
    }else{

        console.log("Datos insertados correctamente");
    }

});   

/* ################ Modificar datos en una tabla ################ */
/* ############################################################# */

/* const modificarusuarios = "UPDATE usuario SET nombre = 'Manuel44' WHERE dni = 1 ";
 
conexion.query(modificarusuarios,function(error,lista){

    if (error){
        throw error;
    }else{

        console.log("Datos Modificados correctamente");
    }

});  */

/* ################ Borrado de un registro ################ */
/* ################################################################*/

/* 
const borrarusuario = "DELETE FROM usuario where dni = 2 "

conexion.query(borrarusuario, function(error,lista){

    if (error){
        throw error
    }else{

        console.log("Registro Borrado"); 

    } 
}); 
 
 */

/* ################ Realizar consulta a una Tabla ################ */
/* ################################################################ */

/* 
const  consultaUsuarios = "SELECT * from usuario";
 
conexion.query(consultaUsuarios,function(error, lista){

if (error){
    throw error;
}else{
    console.log(lista[lista.length -1]);
}

}); 
*/

conexion.end();  

