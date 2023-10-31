document.addEventListener("DOMContentLoaded", function () {
    let navbar=document.getElementById('navbar');
    function navbarLogOut() {
        navbar.innerHTML= `
        <a class="logo_navbar" href=""><img src="./assets/img/icon/logo.png" alt=""></a>
                        <div class="navbar_enlaces">
                            <div id="listadoMenu">
                                <ul>
                                    <li><a href="#reci-clando">Iniciativa</a></li>
                                    <li><a href="#comoFunciona">Beneficios</a></li>
                                    <li><a href="#comoEmpezar">¿Cómo reciclar?</a></li>
                                    <li><a href="./blog.html">Blog</a></li>
                                    <li><a href="#formIndex">Contacto</a></li>
                                </ul>
                            </div>
                            <div class="banner_button">
                                <a id="botonInicioDeSesionIndex" class="banner_button_login" href="./iniciodesesion.html">Ingresar</a><!--inicio de sesión-->
                                <a id="botonRegistro" class="banner_button_signUp" href="./registro.html">Registrarse</a><!--Registrarse>-->
                            </div>
                        </div>
    `;
    };

   

    function navbarLogin(){
        navbar.innerHTML=`
        <a class="logo_navbar" ><img src="./assets/img/icon/logo.png" alt=""></a>
            <div class="navbar_enlaces_logIn">
                    <div class="navbarLogIn_banner_button">
                        <a class="banner_button_login" href="./recompensas.html">Recompensas</a>
                    </div>
                    <div class="banner_button_monedero">
                        <p>Monedero $ </p><p id="contenidoMonedero"></p>
                    </div>
                    <a href="" class="logOut" id="logOut" ><img src="./assets/img/landingimg/logout.png" alt="" srcset="" ></a>
            </div>
        `;

        document.getElementById('logOut').addEventListener('click', function (event) {
            event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
            localStorage.clear(); // Limpiar el localStorage
            window.location.href = "./index.html"; // Redirigir a la página de inicio o a la página deseada después del logout
        });
         
       
    };

    
    
    /*if(window.location.href = 'login.html'){
        botonInicioDeSesionIndex.style.display="none";
        botonRegistro.style.display="none";
    }*/

    let userId= localStorage.getItem('userId');
    let coins=localStorage.getItem('coins');
    let first_name= localStorage.getItem('nombre');




    
    
    //traigo monedero
   

    userId = parseInt(userId, 10); 
        
    //solicito datos a la API
    if(userId){
        
        fetch(`https://nocountry-api.onrender.com/users/${userId}`)     
        .then(respuestaApi => { 
                if (!respuestaApi.ok) {
                throw new Error('No se pudo obtener los datos del usuario');
                }
                //retorno la respuesta como un json.
                return respuestaApi.json(); 
        })//ejecuta la función flecha definida dentro del método .then(), con el argumento respuestaApi, si la solicitud se resuelve con éxito
        .then(valorObtenido => {
                // Muestra el contenido en el div
                contenidoMonedero.innerText = valorObtenido.coins;
        }) //si la solicitud no tiene éxito, el método .catch advetirá del error.
        .catch(error => {
                console.error('Error al obtener datos de la API: ', error);
                alert('Error al obtener datos de la API.');
        });



    };
    
    if(userId!=null && coins!=null && first_name!=null && (document.title==="Bienvenido") ){
       navbarLogin();
    }else if(userId!=null && coins!=null && first_name!=null && (document.title==="blog")){
       navbarLogin();
        
    } else if (userId!=null && coins!=null && first_name!=null && (document.title==="Recicla-ando Bienvenidos")){
        navbarLogin();
       
    }else if(userId==null && coins==null && first_name==null && (document.title==="Recicla-ando Bienvenidos")){
        navbarLogOut();
    
    }else if(userId==null && coins==null && first_name==null && (document.title==="blog")){
        navbarLogOut(); 
    };
});

