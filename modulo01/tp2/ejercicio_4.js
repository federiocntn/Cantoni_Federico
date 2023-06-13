function tipodenumero(numero) {
   if (numero %2 === 0){
      return "Par"
   }
   else {
      return "Impar"
   }

}

numero = prompt("Ingrese un numero entero:");
resultado = tipodenumero(numero);
console.log("El número " + numero + " es " + resultado);
alert("El numero ingresado es: "+resultado);