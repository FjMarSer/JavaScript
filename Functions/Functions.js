
/*
 @param min = numero minimo del aleatorio
 @param max = numero maximo del aleatorio
 @param cantidad = cantidad de numeros que queremos
 @return [Array] numerosAleatorios
 */
function generarNumAleatoriosSinRep(min = 1, max = 50, cantidad = 5) {
    if (max - min + 1 < cantidad) {
        throw new Error("El rango no es suficiente para generar la cantidad de números únicos solicitados.");
    }

    const numerosAleatorios = new Set();
    while (numerosAleatorios.size < cantidad) {
        let num = Math.floor(Math.random() * (max - min + 1)) + min;
        numerosAleatorios.add(num);
    }

    return Array.from(numerosAleatorios);
}

/*
   @param [Array] imagenes
   @param [Array] numerosAleatorios
   @return [Array] imagenesSelecionadas
 */
function generarImagenes(imagenes, numerosAleatorios) {
    // Filtrar las imágenes en base a los índices en numerosAleatorios

    return numerosAleatorios.map(indice => imagenes[indice]);
}

//comprobar números (si son números,si son positivos, cantidad no mayor a max menos min, max menor que min).

/*
   @param src de la imagen
   @return imagen
 */
function mostrarImagen(src) {
    let nodoImagen = document.createElement("img");
    nodoImagen.setAttribute("src", src);
    return nodoImagen;
}

/*
    @param
    @return contenedor
 */

function crearContenedor(){

}


function clickImagenesSeleccionada() {
    const imagenes = Array.from(document.getElementsByTagName("img"));
    imagenes.forEach((imagen) => {
        imagen.addEventListener("click", () => agrandarImagenesSeleccionada(imagen));
    });
}

function agrandarImagenesSeleccionada(imagenSeleccionada) {
    let contenedor = document.getElementById("contenedor");
    if (!contenedor) {
        contenedor = document.createElement("div");
        contenedor.id = "contenedor";
        contenedor.classList.add("visor");
        document.body.appendChild(contenedor);
    }
    contenedor.innerHTML = " ";
    const imagenMostrada = document.createElement("img");
    imagenMostrada.src = imagenSeleccionada.src;
    contenedor.appendChild(imagenMostrada);
}

