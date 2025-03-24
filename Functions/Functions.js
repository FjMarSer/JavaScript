
//Dos funciones de números aleatorios uno con repetidos y otro sin repetidos.

function generarNumAleatorios(min = 1, max = 50, cantidad = 5){
    let numbers = [];
    while (numbers.length < cantidad){
        let num = Math.floor(Math.random() * (- min + max + 1) - min);
        numbers.push(num);
    }
    return numbers;
}

function generarNumAleatoriosSinRep(min = 1, max = 50, cantidad = 5){
   let numbers = [];
   while (numbers.length < cantidad){
    let num = Math.floor(Math.random() * (- min + max + 1) - min);
    if(!numbers.includes(num)) {
        numbers.push(num);
    }
   }
   return numbers;
}

//comprobar números (si son números,si son positivos, cantidad no mayor a max menos min, max menor que min).

//generar 5 imagenes al azar.

const imagenes = [
    "img1.jpeg", "img2.jpeg", "img3.jpeg", "img4.jpeg", "img5.jpeg", 
    "img6.jpeg", "img7.jpeg", "img8.jpeg", "img9.jpeg", "img10.jpeg"
];

/*
 @param imagenes
 @return imagenesSelecionadas
*/

function generarImagenes(imagenes) {
    let imagenesSeleccionadas = [];

    while (imagenesSeleccionadas.length < 5) {
        let indiceAleatorio = Math.floor(Math.random() * imagenes.length);
        imagenesSeleccionadas.push(imagenes[indiceAleatorio])
    }
    
    return imagenesSeleccionadas;
}

console.log(generarImagenes(imagenes));
console.log(generarNumAleatorios(2,10,5));
console.log(generarNumAleatoriosSinRep(2,10,5));
