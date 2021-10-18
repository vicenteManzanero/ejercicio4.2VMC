"use strict";
/*

Escribe un programa que cree dinámicamente (al cargar la 
página) una tabla de 100 por 100.
Cada elemento de la tabla tendrá un número único que 
empezará en  uno  y se irá incrementando   en  uno.   
Esta página, además, tendrá un botón que será Calcular 
números primos , que hará que todas las celdas de la 
tabla que tengan números primos se pongan con un fondo 
rojo y el texto en negrita.

*/
let doc = document;
let acumulador = 1;
function genera_tabla() {

  // Crea un elemento <table> y un elemento <tbody>
  var tabla = document.createElement("table");
  var tblBody = document.createElement("tbody");

  // Crea las celdas
  for (var i = 1; i <= 10; i++) {
    // Crea las hileras de la tabla
    var hilera = document.createElement("tr");

    for (var j = 1; j <= 10; j++) {
      // Crea un elemento <td> y un nodo de texto, haz que el nodo de
      // texto sea el contenido de <td>, ubica el elemento <td> al final
      // de la hilera de la tabla
      var celda = document.createElement("td");
      var textoCelda = document.createTextNode(acumulador);
      
      celda.appendChild(textoCelda);
      celda.setAttribute("id",acumulador)
      hilera.appendChild(celda);
      acumulador++;
    }

    // agrega la hilera al final de la tabla (al final del elemento tblbody)
    tblBody.appendChild(hilera);
  }

  // posiciona el <tbody> debajo del elemento <table>
  tabla.appendChild(tblBody);
  // appends <table> into <body>
  doc.body.appendChild(tabla);
  // modifica el atributo "border" de la tabla y lo fija a "2";
  tabla.setAttribute("border", "1");
  tabla.setAttribute("class", "tabla");
}

function esPrimo(numero) {
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  return numero !== 1;
}

function calcularPrimo() {
    
    let acumulador = 1;
    // Crea un elemento <table> y un elemento <tbody>
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");
  
    // Crea las celdas
    for (var i = 1; i <= 10; i++) {
      // Crea las hileras de la tabla
      var hilera = document.createElement("tr");
  
      for (var j = 1; j <= 10; j++) {
        // Crea un elemento <td> y un nodo de texto, haz que el nodo de
        // texto sea el contenido de <td>, ubica el elemento <td> al final
        // de la hilera de la tabla
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(esPrimo(acumulador));
        if (textoCelda) {
            doc.getElementById(`acumulador`).setAttribute("class","primo");
        }
        
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
        acumulador++;
      }
  
      // agrega la hilera al final de la tabla (al final del elemento tblbody)
      tblBody.appendChild(hilera);
    }
  
    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    doc.body.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "2";
    tabla.setAttribute("border", "1");
    tabla.setAttribute("class", "tabla");
    
}
genera_tabla();