'use strict';
/*
Haz un programa que tenga cinco elementos <p> y al hacer clic 
sobre ellos desaparezcan (se oculten) y al hacer doble clic los 
elimine. También deberá tener un botón  Reaparecer  que
hará que aparezcan todos los elementos desaparecidos 
(pero no los eliminados). Dota de algún estilo CSS para que los 
párrafos sean distinguibles (altura, longitud, color y un borde).

NOTA: utiliza las propiedades  CSS  visibility: hidden;  para  
desaparecer  y  display: none;  para elminar.
*/

let doc = document;
//En esta función,al dale un click, obtengo el id y lo paso como parámetro para asignarle un atributo con la clase oculto.
function ocultar(id) {
    doc.getElementById(`${id}`).setAttribute("class", "oculto");

}
//Con esta otra, elimino el atributo creado arriba y le doy otro de clase eliminado
function eliminar(id) {
    doc.getElementById(`${id}`).removeAttribute("class", "oculto");
    doc.getElementById(`${id}`).setAttribute("class", "eliminado");
}
//Con la siguiente, evalúo el atributo que tiene y si es el da la clase oculto le borro la clase para que vuelva a aparecer, y si tiene el eliminado, no hace nada.
function reaparecer() {
    let elementos = doc.body.querySelectorAll("p");
    for (let i = 0; i < elementos.length; i++) {
        if (elementos[i].getAttribute("class") === "oculto") {
            elementos[i].removeAttribute("class");
        }
    }
}