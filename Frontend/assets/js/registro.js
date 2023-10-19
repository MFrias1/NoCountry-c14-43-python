document.getElementById("register_from").addEventListener("submit", function (event) {
        event.preventDefault();  // Evita el envío predeterminado del formulario

        // Obtiene los datos del formulario
        const formData = new FormData(event.target);

        // Realiza una solicitud POST al backend
        fetch("/create_user/", {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            // Procesa la respuesta del backend
            console.log(data);
        });
    })