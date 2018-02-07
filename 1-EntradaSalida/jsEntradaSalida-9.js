/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
	var numero1;
	var aumento;

	numero1=document.getElementById('sueldo').value;
	aumento= (parseInt(numero1)*10/100)+ parseInt(numero1);

	document.getElementById('resultado').value= aumento;
}
