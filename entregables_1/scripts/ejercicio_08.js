var botonEspana = document.getElementById("saludoEspanol")
var botonIngles = document.getElementById("saludoIngles")
var botonRuso = document.getElementById("saludoRuso")


function saludoEs() {
    document.write(`<p id="SaludoEs" style="color: #debd00;">Hola! Bienvenido a la pagina.</p>`)
}

function saludoEn() {
    document.write(`<p id="SaludoEn" style="color: blue;">Hello! Welcome to the page.</p>`)
}

function saludoRu() {
    document.write(`<p id="SaludoRu" style="color: red;">Привет! Добро пожаловать на страницу.</p>`)
}

botonEspana.onclick = () => {saludoEs()}
botonIngles.onclick = () => {saludoEn()}
botonRuso.onclick = () => {saludoRu()}
