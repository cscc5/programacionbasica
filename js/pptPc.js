//Funcion para la aleatoriedad
function random(min, max){
    //Math hace referencia a la clase para matematicas y floor para los boleanos; adicional random hace referencia a un valor entre 0 y 1
    return Math.floor(Math.random() * (max-min+1) + min)
}

function eleccion(option){
    let choice = ""
    if(option == 1){
        choice = "Piedra"
    }else if(option == 2){
        choice = "Papel"
    }else if(option == 3){
        choice = "Tijera"
    }else if(option != 1 || 2 || 3){
        choice = "¡MAL! recuerda que solo debes escribir el número al que corresponde tu elección; si deseas elegir piedra eliges 1, si deseas elegir papel eliges 2 y si deseas elegir tijera eliges 3"                
    }
    return choice
}

let player = ""
let ppt = 0
let pc = 0
let win = 0
let loss = 0

player = prompt("¿Cuál es tu nombre?")

//Ganará quien logre primero las 3 victorias
while(win < 3 && loss < 3){

    pc = random(1,3)
    ppt = prompt("Selecciona el número de tu preferecia: 1.Piedra, 2.Papel, 3.Tijera")
    
    alert("Tú eliges: " + eleccion(ppt))
    alert("PC elige: " + eleccion(pc))

    //figth
    if (ppt == pc){
        alert("¡Empate!")                
    } else if((ppt == 1 && pc == 3) || (ppt == 2 && pc == 1) || (ppt == 3 && pc == 2)){
        alert("El ganador es: " + player)
        win = win + 1
    } else{
        alert("Perdiste contra la PC")
        loss = loss + 1
    } 
}

alert("Ganaste " + win + " veces y perdiste " + loss + " veces.") 