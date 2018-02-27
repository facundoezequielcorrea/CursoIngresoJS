/*sin if
ingreso 3 numeros muestro promedio*/
function Mostrar()
{
	var numero1;
	var numero2;
	var numero3;
	var promedio;

	numero1= prompt ("ingrese numero 1");
	numero1= parseInt (numero1);
	numero2= prompt ("ingrese numero 2");
	numero2= parseInt (numero2);
	numero3= prompt ("ingrese numero 3");
	numero3= parseInt (numero3);

	if (numero1>numero2 && numero1>numero3) 
	{
		alert ("mayor numero es "+numero1);
	}
	else
	{
		if (numero2>numero1 && numero2>numero3)
		{
			alert ("mayor numero es "+numero2);
		}
		else
		{
			alert ("mayor numero es "+numero3);
		}
	}
	if (numero1<numero2 && numero1<numero3) 
	{
		alert ("menor numero es "+numero1);
	}
	else
	{
		if (numero2<numero1 && numero2<numero3)
		{
			alert ("menor numero es "+numero2);
		}
		else
		{
			alert ("menor numero es "+numero3);
		}

	}
	//promedio= ((numero1+numero2+numero3)/3);

	//document.write ("el promedio es "+promedio);

}
