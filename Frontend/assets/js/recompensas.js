let rankingBoton = document.getElementById('rankingBoton');
let modal = document.getElementById('modal');
let modalPopUp = document.getElementById('modalPopUp')
let cierreBoton = document.getElementById('close');
let cierreRanking = document.getElementById('cierre');

cierreRanking.addEventListener('mouseover', ()=>{
    cierreRanking.style.cursor='pointer';
})
rankingBoton.addEventListener('mouseover', () => {
        rankingBoton.style.cursor = 'pointer';
});
rankingBoton.addEventListener('click', () => {
    modal.style.display='flex';
    modalPopUp.style.display = 'block';
});

cierreBoton.addEventListener('click', () => {
    modal.style.display = 'none';
    modalPopUp.style.display = 'none';
});

