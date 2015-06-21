<?php
/**
 * User: Tomas
 * Date: 09/06/2015
 *
 */
include("sql.php");
if($_POST["tag"] == "alumno" && $_POST["numero_control"] != "")alta_alumno();
else if($_POST["tag"] == "maestro" && $_POST["codigo_maestro"] != "")alta_maestro();
else if($_POST["tag"] == "administracion" && $_POST["codigo_empleado"] != "")alta_administracion();
else echo "<p id =\"serverp\">Verifique que el campo(s) no esten vacios, Pongame 100(:</p>";

function alta_alumno()
{
    $sql = new Sql();
    $numero_control = $_POST["numero_control"];
    $respuesta = $sql->consulta_bd("SELECT nombre FROM alumno WHERE numero_control = $numero_control and asistencia = 1");
    if(isset($respuesta) && $respuesta != "")
    {
        $sql->altas_bd("UPDATE examen.alumno SET asistencia = 1 WHERE alumno.numero_control = $numero_control and asistencia = 1");
        $mensaje ="<p id =\"serverp\">Asistencia procesada, Pongame 100(: </p>";

    }else $mensaje = "<p id =\"serverp\">Asistencia no procesada, alumno no se encuentra registrado, Pongame 100(:</p>";
    $sql->closeConec();
    echo $mensaje;
}

function alta_maestro()
{
    $sql = new Sql();
    $codigo = $_POST["codigo_maestro"];
    $respuesta = $sql->consulta_bd("SELECT nombre FROM maestro WHERE codigo_maestro = $codigo and asistencia = 1");
    if(isset($respuesta) && $respuesta != "")
    {
        $sql->altas_bd("UPDATE examen.maestro SET asistencia = 1 WHERE maestro.codigo_maestro = $codigo and asistencia = 1");
        $mensaje ="<p id =\"serverp\">Asistencia procesada, Pongame 100(: </p>";

    }else $mensaje = "<p id =\"serverp\">Asistencia no procesada, maestro no se encuentra registrado, Pongame 100(:</p>";
    $sql->closeConec();
    echo $mensaje;
}

function alta_administracion()
{
    $sql = new Sql();
    $codigo = $_POST["codigo_empleado"];
    $respuesta = $sql->consulta_bd("SELECT nombre FROM administracion WHERE condigo = $codigo");
    if(isset($respuesta) && $respuesta != "")
    {
        $sql->altas_bd("UPDATE examen.administracion SET asistencia = 1 WHERE administracion.codigo = $codigo");
        $mensaje ="<p id =\"serverp\">Asistencia procesada, Pongame 100(: ";

    }else $mensaje = "<p id =\"serverp\">Asistencia no procesada, el empleado no se encuentra registrado, Pongame 100(:";
    $sql->closeConec();
    echo $mensaje;
}
?>