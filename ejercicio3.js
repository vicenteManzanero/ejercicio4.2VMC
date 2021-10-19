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

function ocultar(id) {
    doc.getElementById(`${id}`).setAttribute("class","oculto");
       
}
function eliminar(id) {

    doc.getElementById(`${id}`).removeAttribute("class","oculto");
    doc.getElementById(`${id}`).setAttribute("class","eliminado");   
}
function reaparecer() {
    let elementos = doc.body.querySelectorAll("p");
    for (let i = 0; i < elementos.length; i++) {
        if(elementos[i].getAttribute("class") === "oculto"){
            elementos[i].removeAttribute("class");
        }
    }


}