<?php
	session_start();
	include("sql.php");
	$usuario = $_POST["usuario"];
	$password = $_POST["password"];
	$var = new Sql;
	if($usuario !=  "" && $password != "")
	{
		$filas = $var -> consulta_bd("SELECT nombre, password FROM usuario WHERE nombre = '$usuario' and password = AES_ENCRYPT('$password','usuario')");
		if(isset($filas))
		{
			$_SESSION["nombre"]= $usuario;
			echo "<script language=\"javascript\">window.location = \"../preguntas.html\"</script>";
		}else echo "<p>Verificar usuario y contraseña</p>";
	}else echo "<p>Los campos estan bacio(s), verifique de nuevo</p>";
?>