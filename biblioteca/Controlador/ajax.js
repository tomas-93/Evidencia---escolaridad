var xmlhttp;
function cargar(datos, ruta, cfunc)
{
    if (window.XMLHttpRequest)
    {
      xmlhttp=new XMLHttpRequest();
    }else
    {
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = cfunc;
    xmlhttp.open("POST", ruta, true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.send(datos);

}

function metodoAjax(datos, ruta, t) 
{
    cargar(datos, ruta, function()
    { 
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
           if(t)alert(xmlhttp.responseText);
           else insertarDatosEnTabla(xmlhttp.responseText);
        }
    });
}
function metodoAjax2(datos, ruta, t) 
{
    cargar(datos, ruta, function()
    { 
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {       }
    });
}
function metodoAjaxSoloRuta(ruta, id)
{
    cargar(null, ruta, function()
    {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById(id).value= xmlhttp.responseText;
        }
    })
}
function metodoAjaxPedirDatosLibro(datos, ruta)
{
    cargar(datos, ruta, function()
    {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200)insertarDatosLibro(xmlhttp.response);
    })

}
function insertarDatosEnTabla(texto)
{
    document.getElementById("divTabla").innerHTML = texto;
}
function insertarDatosLibro(text)
{
    var json = JSON.parse(text);
    var input = document.getElementsByTagName("input");
    var contador = 0;

    for(var recorre in json)
    {
        input[contador].value = json[recorre];
        if(contador != 0)input[contador].setAttribute("disabled","");
        if(contador == 3)
        {
            break;
        }else contador ++;
    }
}
//------------------------------------------------------------------
function getDatosInput(bool)
{
    var frm = document.getElementsByTagName("input");
    var datos="";
    var i;
    if(bool)i=4;
    else i=0;
    for(;i<frm.length; i++)
    {
        datos += "&";
        datos +=frm[i].name+ "=" +encodeURI(frm[i].value);
        console.log(datos);
    }
    return datos;
}
function consultarDatos()
{
    if(document.getElementById("botonEliminar"))
    {    
      var x = document.getElementById("botonEliminar");
      x.parentNode.removeChild(x);
    }
    var p = document.getElementById("divPConsulta");
    var eliminar = document.createElement("input");
    eliminar.setAttribute("type", "button");
    eliminar.setAttribute("id", "botonEliminar");
    eliminar.setAttribute("value", "Eliminar Dato(s)");
    eliminar.setAttribute("onclick", "eliminarDatos()");
    p.appendChild(eliminar);
    if(document.getElementById("selectConsulta").value != "")
    {
        var dato ="&"+document.getElementById("selectConsulta").name+"="+document.getElementById("selectConsulta").value;
        metodoAjax("&consulta="+dato,"Modelo/consultaBaseDeDatos.php",false);
    }
}
function eventoClicAltaDeLibro()
{     
    var datos= getDatosInput(false);
    metodoAjax(datos,"Modelo/altaLibro.php", true);
}
function eventoClicAltaDePedido()
{      
    var dato = getDatosInput(true);
    var x = document.getElementsByTagName("select");
    dato+= "&select1="+encodeURI(x[0].value)+"&select2="+encodeURI(x[1].value)+"&numeroControlLibro="+encodeURI(document.getElementById("numeroControlLibroPedido").value);
    metodoAjax(dato,"Modelo/altaPedido.php", true);
}
function consultaID()
{
    metodoAjaxSoloRuta("Modelo/consultaID.php", "numeroControl");
}
function consultaNumero_Pedido()
{
    metodoAjaxSoloRuta("Modelo/consultaPedidoID.php", "numeroPedido");
}
function consultaDatosLibro(evento)
{
    if(evento.keyCode == 13)
    {
        var dato = document.getElementById("numeroControlLibroPedido").value;
        if(dato.length <= 8 && dato.length > 0)
        {
            dato = "&numeroControlLibroPedido="+ dato;
            metodoAjaxPedirDatosLibro(dato, "Modelo/consultaBaseDeDatosLibro.php");
        }else document.getElementById("numeroControlPedido").value = "";
    }
}
function eliminarDatos()
{
    try
    {
        var table = document.getElementById("tablaConsulta");
        var select = document.getElementById("selectConsulta");
        var size_rows = table.rows.length;
        var string = "";
        var t = false;
        for(var i = 0; i < size_rows; i++)
        {
            var row = table.rows[i];
            var p = row.cells[0].childNodes[0];
            var checkbox = p.childNodes[0];
            if(checkbox != null && checkbox.checked == true)
            {
                if(select.value == "pedido")
                {
                    string += "&id"+i+"="+encodeURI(row.cells[1].childNodes[0].childNodes[0].data);
                    string += "&id"+i+"."+i+"="+encodeURI(row.cells[3].childNodes[0].childNodes[0].data);
                }else if(select.value == "alumno")
                {
                    string += "&id"+i+"="+encodeURI(row.cells[1].childNodes[0].childNodes[0].data);
                    string += "&id"+i+"."+i+"="+encodeURI(row.cells[2].childNodes[0].childNodes[0].data);
                }else string += "&id"+i+"="+encodeURI(row.cells[1].childNodes[0].childNodes[0].data);
                t = true;
            }
        }
        if(t)
        {
            string +="&tabla="+encodeURI(document.getElementById("selectConsulta").value);
            metodoAjax2(string, "Modelo/eliminarColumna.php", true);
            consultarDatos();
        }       
    }catch(e)
    {
        console.log(e);
    }
}