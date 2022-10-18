const btn_generarNum = document.getElementById('btn_generarNum');
const resultBox = document.getElementById('result');

var numero;

/**
 * Generates a random number and saves it in VAR numero
 * @param  {int} max - Max random number to generate
 * @returns {int} - Devuelve un valor aleatorio entre 0 y max.
 */
function generarNumero(max) {
  return Math.floor(Math.random() * max);
}

/**
 * Cambia el contenido de resultBox
 */
function aprobado() {
  resultBox.innerHTML = `Nota: ${numero} = Aprobado.`
}

/**
 * Cambia el contenido de resultBox
 */
function suspenso() {
  resultBox.innerHTML = `Nota: ${numero} = Suspenso.`
}

/**
 * Listener de CLICK en boton.
 * 
 * Usa operador ternario para saber si la nota es aprobado o suspenso.
 */
btn_generarNum.addEventListener('click', function() {
  numero = generarNumero(10)
  numero>=5?aprobado():suspenso();
  /* Este operador sustituye el siguiente bloque de codigo:

  if (numero >= 5) {
    aprobado()
  } else {
    suspenso()
  }

   */
});