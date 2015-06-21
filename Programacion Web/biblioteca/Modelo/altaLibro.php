<?php
/**
 * User: Tomas Yussef Galicia Guzman
 */
    $mensaje = "";
    function validacionID($id)
    {
        if(is_numeric($id) && strlen($id) <= 8)return true;
        else return false;
    }
    function validacionTitulo($titulo)
    {
        global $mensaje;
        if(strlen($titulo) <= 50 && is_string($titulo))return true;
        else
        {
            $mensaje .= "Error en el campo titulo, no puede contener mas de 50 caracteres o el texto que ingreso solo cotiene numeros.\n";
            return false;
        }
    }
    function validacionEditorial($editorial)
    {
        global $mensaje;
        if(strlen($editorial) <= 50 && is_string($editorial))return true;
        else{
            $mensaje .= "Error en el campo editorial, no puede contener mas de 50 caracteres, o el texto que ingreso solo contiene numeros.\n";
            return false;
        }
    }
    function validacionFecha($fecha)
    {
        global $mensaje;
        if(strlen($fecha) <= 50 && is_string($fecha))return true;
        else
        {
            $mensaje .= "Error en el campo fecha, contiene mas de 10 caracteres, el formato es dd/mm/aaaa\n";
            return false;
        }
    }
    include("sql.php");
    $control = $_POST["control"];
    $titulo = $_POST["nombre"];
    $autor = $_POST["autor"];
    $editorial = $_POST["editorial"];
    $fecha = $_POST["fechas"];
    $mysql = new Sql;
    if($control != "" && $titulo != "" && $autor != "" && $editorial != "" && $fecha != "")
    {
        if(validacionID($control) && validacionTitulo($titulo) && validacionEditorial($editorial) && validacionFecha($fecha))
        {
            $mysql -> altas_bd("INSERT INTO libro(id, titulo, autor, editorial, fecha) VALUES('$control', '$titulo', '$autor', '$editorial', '$fecha')");
            $mysql -> closeConec();
            echo "Transaccion Realizada";
        }else echo $mensaje;
    }else echo "Verificar campos, alguno puede esta bacio";

?>