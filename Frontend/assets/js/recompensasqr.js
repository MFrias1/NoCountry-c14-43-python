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
const coins = parseInt(localStorage.getItem('coins'));

function decrementCoinsUser (id,coin,title1,title2,limit){
    if (coins < limit) {
        Swal.fire({
            title:title1
        });
    } else {
        const contenido = {
            title: title2,
            confirmButtonText: 'Descargar'
        };
        mostrarAlerta(contenido);
        enviarPuntosAlBackend(coin,limit,id);
    }
}
recompensasLogInBotonCinecolombia.addEventListener('click', () => {
  decrementCoinsUser(userId,coins,"No tienes cantidad suficiente",'Entrada a cine x1',10000)  
});

//Aca se agrega evento al boton para que aparezca una ventana emergente que compare las monedas en localStorage con el valor de la recompensa.

recompensasLogInBotonMcDonalds.addEventListener('click',()=>{
    decrementCoinsUser(userId,coins,"No tienes cantidad suficiente",'Combo McDonalds',25000)  
});

recompensasLogInBotonKFC.addEventListener('click',()=>{
    decrementCoinsUser(userId,coins,"No tienes cantidad suficiente",'KFC',25000) 
});

recompensasLogInBotonCinecolombiaMensual.addEventListener('click',()=>{
    decrementCoinsUser(userId,coins,"No tienes cantidad suficiente",'Entradas a cine X2',20000)  
});

recompensasLogInBotonApple.addEventListener('click',()=>{
    decrementCoinsUser(userId,coins,"No tienes cantidad suficiente",'-10% en Apple',50000)
});

recompensasLogInBotonPizza.addEventListener('click',()=>{
    decrementCoinsUser(userId,coins,"No tienes cantidad suficiente",'Pizza familiar',30000)
});

recompensasLogInBotonXiaomi.addEventListener('click', () => {
    // Variable donde se almacena el contenido que se mostrará en la ventana emergente.
    decrementCoinsUser(userId,coins,"No tienes cantidad suficiente",'-10% en Xiaomi',50000)
});

recompensasLogInBotonLatam.addEventListener('click',()=>{
    decrementCoinsUser(userId,coins,"No tienes cantidad suficiente",'-10% en vuelos',60000)
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

async function enviarPuntosAlBackend(coins,limit,idUser) {
    try {
     //validaciones de las recompensas
      const datos = {
        user_id: idUser,
        name: "premio",
        description: "Descripción del evento",
        coins: limit*-1,
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
        getUserById(idUser);
        
      } else {
        const responseData = await response.json(); // Obtener información adicional del servidor si está disponible
        throw new Error(`Error en la respuesta del servidor: ${response.status} - ${response.statusText}. Detalles: ${JSON.stringify(responseData)}`);
      }
    } catch (error) {
      console.error('Error al enviar los puntos al servidor:', error);
      // Aquí puedes manejar el error de una manera más específica si es necesario
    }
  }