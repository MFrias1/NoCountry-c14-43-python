//acá el js de botón flotante
let scroll=document.getElementById("botonFlotante");
scroll.addEventListener('click',scrollTop);
function scrollTop(){
  let scroll=document.documentElement.scrollTop; //una función para establecer cuando aparece el boton según el scroll
  if (scroll>0){
    window.requestAnimationFrame(scrollTop);
    window.scrollTo (0, scroll- (scroll / 10),0);
    iconoBotonUp.style.transform="scale(0)";
  }
};

let iconoBotonUp = document.getElementById("botonFlotante"); // una función para establecer la animación del botón 

window.onscroll= function(){

    var scroll= document.documentElement.scrollTop;

    if(scroll>500){
        iconoBotonUp.style.transform= "scale(1)";
    }else if (scroll<500){
        iconoBotonUp.style.transform="scale(0)"
    };
}