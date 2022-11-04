const urlToEncodeInput = document.getElementById('urlToEncodeInput')
const btnEncode = document.getElementById('btnEncode')
const resultEncodeUri = document.getElementById('resultEncodeUri')
const resultadoEncodeUriComponent = document.getElementById('resultadoEncodeUriComponent')

const urlToDecodeInput = document.getElementById('urlToDecodeInput')
const btnDecode = document.getElementById('btnDecode')
const resultDecodeUri = document.getElementById('resultDecodeUri')
const resultadoDecodeUriComponent = document.getElementById('resultadoDecodeUriComponent')

function onEncode(url) {
  resultEncodeUri.innerHTML = encodeURI(url)
  resultadoEncodeUriComponent.innerHTML = encodeURIComponent(url)
}

function onDecode(uri) {
  resultDecodeUri.innerHTML = decodeURI(uri)
  resultadoDecodeUriComponent.innerHTML = decodeURIComponent(uri)
}

btnEncode.onclick = () => {
  var url = urlToEncodeInput.value 
  onEncode(url)
}

btnDecode.onclick = () => {
  var uri = urlToDecodeInput.value 
  onDecode(uri)
}
