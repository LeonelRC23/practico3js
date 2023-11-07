const numeros = [];
const numerosNew = [];
const cantidad = parseInt(prompt(`¿Cuantos números desea ingresar?`));

function ingreso(){
    for(let i = 0; i < cantidad; i++){
        numeros.push(parseInt(prompt(`Ingrese un número: `)));
    }
}

function esPar(){
    for(let i = 0; i < cantidad; i++){
        if(numeros[i] % 2 === 0){
            numerosNew.push(numeros[i]);
        }
    }
}

function mostrar(){
    for(let i = 0; i < numerosNew.length; i++){
        document.write(`[${numerosNew[i]}]`);
    }
}

ingreso();
esPar();
document.write(`El arreglo resultante es:`);
mostrar();




