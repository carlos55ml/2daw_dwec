const original = [
  2, 1, 5, 9, 3, 8, 4, 6, 7,
  7, 8, 6, 1, 2, 4, 3, 5, 9,
  9, 3, 4, 6, 5, 7, 2, 8, 1,
  8, 6, 9, 5, 4, 2, 1, 7, 3,
  1, 4, 3, 7, 8, 6, 5, 9, 2,
  5, 2, 7, 3, 9, 1, 8, 4, 6,
  6, 7, 2, 4, 1, 5, 9, 3, 8,
  4, 9, 8, 2, 6, 3, 7, 1, 5,
  3, 5, 1, 8, 7, 9, 6, 2, 4]

// En modificado en principio se va a colocar el sudoku original pero este
// array es el que va a ir modificándose para generar el sudoku aleatorio.
const modificado = [
  2, 1, 5, 9, 3, 8, 4, 6, 7,
  7, 8, 6, 1, 2, 4, 3, 5, 9,
  9, 3, 4, 6, 5, 7, 2, 8, 1,
  8, 6, 9, 5, 4, 2, 1, 7, 3,
  1, 4, 3, 7, 8, 6, 5, 9, 2,
  5, 2, 7, 3, 9, 1, 8, 4, 6,
  6, 7, 2, 4, 1, 5, 9, 3, 8,
  4, 9, 8, 2, 6, 3, 7, 1, 5,
  3, 5, 1, 8, 7, 9, 6, 2, 4]

const sudokuSize = 9

// La función generaSudoku realiza todo el trabajo de generación del sudoku
function generaSudoku() {
  let salida, j;
  let pos = 0;

  //En este primer bucle se muestra en la página web el sudoku original
  //Se va recorriendo el array de 9 en 9 posiciones para ir presentando el sudoku en la web
  //dentro del párrafo con id="sudokuOrig"
  for (let i = 0; i < sudokuSize; i++) {
    salida = "";
    for (j = 0; j < sudokuSize; j++) {
      pos = sudokuSize * i + j;
      salida += original[pos] + " ";
    }
    const sudokuOrig = document.getElementById("sudokuOrig")
    sudokuOrig.innerHTML = sudokuOrig.innerHTML + salida + "<br>"
  }

  // En las siguientes 4 líneas es donde se van cambiando las
  // filas y columnas para hacer el sudoku lo más aleatorio posible.
  cambiaColumnas();
  cambiaFilas();
  cambiaColumnas();
  cambiaFilas();

  //Cuantas más llamadas se hagan a las funciones cambiaColumnas() y cambiaFilas(), más aleatorio será el sudoku.
  //Se pueden invocar estas funciones cuantas veces se quiera.

  //En este primer bucle se muestra en la página web el sudoku generado
  //Se va recorriendo el array de 9 en 9 posiciones para ir presentando el sudoku en la web
  //dentro del párrafo con id="sudokuAleat"
  pos = 0;
  for (let i = 0; i < sudokuSize; i++) {
    salida = "";
    for (j = 0; j < sudokuSize; j++) {
      pos = sudokuSize * i + j;
      salida += modificado[pos] + " ";
    }
    const sudokuAleat = document.getElementById("sudokuAleat")
    sudokuAleat.innerHTML = sudokuAleat.innerHTML + salida + "<br>";
  }
}

// La función aleatorio genera un número aleatorio entre min y max
function aleatorio(min, max) {
  let horquilla = max - min;
  let aleatorio = Math.round(Math.random() * horquilla) + min;
  return aleatorio;
}

