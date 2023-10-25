async function Post(event) {
  event.preventDefault();
 // Obtener los datos del formulario
 const email = document.querySelector('input[name="name"]').value;
 const password = document.querySelector('input[name="password"]').value;
 

 // Crear un objeto con los datos del usuario
 const userData = {
   email: email,
   password: password
 };

 // Realizar una solicitud POST al servidor utilizando la Fetch API
 console.log('estoyadentro');
// ...

await fetch('https://nocountry-api.onrender.com/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(userData),
})
  .then(response => {
    if (response.ok) {
      // Inicio de sesión exitoso, redirige al usuario a la página de inicio
      alert('Inicio de sesión exitoso');
      window.location.href = 'login.html'; // Cambia '/ruta-de-la-pagina' por la URL a la que quieres redirigir al usuario.
    } else {
      // Mostrar un mensaje de error en caso de fallo en el inicio de sesión
      alert('Error en el inicio de sesión');
    }
  })
  .catch(error => {
    console.error('Error de red:', error);
  });

// ...

}