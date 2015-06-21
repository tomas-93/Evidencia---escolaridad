/**
 * Created by Tomas on 10/06/2015.
 */
function pedir_lista_de_asistencia(buscar_en)
{
    dato ="&etiqueta="+buscar_en;
    enviar_datos(dato);
}

function enviar_datos(dato)
{
    $.ajax
    ({
        url: "../models/consultar_lista.php",
        type: "post",
        datatype: "json",
        data: dato
    }).done(function(respuesta)
    {
        $("#controlador").append(respuesta);
    }).fail(function()
    {
        alert("El servidor no responde...");
    });
}

