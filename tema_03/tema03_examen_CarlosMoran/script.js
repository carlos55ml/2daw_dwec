const listaCompleta = document.getElementById('listaCompleta')
const list = document.querySelector('ul#result');
listaCompleta.innerHTML = ""
list.innerHTML = "";
var equipos = [
'MAN675847583748sjt567654;Manchester United',
'RMD576746573fhdg4737dh4;Real Madrid',
'LIV5hg65hd737456236dch46dg4;Liverpool FC',
'SEV4f65hf75f736463;Sevilla FC',
'BAR5767ghtyfyr4536dh45dg45dg3;Barcelona FC'
];

equipos.forEach(v => {
  var listItem = document.createElement('li')
  listItem.textContent = v
  listaCompleta.appendChild(listItem)
});

equipos.forEach(v => {
  var alias = v.match("(^[A-Z]{3})")[0]
  var name = v.match("(;[a-zA-Z ]*)")[0]
  console.log(alias, name)

})

