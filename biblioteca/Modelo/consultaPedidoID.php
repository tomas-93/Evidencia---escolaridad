<?php
/**
 * User: Tomas
 * Date: 04/06/2015
 * Time: 12:16 AM
 */
    include("sql.php");
    $mysql = new Sql();
    echo $mysql -> getID("numero_pedido", "pedido");
    $mysql -> closeConec();

?>