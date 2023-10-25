/*let recompensasLogInBotonCinecolombia = document.getElementById('recompensasLogInBotonCinecolombia');
let recompensasLogInBotonMcDonalds = document.getElementById('recompensasLogInBotonMcDonalds');
let recompensasLogInBotonKFC = document.getElementById('recompensasLogInBotonKFC');
let recompensasLogInBotonCinecolombiaMensual = document.getElementById('recompensasLogInBotonCinecolombiaMensual');
let recompensasLogInBotonApple= document.getElementById('recompensasLogInBotonApple');
let recompensasLogInBotonPizza= document.getElementById('recompensasLogInBotonPizza');
let recompensasLogInBotonXiaomi = document.getElementById('recompensasLogInBotonXiaomi');
let recompensasLogInBotonLatam= document.getElementById('recompensasLogInBotonLatam');

recompensasLogInBotonCinecolombia.addEventListener('click',()=>{
    Swal.fire({
        title: 'Entrada a cine x1',
        text: '¡Perfecto aquí tienes tu premio. Pra canjearlo, simplemente presenta este código en el establecimiento correspondiente.',
        confirmButtonText: 'Descargar',
    })
});
recompensasLogInBotonMcDonalds.addEventListener('click',()=>{
    Swal.fire({
        title: 'Combo Mc Donalds',
        text: '¡Perfecto aquí tienes tu premio. Pra canjearlo, simplemente presenta este código en el establecimiento correspondiente.',
        confirmButtonText: 'Descargar',
    })
});
recompensasLogInBotonKFC.addEventListener('click',()=>{
    Swal.fire({
        title: 'Combo KFC',
        text: '¡Perfecto aquí tienes tu premio. Pra canjearlo, simplemente presenta este código en el establecimiento correspondiente.',
        confirmButtonText: 'Descargar',
    })
});
recompensasLogInBotonCinecolombiaMensual.addEventListener('click',()=>{
    Swal.fire({
        title: 'Entrada a cine x2',
        text: '¡Perfecto aquí tienes tu premio. Pra canjearlo, simplemente presenta este código en el establecimiento correspondiente.',
        confirmButtonText: 'Descargar',
    })
});
recompensasLogInBotonApple.addEventListener('click',()=>{
    Swal.fire({
        title: '-10% en Apple',
        text: '¡Perfecto aquí tienes tu premio. Pra canjearlo, simplemente presenta este código en el establecimiento correspondiente.',
        confirmButtonText: 'Descargar',
    })
});
recompensasLogInBotonPizza.addEventListener('click',()=>{
    Swal.fire({
        title: "Pizza familiar Domino's",
        text: '¡Perfecto aquí tienes tu premio. Pra canjearlo, simplemente presenta este código en el establecimiento correspondiente.',
        showCancelButton: true,
        confirmButtonText: 'Descargar',
        cancelButtonText: 'Cancelar',
        showLoaderOnConfirm: true,
        preConfirm: () => {
            return new Promise((resolve) => {
                Swal.getContent().querySelector('#botonDescarga').textContent = 'Descargando...';
                setTimeout(() => {
                    resolve();
                }, 500); // Simula una operación asincrónica
            });
        },
    });
});
recompensasLogInBotonXiaomi.addEventListener('click',()=>{
    Swal.fire({
        title: "-10% en Xiaomi",
        text: '¡Perfecto aquí tienes tu premio. Pra canjearlo, simplemente presenta este código en el establecimiento correspondiente.',
        confirmButtonText: 'Descargar',
    })
});
recompensasLogInBotonLatam.addEventListener('click',()=>{
    Swal.fire({
        title: "-10% en vuelos de Latam Airlines",
        text: '¡Perfecto aquí tienes tu premio. Pra canjearlo, simplemente presenta este código en el establecimiento correspondiente.',
        confirmButtonText: 'Descargar',
    })
});*/

/*
function descargarContenido(){
    let contenido = document.getElementById('botonDescarga');
    let enlaceDescarga=document.createElementa('a');
    enlaceDescarga.href="data.txt/plain;charset=utf-8," + encodeURIComponent(contenido);
    enlaceDescarga.download="contenido.txt";

    let eventoClick=new MouseEvent('click',{
        view: window,
        bubbles:false,
        cancelable:true
    });
    enlaceDescarga.dispatchEvent(eventoClick);
};*/
/*
function descargarContenido() {
    let contenido = 'Este es el contenido que quieres descargar en el archivo.txt';

    let enlaceDescarga = document.createElement('a');
    enlaceDescarga.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(contenido);
    enlaceDescarga.download = 'contenido.txt';

    enlaceDescarga.style.display = 'none';
    document.body.appendChild(enlaceDescarga);

    enlaceDescarga.click();

    document.body.removeChild(enlaceDescarga);
}*/

let recompensasLogInBotonCinecolombia = document.getElementById('recompensasLogInBotonCinecolombia');
let recompensasLogInBotonMcDonalds = document.getElementById('recompensasLogInBotonMcDonalds');
let recompensasLogInBotonKFC = document.getElementById('recompensasLogInBotonKFC');
let recompensasLogInBotonCinecolombiaMensual = document.getElementById('recompensasLogInBotonCinecolombiaMensual');
let recompensasLogInBotonApple = document.getElementById('recompensasLogInBotonApple');
let recompensasLogInBotonPizza = document.getElementById('recompensasLogInBotonPizza');
let recompensasLogInBotonXiaomi = document.getElementById('recompensasLogInBotonXiaomi');
let recompensasLogInBotonLatam = document.getElementById('recompensasLogInBotonLatam');

recompensasLogInBotonCinecolombia.addEventListener('click', () => {
    descargarContenido('Entrada a cine x1');
});

recompensasLogInBotonMcDonalds.addEventListener('click', () => {
    descargarContenido('Combo Mc Donalds');
});

recompensasLogInBotonKFC.addEventListener('click', () => {
    descargarContenido('Combo KFC');
});

recompensasLogInBotonCinecolombiaMensual.addEventListener('click', () => {
    descargarContenido('Entrada a cine x2');
});

recompensasLogInBotonApple.addEventListener('click', () => {
    descargarContenido('-10% en Apple');
});

recompensasLogInBotonPizza.addEventListener('click', () => {
    const contenido = {
        title: "Pizza familiar Domino's",
        text: '¡Perfecto aquí tienes tu premio. Para canjearlo, simplemente presenta este código en el establecimiento correspondiente.',
        
    };

    Swal.fire({
        title: contenido.title,
        text: contenido.text,
        showCancelButton: true,
        confirmButtonText: 'Descargar',
        showLoaderOnConfirm: true,
        preConfirm: () => {
            return new Promise((resolve) => {
                descargarContenido(contenido);
                resolve();
            })
        },
    });
});

recompensasLogInBotonXiaomi.addEventListener('click', () => {
    descargarContenido('-10% en Xiaomi');
});

recompensasLogInBotonLatam.addEventListener('click', () => {
    descargarContenido('-10% en vuelos de Latam Airlines');
});

function descargarContenido(contenido) {
    const contenidoText = `${contenido.title}\n\n${contenido.text}`;
    let enlaceDescarga = document.createElement('a');
    enlaceDescarga.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(contenidoText);
    enlaceDescarga.download = 'contenido.txt';

    enlaceDescarga.style.display = 'none';
    document.body.appendChild(enlaceDescarga);

    enlaceDescarga.click();

    document.body.removeChild(enlaceDescarga);
}
