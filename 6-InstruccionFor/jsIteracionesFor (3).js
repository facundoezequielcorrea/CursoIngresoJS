function Mostrar()
{

//var repetciones = prompt("ingrese el número de repeticiones");
	var iteraciones=100;
	var numerorandom;
	var contador0=0;
	var contador1=0;
	var contador2=0;
	var contador3=0;
	var contador4=0;
	var contador5=0;
	var contador6=0;
	var contador7=0;
	var contador8=0;
	var contador9=0;

		for(contador=0;contador<iteraciones;contador++)
		{
			numerorandom=Math.floor(Math.random() * 10);
			//document.write ("<br>"+contador);
			//document.write ("<br>"+numerorandom);
			switch (numerorandom)
			{
				case 0:
					contador0++;
					break;
				case 1:
					contador1++;
					break;
				case 2:
					contador2++;
					break;
				case 3:
					contador3++;
					break;
				case 4:
					contador4++;
					break;
				case 5:
					contador5++;
					break;
				case 6:
					contador6++;
					break;
				case 7:
					contador7++;
					break;
				case 8:
					contador8++;
					break;
				case 9:
					contador9++;
					break;

			}	
		}
		document.write ("<br> cantidad de 0: "+contador0);
		document.write ("<br> cantidad de 1:"+contador1);
		document.write ("<br> cantidad de 2:"+contador2);
		document.write ("<br> cantidad de 3:"+contador3);
		document.write ("<br> cantidad de 4:"+contador4);
		document.write ("<br> cantidad de 5:"+contador5);
		document.write ("<br> cantidad de 6:"+contador6);
		document.write ("<br> cantidad de 7:"+contador7);
		document.write ("<br> cantidad de 8:"+contador8);
		document.write ("<br> cantidad de 9:"+contador9);



}//FIN DE LA FUNCIÓN