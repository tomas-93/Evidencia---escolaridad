<?php
	include("sql.php");
	$nombre =$_POST["usuario"];
	$passw = $_POST["password"];
	$repetirPassw = $_POST["repetirPassword"];
	$correo = $_POST["correo"];
	$var = new Sql;
	if($nombre != "" && $passw != "" && $repetirPassw != "" && $correo != "")
	{
		if($passw == $repetirPassw)
		{
			$filas = $var->consulta_bd("SELECT nombre, correo FROM usuario WHERE nombre = '$nombre' and correo = '$correo'");
			if(!isset($filas))
			{
				$var -> altas_bd("INSERT INTO usuario (nombre, password, correo) VALUES('$nombre',AES_ENCRYPT('$passw', 'usuario'),'$correo')");
				echo "<script language=\"javascript\">window.location = \"../login.html\"</script>";
			}else echo "<p>El suario ya se encuentra registrado</p>";
		}else echo "<p>Las contraseñas son incorrectas, intentelo de nuevo</p>";
	}else echo "<p>Campo(s) vacio(s)</p><p>Por favor llene todos los campos</p>";
?>
