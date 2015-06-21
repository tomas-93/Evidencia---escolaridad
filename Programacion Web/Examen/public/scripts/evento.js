/**
 * Created by Tomas on 10/06/2015.
 */
$(document).ready(function()
{
   $("#inputButtonEvento1").click(function()
   {
       $("#controlador").remove();
       $("#lista_de_asistencia").append("<div id=\"controlador\"></div>");
       pedir_lista_de_asistencia("empleado");
       ibilitar();
   });

    $("#inputButtonEvento2").click(function()
    {
        $("#controlador").remove();
        $("#lista_de_asistencia").append("<div id=\"controlador\"></div>");
        pedir_lista_de_asistencia("alumno");
        ibilitar();
    });

    $("#inputButtonEvento3").click(function()
    {
        $("#controlador").remove()
        $("#lista_de_asistencia").append("<div id=\"controlador\"></div>");
        pedir_lista_de_asistencia("todos");
        ibilitar();
    });
    function ibilitar()
    {
        $("#inputButtonEvento1").attr('disabled','');
        $("#inputButtonEvento2").attr('disabled','');
        $("#inputButtonEvento3").attr('disabled','');

    }
});