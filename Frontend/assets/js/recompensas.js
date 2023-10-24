let rankingBoton = document.getElementById('rankingBoton');
let modal = document.getElementById('modal');
let cierreBoton = document.getElementById('close');

rankingBoton.addEventListener('click', () => {
    modal.style.display = 'block';
});

cierreBoton.addEventListener('click', () => {
    modal.style.display = 'none';
});

