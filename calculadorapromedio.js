let nombre = prompt("Ingrese el nombre y apellido del alumno")
let materia = prompt("Ingrese el nombre de la materia")
let x1 = parseInt(prompt( number>=0 && 10>=number))
    while(x1<0 || x1>10){
        x1 = parseInt(prompt( number>=0 && 10>=number))
    }
let x2 = parseInt(promp(number>=0 && 10>=number))
    while(x2<0 || x2<10){
        x2 = parseInt(prompt(number>=0 && 10>=number))
    }
let x3 = parseInt(promp( number>=0 && 10>=number))
    while(x3<0 || x3<10){
        x3 = parseInt(prompt( number>=0 && 10>=number))
    }

let z1= x1+x2+x3;
let denominador=3
let z2= z1/ denominador
if(z2 > 7){
    alert(nombre+", !Felicidades! Has aprobado con un promedio de :"+z2)
} else{
    alert(nombre+".Gracias por tu esfuerzo. Nos vemos en clase.El promedio obtenido: "+z2)
}