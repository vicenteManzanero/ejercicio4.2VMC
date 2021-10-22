'use strict';
/*

Crear una función que recorra el DOM desde la etiqueta <body> del fichero
Ejercicio01.htmlEjercicio01.html y si encuentra la palabra "sexo" elimine el texto y la 
sustituya por "Contenido Bloqueado" poniendo el texto en rojo, negrita y cursiva.

*/
let doc = document;


function reemplazar() {
  // Aquí guardo todas las etiquetas a partir del body dentro de la etiqueta elementos
  let elementos = document.body.querySelectorAll('*');
  // Aquí hago un "forEach" y digo que cambie la palabra clave por lo que pide el ejercicio
  elementos.forEach(elementos => elementos.innerHTML = elementos.innerHTML.replaceAll('sexo', ' <span class="bloqueado">Contenido Bloqueado</span>'));
}
reemplazar();