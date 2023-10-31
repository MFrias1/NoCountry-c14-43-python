document.addEventListener('DOMContentLoaded',function() {
    // const logout=()=>{
    //     sessionStorage.removeItem('token');
    //     window.location ='../index.html';
    // };
    //const logoutButton =document.getElementById("logOut");
    //logoutButton.addEventListener('click',logout);
    
    
    // //traigo monedero
    // let contenidoMonedero = document.getElementById("contenidoMonedero");
        
    // //solicito datos a la API
    // fetch('https://nocountry-api.onrender.com/users/2')
    
    //     .then(respuestaApi => { 
    //             if (!respuestaApi.ok) {
    //             throw new Error('No se pudo obtener los datos del usuario');
    //             }
    //             //retorno la respuesta como un json.
    //             return respuestaApi.json(); 
    //     })//ejecuta la función flecha definida dentro del método .then(), con el argumento respuestaApi, si la solicitud se resuelve con éxito
    //     .then(valorObtenido => {
    //             // Muestra el contenido en el div
    //             contenidoMonedero.innerText = valorObtenido.coins;
    //     }) //si la solicitud no tiene éxito, el método .catch advetirá del error.
    //     .catch(error => {
    //             console.error('Error al obtener datos de la API: ', error);
    //             alert('Error al obtener datos de la API.');
    //     });

    
      let userId= localStorage.getItem('userId');
      let coins=localStorage.getItem('coins');
      let first_name= localStorage.getItem('name');
    
      if(userId!=null&& coins!=null && first_name!=null){
        
      }
    

});
