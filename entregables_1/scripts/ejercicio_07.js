const botonEspana = document.getElementById("saludoEspanol")
const botonIngles = document.getElementById("saludoIngles")
const botonRuso = document.getElementById("saludoRuso")

const parrafoSaludo = document.getElementById("Saludo")

function saludoEs() {
    console.log(`Hola! Bienvenido a la pagina.`)
}

function saludoEn() {
    console.log(`Hello! Welcome to the page.`)
}

function saludoRu() {
    console.log(`Привет! Добро пожаловать на страницу.`)
}

botonEspana.onclick = () => {saludoEs()}
botonIngles.onclick = () => {saludoEn()}
botonRuso.onclick = () => {saludoRu()}
