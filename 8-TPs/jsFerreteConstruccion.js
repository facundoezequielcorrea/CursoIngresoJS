/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var radio;
	var resultado;

	largo=document.getElementById('Largo').value;
	ancho=document.getElementById('Ancho').value;
	radio=document.getElementById('Radio').value;


	resultado=(parseInt(largo)*2+parseInt(ancho)*2+)*3;

	alert("el resultado es "+resultado)

}
function Circulo () 
{
	var largo;
	var ancho;
	var radio;
	var resultado;

	largo=document.getElementById('Largo').value;
	ancho=document.getElementById('Ancho').value;
	radio=document.getElementById('Radio').value;


	resultado=(parseInt(numero1)+parseInt(numero2)+parseInt(numero3))/3;

	alert("el resultado es "+resultado)
}
function Materiales () 
{
	var largo;
	var ancho;
	var radio;
	var resultado;

	largo=document.getElementById('Largo').value;
	ancho=document.getElementById('Ancho').value;
	radio=document.getElementById('Radio').value;


	resultado=(parseInt(numero1)+parseInt(numero2)+parseInt(numero3))/3;

	alert("el resultado es "+resultado)
}