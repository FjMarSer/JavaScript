document.addEventListener("DOMContentLoaded", () => {

const imagenes = [
    'imagenes/img1.jpeg', 'imagenes/img2.jpeg',
    'imagenes/img3.jpeg', 'imagenes/img4.jpeg',
    'imagenes/img5.jpeg', 'imagenes/img6.jpeg',
    'imagenes/img7.jpeg'];

const numerosAleatorios = generarNumAleatoriosSinRep(1, imagenes.length - 1, 3);

const imagenesSeleccionadas = generarImagenes(imagenes, numerosAleatorios);


console.log(numerosAleatorios);

console.log("Imágenes seleccionadas:", imagenesSeleccionadas);


});
// Añadir una funcion para generar numero aleatorio

// Corregir el EjImagenes añadiendo las funciones anteriores.

// El resultado del EjImanges, debe tener 4 funciones. clickImagenesSeleccionada, generarNumeroAleatorioSinRepertir, ponerFoto, mostrarFoto"

