function Mostrar()
{
    var cantidadDeAlumnos=0
    var nota=0
    var sexo
    var notaMasBaja=10
    var totalDeNotas=0
    var cantidadDeVaronesConSeisOMas=0
    while(cantidadDeAlumnos<5){
        cantidadDeAlumnos++
        nota=prompt("ingrese la nota del alumno")
        nota=parseInt(nota)
        if(nota<0||nota>10){
            while(nota<0||nota>10){
                nota=prompt("error, ingrese la nota del alumno (0 a 10)")
            }
        }
        totalDeNotas=nota+totalDeNotas
        sexo=prompt("ingrese el sexo del alumno")
        if(sexo!="f"&&sexo!="m"){
            while(sexo!="f"&&sexo!="m"){
                sexo=prompt("error, ingrese el sexo del alumno (f o m)")
            }
        }
        if(nota<=notaMasBaja){
            notaMasBaja=nota
            sexoDelAlumnoConBajaNota=sexo
        }
        if(sexo=="m"&&nota>=6){
            cantidadDeVaronesConSeisOMas=cantidadDeVaronesConSeisOMas+1
        }
    }
    var promedio=totalDeNotas/cantidadDeAlumnos
    alert("Promedio de las notas totales:"+promedio)
    alert("La nota mas baja fue "+notaMasBaja+", el sexo de este alumno es "+sexoDelAlumnoConBajaNota)
    alert(cantidadDeVaronesConSeisOMas+" varones sacaron 6 o mas")
}
