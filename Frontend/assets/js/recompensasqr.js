let recompensasLogInBotonCinecolombia = document.getElementById('recompensasLogInBotonCinecolombia');
let recompensasLogInBotonMcDonalds = document.getElementById('recompensasLogInBotonMcDonalds');
let recompensasLogInBotonKFC = document.getElementById('recompensasLogInBotonKFC');
let recompensasLogInBotonCinecolombiaMensual = document.getElementById('recompensasLogInBotonCinecolombiaMensual');
let recompensasLogInBotonApple= document.getElementById('recompensasLogInBotonApple');
let recompensasLogInBotonPizza= document.getElementById('recompensasLogInBotonPizza');
let recompensasLogInBotonXiaomi = document.getElementById('recompensasLogInBotonXiaomi');
let recompensasLogInBotonLatam= document.getElementById('recompensasLogInBotonLatam');

//variables del localstorage
const userId = parseInt(localStorage.getItem('userId'));
const coins =200;

recompensasLogInBotonCinecolombia.addEventListener('click', () => {
    if (coins < 10000) {
        Swal.fire({
            title: "No tienes la cantidad suficiente"
        });
    } else {
        const contenido = {
            title: 'Entrada a cine x1',
            confirmButtonText: 'Descargar'
        };
        enviarPuntosAlBackend();
    }
});

//Aca se agrega evento al boton para que aparezca una ventana emergente que compare las monedas en localStorage con el valor de la recompensa.

recompensasLogInBotonMcDonalds.addEventListener('click',()=>{
    if (coins < 25000) {
        Swal.fire({
            title: "No tienes la cantidad suficiente"
        });
    } else {
        const contenido = {
            title: 'Combo McDonalds',
            confirmButtonText: 'Descargar'
        };
        enviarPuntosAlBackend();
    }
});
recompensasLogInBotonKFC.addEventListener('click',()=>{
    if (coins < 25000) {
        Swal.fire({
            title: "No tienes la cantidad suficiente"
        });
    } else {
        const contenido = {
            title: 'Combo KFC',
            confirmButtonText: 'Descargar'
        };
        enviarPuntosAlBackend();
    }
});
recompensasLogInBotonCinecolombiaMensual.addEventListener('click',()=>{
    if (coins < 20000) {
        Swal.fire({
            title: "No tienes la cantidad suficiente"
        });
    } else {
        const contenido = {
            title: 'Entradas a cine X2',
            confirmButtonText: 'Descargar'
        };
        enviarPuntosAlBackend();
    }
});
recompensasLogInBotonApple.addEventListener('click',()=>{
    if (coins < 50000) {
        Swal.fire({
            title: "No tienes la cantidad suficiente"
        });
    } else {
        const contenido = {
            title: '-10% en Apple',
            confirmButtonText: 'Descargar'
        };
        enviarPuntosAlBackend();
    }
});
recompensasLogInBotonPizza.addEventListener('click',()=>{
    if (coins < 30000) {
        Swal.fire({
            title: "No tienes la cantidad suficiente"
        });
    } else {
        const contenido = {
            title: 'Pizza familiar',
            confirmButtonText: 'Descargar'
        };
        enviarPuntosAlBackend();
    }
});
recompensasLogInBotonXiaomi.addEventListener('click', () => {
    // Variable donde se almacena el contenido que se mostrará en la ventana emergente.
    if (coins < 50000) {
        Swal.fire({
            title: "No tienes la cantidad suficiente"
        });
    } else {
        const contenido = {
            title: '-10% en Xiaomi',
            confirmButtonText: 'Descargar'
        };
        enviarPuntosAlBackend();
    }
});
recompensasLogInBotonLatam.addEventListener('click',()=>{
    if (coins < 60000) {
        Swal.fire({
            title: "No tienes la cantidad suficiente"
        });
    } else {
        const contenido = {
            title: '-10% en vuelos',
            confirmButtonText: 'Descargar'
        };
        enviarPuntosAlBackend();
    }
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

//enviar datos al Back

async function enviarPuntosAlBackend() {
    try {
     //validaciones de las recompensas
      const datos = {
        user_id: userId,
        name: "premio",
        description: "Descripción del evento",
        coins: coins,
        date: new Date().toISOString(),
        origin: "premio"
      };
  
      const response = await fetch('https://nocountry-api.onrender.com/create_movement', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos),
      });
  
      if (response.ok) {
        mostrarAlerta(contenido);
 
      } else {
        const responseData = await response.json(); // Obtener información adicional del servidor si está disponible
        throw new Error(`Error en la respuesta del servidor: ${response.status} - ${response.statusText}. Detalles: ${JSON.stringify(responseData)}`);
      }
    } catch (error) {
      console.error('Error al enviar los puntos al servidor:', error);
      // Aquí puedes manejar el error de una manera más específica si es necesario
    }
  }