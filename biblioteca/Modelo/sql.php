<?php
//SELECT 11 FROM `libro` ORDER BY `11` DESC
	class Sql
	{
        private $sql = null;
		function Sql()
		{
            $this->sql = new mysqli("localhost", "root", "", "biblioteca");
			//$this->sql = new mysqli("mysql.hostinger.mx", "u816657704_root", "edRWVPgA1b", "u816657704_bibli");
			if ($this->sql->connect_errno)
    			echo "<p>Fallo al contenctar a MySQL: (" . $this->sql->connect_errno . ") " .$this->sql->connect_error."</p>";
		}
		public function consulta_bd($squry)
		{
			$resultado = $this->sql->query($squry) or die("<p>consulta no realizada</p>".$this->sql->error);
            while($fila = $resultado->fetch_assoc())
            {
                $filas[] = $fila;
            }
			$resultado->close();
			if(isset($filas))return $filas;
		}
		public function altas_bd($squery)
		{
            $this->sql->query($squery) or die("Altas no realizada, La misma persona no puede hacer dos pedidos, O el id del libro puede estar duplicada. ".$this->sql->error);
		}
        public function  eliminar_tabla_tabla($query)
        {
            if($this->sql->query($query));
            else die("Si esta liminado un libro, es posible que no se pueda,ya que esta asociado a un pedido. Elimine primero el pedido.".$this->sql->error);
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