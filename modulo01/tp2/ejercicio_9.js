// Función para validar que un número sea natural (menor a 11)
function esNumeroNatural(numero) {
  return numero >= 0 && numero <= 10 && Number.isInteger(numero);
}

// Función para calcular el promedio de un arreglo de notas
function calcularPromedio(notas) {
  const totalNotas = notas.length;
  const sumaNotas = notas.reduce((suma, nota) => suma + nota, 0);
  return sumaNotas / totalNotas;
}

// Función para determinar el estado del alumno según el promedio
function determinarEstado(promedio) {
  if (promedio <= 5) {
    return 'Reprobado';
  } else if (promedio >= 6 && promedio <= 8) {
    return 'Aprobado';
  } else {
    return 'Sobresaliente';
  }
}

// Función principal para ingresar las notas, calcular el promedio y determinar el estado del alumno
function calcularPromedioYEstado() {
  const notas = [];

  while (true) {
    const nota = parseInt(prompt("Ingrese las notas por materias (-1 para finalizar.)"));

    if (nota === -1) {
      break;
    }

    if (esNumeroNatural(nota)) {
      notas.push(nota);
    } else {
      alert("¡Error! Ingrese un número natural entre 0 y 10.");
    }
  }

  if (notas.length === 0) {
    alert("No se ingresaron notas");
  } else {
    const promedio = calcularPromedio(notas);
    const estado = determinarEstado(promedio);
    alert(`El promedio del alumno es: ${promedio.toFixed(2)}\nEstado: ${estado}`);
  }
}

// Ejecutar la función 
calcularPromedioYEstado();
