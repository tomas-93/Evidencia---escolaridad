<?php
/**
 * User: Tomas
 * Date: 11/06/2015
 *
 */

include("sql.php");
$sql = new Sql();

if($_POST["etiqueta"] == "alumno")
{
    $script ="<div class=\"encabezado\"><h3>Alumnos...</h3></div>";
    $array = $sql->consulta_bd("SELECT nombre, carrera, nivel, numero_control FROM alumno ORDER BY carrera, nivel,      nombre ASC");
    $sql -> eliminar_tabla_tabla("TRUNCATE TABLE alumno");
    $sql->closeConec();
    $script.= generar_respuesta($array, true, true);
    echo $script;
}else if($_POST["etiqueta"] == "empleado")
{
    $script ="<div class=\"encabezado\"><h3>Empleados...</h3></div>";
    $array = $sql->consulta_bd("SELECT nombre, puesto, divicion, condigo FROM administracion ORDER BY puesto,           nombre ASC");
    $script .= generar_respuesta($array, false, false);
    $sql -> eliminar_tabla_tabla("TRUNCATE TABLE administracion");
    $script .="<div class=\"encabezado\"><h3>Maestros...</h3></div>";
    $array2 = $sql->consulta_bd("SELECT nombre, divicion, codigo_maestro FROM maestro ORDER BY divicion, nombre ASC");
    $sql -> eliminar_tabla_tabla("TRUNCATE TABLE maestro");
    $script .= generar_respuesta($array2, true, false);
    $sql->closeConec();
    echo $script;
}else if($_POST["etiqueta"] == "todos")
{
    //alumno
    $script ="<div class=\"encabezado\"><h3>Alumnos...</h3></div>";
    $array = $sql->consulta_bd("SELECT nombre, carrera, nivel, numero_control FROM alumno ORDER BY carrera, nivel,      nombre ASC");
    $sql -> eliminar_tabla_tabla("TRUNCATE TABLE alumno");
    $script.= generar_respuesta($array, false, true);
    //El resto
    $script .="<div class=\"encabezado\"><h3>Empleados...</h3></div>";
    $array = $sql->consulta_bd("SELECT nombre, puesto, divicion, condigo FROM administracion ORDER BY puesto, nombre ASC");
    $script .= generar_respuesta($array, false, false);
    $sql -> eliminar_tabla_tabla("TRUNCATE TABLE administracion");
    $script .="<div class=\"encabezado\"><h3>Maestros...</h3></div>";
    $array2 = $sql->consulta_bd("SELECT nombre, divicion, codigo_maestro FROM maestro ORDER BY divicion, nombre ASC");
    $sql -> eliminar_tabla_tabla("TRUNCATE TABLE maestro");
    $script .= generar_respuesta($array2, true, false);
    $sql->closeConec();
    echo $script;
}

function generar_respuesta($array,  $bandera, $bandera2)
{
    $respuesta = "";
    $carrera = "Ing. Administracion";
    $grupo = "1 :A";

    for($contador =0; $contador < count($array); $contador++)
    {
        $respuesta .= "<div id = \"vetanitas$contador\" class = \"ventana\">";

        //grupos
        if($bandera2 && substr($grupo,-1) == "A")
        {
            $respuesta .="<div class=\"encabezadoGrupo\"><h3 class=\"cabeza\">Gurpo $grupo...</h3></div>";
        }else if(substr($grupo,-1) == "B")
        {
            $respuesta .="<div class=\"encabezadoGrupo\"><h3 class=\"cabeza\">Gurpo $grupo...</h3></div>";
        }


        //Carreraas.....
        if($bandera2 && $carrera == "Ing. Informatia")
        {
            $respuesta .="<div class=\"encabezadoCarrera\"><h3 class=\"cabeza\">Ing. Informatia...</h3></div>";
            //bioquimiuca
        }else if($bandera2 && $carrera == "Ing. Bioquimica" )
        {
            $respuesta .="<div class=\"encabezadoCarrera\"><h3 class=\"cabeza\">Ing. Bioquimica...</h3></div>";
        }else if($bandera2 && $carrera == "Ing. Mecanica" )
        {
            $respuesta .="<div class=\"encabezadoCarrera\"><h3 class=\"cabeza\" >Ing. Mecanica...</h3></div>";
        }else if($bandera2 && $carrera == "Ing. Electrica" )
        {
            $respuesta .="<div class=\"encabezadoCarrera\"><h3 class=\"cabeza\">Ing. Electrica...</h3></div>";
        }else if($bandera2 && $carrera == "Ing. Quimica" )
        {
            $respuesta .="<div class=\"encabezadoCarrera\"><h3 class=\"cabeza\">Ing. Quimica...</h3></div>";
        }else if($bandera2 && $carrera == "Ing. Mecatronica"  )
        {
            $respuesta .="<div class=\"encabezadoCarrera\"><h3 class=\"cabeza\">Ing. Mecatronica...</h3></div>";
        }else if($bandera2 && $carrera == "Ing. Administracion"  )
        {
            $respuesta .="<div class=\"encabezadoCarrera\"><h3 class=\"cabeza\">Ing. Administracion...</h3></div>";
        }else if($bandera2 && $carrera == "Ing. Gestion Empresarial"  )
        {
            $respuesta .="<div class=\"encabezadoCarrera\"><h3 class=\"cabeza\">Ing. Gestion Empresarial...</h3></div>";
        }else if($bandera2 && $carrera == "Ing. Petrolera" )
        {
            $respuesta .="<div class=\"encabezadoCarrera\"><h3 class=\"cabeza\">Ing. Petrolera...</h3></div>";
        }else if($bandera2 && $carrera == "Ing. Industrial")
        {
            $respuesta .="<div class=\"encabezadoCarrera\"><h3 class=\"cabeza\">Ing. Industrial...</h3></div>";
        }else if($bandera2 && $carrera == "Ing. Electronica")
        {
            $respuesta .="<div class=\"encabezadoCarrera\"><h3 class=\"cabeza\">Ing. Electronica...</h3></div>";
        }
        foreach($array[$contador] as $tabla => $valor)
        {
            if($tabla == "numero_control")
            {
                $tabla ="num. control";
                $id =$valor;
            }else if( $tabla == "condigo")
            {
                $tabla ="num. maestro";
                $id =$valor;
            }else if($tabla == "codigo_maestro")
            {
                $tabla ="num. empleado";
                $id =$valor;
            }
            if($bandera2 && $tabla == "carrera")$carrera = $valor;
            if($bandera2 && $tabla == "nivel")$grupo = $valor;
            //que no este vacio
            if($valor != "" && $valor != null)$respuesta .="<span class = 'label label-default labelVentana2'>$tabla</span><span class=\"label label-success labelVentana\">$valor</span>";

        }
        if($contador == count($array)-1 && $bandera)$respuesta .= "<input type =\"button\" class=\"btn btn-primary btn-lg xxxx\" id='eliminar$contador' value='Eliminar' onclick='$(this).ready(function(){ $(\"#vetanitas$contador\").remove(); $(\"#inputButtonEvento1\").prop(\"disabled\", false);$(\"#inputButtonEvento2\").prop(\"disabled\", false); $(\"#inputButtonEvento3\").prop(\"disabled\", false);})'>";
        else $respuesta .= "<input type =\"button\" class=\"btn btn-primary btn-lg xxxx\" id='eliminar$contador' value='Eliminar' onclick='$(this).ready(function(){ $(\"#vetanitas$contador\").remove();})'>";
        $respuesta .= "</div>";
    }
    return $respuesta;
}

?>