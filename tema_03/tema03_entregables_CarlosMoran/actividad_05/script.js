const nombreInput = document.getElementById('nombreInput')
const genderInput = document.getElementsByName('genero')
const makeHistoryBtn = document.getElementById('makeHistory')

const resultBox = document.getElementById('result')

function genRand(ini, limit) {
  return Math.random(ini, limit)
}

function coolHistory(nombre, genero) {
  var trato = []
  if (genero == 'm') {
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

  resultBox.innerHTML = presentacion[genRand(0, presentacion.length-1)] + plot[genRand(0, plot.length-1)] + plotTwist[genRand(0, plotTwist.length-1)] + desenlace[genRand(0, desenlace.length-1)]

}

makeHistoryBtn.onclick = () => {
  coolHistory(nombreInput.value, genderInput.value)
}