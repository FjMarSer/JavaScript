
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

//comprobar números (si son números,si son positivos, cantidad no mayor a max menos min, max menor que min).


/*
 @param [Array] imagenes
 @return [Array] imagenesSelecionadas
*/

function generarImagenes(imagenes) {
    let imagenesSeleccionadas = new Set();

    while (imagenesSeleccionadas.size < 5) {
        let indiceAleatorio = Math.floor(Math.random() * imagenes.length);
        imagenesSeleccionadas.add(imagenes[indiceAleatorio]);
    }

    return Array.from(imagenesSeleccionadas);
}

function seleccionarImagen(imagenes, indices) {
    if (!Array.isArray(indices) || indices.some(indice => indice < 0 || indice >= imagenes.length)) {
        throw new Error("Uno o más índices están fuera del rango del array de imágenes.");
    }

    const imagenesSeleccionadas = indices.map(indice => imagenes[indice]);
    return imagenesSeleccionadas;
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

