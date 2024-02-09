<?php
// Establecer la conexión a la base de datos (reemplaza con tus propios datos)

$servername = "localhost";
$username = "carlos";
$password = "carlos";
$dbname = "proyecto"; 

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

//Recuperar datos del formulario

$dni = $_POST['dni'];

$nombre = $_POST['nombre'];

$apellido = $_POST['apellido'];

$email = $_POST['email'];

$password = $_POST['password'];

//$password = password_hash($_POST['password'], PASSWORD_DEFAULT); 
//Hash de la contraseña

$pais = $_POST['pais'];

//Insertar datos en la base de datos

$sql = "INSERT INTO usuario (dni, nombre, apellido, email, password , pais) VALUES ('$dni','$nombre','$apellido','$email', '$password', '$pais' )";

if ($conn->query($sql) === TRUE) {
    echo "Registro exitoso";
} else {
    echo "Error al registrar: " . $conn->error;
}

// Cerrar la conexión
$conn->close();

?>
