function eliminarEtiquetas()
{
   if(document.getElementById("formulario"))
   {
      var x = document.getElementById("formulario");
      x.parentNode.removeChild(x);
   }else if(document.getElementById("formulario2"))
   {
      var x = document.getElementById("formulario2");
      x.parentNode.removeChild(x);
   }else if(document.getElementById("formulario3"))
   {
      var x = document.getElementById("formulario3");
      x.parentNode.removeChild(x);
   }

}

function consultaDeLibros()
{
   eliminarEtiquetas();
   var div = document.getElementById("divContenido");
   var divTabla = document.createElement("div");
   var tabla = document.createElement("table");
   var form = document.createElement("form");
   var fieldset = document.createElement("fieldset");
   var legend = document.createElement("legend");
   var labelConsulta = document.createElement("label");
   var inputTexto = document.createElement("input");
   var select = document.createElement("select");
   var p = document.createElement("p");
   var inputBoton = document.createElement("input");
   //fielset
   fieldset.setAttribute("id","fieldset");
   //legend
   legend.setAttribute("id","legenda");
   legend.innerHTML = "Consultas";
   fieldset.appendChild(legend);
   // parrafo
   p.setAttribute("id", "divPConsulta");
   //label 
   labelConsulta.setAttribute("id","labelConsulta");
   labelConsulta.setAttribute("for","consulta");
   labelConsulta.innerHTML = "Consulta a la BD por";
   p.appendChild(labelConsulta);
   //Select
   var option0 = document.createElement("option");
   option0.setAttribute("value", "");
   option0.innerHTML ="--------------------------------------------------------------";
   select.appendChild(option0);
   var option = document.createElement("option");
   option.setAttribute("value", "alumno");
   option.innerHTML ="Alumno";
   select.appendChild(option);
   var option2 = document.createElement("option");
   option2.setAttribute("value", "pedido");
   option2.innerHTML = "Pedido";
   select.appendChild(option2);
   var option3 = document.createElement("option");
   option3.setAttribute("value", "libro");
   option3.innerHTML = "Libro";
   select.appendChild(option3);
   select.setAttribute("id","selectConsulta");
   select.setAttribute("name", "select");
   select.setAttribute("onclick","consultarDatos()");
   p.appendChild(select);
   fieldset.appendChild(p);
   
   //tabla
   tabla.setAttribute("id", "tablaConsulta");
   tabla.setAttribute("border","1");
   tabla.setAttribute("cellpadding","5");
   tabla.setAttribute("cellspacing","0");
   var columna, fila;
   for(i = 0; i < 30; i++)
   {
      fila = document.createElement("tr");
      for(j = 0; j < 5; j++)
      {
         columna = document.createElement("td");
         columna.setAttribute("class","td");
         fila.appendChild(columna);
      }
      tabla.appendChild(fila);
   }
   //div de la tabla
   divTabla.setAttribute("id", "divTabla");
   divTabla.appendChild(tabla);
   fieldset.appendChild(divTabla);
   //from
   form.setAttribute("id","formulario");
   form.appendChild(fieldset);
   div.appendChild(form);
}

