async function postInicioSesion(event) {
  event.preventDefault();

  const emailInput = document.querySelector('input[name="name"]');
  const password = document.querySelector('input[name="password"]').value;
  const email = emailInput.value;

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!email.match(emailPattern)) {
    // Utiliza SweetAlert para mostrar un mensaje
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Por favor, ingresa una dirección de correo electrónico válida.',
    });
    return;
  }

  const userData = {
    email: email,
    password: password,
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
      // Si el inicio de sesión es exitoso, utiliza SweetAlert y luego redirige
      Swal.fire({
        icon: 'success',
        title: 'Inicio de sesión exitoso',
        showConfirmButton: false,
        timer: 3000 // Muestra el mensaje durante 3 segundos
      }).then(() => {
        window.location.href = 'login.html'; // Redirige al usuario después de 3 segundos
      });
    } else {
      // Si hay un error en el inicio de sesión, muestra un mensaje de error
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Credenciales incorrectas. Por favor, verifica tu correo y contraseña.',
      });
    }
  } catch (error) {
    console.error('Error de red:', error);
  }
}
