var Arreglo = ["hola", "mundo", 7];
var ArregloVacio = [];

Arreglo[0] = "Holi";
Arreglo[1] = Arreglo[1] + "!";
Arreglo[2] = 24/4;

document.writeln(Arreglo[Arreglo.length - 1] + "<br>");

for (let index = 0; index < Arreglo.length; index++) {
    document.writeln(Arreglo[index]);
}
document.writeln("<br>");
document.writeln(Arreglo.pop()+ "<br>");

var miArreglo = ["Hola", "Mundo", 7];
miArreglo.push("nuevo"); 

var miArreglo = ["Hola", "Mundo", 7];
miArreglo.push("nuevo"); //El arreglo ahora es ["Hola", "Mundo", 7, "nuevo"]


var miArreglo = ["Hola", "Mundo", 7];
miArreglo.push("nuevo"); //El arreglo ahora es ["Hola", "Mundo", 7, "nuevo"]

var miArreglo = ["Hola", "Mundo", 7];
miArreglo.unshift(5); //[5, "Hola", "Mundo", 7];

var miArreglo = ["Hola", "Mundo", 7];
var borrados = miArreglo.splice(1, 2, 8, "world"); //["Hola", 8, "world"]

var miArreglo = ["Hola", "Mundo", 7];
miArreglo.splice(1, 1); //miArreglo = ["Hola", 7]

var miArreglo = ["Hola", "Mundo", 7];
var miArreglo2 = miArreglo.slice(1, 2); // miarreglo2 = ["Mundo"];
var miArreglo3 = miArreglo.slice(0, 2); // miarreglo3 = ["Hola", "Mundo"];
var miArreglo4 = miArreglo.slice(1); // miarreglo4 = ["Mundo", 7];