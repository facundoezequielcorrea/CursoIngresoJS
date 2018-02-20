function Mostrar()
{

	var contadorpos=0;
	var contadorneg=0;
	//declarar contadores y variables 
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