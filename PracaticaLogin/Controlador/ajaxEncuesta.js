$(document).ready(function()
{
	$.ajax(
	{
		url: "../Modelo/usuario.php",
		type: "post",
		datatype: "json"
	}).done(function(respuesta)
	{
		$("h4").html(respuesta);
	}).fail(function()
	{
		console.log("error fail");
	}).always(function()
	{
	});
	$("#a").click(function()
	{
		$.ajax
		({
			url: "../Modelo/detroy.php"
		}).done(function(respuesta)
		{
			console.log(respuesta);
		}).fail(function()
		{
			console.log("estoy en fail");
		});
	});
	$("form").submit(function(e)
	{
		e.preventDefault();
		var datosFrom = $(this).serializeArray();
		$.ajax(
		{
			url: "../Modelo/procesoEncuesta.php",
			type: "post",
			datatype: "json",
			data: datosFrom
		}).done(function(respuesta)
		{
			console.log("Se termino "+respuesta);
			$("span").html(respuesta);
		}).fail(function()
		{
			console.log("error fail");
		}).always(function()
		{

		});
	});
});