const ciudades = [];
let ciudad = "";



function longitud(){
    return ciudades.length;
}

function mostrarTres(){
    document.write(`<ul>`);
    document.write(`<li>Elemento 1er posicion: ${ciudades[0]}</li>`);
    document.write(`<li>Elemento 3er posicion: ${ciudades[2]}</li>`);
    document.write(`<li>Elemento ultima posicion: ${ciudades[ciudades.length - 1]}</li>`);
    document.write(`</ul>`);
} 

function agregarParis(){
    ciudades.push("París");
}

function mostrarSegundo(){
    document.write(`<p>El elemento de la segunda posicion es ${ciudades[1]}</p>`);
}

function sustitucion(){
    ciudades[1] = "Barcelona";
    document.write(`<p>Se sustituyó el segundo elemento por la ciudad "Barcelona".</p>`);
}


while(ciudad !== null){
    ciudad = prompt(`Ingrese el nombre de una ciudad para agregarla al arreglo: `);
    if(ciudad === null){
        break;
    } else {
        ciudades.push(ciudad);
    }
}
document.write(`<p>La longitud del arreglo es de ${longitud()} elementos.</p>`);
mostrarTres();
agregarParis();
mostrarSegundo();
sustitucion();

document.write(`<h1>Arreglo de ciudades</h1>`);
document.write(`<ul>`);
for(let i = 0; i <= ciudades.length - 1; i++){
    document.write(`<li>${ciudades[i]}</li>`) 
}
document.write(`</ul>`);







