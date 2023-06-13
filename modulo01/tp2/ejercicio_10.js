
function obtenerCantidadDias(mes) {
  // Verificar si el mes ingresado es del 1 al 12
  if (mes >= 1 && mes <= 12) {
    // Array con la cantidad de días de cada mes (teniendo en cuenta si es un año bisiesto)
    const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    // Obtener la cantidad de días correspondiente al mes ingresado
    const cantidadDias = diasPorMes[mes - 1]; //-1 debido a que pa posición del array que inicia en 0
    
    // Devolver la cantidad de días
    return cantidadDias;
  } else {
    // Si el mes no es válido, devuelve error
    return 'Error!';
  }
}

NroMes = prompt("Ingrese el nro del mes")
console.log(obtenerCantidadDias(NroMes));
alert("El mes ingresado tiene: " + obtenerCantidadDias(NroMes) + " días");
