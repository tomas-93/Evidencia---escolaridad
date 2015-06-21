<?php
/**
 * User: Tomas
 * Date: 10/06/2015
 *
 */
session_start();
require('/pdf/fpdf.php');
$array = $_SESSION["array"];
$pdf = new FPDF();
$pdf->AliasNbPages();
$pdf->AddPage();
$pdf->SetY(10);
$pdf->SetTextColor(0);
$pdf->SetDrawColor(0,128,255);
$pdf->SetLineWidth(.5);
$pdf->SetFont('Arial','B',12);

$array = $_SESSION["array"];
$bandera_titulo = true;
$bandera_carrera = true;
$bandera_carrera2 = true;
for($contador = 0; $contador < count($array); $contador++)
{
    foreach($array[$contador] as $titulo => $valor)
    {
        if($bandera_titulo)
        {
            //contenido del titulo
            if($bandera_carrera && $titulo == "carrera" || $titulo == "divicion")
            {
                $pdf->Cell(65,10,$titulo,1);
                $bandera_carrera = false;
            }else if($titulo == "numero_control" || $titulo == "codigo_maestro" || $titulo == "condigo")
            {
                $pdf->Cell(31,10,"num. id",1);
            }else
            {
                $pdf->Cell(31,10,$titulo,1);
            }
            $contador = -1;
        }else
        {
            //contenido de las celdas
            $pdf->SetFont('Arial','B',12);
            if($bandera_carrera2 && $titulo == "carrera" || $titulo == "divicion")
            {
                $pdf->Cell(65,10,$valor,1);
                $bandera_carrera2 = false;
            }else
            {
                $pdf->Cell(31,10,$valor,1);
            }
        }
    }
    $bandera_titulo = false;
    $bandera_carrera2 = true;
    $pdf -> ln();
}
$pdf -> Output();
session_destroy();
?>