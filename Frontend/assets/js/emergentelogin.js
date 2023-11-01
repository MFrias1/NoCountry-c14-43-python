let juegoInhabilitado= document.getElementById('juegoInhabilitado');
juegoInhabilitado.addEventListener('click', ()=>{

    Swal.fire({
        title: '¡ESTAMOS EN MANTENIMIENTO!',
        text: 'El juego se habilitará próximamente'
      })

});