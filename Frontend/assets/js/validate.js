document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('formulario');
    const names = document.getElementById('nombre');
    const surname = document.getElementById('apellido');
    const country = document.getElementById('pais');
    const email = document.getElementById('correo');
    const password = document.getElementById('contrasenia');
    const password2 = document.getElementById('confirmar-contrasenia');
   // const successMessage = document.getElementById('mensaje-exito'); // Elemento para mostrar el mensaje de éxito

    form.addEventListener('submit', e => {
        e.preventDefault();
        validateInputs();
    });

    const setError = (element, message) => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        errorDisplay.innerText = message;
        inputControl.classList.add('error');
        inputControl.classList.remove('success');
    };

    const setSuccess = element => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        errorDisplay.innerText = '';
        inputControl.classList.add('success');
        inputControl.classList.remove('error');
    };

    const isValidName = name => {
        const re = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
        return re.test(name);
    };

    const isValidEmail = email => {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return re.test(String(email).toLocaleLowerCase());
    };

    const isValidPassword = password => {
        const re = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
        return re.test(password);
    };

    // const resetForm = () => {
    //     form.reset();
    //     successMessage.innerText = 'Se registró exitosamente'; // Mostrar el mensaje de éxito
    // };

    const validateInputs = () => {
        const nameValue = names.value.trim();
        const surnameValue = surname.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
        const password2Value = password2.value.trim();

        if (nameValue === '') {
            setError(names, 'Nombre es requerido');
        } else if (!isValidName(nameValue)) {
            setError(names, 'Ingresa un nombre válido');
        } else {
            setSuccess(names);
        }

        if (surnameValue === '') {
            setError(surname, 'Apellido es requerido');
        } else if (!isValidName(surnameValue)) {
            setError(surname, 'Ingresa un apellido válido');
        } else {
            setSuccess(surname);
        }

        if (emailValue === '') {
            setError(email, 'Correo es requerido');
        } else if (!isValidEmail(emailValue)) {
            setError(email, 'Proporciona un correo válido');
        } else {
            setSuccess(email);
        }

        if (passwordValue === '') {
            setError(password, 'Contraseña es requerida');
        } else if (!isValidPassword(passwordValue)) {
            setError(password, 'La contraseña debe tener al menos 8 caracteres y contener al menos una letra y un número');
        } else {
            setSuccess(password);
        }

        if (password2Value === '') {
            setError(password2, 'Confirmar contraseña es requerido');
        } else if (password2Value !== passwordValue) {
            setError(password2, 'Las contraseñas no coinciden');
        } else {
            setSuccess(password2);
            // resetForm();
        }
    };
});





