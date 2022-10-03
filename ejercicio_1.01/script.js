const botonSumar = document.getElementById('sumaBoton');
const parrafo = document.getElementById('contador');
var count = 0;

botonSumar.addEventListener("click", function () {
    count++;
    parrafo.innerHTML = "Cuantas veces has pulsado el boton: " + count;
})