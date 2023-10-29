let modalJuego = document.getElementById("modalJuego");
let modalPopUp = document.getElementById('modalPopUp');
let textoVentanaEmergente = document.getElementById("textoVentanaEmergente")

function segundaEmergente(){
    modalJuego.style.display='flex';
    modalPopUp.style.display = 'block';
    textoVentanaEmergente.innerText ="Recolecta los residuos no reciclables";
    //modalJuego.style.bottom = '10px'; // Cambia '10px' a la posición deseada en píxeles
    //modalJuego.style.right = '100px';
    timer = setTimeout(function () {
        textoVentanaEmergente.innerText ='';
        tercerEmergente();
    }, 5000);
};
function tercerEmergente(){
    textoVentanaEmergente.innerText ="Recolecta los residuos orgánicos";
    timer = setTimeout(function () {
        textoVentanaEmergente.innerText ='';
        cuartaEmergente();
    }, 5000);
};
function cuartaEmergente(){
    textoVentanaEmergente.innerText ="Recolecta los residuos de vidrio";
    timer = setTimeout(function () {
        textoVentanaEmergente.innerText ='';
        quintaEmergente()
    }, 5000);
};
function quintaEmergente(){
    textoVentanaEmergente.innerText ="Recolecta los residuos de plástico y metal";
    timer = setTimeout(function () {
        textoVentanaEmergente.innerText ='';
        quintaEmergente()
    }, 5000);
};
function quintaEmergente(){
    textoVentanaEmergente.innerText ="Recolecta los residuos peligrosos";
    timer = setTimeout(function () {
        textoVentanaEmergente.innerText ='';
        modalJuego.style.display = 'none';
        modalPopUp.style.display = 'none';
    }, 5000);
};
function primerEmergente(){
    modalJuego.style.display='flex'; //cambio el display flex del css de modalJuego de un none a flex
    modalPopUp.style.display = 'block';
    textoVentanaEmergente.innerText ="Recolecta los residuos de papel y cartón";
    timer = setTimeout(function () {
        segundaEmergente(); //llama a la segunda ventana emergente despues de desaparecer la primera
    }, 5000);
    
};
document.addEventListener('DOMContentLoaded',()=>{
    Swal.fire({
        title: 'Instrucciones', //no puedo reutilizar title: ni text: porque se sobreescribe"
        html:'<p>En este juego, tu misión es atrapar la basura que se te indique y clasificarla en el contenedor adecuado según su color.</p>'
        +'<p>Para cambiar el color del contenedor, simplemente presiona la tecla que corresponde al color que deseas seleccionar.</p>'
        +'<span><img src="./Juegos/PNG/Environment/puntoazul.png" width=50px></span>'
        + '<span><img src="./Juegos/PNG/Environment/puntoazul.png" width=50px><span>' + 
        '<span><img src="./Juegos/PNG/Environment/puntoazul.png" width=50px></span>' + 
        '<span><img src="./Juegos/PNG/Environment/puntoazul.png" width=50px></span>' +
        '<span><img src="./Juegos/PNG/Environment/puntoazul.png" width=50px></span>' + 
        '<span><img src="./Juegos/PNG/Environment/puntoazul.png" width=50px></span>' +
        '<p>Luego, para mover el contenedor, desplaza el ratón de izqierda a derecha en la zona marcada en la pantalla como "Area del contenedor</p>'
        + '<span><img src="./Juegos/PNG/Background/franjaTachos.png" width=450px height=70px ><span>' +
        '<p>¡Cada vez que atrapes la basura correctamente, ganaras puntos!</p>',
        //timer: 24000
        confirmButtonText: 'Continuar',
    }).then((result) => {
        if (result.isConfirmed) {
            //llama a la función para descargar el contenido de la ventana emergente.
            primerEmergente();
        }
    });;
})

