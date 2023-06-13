/*
Escribir una función que reciba un texto y lo devuelva al revés.
*/

function invertirTexto(texto) {
    textoInvertido = "";
  
    for (i = texto.length - 1; i >= 0; i--) {
      textoInvertido += texto.charAt(i);
    }
  
    return textoInvertido;
  }
texto=prompt("Ingrese un texto");
texto_invertido=invertirTexto(texto);
console.log(texto_invertido);
alert(texto_invertido);