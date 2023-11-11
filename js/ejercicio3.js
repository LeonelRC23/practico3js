function lanzarDado() {
    return Math.floor(Math.random() * 6) + 1;
  }
  
  function lanzarDosDados() {
    const dado1 = lanzarDado();
    const dado2 = lanzarDado();
    return dado1 + dado2;
  }
  
  const frecuenciaSumas = Array(11).fill(0);
  
  for (let i = 0; i < 50; i++) {
    const suma = lanzarDosDados();
    frecuenciaSumas[suma - 2]++;
  }
  
  document.write("<table>");
  document.write("<tr><th>Suma</th><th>Frecuencia</th></tr>");
  for (let i = 0; i < frecuenciaSumas.length; i++) {
    document.write(`<tr><td>${i + 2}</td><td>${frecuenciaSumas[i]}</td></tr>`);
  }
  document.write("</table>");
  