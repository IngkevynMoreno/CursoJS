var elementos = ["Progamar", "en", "JavaScript", "es", "divertido"];
var parrafo = document.getElementById("parrafo1");

function mostrarElementos(){
  var texto = " ";
  for(var i = 0; i < elementos.length; i++){
    texto += "Elemento " + i + ": " + elementos[i] + "<br>";
  }
  parrafo.innerHTML = texto;
};