//La función cambiaColumnas() intercambia columnas de cada grupo de manera aleatoria.
function cambiaColumnas() {
  let pos = 0, aux;
  // En este primer bucle se cambian las columnas del grupo 1
  let columnaA = aleatorio(0, 2) + pos;
  let columnaB = aleatorio(0, 2) + pos;

  // si las columnas son iguales, vuelve a generarlas
  while (columnaA == columnaB) {
    columnaA = aleatorio(0, 2) + pos;
    columnaB = aleatorio(0, 2) + pos;
  }
  // columnaA y columnaB contienen el valor de las columnas a intercambiar.
  // Ambas variables contendrán un valor aleatorio entre 0 y 2.

  for (let i = 0; i < sudokuSize; i++) {
    aux = modificado[columnaA];
    modificado[columnaA] = modificado[columnaB];
    modificado[columnaB] = aux;
    //En las tres líneas anteriores se intercambian los valores
    columnaA += sudokuSize;
    columnaB += sudokuSize;
    // hay que saltar 9 porque el siguiente elemento de la columna
    // está 9 posiciones más adelante en el array
  }

  pos = 3;
  // En este primer bucle se cambian las columnas del grupo 1
  columnaA = aleatorio(0, 2) + pos;
  columnaB = aleatorio(0, 2) + pos;
  // si las columnas son iguales, vuelve a generarlas
  while (columnaA == columnaB) {
    columnaA = aleatorio(0, 2) + pos;
    columnaB = aleatorio(0, 2) + pos;
  }
  // columnaA y columnaB contienen el valor de las columnas a intercambiar.
  // Ambas variables contendrán un valor aleatorio entre 3 y 5.
  for (let i = 0; i < sudokuSize; i++) {
    aux = modificado[columnaA];
    modificado[columnaA] = modificado[columnaB];
    modificado[columnaB] = aux;
    columnaA += sudokuSize;
    columnaB += sudokuSize;
  }

  pos = 6;
  // En este primer bucle se cambian las columnas del grupo 1
  columnaA = aleatorio(0, 2) + pos;
  columnaB = aleatorio(0, 2) + pos;
  // si las columnas son iguales, vuelve a generarlas
  while (columnaA == columnaB) {
    columnaA = aleatorio(0, 2) + pos;
    columnaB = aleatorio(0, 2) + pos;
  }
  // columnaA y columnaB contienen el valor de las columnas a intercambiar.
  // Ambas variables contendrán un valor aleatorio entre 6 y 8.
  for (let i = 0; i < sudokuSize; i++) {
    aux = modificado[columnaA];
    modificado[columnaA] = modificado[columnaB];
    modificado[columnaB] = aux;
    columnaA += sudokuSize;
    columnaB += sudokuSize;
  }
}

//La función cambiaFilas() intercambia filas de cada grupo de manera aleatoria.
function cambiaFilas() {
  let pos = 0, aux;
  let filaA = sudokuSize * aleatorio(0, 2) + pos;
  let filaB = sudokuSize * aleatorio(0, 2) + pos;

  // si las filas son iguales, vuelve a generarlas
  while (filaA == filaB) {
    filaA = sudokuSize * aleatorio(0, 2) + pos;
    filaB = sudokuSize * aleatorio(0, 2) + pos;
  }
  //En filaA y filaB se almacenan los primeros elementos de cada fila a intercambiar.
  //En este caso las filas a intercambiar serán de la 0 a la 2.
  for (let i = 0; i < sudokuSize; i++) {
    aux = modificado[filaA];
    modificado[filaA] = modificado[filaB];
    modificado[filaB] = aux;
    filaA += 1;
    filaB += 1;
    // como los elementos de una fila están consecutivos solamente
    // hay que incrementar en una unidad la posición.
  }

  pos = 27;
  // Las siguientes tres líneas comienzan a partir de la posición 27.
  filaA = sudokuSize * aleatorio(0, 2) + pos;
  filaB = sudokuSize * aleatorio(0, 2) + pos;
  // si las filas son iguales, vuelve a generarlas
  while (filaA == filaB) {
    filaA = sudokuSize * aleatorio(0, 2) + pos;
    filaB = sudokuSize * aleatorio(0, 2) + pos;
  }
  for (let i = 0; i < sudokuSize; i++) {
    aux = modificado[filaA];
    modificado[filaA] = modificado[filaB];
    modificado[filaB] = aux;
    filaA += 1;
    filaB += 1;
  }

  pos = 54;
  // Las siguientes tres líneas comienzan a partir de la posición 54.
  filaA = sudokuSize * aleatorio(0, 2) + pos;
  filaB = sudokuSize * aleatorio(0, 2) + pos;
  // si las filas son iguales, vuelve a generarlas
  while (filaA == filaB) {
    filaA = sudokuSize * aleatorio(0, 2) + pos;
    filaB = sudokuSize * aleatorio(0, 2) + pos;
  }
  for (let i = 0; i < sudokuSize; i++) {
    aux = modificado[filaA];
    modificado[filaA] = modificado[filaB];
    modificado[filaB] = aux;
    filaA += 1;
    filaB += 1;
  }
}

// Por último se llama a la función generaSudoku() para que se ejecute el script y se generen los sudokus.
generaSudoku();