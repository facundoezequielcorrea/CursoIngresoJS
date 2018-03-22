function Mostrar()
{
    var precio=prompt("ingrese el precio")
    var descuento=prompt("ingrese el porcentaje de descuento")
    precio=parseInt(precio)
    descuento=parseInt(descuento)
    descuento=(100-descuento)/100
    elPrecioFinal=precio*descuento
    document.getElementById("elPrecioFinal").value=elPrecioFinal
}