function altaDeLibros()
{
   eliminarEtiquetas();
   var div = document.getElementById("divContenido");
   var form = document.createElement("from");
   var fieldset = document.createElement("fieldset");
   var legend = document.createElement("legend");
   var labelNumero = document.createElement("label");
   var inputNumero = document.createElement("input");
   var labelNombre = document.createElement("label");
   var inputNombre = document.createElement("input");
   var labelAutor = document.createElement("label");
   var inputAutor = document.createElement("input");
   var labelEditorial = document.createElement("label");
   var inputEditorial = document.createElement("input");
   var labelFecha = document.createElement("lanbel");
   var inputFecha = document.createElement("input");
   var inputBoton = document.createElement("input");
   //fielset
   fieldset.setAttribute("id","fieldset2");
   //legend
   legend.setAttribute("id","legenda");
   legend.innerHTML = "Alta del Libro";
   fieldset.appendChild(legend);
   //Numero del libro
   //label
   labelNumero.setAttribute("class", "etiqueta");
   labelNumero.setAttribute("for","control");
   labelNumero.innerHTML = "Numero ID";
   fieldset.appendChild(labelNumero);
   //input
   inputNumero.setAttribute("type","text");
   inputNumero.setAttribute("id","numeroControl");
   inputNumero.setAttribute("class", "input");
   inputNumero.setAttribute("name","control");
   inputNumero.setAttribute("disabled","");
   //------------------------------------------------ Consulta
   fieldset.appendChild(inputNumero);
   //Nombre del libro
   //label
   labelNombre.setAttribute("class", "etiqueta");
   labelNombre.setAttribute("for","nombre");
   labelNombre.innerHTML = "Titulo";
   fieldset.appendChild(labelNombre);
   //input
   inputNombre.setAttribute("class","input");
   inputNombre.setAttribute("name","nombre");
   inputNombre.setAttribute("id","nombre"); 
   inputNombre.setAttribute("type","text");
   inputNombre.setAttribute("title","Ingresar su nombre");
   inputNombre.setAttribute("placeholder","Titulo del libro");
   fieldset.appendChild(inputNombre);
   //Autor del libro
   //label
   labelAutor.setAttribute("class", "etiqueta");
   labelAutor.setAttribute("for","autor");
   labelAutor.innerHTML = "Autor";
   fieldset.appendChild(labelAutor);
   //input
   inputAutor.setAttribute("class","input");
   inputAutor.setAttribute("name","autor");
   inputAutor.setAttribute("id","autor");
   inputAutor.setAttribute("type","text");
   inputAutor.setAttribute("title","Autor");
   inputAutor.setAttribute("placeholder","Nom. del Autor");
   fieldset.appendChild(inputAutor);
   //Editorial
   //label
   labelEditorial.setAttribute("class", "etiqueta");
   labelEditorial.setAttribute("for","editorial");
   labelEditorial.innerHTML = "Editorial";
   fieldset.appendChild(labelEditorial);
   //input
   inputEditorial.setAttribute("class","input");
   inputEditorial.setAttribute("id","editorial");
   inputEditorial.setAttribute("name","editorial");
   inputEditorial.setAttribute("type","text");
   inputEditorial.setAttribute("title","Editorial");
   inputEditorial.setAttribute("placeholder","Nom. de la Editorial");
   fieldset.appendChild(inputEditorial);
   //Fecha
   //label
   labelFecha.setAttribute("class", "etiqueta");
   labelFecha.setAttribute("for","fecha");
   labelFecha.innerHTML = "Fecha de creacion";
   fieldset.appendChild(labelFecha);
   //input
   inputFecha.setAttribute("class","input");
   inputFecha.setAttribute("id","fechas");
   inputFecha.setAttribute("name","fechas");
   inputFecha.setAttribute("type","date");
   fieldset.appendChild(inputFecha);
   //boton input
   inputBoton.setAttribute("id","inputBoton");
   inputBoton.setAttribute("name","Enviar");
   inputBoton.setAttribute("type","submit");
   inputBoton.setAttribute("value","Enviar");
   inputBoton.setAttribute("onclick","eventoClicAltaDeLibro();");
   fieldset.appendChild(inputBoton);
   //from
   form.setAttribute("id","formulario2");
   form.appendChild(fieldset);

   div.appendChild(form);
    //consulta del id
    consultaID();


}

