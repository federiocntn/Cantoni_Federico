// Función para determinar si un caracter es una vocal
function SiesVocal(caracter) {
vocales = ['a', 'e', 'i', 'o', 'u'];
return vocales.includes(caracter.toLowerCase());
}

// Función para encontrar la posición de la primera vocal en un texto
function encontrarPrimeraVocal(texto) {
for (let i = 0; i < texto.length; i++) {
    if (SiesVocal(texto[i])) {
    return i + 1;
    }
}
  return -1; // Retornar -1 si no se encontró ninguna vocal
}

// Solicitar al usuario ingresar un texto por teclado
texto = prompt("Ingrese un texto");

// Encontrar la posición de la primera vocal
posicion = encontrarPrimeraVocal(texto);

// Mostrar el resultado por consola y alerta
if (posicion !== -1) {
const vocal = texto[posicion - 1];
console.log(`La primer vocal encontrada es "${vocal}" en la posición Nº${posicion}`);
alert(`La primer vocal encontrada es "${vocal}" en la posición Nº${posicion}`);
} else {
console.log('No se encontró ninguna vocal en el texto.');
alert("No se encontró ninguna vocal en el texto.");
}
