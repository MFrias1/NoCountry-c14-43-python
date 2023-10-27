let modalJuego = document.getElementById("modalJuego");
let modalPopUp = document.getElementById('modalPopUp');
let textoVentanaEmergente = document.getElementById("textoVentanaEmergente")
//hacer las ventans por mi cuenta
function primerEmergente(){
    modalJuego.style.display='flex'; //cambio el display flex del css de modalJuego de un none a flex
    modalPopUp.style.display = 'block';
    timer = setTimeout(function () {
        modalJuego.style.display = 'none';
        modalPopUp.style.display = 'none';
        segundaEmergente(); //llama a la segunda ventana emergente despues de desaparecer la primera
    }, 5000);
    
};
function segundaEmergente(){
    modalJuego.style.display='flex';
    modalPopUp.style.display = 'block';
    textoVentanaEmergente.innerText ="Alan";
    //modalJuego.style.bottom = '10px'; // Cambia '10px' a la posición deseada en píxeles
    //modalJuego.style.right = '100px';
    timer = setTimeout(function () {
        modalJuego.style.display = 'none';
        modalPopUp.style.display = 'none';
    }, 5000);
};

document.addEventListener('DOMContentLoaded',()=>{
    Swal.fire({
        title: 'Instrucciones',
        text: 'En este juego, tu misión es atrapar la basura que se te indique y clasificarla en el contenedor adecuado según su color.',
        text: 'Para cambiar el color del contenedor, simplemente presiona la tecla que corresponde al color que deseas seleccionar.',
        //timer: 24000
        confirmButtonText: 'Continuar',
    }).then((result) => {
        if (result.isConfirmed) {
            //llama a la función para descargar el contenido de la ventana emergente.
            primerEmergente();
        }
    });;
})

