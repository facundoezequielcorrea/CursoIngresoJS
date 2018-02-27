/*pedir letra hasta que el clienete quiera
validar que sea letra no numero
ingresar numero entre -200 y 200
mostrar la letra del numero mas bajo
promedio de todos los numero ingresados despues de una vocal
letra del maximo*/
function Mostrar()
{
	var masdatos=" ";
	var letra;
	var numero;
	var maximo=-1000;
	var minimo=1000;
	var letramax;
	var letramin;
	var cantvocal=0;
	var contvocal=0;
	var promediovocal=0;


	while (masdatos!="no")
	{
		letra= prompt ("ingrese una letra");
		while (!(isNaN(letra)))
		{
			letra= prompt ("ingrese una letra nuevamente");
		}
		numero= prompt ("ingrese un numero");
		numero= parseInt (numero);
		while (numero<-200 || numero>200 || isNaN(numero))
		{
			numero= prompt ("ingrese un numero nuevamente");
			numero= parseInt (numero);
		}
		if (numero>maximo)
		{
			letramax=letra;
			maximo=numero;
		}
		if (numero<minimo)
		{
			letramin=letra;
			minimo=numero;
		}
		switch (letra)
		{
			case "a":
			case "e":
			case "i":
			case "o":
			case "u":
				contvocal++;
				cantvocal=cantvocal+numero;
		}

		masdatos= prompt ("Ingrese NO para dejar de ingresar numeros");
	}
	promediovocal=cantvocal/contvocal;
	document.write ("<br>la letra del valor maximo es: "+letramax);
	document.write ("<br>la letra del valor minimo es: "+letramin);
	document.write ("<br>el promedio de numeros despues de vocal es: "+promediovocal);

}
