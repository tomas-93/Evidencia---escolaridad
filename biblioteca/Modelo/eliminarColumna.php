<?php
/**
 * User: Tomas
 * Date: 06/06/2015
 * Time: 08:12 AM
 */
//"DELETE FROM `biblioteca`.`libro` WHERE `libro`.`id` = 6"
    include("sql.php");
    $count = 0;
    $t = false;
    if($_POST["tabla"] == "alumno" || $_POST["tabla"] == "pedido")
    {
        $tabla1 = "pedido";
        $tabla2 = "alumno";
        $t = true;
    }else $tabla = $_POST["tabla"];
    $sql = new Sql();
    $yuss = true;
    foreach($_POST as $name_camp => $value)
    {
        if($count == count($_POST)-1)break;
        else $count++;
        if($t)
        {
            if($yuss)
            {
                $sql -> eliminar_tabla_tabla("DELETE FROM biblioteca.$tabla1 WHERE $tabla1.numero_pedido = $value");
                $yuss = false;
            }else
            {
                $sql -> eliminar_tabla_tabla("DELETE FROM biblioteca.$tabla2 WHERE $tabla2.numero_control = $value");
                $yuss = true;
            }
        }else $sql -> eliminar_tabla_tabla("DELETE FROM biblioteca.$tabla WHERE $tabla.id = $value");
    }
    echo "Se eliminaron Columnas...........";
?>