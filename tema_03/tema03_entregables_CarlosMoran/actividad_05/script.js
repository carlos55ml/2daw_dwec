const nombreInput = document.getElementById('nombreInput')
const makeHistoryBtn = document.getElementById('makeHistory')

const resultBox = document.getElementById('result')

function genRand(min, max) {
  let horquilla = max - min;
  let aleatorio = Math.round(Math.random() * horquilla) + min;
  return aleatorio;
}

function coolHistory(nombre, genero) {
  var trato = []
  if (genero == "h") {
    trato = ["el", "un", "hombre", "lo", "o"]
  } else {
    trato = ["ella", "una", "mujer", "la", "a"]
  }
  var presentacion = [
    `${nombre} era ${trato[1]} ${trato[2]} que se dedicaba a la informatica. `,
    `${nombre} era ${trato[1]} ${trato[2]} que se dedicaba a la pintura. `,
    `${nombre} era ${trato[1]} ${trato[2]} que se dedicaba a la costura. `
  ]
  var plot = [
    `Un dia decidio dejar su trabajo para dedicarse a su verdadera vocacion: `,
    `No estaba muy content${trato[4]} con su trabajo, asi que decidio dedicarse a `
  ]
  var plotTwist = [
    "la prostitucion. ",
    "el baile. ",
    "la hosteleria. ",
    "streamer a tiempo completo. "
  ]
  var desenlace = [
    "Al final, decidio que ese no era su sitio, y acabo debajo de un puente.",
    `Fue entonces cuando ${nombre} sintio que encajaba, y se dedicoa a eso toda su vida.`,
    `${trato[3]} acabo persiguiendo la interpol y ${nombre} tuvo que refugiarse en Turquia.`
  ]

  resultBox.innerHTML = "" + presentacion[genRand(0, presentacion.length-1)] + plot[genRand(0, plot.length-1)] + plotTwist[genRand(0, plotTwist.length-1)] + desenlace[genRand(0, desenlace.length-1)]

}

makeHistoryBtn.onclick = () => {
  var gender = document.querySelector('input[name="genero"]:checked').value;
  console.log(gender)
  coolHistory(nombreInput.value, gender)
}