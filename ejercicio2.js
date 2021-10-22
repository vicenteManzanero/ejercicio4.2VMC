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


//Esta función genera la tabla de 100 x 100.
function genera_tabla() {

  // Creo un elemento "table" y un elemento "tbody".
  var tabla = document.createElement("table");
  var tblBody = document.createElement("tbody");

  // Creo las celdas.
  for (var i = 1; i <= 100; i++) {
    // Creo las hileras de la tabla.
    var hilera = document.createElement("tr");

    for (var j = 1; j <= 100; j++) {
      // Creo un elemento "td".
      var celda = document.createElement("td");
      //Creo el texto de la variable acumulado a cada celda.
      var textoCelda = document.createTextNode(acumulador);
      //Añado el texto de la variable acumulado a cada celda.
      celda.appendChild(textoCelda);
      //Creo un atributo id con el valor de acumulador
      celda.setAttribute("id", acumulador);
      hilera.appendChild(celda);
      //Incremento el acumulador para que el significado de la celda y el id cambie.
      acumulador++;
    }

    //Agrego los "td" en el elemento "tblbody".
    tblBody.appendChild(hilera);
  }

  //Posiciono el <tbody> debajo del elemento <table>.
  tabla.appendChild(tblBody);
  doc.body.appendChild(tabla);
  //Modifico el atributo "border" de la tabla y lo fijo a "2";
  tabla.setAttribute("border", "1");
  tabla.setAttribute("class", "tabla");
}
//Con esta función evalua si un número es primo o no devolviendo true si lo es y false si no lo es.

function esPrimo(num) {
  for (var i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
//La siguiente función recorre la tabla y evalúa si es primo. Si lo es, le da la clase primo que le da los estilos que pide el enunciado.
function calcularPrimo() {
  let acumulador = 1;
  for (var i = 1; i <= 100; i++) {
    for (var j = 1; j <= 100; j++) {
      var textoCelda = document.createTextNode(esPrimo(acumulador));
      if (textoCelda.textContent == "true") {
        doc.getElementById(`${acumulador}`).setAttribute("class", "primo");
      }
      acumulador++;
    }
  }
}


genera_tabla();