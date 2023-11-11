
function parOimpar(num){
    if(num % 2 === 0){
        document.write(`El número ingresado es par.`);
    } else {
        document.write(`El número ingresado es impar.`);
    }
}

const numero = parseInt(prompt(`Ingrese un número`));
parOimpar(numero);