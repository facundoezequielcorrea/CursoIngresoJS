function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;

	nota=(parseInt(Math.random() * 10)+1)
		console.log (nota);
	if (nota>8)
		{
		alert ("EXCELENTE");
		}
	if (nota<9 && nota>3)
		{
		alert ("APROBÓ");
		}
	else
		{
		alert ("Vamos, la proxima se puede");
		}
}//FIN DE LA FUNCIÓN