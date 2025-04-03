document.addEventListener("DOMContentLoaded", clickImagenesSeleccionada);

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


