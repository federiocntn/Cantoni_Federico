function analizarCadena(cadena) {
  if (cadena === cadena.toUpperCase()) {
    console.log("La cadena está formada solo por mayúsculas.");
    alert("La cadena está formada solo por mayúsculas.");
  }
  else if (cadena === cadena.toLowerCase()) {
    console.log("La cadena está formada solo por minúsculas.");
    alert("La cadena está formada solo por minúsculas.");
  }
  else {
    console.log("La cadena está formada por una mezcla de mayúsculas y minúsculas.");
    alert("La cadena está formada por una mezcla de mayúsculas y minúsculas.");
  }
}

texto=prompt("Ingrese un texto")
analizarCadena(texto)