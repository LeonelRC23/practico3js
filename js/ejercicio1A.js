const numeros = [];
const cantidad = parseInt(prompt(`¿Cuantos números desea ingresar?`));


function ingreso(){
    for(let i = 0; i < cantidad; i++){
        numeros.push(parseInt(prompt(`Ingrese un número: `)));
    }
}

function mayor(){
    let mayor = numeros[0];
    for(let i = 0; i < cantidad; i++){
        Math.max(mayor, numeros[i]);
    }
    return mayor;
}

ingreso();
document.write(`El número mayor de la lista ingresada es ${mayor()}`);


