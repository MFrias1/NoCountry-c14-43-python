import './validaciones'

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector('#register_form');
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Validación de los campos
    const nombre = form.querySelector('input[name="nombre"]').value;
    const apellido = form.querySelector('input[name="apellido"]').value;
    const pais = form.querySelector('input[name="pais"]').value;
    const correo = form.querySelector('input[name="correo"]').value;
    const contrasenia = form.querySelector('input[name="contrasenia"]').value;
    const confirmarContrasenia = form.querySelector('input[name="confirmar-contrasenia"]').value;

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
    console.log('Estoy dentro del formulario');
    fetch('https://nocountry-api.onrender.com/create_user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.success) {
          // Registro exitoso, puedes redirigir al usuario a una página de inicio de sesión
          // window.location.href = 'iniciodesesion.html';
        } else {
          alert('Error en el registro: ' + data.message);
        }
      })
      .catch(error => {
        console.error('Error de red:', error);
      });
  });
});
