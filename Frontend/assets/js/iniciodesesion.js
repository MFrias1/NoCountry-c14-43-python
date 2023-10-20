document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".clasepadre");
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
  
      const title = document.querySelector("input[name='name']").value;
      const body = document.querySelector("input[name='password']").value;
  
      // Datos del usuario que se enviarán al backend
      const userData = {
        title: 'foo@mail.com',
        body: 'bar',
      };
  
      // Realizar la solicitud POST al backend
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      })
      .then(response => response.json())
      .then(data => {
        // Manejar la respuesta del backend
        if (data.success) {
          // La autenticación fue exitosa, puedes redirigir al usuario a su área personalizada.
          window.location.href = 'index.html';
        } else {
          // La autenticación falló, muestra un mensaje de error.
          alert('Error: ' + data.message);
        }
      })
      .catch(error => {
        console.error('Error de red:', error);
      });
    });
  });