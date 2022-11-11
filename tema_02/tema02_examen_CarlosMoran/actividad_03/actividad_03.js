const resultDiv = document.getElementById("result");

var dato = "Ronaldo " + 5 + 5;
var dato2 = 5 + 5 + " Ronaldo";

resultDiv.innerHTML = `<b>Dato ("Ronaldo " + 5 + 5):</b> ${dato} <br> <b>Dato2 (5 + 5 + " Ronaldo"):</b> ${dato2}`;
