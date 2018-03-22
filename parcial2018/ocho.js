function Mostrar()
{
    var contador=0
    var letra, numero, respuesta
    var numerosPares=0
    var numerosImpares=0
    var numerosCero=0
    var numerosPositivos=0
    var sumaDePositivos=0
    var sumaDeNegativos=0

    while(respuesta!="no"){
        letra=prompt("ingrese una letra")
        numero=prompt("ingrese un numero (-100 a 100)")
        numero=parseInt(numero)
        if(numero<-100||numero>100){
            while(nota<-100||nota>100){
                numero=prompt("error, ingrese un numero (-100 a 100)")
            }
        }
        respuesta=prompt("si desea terminar escriba no")
        if(numero==0){
            numerosCero++
        }else{
            if(numero%2==0){
            numerosPares++
            }else{
            numerosImpares++
            }
            if(numero>0){
                numerosPositivos++
                sumaDePositivos=sumaDePositivos+numero
            }
            if(numero<0){
                sumaDeNegativos=sumaDeNegativos+numero
            }

        }
        
    }
}
