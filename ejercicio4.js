'use strict';
/*
A partir de un array de imágenes como este: 
var imagenes = ["img/feo.jpg", "img/fea.jpg", "img/feos.jpg", "img/feas.jpg"];
Escribir un programa para muestre la primera imagen en con una etiqueta <img> dentro de un
<div>. Tras dos segundos de espera se muestra la siguiente imagen. Una vez mostrada la
última imagen el carrusel volverá a comenzar por la primera.
Busca  cuatro  imágenes que estimes oportunas (aptas para menores) y colócalas en la
carpeta img de tu ejercicio.
*/


let doc = document;

let imagenes = ["./img/1.jpeg","./img/2.jpeg","./img/3.jpeg","./img/4.jpeg"];

function mostrar() {
    let i = 0;
    let div = doc.createElement("div");
    doc.body.appendChild(div);
    setInterval(() => {
        let img = doc.createElement("img");
        img.setAttribute("src",imagenes[i]);
        img.setAttribute("width","250");
        img.setAttribute("height","200");
        div.innerHTML = img.outerHTML;
        i++;
        if (i>=imagenes.length) {
            i=0;
        }
    }, 2000);

}
          mostrar();




