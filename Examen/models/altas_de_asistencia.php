<?php
/**
 * User: Tomas
 * Date: 08/06/2015
 *
 */
    include("sql.php");
    if($_POST["etiqueta"] == "alumno" && $_POST["numero_control"] != "")alta_alumno();
    else if($_POST["etiqueta"] == "maestro" && $_POST["codigo_Maestro"] != "")alta_maestro();
    else if($_POST["etiqueta"] == "administracion" && $_POST["codigo_administrativo"] != "")alta_aministracion();
    else echo "<p id =\"serverp\">Verifique que el campo(s) no esten vacios, Pongame 100(:</p>";

    function alta_alumno()
    {
        $sql = new Sql();
        $numero_control = $_POST["numero_control"];
        $nombre = $_POST["nombre_estudiante"];
        $carrera = $_POST["carrera"];
        $nivel = $_POST["nivel"];
        $respuesta = $sql->consulta_bd("SELECT nombre FROM alumno WHERE numero_control = $numero_control");
        if(!isset($respuesta) && $respuesta == "")
        {
            $sql->altas_bd("INSERT INTO alumno(numero_control, nombre, carrera, nivel, asistencia) VALUES($numero_control,'$nombre','$carrera','$nivel', 1)");
            $mensaje = "<p id =\"serverp\">Registro y asistencia procesada, Pongame 100(:</p>";
        }else $mensaje = "<p id =\"serverp\">El registro y asistencia no fueron procesados procesada, Pongame 100(:</p>";
        $sql->closeConec();
        echo $mensaje;

    }
    function alta_maestro()
    {
        $sql = new Sql();
        $codigo_mestro = $_POST["codigo_Maestro"];
        $nombre = $_POST["nombre_maestro"];
        $divicion = $_POST["divicion"];
        $respuesta = $sql->consulta_bd("SELECT nombre FROM maestro WHERE codigo_maestro = $codigo_mestro");
        if(!isset($respuesta) && $respuesta == "")
        {
            $sql->altas_bd("INSERT INTO maestro(codigo_maestro, nombre, divicion, asistencia) VALUES($codigo_mestro,'$nombre','$divicion', 1)");
            $mensaje = "<p id =\"serverp\">Registro y asistencia procesada, Pongame 100(:</p>";
        }else $mensaje = "<p id =\"serverp\">El registro y asistencia no fueron procesados procesada, Pongame 100(:</p>";
        $sql->closeConec();
        echo $mensaje;
    }
    function alta_aministracion()
    {
        $sql = new Sql();
        $codigo_administrativo = $_POST["codigo_administrativo"];
        $nombre = $_POST["nombre_administrativo"];
        $puesto = $_POST["puesto"];
        $respuesta = $sql->consulta_bd("SELECT nombre FROM administracion WHERE condigo = $codigo_administrativo");
        if(!isset($respuesta) && $respuesta == "")
        {
            if(isset($_POST["divicion"]))
            {
                $divicion = $_POST["divicion"];
                $sql->altas_bd("INSERT INTO administracion(condigo, nombre, puesto, divicion, asistencia) VALUES($codigo_administrativo,'$nombre','$puesto','$divicion', 1)");
                $mensaje = "<p id =\"serverp\">Registro y asistencia procesada, Pongame 100(:</p>";
            }else
            {
                $sql->altas_bd("INSERT INTO administracion(condigo, nombre, puesto, asistencia) VALUES($codigo_administrativo,'$nombre','$puesto', 1)");
                $mensaje = "<p id =\"serverp\">Registro y asistencia procesada, Pongame 100(:</p>";
            }
        }else $mensaje = "<p id =\"serverp\">El registro y asistencia no fueron procesados procesada, Pongame 100(:</p>";
        $sql->closeConec();
        echo $mensaje;
    }
?>