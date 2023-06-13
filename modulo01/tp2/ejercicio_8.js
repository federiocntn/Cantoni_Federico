function generarNumerosAleatorios() {
    var numeros = [];
    
    // Generar los números aleatorios sin repeticiones
    while (numeros.length < 100) {
      var numero = Math.floor(Math.random() * 100) + 1;
    if (!numeros.includes(numero)) {
        numeros.push(numero);
    }
    }
    
    // Imprimir los números en pantalla
    numeros.forEach(function(numero) {
    document.write(numero + '<br>');
    });
}

// Llamar a la función para generar los números y mostrarlos en pantalla
generarNumerosAleatorios();
