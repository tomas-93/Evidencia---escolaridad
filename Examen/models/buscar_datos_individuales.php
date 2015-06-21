<?php
/**
 * User: Tomas
 * Date: 10/06/2015
 * Time: 04:58 AM
 */
if($_POST["etiqueta"] == "alumno")
{
    echo consultaIndividual("SELECT * FROM alumno WHERE numero_control =".$_POST["id"]);
}else if($_POST["etiqueta"] == "maestro")
{
    echo consultaIndividual("SELECT * FROM maestro WHERE codigo_maestro=".$_POST["id"]);
}else if($_POST["etiqueta"] == "empleado")
{
    echo consultaIndividual("SELECT * FROM administracion WHERE condigo=".$_POST["id"]);
}

function consultaIndividual($query)
{
    include("sql.php");
    $sql = new Sql();
    $array = $sql->consulta_bd($query);
    $sql->closeConec();
    return json_encode($array[0]);
}
?>