const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

document.write(`<h2>Lista de Meses</h2>`);
document.write(`<ul>`);
for(let i = 0; i < 12; i++){
    document.write(`<li>${meses[i]}</li>`);
}
document.write(`</ul>`);