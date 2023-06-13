/*Declarar un array llamado “meses” y que tenga guardado los
meses del año. Luego el usuario debe poder ingresar en el navegador un número de 1 al 12 y este
le devolverá el nombre del mes. Por ejemplo escribe 5 debe devolver el mes mayo.*/

var meses = ["","Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
var mes=null;
mes = window.prompt("Introduce el número del mes", "...");5
if (mes<=0 || mes>12){
    alert("El numero no es correcto!");
}


document.writeln("El mes ingresado es: "+meses[mes]);

//Quise aplicar unas prácticas. Falta afinar :D