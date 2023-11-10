const puntosUsuario = document.getElementById("contador-usuario")
const puntosOrdendor = document.getElementById("contador-ordenador")
const resultado = document.getElementById('resultado')
let botonJugada = document.querySelectorAll('.boton-jugada')
const opciones =['piedra','papel','tijera']
let jugadaUsuario ;
let puntosPC = 0
let puntosUser = 0

for( let i = 0 ; i < opciones.length; i++){
    botonJugada[i].addEventListener('click', function (){
        let numeroAleatorio= Math.floor(Math.random()*(2- 0 + 1))
        let eleccionOrdenador= opciones[numeroAleatorio]
        jugadaUsuario  = botonJugada[i].getAttribute('data-jugada')

        console.log("opcion usurio:" + jugadaUsuario)
        console.log("opcion pc:" + eleccionOrdenador)

        if(jugadaUsuario === eleccionOrdenador){
          
            console.log("Hemos empatado")

        } else if (jugadaUsuario === "piedra" && eleccionOrdenador ==="papel") {
            puntosPC++;
            console.log(`ha perdido ${jugadaUsuario}  ${eleccionOrdenador}`)
        } else if (jugadaUsuario === "tijera" && eleccionOrdenador ==="piedra") {
            puntosPC++;
            console.log(`ha perdido ${jugadaUsuario}  ${eleccionOrdenador}`)
        }  else if (jugadaUsuario === "papel" && eleccionOrdenador ==="tijera") {
            puntosPC++;
            console.log(`ha perdido ${jugadaUsuario}  ${eleccionOrdenador}`)
        } else if (jugadaUsuario === "piedra" && eleccionOrdenador ==="tijera") {
            puntosUser++;
            console.log(`has ganado ${jugadaUsuario}  ${eleccionOrdenador}`)
        } else if (jugadaUsuario === "tijera" && eleccionOrdenador ==="papel") {
            puntosUser++;
            console.log(`ha perdido ${jugadaUsuario}  ${eleccionOrdenador}`)
        } else if (jugadaUsuario === "papel" && eleccionOrdenador ==="piedra") {
            puntosUser++;
            console.log(`ha perdido ${jugadaUsuario}  ${eleccionOrdenador}`)
        }

        const eleccionUsuario =document.getElementById('eleccionUsuario')
        eleccionUsuario.innerText= `El usuario ha elegido: ${jugadaUsuario}`
        eleccionOrdenador.innnerText =`El`pc ha elegido: ${eleccionOrdenador}`

        puntosUsuario.innerHTML = `Puntos usuario: ${puntosUser}`
        puntosOrdendor.innerHTML  = `Puntos ordenador: ${puntosPC}`
    })}
