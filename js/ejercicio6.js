function perimetro(ladoA, ladoB){
    return 2*(ladoA + ladoB);
}



const ladoA = parseInt(prompt(`Ingrese el lado A de un rectangulo`));
const ladoB = parseInt(prompt(`Ingrese el lado B de un rectangulo`));
document.write(`El perimetro de un rectangulo de ${ladoA} cm y ${ladoB} cm es ${perimetro(ladoA, ladoB)} cm`);