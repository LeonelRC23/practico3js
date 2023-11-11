function analizarCadena(cadena) {
  if (cadena === cadena.toUpperCase()) {
    return "La cadena está formada solo por mayúsculas.";
  } else if (cadena === cadena.toLowerCase()) {
    return "La cadena está formada solo por minúsculas.";
  } else {
    return "La cadena es una mezcla de mayúsculas y minúsculas.";
  }
}



const cadenaTexto = prompt(`Ingrese una cadena de texto`);
document.write(analizarCadena(cadenaTexto));