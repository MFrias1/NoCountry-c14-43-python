async function postInicioSesion(event) {
  event.preventDefault();

  const emailInput = document.querySelector('input[name="name"]');
  const password = document.querySelector('input[name="password"]').value;
  const email = emailInput.value;

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!email.match(emailPattern)) {
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
      const responseData = await response.json();
      const token = responseData.token; // Obtén el token del servidor
      const userId = responseData.id; // Obtén el ID del usuario del servidor

      // Almacena el token y el ID del usuario en el localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('userId', userId);

      // Muestra el token en un alert
      alert(`Token de autenticación: ${token}`);
      
      // Mostrar mensaje de inicio de sesión exitoso
      Swal.fire({
        icon: 'success',
        title: 'Inicio de sesión exitoso',
        showConfirmButton: false,
        timer: 3000
      }).then(() => {
        window.location.href = 'login.html';
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
