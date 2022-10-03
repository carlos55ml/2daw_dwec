const correctButtons = document.getElementsByClassName("correctButton")
const wrongButtons = document.getElementsByClassName("wrongButton")

const preguntas = document.getElementsByClassName("preguntas")

function correct(qId) {
    preguntas[qId].style.backgroundColor = "green";
}

function wrong(qId) {
    preguntas[qId].style.backgroundColor = "red";
}

for (let i = 0; i < correctButtons.length; i++) {
    correctButtons[i].addEventListener("click", function() {
        console.log("CORRECT! " + i)
        correct(i)
    })
}
for (let i = 0; i < wrongButtons.length; i++) {
    wrongButtons[i].addEventListener("click", function() {
        console.log("WRONG! " + i)
        wrong(i)
    })
}