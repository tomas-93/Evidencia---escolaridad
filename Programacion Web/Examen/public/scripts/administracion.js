/**
 * Created by Tomas on 07/06/2015.
 */
$(document).ready(function () {
    //Boton buscar.....

    $("#buscar").click(function()
    {
        limpiar();
    })

    //Boton Registrar

    $("#registrar").click(function()
    {
        limpiar();
    })

    //checkbox

    $("#asistenciaAlumno").click(function()
    {
        ventena1("asistenciaAlumno","alumno");
    });
    $("#checkAsistenciMaestro").click(function()
    {
        ventena1("checkAsistenciMaestro","maestro");
    });
    $("#checkAsistenciaAdmini").click(function()
    {
        ventena1("checkAsistenciaAdmini","administracion");
    });

    //li1 alumno

    $("#li1").click(function()
    {
        var dato = $("#numeroDeControl").val();
        if(dato != "")pedir_datos_alumno(dato);
        else
        {
            $("#serverp").remove();
            $("#server").append("<p id =\"serverp\">Verifique que el campo(s) no esten vacios, Pongame 100(:</p>")
            setTimeout(function()
            {
                ventanaEmergente();
            },500)
        }
    });

    //li2 maestro

    $("#li2").click(function()
    {
        var dato = $("#codigoMestro").val();
        if(dato != "")pedir_datos_maestro(dato);
        else
        {
            $("#serverp").remove();
            $("#server").append("<p id =\"serverp\">Verifique que el campo(s) no esten vacios, Pongame 100(:</p>")
            setTimeout(function()
            {
                ventanaEmergente();
            },500)
        }
    })

    //li3 empleado

    $("#li3").click(function()
    {
        var dato = $("#codigoAdministrativo").val();
        if(dato != "")pedir_datos_empleado(dato);
        else
        {
            $("#serverp").remove();
            $("#server").append("<p id =\"serverp\">Verifique que el campo(s) no esten vacios, Pongame 100(:</p>")
            setTimeout(function()
            {
                ventanaEmergente();
            },500)
        }
    })

    //segundo menu  li4 alumno
    $("#li4").click(function()
    {
        $("#submitAlumno").remove();
        $("#submitMaestro").remove();
        $("#submitAdminis").remove();
        $("#botton1").append("<button type=\"button\" id = \"submitAlumno\" class = \"button btn btn-info btn-default\"><span class=\"glyphicon glyphicon-floppy-saved\"></span>  Verificar...</button>");
        $("#numeroDeControl").css("width","300px").css("border-radius","5px");
        $("#addChek1").remove();
        //evento...................
        $("#submitAlumno").click(function(){ventana2("alumno","divChek1", "addChek1", "asistenciaAlumno", "numeroDeControl", "submitAlumno");});
    });
    //li5 maestros
    $("#li5").click(function()
    {
        $("#submitAlumno").remove();
        $("#submitMaestro").remove();
        $("#submitAdminis").remove();
        $("#botton2").append("<button type=\"button\" id = \"submitMaestro\" class = \"button btn btn-info btn-default\"><span class=\"glyphicon glyphicon-floppy-saved\"></span>  Verificar...</button>");
        $("#codigoMestro").css("width","300px").css("border-radius","5px");
        $("#addChek2").remove();
        //evento...................
        $("#submitMaestro").click(function(){ventana2("maestro","divchek2","addChek2","checkAsistenciMaestro","codigoMestro","submitMaestro");});
    });
    //li6
    $("#li6").click(function()
    {
        $("#submitAlumno").remove();
        $("#submitMaestro").remove();
        $("#submitAdminis").remove();
        $("#botton3").append("<button type=\"button\" id = \"submitAdminis\" class = \"button btn btn-info btn-default\"><span class=\"glyphicon glyphicon-floppy-saved\"></span>  Verificar...</button>");
        $("#codigoAdministrativo").css("width","300px").css("border-radius","5px");
        $("#addChek3").remove();
        //evento...................
        $("#submitAdminis").click(function(){ventana2("administracion","divchek3","addChek3","checkAsistenciaAdmini","codigoAdministrativo","submitAdminis");});
    });

    //li7 reporte alumno

    $("#li7").click(function()
    {
        pedir_reporte("alumno");
    });

    //li8 reporte maestro

    $("#li8").click(function()
    {
        pedir_reporte("maestro");
    });

    //li9 reporte empleado

    $("#li9").click(function()
    {
        pedir_reporte("administracion")
    });

    //evento select .............


    $("#selectPuesto").change(function()
    {
        var select = $("#selectPuesto").val();
        if(select == "Jefe de Carrera")
        {
            $("#selectDep").remove();
            $("#botton3").append("<select id = \"selectDep\" name=\"divicion\" class=\"form-control\" title=\"Divicion\"><option value = \"\">--------------------</option><option value = \"Ing. Sistemas Computacionales\">Ing. Sistemas Computacionales</option><option value = \"Ing. Informatia\">Ing. Informatia</option><option value = \"Ing. Bioquimica\">Ing. Bioquimica</option><option value = \"Ing. Mecanica\">Ing. Mecanica</option><option value = \"Ing. Electrica\">Ing. Electrica</option><option value = \"Ing. Quimica\">Ing. Quimica</option><option value = \"Ing. Mecatronica\">Ing. Mecatronica</option><option value = \"Ing. Administracion\">Ing. Administracion</option><option value = \"Ing. Gestion Empresarial\">Ing. Gestion Empresarial</option><option value = \"Ing. Petrolera\">Ing. Petrolera</option><option value = \"Ing. Industrial\">Ing. Industrial</option><option value = \"Ing. Electronica\">Ing. Electronica</option><option value = \"Ing. Gestion Empresarial\">Ing. Gestion Empresarial</option></select>").css("margin-top","15px");
        }else $("#selectDep").remove();
    });

    function ventena1(id, buscarEn)
    {
        envioinforAsistencia(buscarEn)
        setTimeout(function()
        {
            ventanaEmergente();
        },500)
        setTimeout(function()
        {
            $("#"+id).prop('checked', false);
        },3000)

    }
    function ventana2(buscarEn, divchek, idSpanCheck,  idchek, idInputControl, idBottonAgregado)
    {
        envioinforAdministracion(buscarEn)
        setTimeout(function()
        {
            ventanaEmergente();
        },200)
        setTimeout(function()
        {
            $("#"+divchek).append("<span id = \""+idSpanCheck+"\" class=\"spanFondo input-group-addon\"><input type=\"checkbox\" id=\""+idchek+"\"name = \"asistencia\" title =\"Asistencia\"></span>");
            $("#"+idchek).click(function()
            {
                ventena1();
                setTimeout(function()
                {
                    $("#"+idchek).prop("checked", "");
                },2000)
            });
            $("#"+idInputControl).css("width","262px").css("border-radius","0px");
            $("#"+idBottonAgregado).remove();
        },2000);
    }

    function ventanaEmergente()
    {
        $('#server').bPopup({
            contentContainer:'.content',
            speed: 500,
            transition: 'slideIn',
            transitionClose: 'slideIn',
            autoClose: 700
        });
    }

    function limpiar()
    {
        $("input:checkbox").remove();
        $("#addChek1").remove();
        $("#addChek2").remove();
        $("#addChek3").remove();
        //chek 1
        $("#divChek1").append("<span id = \"addChek1\" class=\"spanFondo input-group-addon\"><input type=\"checkbox\" id=\"asistenciaAlumno\" name = \"asistencia\" title =\"Asistencia\"></span>");
        $("#asistenciaAlumno").click(function()
        {
            ventena1("asistenciaAlumno","alumno");
            setTimeout(function()
            {
                $("#asistenciaAlumno").prop("checked", "");
            },2000)
        });
        $("#numeroDeControl").css("width","262px").css("border-radius","0px");
        $("#submitAlumno").remove();//$("#submitMaestro").remove(); $("#submitAdminis").remove();
        //check2
        $("#divchek2").append("<span id = \"addChek2\" class=\"spanFondo input-group-addon\"><input type=\"checkbox\" id=\"checkAsistenciMaestro\" name = \"asistencia\" title =\"Asistencia\"></span>");
        $("#checkAsistenciMaestro").click(function()
        {
            ventena1("checkAsistenciMaestro","maestro");
            setTimeout(function()
            {
                $("#checkAsistenciMaestro").prop("checked", "");
            },2000)
        });
        $("#codigoMestro").css("width","262px").css("border-radius","0px");
        $("#submitMaestro").remove();
        //chek 3
        $("#divchek3 ").append("<span id = \"addChek3\" class=\"spanFondo input-group-addon\"><input type=\"checkbox\" id=\"checkAsistenciaAdmini\"name = \"asistencia\" title =\"Asistencia\"></span>");
        $("#checkAsistenciaAdmini").click(function()
        {
            ventena1("checkAsistenciaAdmini","administracion");
            setTimeout(function()
            {
                $("#checkAsistenciaAdmini").prop("checked", "");
            },2000)
        });
        $("#codigoAdministrativo").css("width","262px").css("border-radius","0px");
        $("#submitAdminis").remove();

    }
});