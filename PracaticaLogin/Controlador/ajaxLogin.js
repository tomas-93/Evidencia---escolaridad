$(document).ready(function()
{
	$("form").submit(function(e)
	{
		e.preventDefault();
		var datos = $(this).serializeArray();
		$.ajax(
		{
			url:"../Modelo/procesoLogin.php",
			type: "post",
			datatype:"json",
			data: datos,
			beforeSend: function()
			{
				$(".fa").css("display","inline");
			}
		})
		.done(function(respuesta)
		{
			console.log(respuesta);
			$("span").html(respuesta);
			$("span").hide()
		})
		.fail(function()
		{
			$("span").html("fallido");
		})
		.always(function()
		{
			setTimeout(function()
			{
				$(".fa").hide();
				$("span").show();
			},1000);			
		});
	});
});