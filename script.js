console.log("probando")

const canvas = document.querySelector("#my-canvas")
canvas.style.backgroundColor = "lightgray"
// background-color
const ctx = canvas.getContext("2d") // la brocha para dibujar


ctx.fillStyle = "green"; // el color de nuestros elementos con relleno

// (posX, posY, ancho, alto)
ctx.fillRect(50, 60, 70, 70) // para dibujar rectangulos


ctx.fillStyle = "red";
ctx.fillRect(50, 150, 100, 40)

ctx.fillStyle = "blue";
ctx.fillRect(70, 170, 120, 30)


// clearRect => borrar secciones del canvas

// (posX, posY, ancho, alto)
ctx.clearRect(70, 70, 30, 30)

// borrar todo el canvas
// ctx.clearRect(0, 0, 600, 800)
// ctx.clearRect(0, 0, canvas.width, canvas.height)


// propiedades y metodos de trazados


ctx.strokeStyle = "purple"

// (posX, posY, ancho, alto)
ctx.strokeRect(50, 210, 100, 50) // px

// * Trazados más complejos

ctx.beginPath() // inicia un trazado complejo
ctx.strokeStyle = "orange" // para color de trazado
ctx.lineWidth = 3 // para cambiar el ancho de la linea
ctx.moveTo(50, 300) // mover el cursor a donde empezar el trazado
// (posX, posY)
ctx.lineTo(80, 320) // a donde va el cursos trazando
// .. de aqui hacemos más trazados o más movimiendos del cursor
ctx.lineTo(50, 340)
ctx.lineTo(20, 320)
ctx.lineTo(50, 300)

ctx.stroke() // realiza el trazado hasta este punto

ctx.fillStyle = "darkgray" // color de relleno
ctx.fill() // rellena todo el trazado (con el ultimo color de fillStyle)
ctx.closePath() // aqui termina el trazado



// * circulos y circunferencias

ctx.beginPath()
// .todo el trazado para dibujar el circulo
ctx.strokeStyle = "brown"

// (posX, posY, radio, anguloInicial, anguloFinal, sentido)
// posiciones son del centro del circulo
ctx.arc(400, 100, 70, 0, 0.5 * Math.PI, true)

ctx.fillStyle = "yellow"
ctx.fill()

ctx.stroke()
ctx.closePath()


// imagenes en canvas

let img = new Image();
// esto crea un elemento de DOM que luego podemos incorporar
img.src = "https://tinyurl.com/ironhack-pokemons/151.svg"


// el load es para asegurarse recibir la imagen antes de dibujarla en el canvas (previene bugs)
img.addEventListener("load", () => {
  // como dibujamos esa imagen en el canvas?
  // (imagen, posX, posY, ancho, alto)
  // ctx.drawImage(img, 200, 400, 80, 100)
  ctx.drawImage(img, 200, 400)
  // draw image, 
  // o pasamos el ancho y el alto
  // o no pasamos ninguno y coje el tamaño original
})


// * Recursividad

// let controlVar = 0;

// function printSomething() {
//   console.log("ejecutando para siempre")
//   controlVar++


//   // condicionamos la ejecucion
//   if (controlVar < 1000) {
//     // cuando el control sea mayor a 100, entonces deja de ejecutar la recursion
//     printSomething()
//   }
// }

// printSomething()


// como usamos esa recursividad para crear animaciones en canvas


// let controlVar2 = 0;
let cubeX = 50;
let cubeY = 700;

function moveCube() {

  // borrar elementos
  ctx.clearRect(0, 0, canvas.width, canvas.height) // borrar el canvas

  // aqui los movimientos o acciones de nuestros elementos
  cubeX = cubeX + 2
  cubeY = cubeY - 1

  // dibujar elementos
  ctx.fillStyle = "black";
  ctx.fillRect(cubeX, cubeY, 50, 50)

  // controlVar2++
  if (cubeX < 400) {
    // moveCube()
    requestAnimationFrame(moveCube)
    // espera un tiempo determinado (optimizado para animacion) y ejecuta la funcion para dar recursividad
    // requestAnimationFrame utilize la frecuencia de refresque de la pantalla FPS
    // pantalla comun 60 fps => ejecutar la funcion 60 veces por segundo.
  }
}

moveCube()