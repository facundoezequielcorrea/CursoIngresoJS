/*pedir precio y oporcentaje de descuento mostrar importe final*/
function Mostrar()
{
 	var precio;
 	var porcentadesc;
 	var importefinal;
 	//var importecondesc;

 	precio= prompt ("ingrese precio del producto");
 	porcentadesc= prompt ("ingrese porcentaje a descontar");
 	importefinal=(precio-(precio*(porcentadesc/100)));
 	//importefinal=importecondesc+(precio*0.21);
 	document.getElementById('importeFinal').value=importefinal;

}
