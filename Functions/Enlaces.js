document.addEventListener("DOMContentLoaded",() => {

    const almacenEnlaces = [];
    const inputEnlace = document.getElementById("inputEnlace");
    const btnEliminar = document.getElementById("btnEliminar");
    const listaEnlaces = document.getElementById("listaEnlaces");
    const formularioGestion = document.getElementById("formularioGestion");


    formularioGestion.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
        agregarEnlace();
    });

    btnEliminar.addEventListener("click", eliminarEnlace);


    function agregarEnlace() {
        const enlace = inputEnlace.value.trim();
        if (enlace) {
            almacenEnlaces.push(enlace);
            listarEnlaces();
            inputEnlace.value = "";
        }else {
            alert("Por favor, introduce un enlace válido."); // Mostrar un mensaje si el input está vacío
        }
    }

    // Elimino el ultimo hueco del array y llamo a listarEnlaces

    function eliminarEnlace() {
        if (almacenEnlaces.length > 0) {
            almacenEnlaces.pop();
            listarEnlaces();
        }
    }

    //Actualiza el ul, primero lo borra y luego lo rellena con la informacion guardada en el array

    function listarEnlaces() {
        listaEnlaces.innerHTML = "";
        almacenEnlaces.forEach((enlace, index) => {
            const li = document.createElement("li");
            li.textContent = `${enlace}`;
            listaEnlaces.appendChild(li);
        });
    }
});