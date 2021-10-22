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
//Creo el array de imágenes.
let imagenes = ["./img/1.jpeg", "./img/2.jpeg", "./img/3.jpeg", "./img/4.jpeg"];
//Creo la función.
function mostrar() {
    //Esto es el contador que va a recorrer las posiciones del array.
    let i = 0;
    //Creo un "div".
    let div = doc.createElement("div");
    //Lo pongo dentro del body.
    doc.body.appendChild(div);
    //Creo un intervalo.
    setInterval(() => {
        //Creo un elemento "img".
        let img = doc.createElement("img");
        //Le asigno el atributo "src" que apunta al array de "i" para que vaya cambiando de posición.
        img.setAttribute("src", imagenes[i]);
        //Le doy un ancho.
        img.setAttribute("width", "250");
        //Y un alto.
        img.setAttribute("height", "200");
        div.innerHTML = img.outerHTML;
        i++;
        //Aquí le digo que si "i" llega al máximo del array, que lo ponga a "0" para volver a empezar desde el principio.
        if (i >= imagenes.length) {
            i = 0;
        }
        //El 2000 quiere decir que cambie cada 2 segundos.
    }, 2000);

}
mostrar();