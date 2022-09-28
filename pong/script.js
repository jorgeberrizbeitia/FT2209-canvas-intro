console.log("probando")

const canvas = document.querySelector("#my-canvas");
const ctx = canvas.getContext("2d")
canvas.style.backgroundColor = "black"

// variables globales
let pelotitaX = 50; // donde usas este valor?
let pelotitaY = 50;
let pelotitaDirectionX = 1
// la pelotita va hacia la derecha: 1
// la pelotita va hacia la izquierda: -1
let pelotitaDirectionY = 1

let paletaX = 150;
let paletaY = 570;

let isGameOn = true // el juego siguen andando

// funciones del juego
const drawPelotita = () => {
  ctx.beginPath()
  ctx.strokeStyle = "white"
  ctx.arc(pelotitaX, pelotitaY, 10, 0, 2 * Math.PI)
  ctx.stroke()
  ctx.fillStyle = "white"
  ctx.fill()
  ctx.closePath()
}

const drawPaleta = () => {
  ctx.fillStyle = "white";
  ctx.fillRect(paletaX, paletaY, 150, 20)
}

const movePelotita = () => {
  pelotitaX = pelotitaX + (pelotitaDirectionX * 2);
  pelotitaY = pelotitaY + (pelotitaDirectionY * 2);
}

const pelotitaPaletaCollision = () => {

  // pelotitaX
  // paletaX
  
  // pelotitaY
  // paletaY
  if (pelotitaY > paletaY && pelotitaX > paletaX && pelotitaX < (paletaX + 150)) {
    // la pelota ha pasado el punto de la paleta
    console.log("colisionando con la paleta")
    pelotitaDirectionY = -1
  }

  // estan colisionando

}

const pelotitaWallCollision = () => {
  // determinar cuando la X de la pelotita salga del canvas
  if (pelotitaX + 10 > canvas.width) {
    // colision con pared derecha
    // pelotitaX = pelotitaX - 5
    // cambiar la dirección de la pelotita
    pelotitaDirectionX = -1
  } 
  
  if (pelotitaY > canvas.height) {
    // colision con pared abajo
    // pelotitaDirectionY = -1
    isGameOn = false;
    alert("Gracias por jugar! :)")
  }

  if (pelotitaX < 0) {
    // colision con pared izquierda
    pelotitaDirectionX = 1
  }

  if (pelotitaY < 0) {
    // colision con pared arriba
    pelotitaDirectionY = 1
  }

}

const gameLoop = () => {
  // console.log("ejecutando la recursion del juego")

  // 1. Limpiar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  // 2. Acciones y movimientos de los elementos del juego
  movePelotita()
  pelotitaWallCollision()
  pelotitaPaletaCollision()

  // 3. Dibujado de los elementos
  drawPelotita()
  drawPaleta()

  // 4. controlar la recursion del juego
  if (isGameOn === true) {
    requestAnimationFrame( gameLoop )
  }
}


window.addEventListener("keydown", (event) => {
  if (event.code === "ArrowRight") {
    // mover la paleta a la derecha
    paletaX = paletaX + 20
  }
  if (event.code === "ArrowLeft") {
    // mover la paleta a la izquierda
    paletaX = paletaX - 20
  }
})


gameLoop()