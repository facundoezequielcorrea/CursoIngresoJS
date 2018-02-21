function Mostrar()
{
	var iteraciones=10;

	for(contador=0;contador<iteraciones;contador++)
	{
		document.write ("<br>"+contador);
		if (contador==10)
		{
			break;
		}
		if (contador==5)
		{
			continue;
		}

		document.write ("despues de continue");
	}
	document.write ("fin del for");
}