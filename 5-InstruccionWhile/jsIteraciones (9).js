function Mostrar()
{

	var contador=0;
	// declarar variables
	var numero;
	var maximo;
	var minimo;
	
	var respuesta='si';

	while(respuesta!='no')
	{
		contador++
		numero= prompt ("ingrese un numero");
		numero= parceInt (numero);
		if (contador==1)

			maximo=numero;
			minimo=numero;
		else

			if (numero>maximo)

				maximo=numero;

			if (numero<minimo)

				numero=minimo;

		respuesta= prompt ("¿Desea ingresar otro numero? (ingrese no para continuar");
	}

	document.getElementById('suma').value=maximo;
	document.getElementById('producto').value=minimo;




}//FIN DE LA FUNCIÓN