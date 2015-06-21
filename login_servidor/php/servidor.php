<?php
/**
 * User: Tomas
 * Date: 18/06/2015
 */
  //desactivamos los erroes por seguridad
  error_reporting(0);
  //error_reporting(E_ALL); //activar los errores (en modo depuración)

  $servidor_LDAP = "nombre_servidor";
  $servidor_dominio = "nombre_dominio_servidor.com";
  $ldap_dn = "dc=nombre_dominio_servidor,dc=com";
  $usuario_LDAP = "usuario_servidor";
  $contrasena_LDAP = "contraseña_usuario";

#  echo "Conectando con servidor LDAP desde PHP...";

  $conectado_LDAP = ldap_connect($servidor_LDAP);
  ldap_set_option($conectado_LDAP, LDAP_OPT_PROTOCOL_VERSION, 3);
  ldap_set_option($conectado_LDAP, LDAP_OPT_REFERRALS, 0);

  if ($conectado_LDAP)
  {
  #    echo "<br>Conectado correctamente al servidor LDAP " . $servidor_LDAP;

  #    echo "<br><br>Comprobando usuario y contraseña en Servidor LDAP";
      $autenticado_LDAP = ldap_bind($conectado_LDAP,
          $usuario_LDAP . "@" . $servidor_dominio, $contrasena_LDAP);
      if ($autenticado_LDAP)
      {
          #echo "<br>Autenticación en servidor LDAP desde Apache y PHP correcta.";
      }
      else
      {
         # echo "<br><br>No se ha podido autenticar con el servidor LDAP: " .
          #    $servidor_LDAP .
           #   ", verifique el usuario y la contraseña introducidos";
      }
  }
  else
  {
      #echo "<br><br>No se ha podido realizar la conexión con el servidor LDAP: " .
          #$servidor_LDAP;
  }
?>

