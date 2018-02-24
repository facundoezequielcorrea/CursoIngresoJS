/*ingreso de alumnos sin saber cantidad final pedir nombre 
cuantos alumnos ingrese
promedio todal
cantidad de mujeres
cantidad de hombres
cantidad de varones desaprobados
nombre de la mejor nota
promedio de la mujeres (nota)
sexo del menor edad
promedio de las edades de los aprobados
cantidad de notas pares
camtidad de notas impares*/
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
	var hombresdesaprob=0;
	var nombremejornota;
	var mejornota=0;
	var notamujer=0;
	var promnotamujer;
	var edad=0;
	var menoredad=0;
	var sexomenoredad;
	var edadesaprobados=0;
	var cantalumnosaprob=0;
	var promaprobados;
	var notapar=0;
	var notaimpar=0;

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
			notamujer=notamujer+nota;
		}else
		{
			canthombre++;
		}
		edad= prompt ("por favor ingrese la edad del alumno");
		while (edad<0 || edad>100)
		{
			edad= prompt ("edad incorrecta por favor ingrese la edad del alumno nuevamente");
		}
		if (sexo=="m" && nota<4)
		{
			hombresdesaprob++;
		}
		if (nota>mejornota)
		{
			nota=mejornota;
			nombremejornota=nombre;
		}
		if(menoredad>edad)
		{
			menoredad=edad;
			sexomenoredad=sexo;
		}
		if(nota>3)
		{
			cantalumnosaprob++;
			edadesaprobados=edadesaprobados+edad;
		}
		if (nota%2==0)
		{
			notapar++;
		}else
		{
			notaimpar++;
		}

		acumnota=acumnota+nota;

		ingresaalumno= prompt ("Ingrese NO para dejar de ingresar nombres");
	}
	promedio= acumnota/contadordealumnos;
	promnotamujer=notamujer/cantmujer;
	promaprobados=edadesaprobados/cantalumnosaprob;
	document.write ("usted ingreso "+contadordealumnos+" alumnos");
	document.write ("<br> la nota promedio es "+promedio);
	document.write ("<br> la cantidad de hombres es "+canthombre);
	document.write ("<br> la cantidad de mujeres es "+cantmujer);
	document.write ("<br> la cantidad de hombres desaprobados son "+hombresdesaprob);
	document.write ("<br> el alumno con mejor nota es "+nombremejornota);
	document.write ("<br> el promedio de nota de mujeres es "+promnotamujer);
	document.write ("<br> el sexo del alumno con menor edad es "+sexomenoredad);
	document.write ("<br> el promedio de edad de alumnos aprobados es "+promaprobados);
	document.write ("<br> la cantidad de notas pares es "+notapar);
	document.write ("<br> la cantidad de notas impares es "+notaimpar);
}
