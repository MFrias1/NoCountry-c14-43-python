document.addEventListener("DOMContentLoaded", function () {
  // Define una función para validar los campos con expresiones regulares y mensajes personalizados
  function validateField(field, regex, customMessage) {
    field.addEventListener("blur", function (e) {
      const fieldValue = e.target.value;
      const errorElement = document.getElementById(`${e.target.name}-error`);
      
      if (fieldValue.length === 0) {
        e.target.classList.add("invalid");
        errorElement.textContent = "Campo requerido";
      } else if (!regex.test(fieldValue)) {
        e.target.classList.add("invalid");
        errorElement.textContent = customMessage;
      } else {
        e.target.classList.remove("invalid");
        errorElement.textContent = "";
      }
    });
  }

  const nameRegex = /^[A-Za-zÁ-ú ]{3,}$/;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{8,16}$/;

  const nombreCampo = document.querySelector("[name=nombre]");
  const apellidoCampo = document.querySelector("[name=apellido]");
  const paisCampo = document.querySelector("[name=pais]");
  const correoCampo = document.querySelector("[name=correo]");
  const contraseniaCampo = document.querySelector("[name=contrasenia]");
  const confirmarContraseniaCampo = document.querySelector("[name=confirmar-contrasenia]");
  const form = document.querySelector('#formulario');

  if (nombreCampo) {
    validateField(nombreCampo, nameRegex, "Por favor, ingresa un nombre válido.");
  }

  if (apellidoCampo) {
    validateField(apellidoCampo, nameRegex, "Por favor, ingresa un apellido válido.");
  }

  if (paisCampo) {
    validateField(paisCampo, nameRegex, "Por favor, ingresa un país válido.");
  }

  if (correoCampo) {
    validateField(correoCampo, emailRegex, "Por favor, ingresa un correo válido.");
  }

  if (contraseniaCampo) {
    validateField(contraseniaCampo, passwordRegex, "La contraseña debe contener al menos 8 caracteres con números y letras.");
  }

  if (confirmarContraseniaCampo) {
    validateField(confirmarContraseniaCampo, passwordRegex, "La confirmación de contraseña debe contener al menos 8 caracteres con números y letras.");
    confirmarContraseniaCampo.addEventListener("blur", function (e) {
      const passwordValue = contraseniaCampo.value;
      const confirmValue = e.target.value;
      const errorElement = document.getElementById(`${e.target.name}-error`);
      
      if (passwordValue !== confirmValue) {
        e.target.classList.add("invalid");
        errorElement.textContent = "Ambas contraseñas son diferentes";
      }
    });
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
  
    // Verificar si hay errores de validación en los campos
    let hasErrors = false;
  
    if (nombreCampo.value.trim() === '' || !nameRegex.test(nombreCampo.value)) {
      nombreCampo.classList.add('invalid');
      document.getElementById('nombre-error').textContent = "Por favor, ingresa un nombre válido.";
      hasErrors = true;
    }
  
    if (apellidoCampo.value.trim() === '' || !nameRegex.test(apellidoCampo.value)) {
      apellidoCampo.classList.add('invalid');
      document.getElementById('apellido-error').textContent = "Por favor, ingresa un apellido válido.";
      hasErrors = true;
    }
  
    if (paisCampo.value.trim() === '' || !nameRegex.test(paisCampo.value)) {
      paisCampo.classList.add('invalid');
      document.getElementById('pais-error').textContent = "Por favor, ingresa un país válido.";
      hasErrors = true;
    }
  
    if (correoCampo.value.trim() === '' || !emailRegex.test(correoCampo.value)) {
      correoCampo.classList.add('invalid');
      document.getElementById('correo-error').textContent = "Por favor, ingresa un correo válido.";
      hasErrors = true;
    }
  
    if (contraseniaCampo.value.trim() === '' || !passwordRegex.test(contraseniaCampo.value)) {
      contraseniaCampo.classList.add('invalid');
      document.getElementById('contrasenia-error').textContent = "La contraseña debe contener al menos 8 caracteres con números y letras.";
      hasErrors = true;
    }
  
    if (confirmarContraseniaCampo.value.trim() === '' || confirmarContraseniaCampo.value !== contraseniaCampo.value) {
      confirmarContraseniaCampo.classList.add('invalid');
      document.getElementById('confirmar-contrasenia-error').textContent = "La confirmación de contraseña debe contener al menos 8 caracteres con números y letras.";
      hasErrors = true;
    }
  
    if (!hasErrors) {
      // Limpia los campos del formulario
      nombreCampo.value = '';
      apellidoCampo.value = '';
      paisCampo.value = '';
      correoCampo.value = '';
      contraseniaCampo.value = '';
      confirmarContraseniaCampo.value = '';
    }
  });
  
});










