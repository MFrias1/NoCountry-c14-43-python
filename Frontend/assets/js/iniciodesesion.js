async function postInicioSesion(event) {
  event.preventDefault();
  
  const emailInput = document.querySelector('input[name="name"]'); 
  const password = document.querySelector('input[name="password"]').value;

  const email = emailInput.value;

  // Expresión regular para verificar que el correo sea válido
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!email.match(emailPattern)) {
    alert('Por favor, ingresa una dirección de correo electrónico válida.');
    return;
  }
  
  const userData = {
    email: email,
    password: password
  };
  
  try {
    const response = await fetch('https://nocountry-api.onrender.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      // Inicio de sesión exitoso, redirige al usuario a la página de inicio
      alert('Inicio de sesión exitoso');
      window.location.href = 'login.html'; // Cambia '/ruta-de-la-pagina' por la URL a la que quieres redirigir al usuario.
    } else {
      // Mostrar un mensaje de error en caso de fallo en el inicio de sesión
      alert('Credenciales incorrectas. Por favor, verifica tu correo y contraseña.');
    }
  } catch (error) {
    console.error('Error de red:', error);
  }
}