/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numero1;
	var numero2;
	var suma;

	numero1=document.getElementById('numeroUno').value;
	numero2=document.getElementById('numeroDos').value;

	suma=parseInt(numero1)+parseInt(numero2);

	alert("la suma es "+suma)
}

function restar()
{
	var numero1;
	var numero2;
	var resta;

	numero1=document.getElementById('numeroUno').value;
	numero2=document.getElementById('numeroDos').value;

	resta=parseInt(numero1)-parseInt(numero2);

	alert("la resta es "+resta)
}

function multiplicar()
{ 
	var numero1;
	var numero2;
	var mult;

	numero1=document.getElementById('numeroUno').value;
	numero2=document.getElementById('numeroDos').value;

	mult=parseInt(numero1)*parseInt(numero2);

	alert("la multiplicacion es "+mult)
}

function dividir()
{
	var numero1;
	var numero2;
	var divi;

	numero1=document.getElementById('numeroUno').value;
	numero2=document.getElementById('numeroDos').value;

	divi=parseInt(numero1)/parseInt(numero2);

	alert("la division es "+divi)
}

