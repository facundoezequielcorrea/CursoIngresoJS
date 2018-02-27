/*ingresar numero sin limete ente -50 y 50
informar
cantidad de pares e impares
promediod de los positovos
maximo y minimo*/
function Mostrar()
{
	var masnumeros=" ";
	var numero;
	var cantpar=0;
	var cantimpar=0;
	var maximo=-100;
	var minimo=999;
	var promediopositivos;
	var cantpositivos=0;
	var acumpositivos=0;
	var contadorceros=0;

	while (masnumeros!="no")
	{
		numero= prompt ("ingrese un numero");
		numero= parseInt (numero);
		while (numero<-50 || numero>50 || isNaN(numero))
		{
			numero= prompt ("ingrese un numero nuevamente");
			numero= parseInt (numero);
		}
		if (numero==0)
		{
			contadorceros++;
		}
		else
			{
				if (numero%2==0)
				{
					cantpar++;
				}
				else
				{
					cantimpar++;
				}
			}
		if (numero>0)
		{
			cantpositivos++;
			acumpositivos=acumpositivos+numero;
		}
		if (numero>maximo)
		{
			maximo=numero;
		}
		if (numero<minimo)
			{
				minimo=numero;	
			}
			
		
		masnumeros= prompt ("Ingrese NO para dejar de ingresar numeros");
	}
	promediopositivos=acumpositivos/cantpositivos;
	document.write ("la cantidad de pares es: "+cantpar);
	document.write ("<br>la cantidad de impares es: "+cantimpar);
	document.write ("<br>el promedio de positivos es: "+promediopositivos);
	document.write ("<br>el numero maximo es: "+maximo);
	document.write ("<br>el numero minimo es: "+minimo);



		/*var importe;
		var contadordeimporte=0;
		var iteraciones=24;

		while (contadordeimporte<iteraciones)
		{
			contadordeimporte++;
			importe= prompt ("ingrese importe del dia");
			
		}*/
}
