let recompensasLogInBotonCinecolombia = document.getElementById('recompensasLogInBotonCinecolombia');
let recompensasLogInBotonMcDonalds = document.getElementById('recompensasLogInBotonMcDonalds');
let recompensasLogInBotonKFC = document.getElementById('recompensasLogInBotonKFC');
let recompensasLogInBotonCinecolombiaMensual = document.getElementById('recompensasLogInBotonCinecolombiaMensual');
let recompensasLogInBotonApple= document.getElementById('recompensasLogInBotonApple');
let recompensasLogInBotonPizza= document.getElementById('recompensasLogInBotonPizza');
let recompensasLogInBotonXiaomi = document.getElementById('recompensasLogInBotonXiaomi');
let recompensasLogInBotonLatam= document.getElementById('recompensasLogInBotonLatam');

recompensasLogInBotonCinecolombia.addEventListener('click',()=>{
    const contenido ={
        title: 'Entrada a cine x1',
        confirmButtonText: 'Descargar',
    };
    mostrarAlerta(contenido);
});
recompensasLogInBotonMcDonalds.addEventListener('click',()=>{
    const contenido ={
        title: 'Combo Mc Donalds',
        confirmButtonText: 'Descargar',
    };
    mostrarAlerta(contenido);
});
recompensasLogInBotonKFC.addEventListener('click',()=>{
    const contenido = {
        title: 'Combo KFC',
        confirmButtonText: 'Descargar',
    };
    mostrarAlerta(contenido);
});
recompensasLogInBotonCinecolombiaMensual.addEventListener('click',()=>{
    const contenido ={
        title: 'Entrada a cine x2',
        confirmButtonText: 'Descargar',
    };
    mostrarAlerta(contenido);
});
recompensasLogInBotonApple.addEventListener('click',()=>{
    const contenido ={
        title: '-10% en Apple',
        confirmButtonText: 'Descargar',
    };
    mostrarAlerta(contenido);
});
recompensasLogInBotonPizza.addEventListener('click',()=>{
    const contenido ={
        title: "-10% en Xiaomi",
        confirmButtonText: 'Descargar',
    };
    mostrarAlerta(contenido);
});
recompensasLogInBotonXiaomi.addEventListener('click', () => {
    // Variable donde se almacena el contenido que se mostrará en la ventana emergente.
    const contenido = {
        title: "-10% en Xiaomi",
        confirmButtonText: 'Descargar',
    };

    mostrarAlerta(contenido); // Llamado a la función que contiene la ventana emergente.
});
recompensasLogInBotonLatam.addEventListener('click',()=>{
    const contenido ={
        title: "-10% en vuelos de Latam Airlines",
        text: '¡Perfecto aquí tienes tu premio. Para canjearlo, simplemente presenta este código en el establecimiento correspondiente.',
        confirmButtonText: 'Descargar',
    };
    mostrarAlerta(contenido);
});

function mostrarAlerta(contenido) {
    Swal.fire({
        title: contenido.title,
        html: '<p>¡Perfecto, aquí tienes tu premio. Para canjearlo, simplemente presenta este código en el establecimiento correspondiente.</p>'+
        '<div id="qrcode"></div>', // Coloca el elemento HTML en el contenido HTML
        confirmButtonText: contenido.confirmButtonText,
    }).then(generateQR())
    .then((result) => {
        if (result.isConfirmed) {
            //llama a la función para descargar el contenido de la ventana emergente.
            descargarContenido(contenido);
        }
    });
}

function descargarContenido(contenido) {
    // Concatena el título y el texto 
    const contenidoTexto = `${contenido.title} ${contenido.text}`;

    // Crea un elemento <a> para la descarga
    const enlaceDescarga = document.createElement('a');
    enlaceDescarga.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(contenidoTexto);
    enlaceDescarga.download = 'contenido.txt';

    // enlace para descargar el archivo
    enlaceDescarga.style.display = 'none';
    document.body.appendChild(enlaceDescarga);
    enlaceDescarga.click();
    document.body.removeChild(enlaceDescarga);
}


// Función para generar el código QR
function generateQR() {
    // Obtén el elemento con el id 'qrcode' y añade la imagen del código QR
    document.getElementById('qrcode').innerHTML='<img src="https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld&amp;size=100x100"/>';
}


/*
function generateQR() {
    var qrInput = document.getElementById("qrInput");
    var qrText = qrInput.value;

    // Verificar si se ingresó un texto para el código QR
    if (qrText) {
      var qr = new QRious({
        element: document.getElementById('qrcode'),
        value: qrText,
        size: 200
      });
    } else {
      alert("Por favor, ingresa un texto para generar el código QR.");
    }
}*/

/*document.addEventListener('DOMContentLoaded', function() {
    // Coloca aquí tu código JavaScript
    let recompensasLogInBotonXiaomi = document.getElementById('recompensasLogInBotonXiaomi');
  
    function generateQR() {
        var qrText = "¡Hola! Este es un código QR de ejemplo.";
  
        var qrCodeContainer = document.getElementById("qrcode");
        qrCodeContainer.innerHTML = ""; // Limpiar el contenedor
  
        var qrImg = document.createElement("img");
        qrImg.src = "https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=" + qrText;
  
        qrCodeContainer.appendChild(qrImg);
    }
  
    recompensasLogInBotonXiaomi.addEventListener('click', () => {
        generateQR(); // Generar el código QR
  
        // Mostrar SweetAlert al comprar
        Swal.fire({
          title: '¡Felicidades!',
          text: '¡Ganaste un computador!',
          imageUrl: 'https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=¡Hola!%20Este%20es%20un%20código%20QR%20de%20ejemplo.',
          imageAlt: 'QR Code',
          confirmButtonText: 'Aceptar'
        });
    });
});*/
  
