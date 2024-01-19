let cuadro = document.querySelector(".caja");
let btn_naranja = document.querySelector(".boton1");
let btn_amarillo = document.querySelector(".boton2");


function cambiar_naranja(){
    cuadro.innerHTML = '<div class="naranja"></div>'

}

function cambiar_amarillo(){
    cuadro.innerHTML = '<div class="amarillo"></div>'

}

btn_naranja.addEventListener("click", cambiar_naranja);
btn_amarillo.addEventListener("click", cambiar_amarillo);