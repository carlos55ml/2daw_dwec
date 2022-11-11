const desplInput = document.getElementById('desplInput')
const resultBox = document.getElementById('result')

const limit = 6

desplInput.onchange = () => {
  resultBox.innerHTML = ""
  const desplIzq = document.getElementById('desplInput').value

  for (let i = 0; i < limit; i++) {

    let asterisco = ""
    let espacioHTML = ""

    espacioHTML += "&nbsp&nbsp".repeat(desplIzq);
    // Pintamos primero los espacios
    for (let k = 0; k < limit - i - 1; k++) {
      espacioHTML += "&nbsp&nbsp"
    }

    // Luego pintamos el interior del rombo
    for (let j = 1; j <= 2 * i + 1; j++) {
      // Si son los bordes, pintamos asteriscos. Sino pintamos un espacio
      if (j == 1 || j == 2 * i + 1)
        asterisco += "*"
      else
        asterisco += "&nbsp&nbsp"
    }

    resultBox.innerHTML += espacioHTML + asterisco + "<br>"
  }

  for (let i = limit - 2; i >= 0; i--) {
    let asterisco = ""
    let espacioHTML = ""

    espacioHTML += "&nbsp&nbsp".repeat(desplIzq);

    // Pintamos primero los espacios
    for (let k = 0; k < limit - i - 1; k++) {
      espacioHTML += "&nbsp&nbsp"
    }

    // Luego pintamos el interior del rombo
    for (let j = 1; j <= 2 * i + 1; j++) {
      // Si son los bordes, pintamos asteriscos. Sino pintamos un espacio
      if (j == 1 || j == 2 * i + 1)
        asterisco += "*"
      else
        asterisco += "&nbsp&nbsp"
    }

    resultBox.innerHTML += espacioHTML + asterisco + "<br>"
}

  console.log(limit)
}