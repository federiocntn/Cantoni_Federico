function factorial(numero) {
    var resultado = 1;
  
    for (var i = numero; i >= 1; i--) {
      resultado *= i;
    }
  
    return resultado;
  }
  
numero = prompt("ingrese un numero entero: ");
factorialNumero = factorial(numero);
  
console.log(numero + "! = " + factorialNumero);
alert("El factorial del numero: " + numero + "! = " + factorialNumero);
