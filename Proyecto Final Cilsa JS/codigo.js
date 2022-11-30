/*
4. eliminar las tareas. 
*/

function tareaNueva() {
    let tareaInput = document.getElementById("tarea").value;
    document.getElementById("agendar").addEventListener("submit", tareaNueva);

    if (tareaInput === "") {
        Swal.fire("Escribí una tarea antes de agendar!");
    } else {
        /*console.log(document.getElementById("tarea").value);*/
        let etiqueta = document.createElement("li");
        etiqueta.innerText = tarea.value;
        let contenido = document.createTextNode(""); /*escribe lo que está entre ""*/
        etiqueta.appendChild(contenido);
        document.getElementById("tareasGuardadas").appendChild(etiqueta);
        etiqueta.className = "tareasGuardadas";

        let boton = document.createElement("button");
        let leyenda = document.createTextNode("Borrar");
        boton.appendChild(leyenda);
        document.getElementById("tareasGuardadas").appendChild(boton);
        boton.className = "botonBorrar";
        boton.id = "btn-borrar";
        tarea.value = "";

        etiqueta.addEventListener('click', function () {
            etiqueta.style.textDecoration = "line-through";
        })

        boton.addEventListener('dblclick', eliminarTarea)
        function eliminarTarea() {
            tareasGuardadas.removeChild(boton);
            tareasGuardadas.removeChild(etiqueta);

        }

  
    }
}

    




