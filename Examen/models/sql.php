<?php

	class Sql
	{
        private $sql = null;
		function Sql()
		{
			$this->sql = new mysqli("localhost", "root", "", "examen");
			if ($this->sql->connect_errno)
    			echo "<p>Fallo al contenctar a MySQL: (" . $this->sql->connect_errno . ") " .$this->sql->connect_error."</p>";
		}
		public function consulta_bd($squry)
		{
			$resultado = $this->sql->query($squry) or die("".$this->sql->error);
            while($fila = $resultado->fetch_assoc())
            {
                $filas[] = $fila;
            }
			$resultado->close();
			if(isset($filas))return $filas;
		}
		public function altas_bd($squery)
		{
            $this->sql->query($squery) or die("".$this->sql->error);
		}
        public function  eliminar_tabla_tabla($query)
        {
            if($this->sql->query($query));
            else die("".$this->sql->error);
        }
        public function getID($id, $tabla)
        {
            $resultado = $this->sql->query("SELECT MAX($id) AS id FROM $tabla");
            if ($row = $resultado->fetch_array());
            {
                $idRes = trim($row[0]+1);
            }
            return $idRes;
        }
        public function  closeConec()
        {
            $this-> sql->close();
        }
	}
?>