let recompensasLogInBotonCinecolombia = document.getElementById('recompensasLogInBotonCinecolombia');
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
        confirmButtonText: 'Descargar',
    })
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
});