function Post() {
    // Obtener los datos del formulario
    const nombre = document.querySelector('input[name="nombre"]').value;
    const apellido = document.querySelector('input[name="apellido"]').value;
    const pais = document.querySelector('input[name="pais"]').value;
    const correo = document.querySelector('input[name="correo"]').value;
    const contrasenia = document.querySelector('input[name="contraseña"]').value;
    const confirmarContrasenia = document.querySelector('input[name="confirmar-contraseña"]').value;
  
    // Verificar que las contraseñas coincidan
    if (contrasenia !== confirmarContrasenia) {
      alert('Las contraseñas no coinciden');
      return;
    }
  
    // Crear un objeto con los datos del usuario
    const userData = {
      nombre: nombre,
      apellido: apellido,
      pais: pais,
      correo: correo,
      contrasenia: contrasenia
    };
  
    // Realizar una solicitud POST al servidor
    axios.post('URL_DEL_BACKEND', userData) //https://localhost:8000
      .then(response => {
        // Manejar la respuesta del servidor
        if (response.data.success) {
          // Registro exitoso, puedes redirigir al usuario a una página de inicio de sesión
          window.location.href = 'iniciodesesion.html';
        } else {
          // Mostrar un mensaje de error en caso de fallo en el registro
          alert('Error en el registro: ' + response.data.message);
        }
      })
      .catch(error => {
        console.error('Error de red:', error);
      });
  }