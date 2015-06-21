<?php
	session_start();
	// datos de la pagina 
	$_SESSION["edad"] = $_POST["edad"];
	$_SESSION["nivel"] = $_POST["nivel"];
	$_SESSION["escuela"] = $_POST["escuela"];
	$_SESSION["compani"] = $_POST["telefonos"];
	$_SESSION["localidad"] = $_POST["localidad"];
	$_SESSION["llamadas"] = $_POST["llamadas"];

	if($_SESSION["edad"] != "" &&
	 	$_SESSION["nivel"] != "" &&
	 	$_SESSION["escuela"] != "" &&
	   	$_SESSION["compani"] != "" &&
	    $_SESSION["localidad"] != "" &&
	    $_SESSION["llamadas"] != "")
	{
		echo "<script language=\"javascript\">window.location = \"Modelo/pdf.php\"</script>";		
	}else echo "Algunos de los campos estan bacios";
?>