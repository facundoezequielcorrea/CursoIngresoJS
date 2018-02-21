/*Enunciado:
Al presionar el botón pedir números hasta que el usuario quiera, mostar:
1-Suma de los negativos. 
2-Suma de los positivos. 
3-Cantidad de positivos. 
4-Cantidad de negativos. 
5-Cantidad de ceros. 
6-Cantidad de números pares. 
7-Promedio de positivos. 
8-Promedios de negativos. 
9-Diferencia entre positivos y negativos, (positvos-negativos).*/

function Mostrar()
{
//declarar contadores y variables
	var contadorpos=0;
	var contadorneg=0;
	var negativo=0;
	var positivo=0;
	var ceros;
	var pares;
	var numero;
	
	var respuesta="si";

	while(respuesta!="no")
	{
		numero= prompt ("ingrese un numero");
		numero= parceInt (numero);
		if (numero<0)

			contadorneg++
			negativo=negativo+numero;
		
		if (numero>0)

			contadorpos++
			positivo=positivo+numero
			
	}




}//FIN DE LA FUNCIÓN