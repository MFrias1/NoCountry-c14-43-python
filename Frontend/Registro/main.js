let sectionLogin= document.getElementById("sectionLogin"); //declaración de variables para que guarden etiquetas de HTML que traemos a través de la id a JS
let padre= document.getElementById("padre");

let div = document.createElement("div"); //estamos creando un elemento div 
div.className = "inicioDeSesion"; //traigo una clase de CSS a javaScript
div.innerHTML=  ` 
        <div class="loginLogo"> <img src="../Imagenes/LandingImg/3779577.png"> </div>
        <div class="mainBody">
                <h2> Inicio de sesión </h2>
                <form class="clasepadre" action="">
                        <div >
                                <div>
                                        <input class="widthInput" for="GET-name" type="email" name="name" placeholder="Correo electrónico">
                                </div>
                                <div>
                                        <input class="widthInput" for="GET-password" type="password" name="password" placeholder="Contraseña">
                                </div>
                                <div class="recordarme">
                                        <span><input type="checkbox" value="Recordarme"/> <p>Recordarme</p></span>
                                        <span><p><a href="#">Olvidé mi contraseña</a></p></span>
                                </div>
                               
                        </div>
                </form>
                <div class="inicioBoton">
                        <button type="submit" value="Iniciar Sesión" >Iniciar sesión</button>
                </div>
                <div class="registrate">
                        <span><p>¿No tienes una cuenta?</p></span>
                        <span><a href="#">Regístrate.</a></span>
                </div>
        </div>
`; 

// .innerHTML lo utilizamos para crear dentro de la variable div etiquetas de HTML 

padre.append(div); // agregamos en el archivo HTML todo el contenido de la variable div.innerHTML y se lo asignamos a su etiqueta padre  




