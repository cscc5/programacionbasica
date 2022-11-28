//Declaración de variables
let Comp1 = ""
let Comp2 = ""
let ppt = ""
let ppt2 = ""

//Preguntar a los jugadores el nombre y lo que van a escoger
Comp1 = prompt("Nombre del jugador 1: ")
ppt = prompt("¿Piedra, paple o tijera?: ")
Comp2 = prompt("Nombre del jugador 2: ")
ppt2 = prompt("¿Piedra, paple o tijera?: ")

//figth
if (ppt == ppt2){
    alert("¡Empate!")                
} else if((ppt == "piedra" && ppt2 == "tijera") || (ppt == "papel" && ppt2 == "piedra") || (ppt == "tijera" && ppt2 == "papel")){
    alert("El ganador es: " + Comp1)
} else if(((ppt || ppt2) != "piedra") && ((ppt || ppt2) != "papel") && ((ppt || ppt2) != "tijera")){
    alert("recuerde que solo debe escribir la palabra tal cual, sin tildes, guiones, mayusculas, espacios ni nada raro")
}else{
    alert("El ganador es: " + Comp2)
} 