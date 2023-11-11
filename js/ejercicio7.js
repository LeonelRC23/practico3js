
function mostrarTablaMultiplicar(numero) {
    document.write(`<p>Tabla de multiplicar del ${numero}:</p>`);
    document.write("<ul>");
    for (let i = 1; i <= 10; i++) {
      document.write(`<li>${numero} x ${i} = ${numero * i}</li>`);
    }
    document.write("</ul>");
  }

  const numeroIngresado = prompt("Ingrese un número para ver su tabla de multiplicar:");
  
  const numero = parseFloat(numeroIngresado);
  
  if (!isNaN(numero)) {
    mostrarTablaMultiplicar(numero);
  } else {
    alert("Por favor, ingrese un número válido.");
  }
  