function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta='si';

	while (respuesta=='si')
	{
		numero= prompt ("ingrese un numero")
		if (numero>0)
		{
			numero= parseInt(numero);
			positivo=positivo+numero;
		}
		if (numero<0)
		{
			numero= parseInt(numero);
			negativo=negativo*numero;
		}
		
		respuesta= prompt ("¿Desea ingresar otro numero? (ingrese si para continuar")
	}


	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN