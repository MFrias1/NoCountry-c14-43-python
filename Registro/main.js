let sectionLogin= document.getElementById("sectionLogin"); //declaración de variables para que guarden etiquetas de HTML que traemos a través de la id a JS
let padre= document.getElementById("padre");

let div = document.createElement("div"); //estamos creando un elemento div 
div.innerHTML=  ` 
        <img>
        <h2> Inicio de sesión </h2>
        <div>
            <form></form>
        </div>
`; // .innerHTML lo utilizamos para crear dentro de la variable div etiquetas de HTML 

padre.append(div); // agregamos en el archivo HTML todo el contenido de la variable div.innerHTML y se lo asignamos a su etiqueta padre  

let divButton = document.createElement("div");

divButton.innerHTML= `

        <button type="submit"></button>

`;

padre.append(divButton); //que agregue el divbutton en HTML



