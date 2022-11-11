const numInput = document.getElementById('numInput')
const resultBox = document.getElementById('result')

numInput.onchange = () => {
  const rawvalue = numInput.value
  const limit = rawvalue > 1 ? rawvalue : 1
  var drawing = ""

  var fila = ""
  for (let i = 0; i < limit; i++) {
    /* 0 = limite + i + 1 | < ++
      1..mitad = limite - i | < ++ | ``
      
      */

  }

  console.log(limit)
}