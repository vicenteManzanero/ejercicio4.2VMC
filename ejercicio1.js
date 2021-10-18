'use strict';
/*

Crear una función que recorra el DOM desde la etiqueta <body> del fichero
Ejercicio01.htmlEjercicio01.html y si encuentra la palabra "sexo" elimine el texto y la 
sustituya por "Contenido Bloqueado" poniendo el texto en rojo, negrita y cursiva.

*/
let doc = document;


function reemplazar(){
    // Obtener todas las etiquetas de document.body
    let tags = document.body.querySelectorAll('*');
    // Aplicar remplazo
    tags.forEach(tag => tag.innerHTML = tag.innerHTML.replaceAll('sexo', ' <span class="bloqueado">Contenido Bloqueado</span>'));
  }
  reemplazar();