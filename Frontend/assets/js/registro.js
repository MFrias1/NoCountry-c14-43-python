async function postRegistro(event) {
  event.preventDefault();

  // Obtener los datos del formulario
  const nombre = document.querySelector('input[name="nombre"]').value;
  const apellido = document.querySelector('input[name="apellido"]').value;
  const pais = document.querySelector('input[name="pais"]').value;
  const correo = document.querySelector('input[name="correo"]').value;
  const contrasenia = document.querySelector('input[name="contrasenia"]').value;
  const confirmarContrasenia = document.querySelector('input[name="confirmar-contrasenia"]').value;

  // Verificar que las contraseñas coincidan
  if (contrasenia !== confirmarContrasenia) {
    alert('Las contraseñas no coinciden');
    return;
  }

  // Crear un objeto con los datos del usuario
  const userData = {
    first_name: nombre,
    last_name: apellido,
    country: pais,
    email: correo,
    password: contrasenia,
    coins: 0
  };

  // Realizar una solicitud POST al servidor utilizando la Fetch API
  await fetch('https://nocountry-api.onrender.com/create_user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
    .then(response => response.json())
    .then(data => {
      // Manejar la respuesta del servidor
      console.log(data);
      if (data.message === 'Registro exitoso') {
        // Registro exitoso, redirige al usuario a la página de inicio de sesión o a la página que desees
        alert('Registro exitoso: ' + data.message);
        window.location.href = 'iniciodesesion.html'; // Cambia '/ruta-de-la-pagina' por la URL a la que quieres redirigir al usuario después del registro.
      } else {
        // Mostrar un mensaje de error en caso de fallo en el registro
        alert('Error en el registro: ' + data.message);
      }
    })
    .catch(error => {
      console.error('Error de red:', error);
    });
}

// Agrega aquí tu función de validación (la que proporcionaste anteriormente)




