var elementos = ["Progamar", "en", "JavaScript", "es", "divertido"];
var parrafo = document.getElementById("parrafo1");

function mostrarElementos(){
  var texto = " ";
  var i = 0;
  while(i < elementos.length){
    texto += "Elemento " + i + ": " + elementos[i] + "<br>";
    i++;
  }
  parrafo.innerHTML = texto;
};