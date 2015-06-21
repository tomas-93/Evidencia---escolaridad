<?php
	class Sql
	{
		private function conectar_bd()
		{
			$mysqli = new mysqli("localhost", "root", "", "encuesta");
			if ($mysqli->connect_errno)
    			echo "<p>Fallo al contenctar a MySQL: (" . $mysqli->connect_errno . ") " .$mysqli->connect_error."</p>";
			return $mysqli;
		}
		public function consulta_bd($squry)
		{
			$conec = $this->conectar_bd();
			$resultado = $conec->query($squry) or die("<p>consulta no realizada</p>".$conec->error);
			while($row = $resultado->fetch_array())
			{
				$rows[] = $row;
			}
			$resultado->close();
			$conec->close();
			if(isset($rows))return $rows;
		}
		public function altas_bd($squery)
		{
			$conec = $this->conectar_bd();
			$resultado = $conec->query($squery) or die("<p>altas no realizada</p>".$conec->error);
			$resultado->close();
			$conec->close();
		}
	}
?>