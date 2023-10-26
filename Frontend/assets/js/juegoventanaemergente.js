let juegosBody = document.getElementById("juegosBody");
juegosBody.addEventListener("load",()=>{
    Swal.fire({
        title: contenido.title,
        text: contenido.text,
        confirmButtonText: 'Descargar',
    }).then((result) => {
        if (result.isConfirmed) {
            //llama a la función para descargar el contenido de la ventana emergente.
            descargarContenido(contenido);
        }
    });
})