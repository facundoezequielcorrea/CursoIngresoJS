/*ingreso de alumnos sin saber cantidad final pedir nombre 
cuantos alumnos ingrese*/
function Mostrar()
{
	var nombre;
	var contadordealumnos=0;
	var ingresaalumno= " ";
	var nota;
	var acumnota=0;
	var promedio;
	var canthombre=0;
	var cantmujer=0;

	while (ingresaalumno!="no")
	{
		nombre= prompt("por favor ingrese nombre de alumno");
		contadordealumnos++;
		nota= prompt ("por favor ingrese nota del alumno");
		nota=parseInt(nota);
		while (nota<0 || nota>10)
		{
			nota= prompt ("nota incorrecta por favor ingrese nota del alumno nuevamente");
			nota=parseInt(nota);
		}
		sexo= prompt ("por favor ingrese sexo del alumno");
		while (sexo!="f" || sexo!="m")
		{
			sexo= prompt ("sexo ingresado incorrecto por favor ingrese sexo del alumno nuevamente");
		}
		if (sexo=="f")
		{
			cantmujer++;
		}else
		{
			canthombre++;
		}
		acumnota=acumnota+nota;

		ingresaalumno= prompt ("Ingrese NO para dejar de ingresar nombres");
	}
	promedio= acumnota/contadordealumnos;
	document.write ("usted ingreso "+contadordealumnos+" alumnos");
	document.write ("la nota promedio es "+promedio);
}
