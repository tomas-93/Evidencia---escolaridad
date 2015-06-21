/**
 * Created by Tomas on 07/06/2015.
 */
function envioinforAdministracion(buscarEn)
{
    if(buscarEn == "alumno")
    {
        enmaquetadoGrupoDeDatos("formAlumno", "alumno")
    }
    else if(buscarEn == "maestro")
    {
        enmaquetadoGrupoDeDatos("formMestro", "maestro")
    }
    else if(buscarEn == "administracion")
    {
        enmaquetadoGrupoDeDatos("formAdministrativo", "administracion")
    }
}

function envioinforAsistencia(buscarEn)
{
    if(buscarEn == "alumno")enmaquetadoDatos(buscarEn,"&numero_control=","numeroDeControl");
    if(buscarEn == "maestro")enmaquetadoDatos(buscarEn,"&codigo_maestro=","codigoMestro");
    else if(buscarEn == "administracion")enmaquetadoDatos(buscarEn,"&codigo_empleado=","codigoAdministrativo")

}

function enmaquetadoDatos(buscarEn, nombre, id)
{
    dato = "&tag="+buscarEn+nombre+$("#"+id).val();
    enviar(dato, "../models/alta_de_asistencia.php");
}

function enmaquetadoGrupoDeDatos(id, nombre)
{
    var datos = $("#"+id).serializeArray();
    $("#"+id+" input:text").val("");
    $("#"+id+" select").val("");
    datos.push({name:"etiqueta", value:nombre});
    enviar(datos, "../models/altas_de_asistencia.php");
}

function enviar(datos, url)
{
    $.ajax(
    {
        url: url,
        type: "post",
        datatype: "json",
        data: datos
    }).done(function(respuesta)
    {
        $("#serverp").remove();
        $("#server").append(respuesta);
    }).fail(function(respuesta)
    {
        $("#server").append(respuesta).text("FAIL-----------------------");
    });
}

function pedir_datos_empleado(id)
{
    $.post(
        "../models/buscar_datos_individuales.php",
        {
            etiqueta: "empleado",
            id: id
        })
        .done(function(respuesta)
        {
            $("input:text").val("");
            desenpaquetar_datos(respuesta, "empleado");
        })
        .fail(function()
        {
            alert("fail....");
        });
}

function pedir_datos_maestro(id)
{
    $.post(
        "../models/buscar_datos_individuales.php",
        {
            etiqueta: "maestro",
            id: id
        }).done(function(respuesta)
        {
            $("input:text").val("");
            desenpaquetar_datos(respuesta, "maestro");
        }).fail(function()
        {
            alert("fail.....");
        });
}

function pedir_datos_alumno(id)
{
    $.post(
        "../models/buscar_datos_individuales.php",
        {
            etiqueta:"alumno",
            id:id
        }).done(function(respuesta)
        {
            $("input:text").val("");
            desenpaquetar_datos(respuesta, "alumno");
        }).fail(function()
        {
            alert("fail.....");
        });
}

function desenpaquetar_datos(texto, desenpaquetar_en)
{
    var json = JSON.parse(texto);
    var contador = 0;
    if(json != null)
    {

        for(var en_posicion in json)
        {
            console.log(json[en_posicion]);
            if(contador == 0)
            {
                if(desenpaquetar_en == "alumno")$("#numeroDeControl").val(json[en_posicion]);
                else if(desenpaquetar_en == "maestro")$("#codigoMestro").val(json[en_posicion]);
                else if(desenpaquetar_en == "empleado")$("#codigoAdministrativo").val(json[en_posicion]);
            }else if(contador == 2)
            {
                if(desenpaquetar_en == "alumno")$("#nombreAlumno").val(json[en_posicion]);
                else if(desenpaquetar_en == "maestro")$("#nombreMaestro").val(json[en_posicion]);
                else if(desenpaquetar_en == "empleado")$("#nombreAdministrativo").val(json[en_posicion]);
            }else if(contador == 3)
            {
                if(desenpaquetar_en == "alumno")$("#selectCarrera").val(json[en_posicion]);
                else if(desenpaquetar_en == "maestro")$("#selectDivicion").val(json[en_posicion]);
                else if(desenpaquetar_en == "empleado")$("#selectPuesto").val(json[en_posicion]);
            }else if(contador == 4)//evaluar si existe y de quien es el cuarto elemento
            {
                if(en_posicion == "nivel")
                {
                    $("#selectNivel").val(json[en_posicion])
                }else if(en_posicion == "divicion")
                {
                    $("selectDivicion").val(json[en_posicion]);
                }
            }
            contador++;
        }
    }else
    {
        $("#serverp").remove();
        $("#server").append("<p id =\"serverp\">La persona no esta registrada, registrelo porfavor, Pongame 100(:</p>")
        .bPopup({
            contentContainer:'.content',
            speed: 500,
            transition: 'slideIn',
            transitionClose: 'slideIn',
            autoClose: 700
        });
    }
}

function pedir_reporte(buscar_en)
{
    $.get(
        "../models/reportes.php",
        {
            buscar:buscar_en
        }
    ).done(function(respuesta)
    {
        $("#pdf").append(respuesta);

        /*$("#pdf").load(respuesta).bPopup({
            contentContainer:'.content',
            loadUrl: respuesta,
            speed: 500,
            transition: 'slideIn'
        });*/
    }).fail(function()
    {
        alert("no se conecto con el servidor");
    })
}
