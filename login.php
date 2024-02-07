
<?php
// #####Establecer conexión a la base de datos ######
// ##################################################

$servername = "localhost";
$username = "root";
$password = "MEntiroso1986";
$database = "proyecto";

$conn = new mysqli($servername, $username, $password, $database);

// ############## Verificar la conexión #############
// ##################################################

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// #########Recuperar datos del formulario ##########
// ##################################################

// ######################## VALIDACION SIN SESION ####################################
// ###################################################################################

$username = $_POST['nombre'];
$password = $_POST['password'];

// Consultar la base de datos para validar la información
$sql = "SELECT * FROM usuario WHERE nombre='$username' AND password='$password'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Usuario autenticado correctamente
    echo "¡Inicio de sesión exitoso!";

    // Lo saco por ahora para ver header("Location: ./principal.html");
	

} else {
    // Usuario no encontrado o contraseña incorrecta
    echo "Nombre de usuario o contraseña incorrectos.";

// Lo saco por ahora para ver header("Location: ./login.html"); 

}

// ######### CODIGO DE VALIDACIÓN DE SESIÓN #########
// ##################################################

session_start();

/* if (isset($_POST['btnSubmit']))

*/

$_SESSION['isLogged'] = "inicial";

{
    if($_POST['nombre'] == 'admin' && $_POST['password'] == '123')

        {  
            $_SESSION['nombre'] = 'admin';
            $_SESSION['email'] = 'email@gmail.com';
            $_SESSION['isLogged'] = "ok";
            
         } 
} 

// ############### Valida si es admin. SI es correcto redirecciona a la página del catalogo #################
// ##########################################################################################################


if($_SESSION['isLogged'] === "ok" )
    {
    echo "Inicio de Sesion exitoso doble".$_SESSION['nombre']; 

    // pongo boton de log out para probar
    echo "<a href='logout.php'>Log out</a>";
        
    /* header("Location: ./principal.html"); */

    }

var_dump($_SESSION);


// Cerrar la conexión
$conn->close();
?>