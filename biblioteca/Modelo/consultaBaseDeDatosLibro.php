<?php
/**
 * User: Tomas
 * Date: 03/06/2015
 * Time: 08:01 AM
 */
    include("sql.php");
    $numero = $_POST["numeroControlLibroPedido"];
    $consulta = new Sql();
    $array =$consulta -> consulta_bd("SELECT id, titulo, autor, editorial, fecha FROM  libro WHERE id = $numero");
    echo json_encode($array[0]);
    $consulta -> closeConec();
?>