function pedidoDeLibros()
{
   eliminarEtiquetas();
   var div = document.getElementById("divContenido");
   var form = document.createElement("from");
   var fieldset = document.createElement("fieldset");
   var legend = document.createElement("legend");
   //libro
   var fieldsetLibro = document.createElement("fieldset");
   var legendLibro = document.createElement("legend");
   var labelNumero = document.createElement("label");
   var inputNumero = document.createElement("input");
   var labelNombre = document.createElement("label");
   var inputNombre = document.createElement("input");
   var labelAutor = document.createElement("label");
   var inputAutor = document.createElement("input");
   var labelEditorial = document.createElement("label");
   var inputEditorial = document.createElement("input");
   //alumno
   var fieldsetAlumno = document.createElement("fieldset");
   var legendAlumno = document.createElement("legend");
   var labelControl = document.createElement("label");
   var inputControl = document.createElement("input");
   var labelNombreAlumno = document.createElement("label");
   var inputNombreAlumno = document.createElement("input");
   var labelCarrera = document.createElement("label");
   var selectCarrera = document.createElement("select");
   var labelNivel = document.createElement("label");
   var selectNivel = document.createElement("select");
   //pedido
   var fieldsetPedido = document.createElement("fieldset");
   var legendPedido = document.createElement("legend");
   var labelPedido = document.createElement("label");
   var inputPedido = document.createElement("input");
   var labelFecha = document.createElement("label");
   var inputFecha = document.createElement("input");
   var labelHora = document.createElement("label");
   var inputHora = document.createElement("input");
   //fielset
   fieldset.setAttribute("id","fieldsetPrestamo");
   //legend
   legend.setAttribute("id","legendaPrestamo");
   legend.innerHTML = "Alta de Pedido";
   fieldset.appendChild(legend);
   //contenido
   //fielset libro
   fieldsetLibro.setAttribute("class","fieldsetPrestamo");
   //legenda
   legendLibro.setAttribute("class","legendaPrestamo2");
   legendLibro.innerHTML = "Datos del Libro";
   fieldsetLibro.appendChild(legendLibro);
   //label numero
   var div1 = document.createElement("p");
   div1.setAttribute("class"," divP");
   labelNumero.setAttribute("class","etiqueta2");
   labelNumero.setAttribute("for","numeroControlLibro");
   labelNumero.innerHTML = "Num. Control";
   div1.appendChild(labelNumero);
   //input numero
   inputNumero.setAttribute("type","text");
   inputNumero.setAttribute("id", "numeroControlLibroPedido");
   inputNumero.setAttribute("class","input2");
   inputNumero.setAttribute("title","Numero de Control");
   inputNumero.setAttribute("placeholder","Numero de Control");
   inputNumero.setAttribute("name", "numeroControlLibroPedido");
   inputNumero.setAttribute("onkeypress","consultaDatosLibro(event)");
   div1.appendChild(inputNumero);
   //label nombre
   labelNombre.setAttribute("for","nombreLibro");
   labelNombre.setAttribute("class","etiqueta2");
   labelNombre.innerHTML ="Titulo";
    div1.appendChild(labelNombre);
   //input nombre
   inputNombre.setAttribute("type","text");
   inputNombre.setAttribute("class","input2");
   inputNombre.setAttribute("title","Titulo del Libro");
   inputNombre.setAttribute("placeholder","Titulo del Libro");
   inputNombre.setAttribute("name","nombreLibro");
    div1.appendChild(inputNombre);
   fieldsetLibro.appendChild(div1);
   //label autor
   var div3 = document.createElement("p");
   div3.setAttribute("class"," divP");
   labelAutor.setAttribute("for","nombreDeAutor");
   labelAutor.setAttribute("class", "etiqueta2");
   labelAutor.innerHTML = "Autor";
   div3.appendChild(labelAutor);
   //input autor
   inputAutor.setAttribute("type","text");
   inputAutor.setAttribute("class","input2");
   inputAutor.setAttribute("title","Autor del Libro");
   inputAutor.setAttribute("placeholder","Nombre del Autor");
   inputAutor.setAttribute("name","nombreDeAutor");
   div3.appendChild(inputAutor);
   //label editorial
   labelEditorial.setAttribute("for","nombreDeLaEditorial");
   labelEditorial.setAttribute("class","etiqueta2");
   labelEditorial.innerHTML = "Editorial";
    div3.appendChild(labelEditorial);
   //input editorial
   inputEditorial.setAttribute("type","text");
   inputEditorial.setAttribute("class","input2");
   inputEditorial.setAttribute("title", "Nom. de la Editorial");
   inputEditorial.setAttribute("placeholder","Nom. de la Editorial");
   inputEditorial.setAttribute("name", "nombreDeLaEditorial");
   div3.appendChild(inputEditorial);
   fieldsetLibro.appendChild(div3);
   //------------------------------------------------------------------------
   fieldset.appendChild(fieldsetLibro);
   //------------------------------------------------------------------------
   //fieldset
   fieldsetAlumno.setAttribute("class","fieldsetPrestamo");
   //legenda
   legendAlumno.setAttribute("class","legendaPrestamo2");
   legendAlumno.innerHTML = "Datos de Alumno";
   fieldsetAlumno.appendChild(legendAlumno);
   //label control
   labelControl.setAttribute("for","numeroControlAlumno");
   labelControl.setAttribute("class","etiqueta2");
   labelControl.innerHTML = "Numero de Control";
   fieldsetAlumno.appendChild(labelControl);
   //input control
   inputControl.setAttribute("type","text");
   inputControl.setAttribute("class","input2");
   inputControl.setAttribute("title","Numero de Control");
   inputControl.setAttribute("placeholder","Num. de Control");
   inputControl.setAttribute("name","numeroControlAlumno");
   fieldsetAlumno.appendChild(inputControl);
   //label nombre de alumno
   labelNombreAlumno.setAttribute("for","nombreDelAlumno");
   labelNombreAlumno.setAttribute("class","etiqueta2");
   labelNombreAlumno.innerHTML = "Nombre";
   fieldsetAlumno.appendChild(labelNombreAlumno);
   //input nombre del alumno
   inputNombreAlumno.setAttribute("type","text");
   inputNombreAlumno.setAttribute("class","input2");
   inputNombreAlumno.setAttribute("title","Nombre del Alumno");
   inputNombreAlumno.setAttribute("placeholder", "Nombre del Alumno");
   inputNombreAlumno.setAttribute("name","nombreDelAlumno");
   fieldsetAlumno.appendChild(inputNombreAlumno);
   //carrera label 
   labelCarrera.setAttribute("for","carrera");
   labelCarrera.setAttribute("class","etiqueta2");
   labelCarrera.innerHTML = "Carrera";
   fieldsetAlumno.appendChild(labelCarrera);
   //input carrera
   var sistemas = document.createElement("option");
   sistemas.setAttribute("value","Ing. Sistemas");
   sistemas.innerHTML = "Ing. Sistemas Computacionales"; 
   selectCarrera.appendChild(sistemas);
   var informatica = document.createElement("option");
   informatica.setAttribute("value","Ing. Informatia");
   informatica.innerHTML = "Ing. Informatia";
   selectCarrera.appendChild(informatica);
   var bioquimica = document.createElement("option");
   bioquimica.setAttribute("value","Ing. Bioquimica");
   bioquimica.innerHTML = "Ing. Bioquimica";
   selectCarrera.appendChild(bioquimica);
   var mecanica = document.createElement("option");
   mecanica.setAttribute("value", "Ing. Mecanica");
   mecanica.innerHTML = "Ing. Mecanica";
   selectCarrera.appendChild(mecanica);
   var electrica = document.createElement("option");
   electrica.setAttribute("value","Ing. Electrica");
   electrica.innerHTML = "Ing. Electrica";
   selectCarrera.appendChild(electrica);
   var quimica = document.createElement("option");
   quimica.setAttribute("value", "Ing. Quimica");
   quimica.innerHTML ="Ing. Quimica";
   selectCarrera.appendChild(quimica);
   var mecatronica = document.createElement("option");
   mecatronica.setAttribute("value", "Ing. Mecatronica");
   mecatronica.innerHTML ="Ing. Mecatronica";
   selectCarrera.appendChild(mecatronica);
   var ingadms = document.createElement("option");
   ingadms.setAttribute("value","Ing. Administracion");
   ingadms.innerHTML = "Ing. Administracion";
   selectCarrera.appendChild(ingadms);
   var gestEmpre = document.createElement("option");
   gestEmpre.setAttribute("value","Ing. Gestion Empresarial");
   gestEmpre.innerHTML ="Ing. Gestion Empresarial";
   selectCarrera.appendChild(gestEmpre);
   var petrolera = document.createElement("option");
   petrolera.setAttribute("value", "Ing. Petrolera");
   petrolera.innerHTML ="Ing. Petrolera";
   selectCarrera.appendChild(petrolera);
   var industrial = document.createElement("option");
   industrial.setAttribute("value", "Ing. Industrial");
   industrial.innerHTML ="Ing. Industrial";
   selectCarrera.appendChild(industrial);
   var electronica = document.createElement("option");
   electronica.setAttribute("value", "Ing. Electronica");
   electronica.innerHTML ="Ing. Electronica";
   selectCarrera.appendChild(electronica);
   //carrera
   selectCarrera.setAttribute("class", "select");
   fieldsetAlumno.appendChild(selectCarrera);
   //nivel label
   labelNivel.setAttribute("for", "nivel");
   labelNivel.setAttribute("class", "etiqueta2");
   labelNivel.innerHTML = "Nivel alumno";
   fieldsetAlumno.appendChild(labelNivel);
   //option
   var opc, opc2;
   for(i=1; i<10 ;i++)
   {
      opc = document.createElement("option");
      opc.setAttribute("value",i+":A");
      opc.innerHTML = i+":A";
      selectNivel.appendChild(opc);
      opc2 = document.createElement("option");
      opc2.setAttribute("value",i+":B");
      opc2.innerHTML = i+":B";
      selectNivel.appendChild(opc2);
   }
   selectNivel.setAttribute("class","select");
   fieldsetAlumno.appendChild(selectNivel);

   //------------------------------------------------------------------------
   fieldset.appendChild(fieldsetAlumno);
   //----------------------------------------------------------------
   //field se pedido.
   fieldsetPedido.setAttribute("class","fieldsetPrestamo");
   //legenda pedido
   legendPedido.setAttribute("class","legendaPrestamo2");
   legendPedido.innerHTML = "Datos del Prestamo";
   fieldsetPedido.appendChild(legendPedido);
   //numero de pedido label
   labelPedido.setAttribute("class","etiqueta2");
   labelPedido.setAttribute("for","numeroPedido");
   labelPedido.innerHTML ="Numero de Pedido";
   fieldsetPedido.appendChild(labelPedido);
   //numero de pedido input
   inputPedido.setAttribute("type","text");
   inputPedido.setAttribute("id","numeroPedido");
   inputPedido.setAttribute("class","input2");
   inputPedido.setAttribute("name", "numeroPedido");
   inputPedido.setAttribute("title","Numero de Pedido");
   inputPedido.setAttribute("disabled","");
   fieldsetPedido.appendChild(inputPedido);
   //fecha de pedido label
   labelFecha.setAttribute("class","etiqueta2");
   labelFecha.setAttribute("for","fecha");
   labelFecha.innerHTML ="Fecha";
   fieldsetPedido.appendChild(labelFecha);
   //fecha de pedido input
   inputFecha.setAttribute("type","date");
   inputFecha.setAttribute("class","input2");   
   inputFecha.setAttribute("name", "fecha");
   inputFecha.setAttribute("title","Fecha del Pedido");
   fieldsetPedido.appendChild(inputFecha);
   //hora de pedido label
   labelHora.setAttribute("class","etiqueta2");
   labelHora.setAttribute("for","hora");
   labelHora.innerHTML ="Hora";
   fieldsetPedido.appendChild(labelHora);
   //hora de pedido input
   inputHora.setAttribute("type","time");
   inputHora.setAttribute("class","input2");   
   inputHora.setAttribute("name", "hora");
   inputHora.setAttribute("title","Hora del Pedido");
   fieldsetPedido.appendChild(inputHora);
   //------------------------------------------------
   fieldset.appendChild(fieldsetPedido);
   //------------------------------------------------
   //boton
   var boton = document.createElement("input");
   boton.setAttribute("type","button");
   boton.setAttribute("id","boton3");
   boton.setAttribute("value", "Enviar");
   boton.setAttribute("onclick", "eventoClicAltaDePedido();");
   fieldset.appendChild(boton);

   //from
   form.setAttribute("id","formulario3");
   form.appendChild(fieldset);

   div.appendChild(form);
    //consultas base de datos
   consultaNumero_Pedido();
}
