<?php
/**
 * User: Tomas
 * Date: 07/06/2015
 *
 */

    $user = $_POST["user"];
    if(strcasecmp($user, "asistencias") == 0)
    {
        echo "<script language=\"javascript\">window.location = \"administracion.html\"</script>";
    }else if(strcasecmp($user, "evento") == 0)
    {
        echo "<script language=\"javascript\">window.location = \"evento.html\"</script>";
    }else
    {
        echo "<script type='text/javascript'>window.location = \"index.html\"; alert(\"No tiene permiso para entrar\");</script>";
    }
?>