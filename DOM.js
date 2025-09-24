function cambiaTexto(){
  var elem = document.getElementById("rect");
  elem.innerHTML = "Nuevo texto";
};

function cambiaTexto2(){
  var elem = document.getElementById("rect");
  elem.innerHTML = "<a href=\"https://www.google.com\">Google</a>";
};

function regresaTexto(){
  var elem = document.getElementById("rect");
  elem.innerHTML = "Cambiamos el texto con JS";
};
