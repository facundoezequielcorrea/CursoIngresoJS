function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");

	while (numero<0 || numero>10 || numero==null)
	{
		alert ("numero incorrecta!!!");
		numero = prompt("ingrese un número entre 0 y 10.");
		
	}
	alert ("Bien hecho");


}//FIN DE LA FUNCIÓN