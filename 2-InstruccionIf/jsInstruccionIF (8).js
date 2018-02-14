function Mostrar()
{
//tomo la edad  

	var edad;
	var ecivil;
	//console.log("hola");
	edad=document.getElementById('edad').value;
	ecivil=document.getElementById('estadoCivil').value;

	if (edad>18 && ecivil=="Soltero")
	{
		alert ("Es soltero y no es menor")
	}	
	if (edad<18 && ecivil!="Soltero")
	{
		console.log("NO HACER NADA");
	}


}//FIN DE LA FUNCIÓN