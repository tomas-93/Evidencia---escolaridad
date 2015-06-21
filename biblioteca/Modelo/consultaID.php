<?php
/**
 * User: Tomas
 * Date: 03/06/2015
 * Time: 11:00 AM
 */
    include("sql.php");
    $mysql = new Sql();
    echo $mysql->getID("id", "libro");
    $mysql -> closeConec();
?>