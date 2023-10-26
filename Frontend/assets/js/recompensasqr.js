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
        text: '¡Perfecto aquí tienes tu premio. Para canjearlo, simplemente presenta este código en el establecimiento correspondiente.',
        confirmButtonText: 'Descargar',
    };
    mostrarAlerta(contenido);
});
recompensasLogInBotonMcDonalds.addEventListener('click',()=>{
    const contenido ={
        title: 'Combo Mc Donalds',
        text: '¡Perfecto aquí tienes tu premio. Para canjearlo, simplemente presenta este código en el establecimiento correspondiente.',
        confirmButtonText: 'Descargar',
    };
    mostrarAlerta(contenido);
});
recompensasLogInBotonKFC.addEventListener('click',()=>{
    const contenido = {
        title: 'Combo KFC',
        text: '¡Perfecto aquí tienes tu premio. Para canjearlo, simplemente presenta este código en el establecimiento correspondiente.'
    };
    mostrarAlerta(contenido);
});
recompensasLogInBotonCinecolombiaMensual.addEventListener('click',()=>{
    const contenido ={
        title: 'Entrada a cine x2',
        text: '¡Perfecto aquí tienes tu premio. Pra canjearlo, simplemente presenta este código en el establecimiento correspondiente.',
        confirmButtonText: 'Descargar',
    };
    mostrarAlerta(contenido);
});
recompensasLogInBotonApple.addEventListener('click',()=>{
    const contenido ={
        title: '-10% en Apple',
        text: '¡Perfecto aquí tienes tu premio. Para canjearlo, simplemente presenta este código en el establecimiento correspondiente.',
        confirmButtonText: 'Descargar',
    };
    mostrarAlerta(contenido);
});
recompensasLogInBotonPizza.addEventListener('click',()=>{
    const contenido ={
        title: "Pizza familiar Domino's",
        text: '¡Perfecto aquí tienes tu premio. Para canjearlo, simplemente presenta este código en el establecimiento correspondiente.',
        showCancelButton: true,
        confirmButtonText: 'Descargar',
        cancelButtonText: 'Cancelar',
        showLoaderOnConfirm: true,
    };
    mostrarAlerta(contenido);
});
recompensasLogInBotonXiaomi.addEventListener('click',()=>{
    //variable donde se almacena el contenido que se mostrará en la ventana emergente.
    const contenido ={
        title: "-10% en Xiaomi",
        text: '¡Perfecto aquí tienes tu premio. Para canjearlo, simplemente presenta este código en el establecimiento correspondiente.',
        confirmButtonText: 'Descargar',
    };
    mostrarAlerta(contenido);//llamado a la funcion que contiene a la ventana emergente.
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
        text: contenido.text,
        confirmButtonText: 'Descargar',
    }).then((result) => {
        if (result.isConfirmed) {
            //llama a la función para descargar el contenido de la ventana emergente.
            descargarContenido(contenido);
        }
    });
}

function descargarContenido(contenido) {
    // Concatena el título y el texto 
    const contenidoTexto = `${contenido.title}+${contenido.text}`;

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