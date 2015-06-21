/**
 * Created by Tomas on 07/06/2015.
 */
$(document).ready(function()
{
        $("form").submit(function(evento)
        {
            evento.preventDefault();
            var send =$(this).serializeArray();// "&user="+$("#inputUser").val();
            $.ajax(
            {
                url: "../models/login.php",
                type: "post",
                datatype: "json",
                data: send
            }).done(function(response)
            {
                document.write(response);
            }).fail(function()
            {
                alert("El servidor no responde...")
            })
        });
});
