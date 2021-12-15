//aca toda las Varibles
//para calculos
var numUno = parseInt(prompt("Ingrese el 1° numero > 0: "));
var numDos = parseInt(prompt("Ingrese el 2° numero > 0: "));

var suma = (numUno + numDos);
var resta = (numUno - numDos);
var mul = (numUno * numDos);
var div = (numUno / numDos);
var mod = (numUno % numDos);

//aquí creamos nuestro div contenedor
document.write("<div class='container'>");
document.write("<h1>Ejercicio Operaciones</h1>");
document.write("<h3>Suma: " + suma + "</h3>");
document.write("<h3>Resta: " + resta + "</h3>");
document.write("<h3>Multiplicación: " + mul + "</h3>");
document.write("<h3>División: " + div + "</h3>");
document.write("<h3>Módulo: " + mod + "</h3>");
document.write("</div>");

//Ejercicio de Transformacion de temperatura
var gradoskel = parseInt(prompt("Ingrese la temperatura en grados Celsius para convertir a Kelvin: "));
var gradosfah = parseInt(prompt("Ingrese la temperatura en grados Celsius para convertir a Fahrenheit: "));

var k = (gradoskel + 273.15);
var f = ((gradoskel * 9 / 5) + 32);
//aquí creamos nuestro div contenedor
document.write("<div class='container'>");
document.write("<h1>Ejercicio Temperatura</h1>");
document.write("<h3>Kelvin: " + k + "</h3>");
document.write("<h3>Fahrenheit: " + f + "</h3>");
document.write("</div>");

//Ejercico Cantidad de indicamos
var numDia = parseInt(prompt("Ingrese los dias a transformar en año/semana/dias: "));

document.write("<div class='container'>");

document.write("</div>");


//Ejercico Suma y Promedio
var num1 = parseInt(prompt("Ingrese el 1° Numero: "));
var num2 = parseInt(prompt("Ingrese el 2° Numero: "));
var num3 = parseInt(prompt("Ingrese el 3° Numero: "));
var num4 = parseInt(prompt("Ingrese el 4° Numero: "));
var num5 = parseInt(prompt("Ingrese el 5° Numero: "));

var sm = (num1 + num2 + num3 + num4 + num5);
var pr = (sm/5)
document.write("<div class='container'>");
document.write("<h1>Suma total:" + sm + "</h1>");
document.write("<h1>Promedio total:" + pr + "</h1>");
document.write("</div>");
