<?php
/**
 * User: Tomas
 * Date: 03/06/2015
 * Time: 08:00 AM
 */
    include("sql.php");
    $mensaje = "";
    $numeroControlLibro = $_POST["numeroControlLibro"];
    $numeroDeControlAlumno = $_POST["numeroControlAlumno"];
    $nombreAlumno = $_POST["nombreDelAlumno"];
    $carrera = $_POST["select1"];
    $nivel = $_POST["select2"];
    $numeroPedido = $_POST["numeroPedido"];
    $fechaPedido = $_POST["fecha"];
    $horaPedido = $_POST["hora"];
    $mysql = new Sql();

    if($numeroControlLibro != "" && $numeroDeControlAlumno != "" && $nombreAlumno != "" && $carrera != "" && $nivel != "" && $numeroPedido != "" && $fechaPedido != "" && $horaPedido != "")
    {
        if(valirdarNumeroControlAlumno($numeroDeControlAlumno) && validarNombreAlumno($nombreAlumno))
        {
            $mysql -> altas_bd("INSERT INTO alumno(numero_control, nombre, carrera, nivel)VALUES($numeroDeControlAlumno,'$nombreAlumno','$carrera','$nivel')");
            $mysql -> altas_bd("INSERT INTO pedido(numero_control, id, fecha, hora)VALUES($numeroDeControlAlumno,$numeroControlLibro,'$fechaPedido','$horaPedido')");
            $mysql -> closeConec();
            echo "Transaccion Realizada";
        }echo $mensaje;
    }else echo "Algunos campos pueden estar vacios, verificar porfavor";

    function valirdarNumeroControlAlumno($numero)
    {
        global $mensaje;
        if(is_numeric($numero) && strlen($numero) <= 8 && strlen($numero) > 0)
            return true;
        else
        {
            $mensaje .= "*Error: Verificar que numero de control del alumno no sea mayor a 8 digitos, o que no contenga caracteres alfabeticos o especiales. ";
            return false;
        }
    }
    function validarNombreAlumno($nombre)
    {
        global $mensaje;
        if(is_string($nombre) && strlen($nombre) < 50 && strlen($nombre) > 0)return true;
        else
        {
            $mensaje .= "*Error: verificar que nombre no sobrepase mas de 50 caracteres. Caracteres: ".strlen($nombre);
            return false;
        }
    }
?>