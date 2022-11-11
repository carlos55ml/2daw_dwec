// declarando variables globales (raiz del script)
// estas variables se pueden usar en cualquier parte del codigo
var globalA = 10;
var globalB = 5;

/**
 * sumaA() - Suma el valor dado a globalA
 * @param {int} sumando Valor a sumar
 * @returns {int} Resultado de la suma
 */
function sumaA(sumando) {
  resultado = globalA + sumando
  return resultado
}
var sumale = 3

console.log("Resultado de suma de globalA(%s) + %s: %s",globalA, sumale, sumaA(sumale))

// ahora vamos a cambiar el valor de globalB
console.log("Cambiando globalB ---\nAntes de cambiar: %s", globalB)
globalB = 2
console.log("DESPUES de cambiar: %s", globalB)

// la funcion sumaA la podemos usar en todo el documento, ya que es global

function test(funciona) {
  if (funciona) {
    var resultado = sumaA(globalB) // uso de sumaA dentro de un
    console.log("Resultado de la suma globalA + globalB: %s", resultado)
  } else {
    var resultado = sumaA(1)
    console.log("Resultado de la suma: %s", resultado)
  }
}

test(true)