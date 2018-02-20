function Mostrar()
{

	var sexo = prompt("ingrese f ó m .");
	while (sexo!="f" && sexo!="m")
	{
		alert ("dato incorrecto");
		sexo = prompt("ingrese f ó m .");
	}
	if (sexo == "f")
	{
		sexo="Femenino"
		document.getElementById('Sexo').value=sexo;
	}
	else
	{
		sexo="Masculino"
		document.getElementById('Sexo').value=sexo;
	}
}//FIN DE LA FUNCIÓN