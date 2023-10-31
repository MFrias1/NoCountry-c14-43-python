document.addEventListener("DOMContentLoaded", function () {
    let navbar=document.getElementById('navbar');
    function navbarLogOut() {
        navbar.innerHTML= `
        <a class="logo_navbar" href="./index.html"><img src="./assets/img/icon/logo.png" alt=""></a>
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
    }
    
    /*if(window.location.href = 'login.html'){
        botonInicioDeSesionIndex.style.display="none";
        botonRegistro.style.display="none";
    }*/

    let userId= localStorage.getItem('userId');
    let coins=localStorage.getItem('coins');
    let first_name= localStorage.getItem('name');
  
    function logOut(){
        const logOutImg= document.getElementById('logOut');
        logOutImg.addEventListener('click', ()=> {
            localStorage.removeItem('userId', 'coins','name');
        });
    };

    if(userId!=null && coins!=null && first_name!=null && (document.title="Bienvenido") ){
       function navbarLogin(){
        navbar.innerHTML=`
        <a class="logo_navbar" href="./index.html"><img src="./assets/img/icon/logo.png" alt=""></a>
            <div class="navbar_enlaces_logIn">
                    <div class="navbarLogIn_banner_button">
                        <a class="banner_button_login" href="./recompensas.html">Recompensas</a>
                    </div>
                    <div class="banner_button_monedero">
                        <p>Monedero $ </p><p id="contenidoMonedero"></p>
                    </div>
                    <a href="#" class="logOut" id="logOut" ><img src="./assets/img/landingimg/logout.png" alt="" srcset="" ></a>
            </div>
        `;
       };
       navbarLogin();
    }else if(userId!=null && coins!=null && first_name!=null && (document.title="blog")){
        navbarLogin();
        
    } else if (userId!=null && coins!=null && first_name!=null && (document.title="Recicla-ando Bienvenidos")){
        navbarLogin();
       
    }else if(userId==null && coins==null && first_name==null && (document.title="Recicla-ando Bienvenidos")){
        navbarLogOut();
        logOut();

    }else if(userId==null && coins==null && first_name==null && (document.title="blog")){
        navbarLogOut(); 
        logOut(); 
    };
});

