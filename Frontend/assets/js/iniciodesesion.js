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
 await fetch('https://nocountry-api.onrender.com/login', {
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
     if (data.success) {
       // Registro exitoso, puedes redirigir al usuario a una página de inicio de sesión
       //window.location.href = 'iniciodesesion.html';
     } else {
       // Mostrar un mensaje de error en caso de fallo en el registro
       alert('Error en el registro: ' + data.message);
     }
   })
   .catch(error => {
     console.error('Error de red:', error);
   });
}