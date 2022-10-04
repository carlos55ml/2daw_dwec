const correctButtons = document.getElementsByClassName("correctButton")
const wrongButtons = document.getElementsByClassName("wrongButton")

function correct(qId) {
    const targetQuestion = document.getElementById(qId)
    targetQuestion.style.backgroundColor = "green"
    console.log(qId + " Correcto!")
}

function wrong(qId) {
    const targetQuestion = document.getElementById(qId)
    targetQuestion.style.backgroundColor = "red"
    console.log(qId + " Incorrecto!")
}

for (let i = 0; i < correctButtons.length; i++) {
    correctButtons[i].addEventListener("click", function () {
        correct(correctButtons[i].value)
    })
}

for (let i = 0; i < wrongButtons.length; i++) {
    wrongButtons[i].addEventListener("click", function (){
        wrong(wrongButtons[i].value)
    })
}
