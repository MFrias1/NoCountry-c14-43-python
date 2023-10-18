let sectionLogin = document.getElementById("sectionLogin"); //declaración de variables para que guarden etiquetas de HTML que traemos a través de la id a JS
let padre = document.getElementById("padre");
let buttonLogin = document.getElementById("buttonLogin");
let buttonSignUp = document.getElementById("buttonSignUp");



// agregamos en el archivo HTML todo el contenido de la variable div.innerHTML y se lo asignamos a su etiqueta padre  

//acá empezamos DOM para registro 
let div1 = document.createElement("div"); //estamos creando un elemento div 
div1.className =  //traigo una clase de CSS a javaScript
div1.innerHTML=  ` 
        <div class="loginLogo"> <img src="../Imagenes/LandingImg/3779577.png"> </div>
        <div class="mainBody">
                <h2> Crear una cuenta</h2>
                <form class="clasepadre" action="alert('hola mundo')">
                        <div >
                                <div>
                                        <input class="widthInput" for="GET-name" type="text" name="name" placeholder="nombre inicial">
                                </div>

                                <div>
                                        <input class="widthInput" for="GET-name" type="text" name="name" placeholder="apellido">
                                </div>

                                <div>
                                        <input class="widthInput" for="GET-name" type="text" name="name" placeholder="país">
                                </div>

                                <div>
                                        <input class="widthInput" for="GET-name" type="email" name="name" placeholder="Correo electrónico">
                                </div>
                                <div>
                                        <input class="widthInput" for="GET-password" type="password" name="password" placeholder="Contraseña">
                                </div>
                                <div>
                                        <input class="widthInput" for="GET-name" type="password" name="name" placeholder="confirmar contraseña">
                                </div>
                                
                               
                        </div>
                </form>
                <div class="inicioBoton">
                        <button type="submit" value="Iniciar Sesión" >Registrarme</button>
                </div>
                <div class="registrate">
                        <span><p>¿Ya tienes una cuenta?</p></span>
                        <span><a href="iniciodesesion1.html">Iniciar sesión</a></span>
                </div>
        </div>
`; 

padre.append(div1);