let dato, resultado;
//Definimos las variables locales(LET) dato y resultado
val1 = window.prompt("Introduce tu nombre", "..."); 
//Solicita al usuario ingresar el nombre y asignarlo a la variable val1
val2 = window.prompt("Introduce tu apellido", "...");  
//Solicita al usuario ingresar el apellido y asignarlo a la variable val2
resultado = `Concatenado tu nombre y apellido es: ${val1} ${val2} ` ;
//La variable resultado toma el valor de la cadena de texto concatenada al contenido de val1 y val2
document.write(resultado); 
//Nos imprime en pantalla el valor previo almacenado en la variable resultado.