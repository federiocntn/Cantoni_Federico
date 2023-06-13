
//Determinar cuál de los “elementos de texto” es mayor,
//es decir el que contenga más letras.

// var valores = [true, false, 2, "hola", "mundo", 3, "char"];

// var texto_mas_largo = "";
// for (var i = 0; i < valores.length; i++) {
//   if (typeof valores[i] === "string") {
//     if (valores[i].length > texto_mas_largo.length) {
//       texto_mas_largo = valores[i];
//     }
//   }
// }
// console.log("El elemento de texto más largo es: " + texto_mas_largo);




//Imprimir estos elementos de menor a mayor cantidad de letras.

// var valores = [true, false, 2, "hola", "mundo", 3, "char"];

// var textos = [];
// for (var i = 0; i < valores.length; i++) {
//   if (typeof valores[i] === "string") {
//     textos.push(valores[i]);
//   }
// }

// textos.sort(function(a, b) {
//   return a.length - b.length;
// });

// console.log("Elementos de menor a mayor cantidad de letras:");
// for (var i = 0; i < textos.length; i++) {
//   console.log(textos[i]);
// }


/*Determinar el resultado de las cuatro operaciones matemáticas básicas (suma, resta,
multiplicación y división) realizadas con los dos elementos numéricos
*/
// var valores = [true, false, 2, "hola", "mundo", 3, "char"];

// var num1 = 0;
// var num2 = 0;
// for (var i = 0; i < valores.length; i++) {
//   if (typeof valores[i] === "number") {
//     if (num1 === 0) {
//       num1 = valores[i];
//     } else {
//       num2 = valores[i];
//       break;
//     }
//   }
// }

// console.log("Suma: " + (num1 + num2));
// console.log("Resta: " + (num1 - num2));
// console.log("Multiplicación: " + (num1 * num2));
// console.log("División: " + (num1 / num2));
