<?php
/**
 * User: Tomas
 * Date: 05/06/2015
 * Time: 07:33 PM
 */
//ALTER TABLE nombre_tabla AUTO_INCREMENT = 1;
    include("sql.php");
    $mysql = new Sql();
    $tabla = $_POST["select"];
    if($tabla != "pedido" && $tabla != "alumno" &&validar())
    {
        $array = $mysql -> consulta_bd("SELECT * FROM $tabla");
    }else if($tabla == "alumno" && validar())
    {
        $array = $mysql -> consulta_bd("SELECT pedido.numero_pedido,alumno.numero_control,alumno.nombre,alumno.carrera,alumno.nivel,libro.titulo FROM pedido INNER JOIN libro ON pedido.id = libro.id INNER JOIN alumno ON pedido.numero_control = alumno.numero_control ");
    }else if($tabla == "pedido" && validar())
    {
        $array = $mysql -> consulta_bd("SELECT pedido.numero_pedido,pedido.fecha,alumno.numero_control,alumno.nombre,alumno.carrera,alumno.nivel,libro.id,libro.titulo,libro.autor FROM pedido INNER JOIN libro ON pedido.id = libro.id INNER JOIN alumno ON pedido.numero_control = alumno.numero_control ");
    }
    $mysql -> closeConec();
    obtenerTabla();

    function validar()
    {
        global $peticion;
        if(is_numeric($peticion) && strlen($peticion) <= 8 && strlen($peticion) > 0 ) return true;
        else if(is_string($peticion) && strlen($peticion) < 50 && strlen($peticion) > 0)return true;
        else if($peticion == "") return true;
        else return false;
    }
    function obtenerTabla()
    {
        global $array;
        if(isset($array))
        {
            $t = false;
            $eliminar = false;
            $check  = false ;
            $tabla = "<table id = \"tablaConsulta\" border=\"1\" cellpadding=\"5\" cellspacing=\"0\">";
            for($count = 0; $count < count($array); $count++)
            {
                $tabla .= "<tr>";
                foreach($array[$count] as $item => $value)
                {
                    if($t == false)
                    {
                        if($eliminar == false)
                        {
                            $tabla .="<td><p class = \"td2\">Eliminar</p></td>";
                            $eliminar = true;
                        }
                        $x = (string)$item;
                        $x = strtoupper($x);
                        $tabla .="<td><p class = \"td2\">$x</p></td>";
                        $count =-1;

                    }else
                    {
                        if($check == false)
                        {
                            $tabla .="<td><p class = \"td\"><input type = \"checkbox\" name = \"eliminar\" class = \"chek\"/></p></td>";
                            $check = true;
                        }
                        $tabla .="<td><p class = \"td\">$value</p></td>";
                    }
                }
                $check = false;
                $t = true;
                $tabla .= "</tr>";
            }
            $tabla .= "</table>";
            echo $tabla;
        }
    }

?>