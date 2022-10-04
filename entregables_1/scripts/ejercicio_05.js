const botonEspana = document.getElementById("saludoEspanol")
const botonIngles = document.getElementById("saludoIngles")
const botonRuso = document.getElementById("saludoRuso")

const parrafoSaludo = document.getElementById("Saludo")

function saludoEs() {
    parrafoSaludo.innerHTML = `<p id="Saludo" style="color: #debd00;">Hola! Bienvenido a la pagina.</p>`
}

function saludoEn() {
    parrafoSaludo.innerHTML = `<p id="Saludo" style="color: blue;">Hello! Welcome to the page.</p>`
}

function saludoRu() {
    parrafoSaludo.innerHTML = `<p id="Saludo" style="color: red;">Привет! Добро пожаловать на страницу.</p>`    
}

botonEspana.onclick = () => {saludoEs()}
botonIngles.onclick = () => {saludoEn()}
botonRuso.onclick = () => {saludoRu()}