function Mostrar()
{
	//var contador=0;
	var iteraciones=10;
	var contadordepar=0;
	var contadordeimpar=0;
	var contadordeceros=0;
	var contadordepositivos=0;
	var contadordenegativos=0;

	for(contador=-10;contador<iteraciones;contador++)
	{
		document.write ("<br>"+contador);
		if (contador==0)
		{
			contadordeceros++;
		}
		else
		{	
			if (contador<0)
			{
				contadordenegativos++;	
			}
			if (contador>0)
			{
				contadordepositivos++;
			}
		
			if (contador%2==0)
			{
				contadordepar++;
			}
			else
			{
				contadordeimpar++;
			}
			
		}	
	}
	document.write ("<br>"+contador);
	document.write ("<br> par: "+contadordepar);
	document.write ("<br> impar: "+contadordeimpar);
	document.write ("<br> ceros: "+contadordeceros);
	document.write ("<br> negativos: "+contadordenegativos)
	document.write ("<br> negativos: "+contadordepositivos)
}