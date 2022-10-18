const PI = Math.PI;

/**
 * Calcula el area de una circunferencia dado un radio.
 * @param  {float} r - radio de la circunferencia
 * @returns {float} - devuelve el resultado del area de la circunferencia
 */
function calcArea(r) {
  return PI * Math.pow(r, 2);
}


/**
 * Calcula la longitud de una circunferencia dado un radio
 * @param  {float} r - radio de la circunferencia
 * @returns {float} - devuelve la longitud de la circunferencia
 */
function calcLongCircunferencia(r) {
  return 2 * PI * r;
}

let area = calcArea(5).toFixed(3);
let longitud = calcLongCircunferencia(5).toFixed(3);

console.log("area: %s \nLongitud: %s", area, longitud);