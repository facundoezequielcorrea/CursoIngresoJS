function Mostrar()
{
    var numeroUno=prompt("Ingrese un numero")
    var numeroDos=prompt("Ingrese otro numero")
    numeroUno=parseInt(numeroUno)
    numeroDos=parseInt(numeroDos)
    if(numeroUno==numeroDos){
        alert(numeroUno+""+numeroDos)
    }
    else if(numeroUno>numeroDos){
        alert(numeroUno-numeroDos)
    }
    else{
        var suma=numeroUno+numeroDos
        alert(suma)
        if(suma>10){
            alert("la suma es "+suma+" y supero el 10")
        }
    }    
}
