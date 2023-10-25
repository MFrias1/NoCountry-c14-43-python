document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('formulario');
    const names = document.getElementById('nombre');
    const surname = document.getElementById('apellido');
    const country = document.getElementById('pais');
    const email = document.getElementById('correo');
    const password = document.getElementById('contrasenia');
    const password2 = document.getElementById('confirmar-contrasenia');

   
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const validationResult = validateInputs();
        if (validationResult) {
            const registrationResult = await postRegistro(e); // Pasa el evento como argumento
            if (registrationResult.message === 'Registro exitoso') {
                alert('Registro exitoso: ' + registrationResult.message);
                window.location.href = 'iniciodesesion.html';
            } else {
                alert('Error en el registro: ' + registrationResult.message);
            }
        }
    });

    // Resto del código de validate2.js
    const setError = (element, message) => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        errorDisplay.innerText = message;
        inputControl.classList.add('error');
        inputControl.classList.remove('success');
    };

    const setSuccess = (element) => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        errorDisplay.innerText = '';
        inputControl.classList.add('success');
        inputControl.classList.remove('error');
    };

    const isValidName = (name) => {
        const re = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
        return re.test(name);
    };

    const isValidEmail = (email) => {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return re.test(String(email).toLocaleLowerCase());
    };

    const isValidPassword = (password) => {
        const re = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
        return re.test(password);
    };

    const validateInputs = () => {
        const nameValue = names.value.trim();
        const surnameValue = surname.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
        const password2Value = password2.value.trim();

        if (nameValue === '') {
            setError(names, 'Nombre es requerido');
            return false;
        } else if (!isValidName(nameValue)) {
            setError(names, 'Ingresa un nombre válido');
            return false;
        } else {
            setSuccess(names);
        }

        if (surnameValue === '') {
            setError(surname, 'Apellido es requerido');
            return false;
        } else if (!isValidName(surnameValue)) {
            setError(surname, 'Ingresa un apellido válido');
            return false;
        } else {
            setSuccess(surname);
        }

        if (emailValue === '') {
            setError(email, 'Correo es requerido');
            return false;
        } else if (!isValidEmail(emailValue)) {
            setError(email, 'Proporciona un correo válido');
            return false;
        } else {
            setSuccess(email);
        }

        if (passwordValue === '') {
            setError(password, 'Contraseña es requerida');
            return false;
        } else if (!isValidPassword(passwordValue)) {
            setError(password, 'La contraseña debe tener al menos 8 caracteres y contener al menos una letra y un número');
            return false;
        } else {
            setSuccess(password);
        }

        if (password2Value === '') {
            setError(password2, 'Confirmar contraseña es requerido');
            return false;
        } else if (password2Value !== passwordValue) {
            setError(password2, 'Las contraseñas no coinciden');
            return false;
        } else {
            setSuccess(password2);
        }

        return true; // Devuelve true si todas las validaciones pasan
    };

        async function postRegistro(event) {
            if (event) {
                event.preventDefault();
            }
          
            // Obtener el correo del formulario
            // const correo2 = document.querySelector('input[name="correo"]').value;
          
            // // Realizar una solicitud a la API para verificar si el correo ya está registrado
            // const checkEmailResponse = await fetch('https://nocountry-api.onrender.com/', {
            //   method: 'POST',
            //   headers: {
            //     'Content-Type': 'application/json',
            //   },
            //   body: JSON.stringify({ email: correo2 }),
            // })
            //   .then(response => response.json())
            //   .catch(error => {
            //     console.error('Error de red:', error);
            //     alert('Error al verificar el correo');
            //   });
          
            // if (checkEmailResponse && checkEmailResponse.message === 'Correo ya registrado') {
            //   alert('Este correo ya está registrado. Por favor, utiliza otro correo.');
            //   return;
            // }
          
            // Obtener los datos del formulario
            const nombre = document.querySelector('input[name="nombre"]').value;
            const apellido = document.querySelector('input[name="apellido"]').value;
            const pais = document.querySelector('select[name="pais"]').value;
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
    
});
