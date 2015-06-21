<?php
/**
 * User: Tomas
 * Date: 10/06/2015
 *
 */
session_start();
include("sql.php");
if($_GET["buscar"] == "alumno") crear_variables_de_session_alumno();
else if($_GET["buscar"] == "maestro") crear_variables_de_session_maestro();
else if($_GET["buscar"] == "administracion") crear_variables_de_session_empleado();

function crear_variables_de_session_alumno()
{
    $sql = new Sql();
    $array = $sql -> consulta_bd("SELECT alumno.carrera, alumno.nivel, alumno.nombre, alumno.numero_control,
alumno.asistencia FROM alumno ORDER BY alumno.carrera, alumno.nivel, alumno.nombre ASC");
    $_SESSION["array"]= $array;
    $sql ->closeConec();
    echo"<script language=\"javascript\">window.location = \"../models/crear_reporte.php\"</script> ";
    //echo "../models/crear_reporte.php";
}

function crear_variables_de_session_maestro()
{
    $sql = new Sql();
    $array = $sql -> consulta_bd("SELECT maestro.divicion, maestro.nombre, maestro.codigo_maestro, maestro.asistencia
FROM maestro ORDER BY maestro.divicion, maestro.nombre ASC");
    $_SESSION["array"]= $array;
    $sql ->closeConec();
    echo"<script language=\"javascript\">window.location = \"../models/crear_reporte.php\"</script> ";
    //echo "../models/crear_reporte.php";
}

function crear_variables_de_session_empleado()
{
    $sql = new Sql();
    $array = $sql -> consulta_bd("SELECT administracion.nombre, administracion.puesto, administracion.condigo,
administracion.divicion,administracion.asistencia FROM administracion ORDER BY administracion.nombre ASC");
    $_SESSION["array"]= $array;
    $sql ->closeConec();
    echo"<script language=\"javascript\">window.location = \"../models/crear_reporte.php\"</script> ";
    //echo "../models/crear_reporte.php";
}
?>