var data;

function preload() {
   data = loadTable("https://raw.githubusercontent.com/profesorfaco/dno037-2017-07/gh-pages/data/titanic_passengers.csv", "true", "header");
} //llama el contenido de una variable desde una fuente externa, y se lama data
 //lo último depende de si el servidor te deja extraer este archivo (o algo así)

function setup() {
   canvas = createCanvas(windowWidth, windowHeight * 0.8);
   canvas.parent('top');
   canvas.position(0, 0);
   canvas.style('z-index', '-1');
   noLoop();
   noStroke();
}

function windowResized() {  //ajuste tamaño pantalla
   resizeCanvas(windowWidth, windowHeight * 0.8);
}

function draw() {
   background(237, 34, 93);
   var total_primera = 0;
   var total_segunda = 0;
   var total_tercera = 0;
   var muertos_primera = 0;
   var muertos_segunda = 0;
   var muertos_tercera = 0;

   var mujeres_muertas = 0;
   var hombres_muertos = 0;
   var total_mujeres = 0;
   var total_hombres= 0;

   var muertos_hom_primera = 0;
   var muertas_muj_primera = 0;
   var muertos_hom_segunda = 0;
   var muertas_muj_segunda = 0;
   var muertos_hom_tercera = 0;
   var muertas_muj_tercera = 0;

   //con esto cuento el total de pasajeros por clase
   for (var a = 0; a < data.getRowCount(); a++) {
      if (data.get(a, 2) == 1) {
         total_primera++
      } else if (data.get(a, 2) == 2) {
         total_segunda++
      } else if (data.get(a, 2) == 3) {
         total_tercera++
   }
}
  //contar muertos
   for (var c = 0; c < data.getRowCount(); c++) {
     if ((data.get(c,1) == 0) && (data.get(c,5) == "male")) {
      hombres_muertos++
   } else if ((data.get(c,1) == 0) && (data.get(c,5) == "female")) {
      mujeres_muertas++
   }
 }

 //contar muertos por clase
  for (var d = 0; d < data.getRowCount(); d++) {
    if ((data.get(d,1) == 0) && (data.get(d,5) == "male") && (data.get(d, 2) == 1)){
     muertos_hom_primera++
  } else if ((data.get(d,1) == 0) && (data.get(d,5) == "female") && (data.get(d, 2) == 1)) {
     muertas_muj_primera++
  }
}

//contar muertos por clase
 for (var d = 0; d < data.getRowCount(); d++) {
   if ((data.get(d,1) == 0) && (data.get(d,5) == "male") && (data.get(d, 2) == 2)){
    muertos_hom_segunda++
 } else if ((data.get(d,1) == 0) && (data.get(d,5) == "female") && (data.get(d, 2) == 2)) {
    muertas_muj_segunda++
 }
}

//contar muertos por clase
 for (var d = 0; d < data.getRowCount(); d++) {
   if ((data.get(d,1) == 0) && (data.get(d,5) == "male") && (data.get(d, 2) == 3)){
    muertos_hom_tercera++
 } else if ((data.get(d,1) == 0) && (data.get(d,5) == "female") && (data.get(d, 2) == 3)) {
    muertas_muj_tercera++
 }
}
 //contar hombres y mujeres
  for (var c = 0; c < data.getRowCount(); c++) {
    if ((data.get(c,5) == "male")) {
     total_hombres++
  } else if ((data.get(c,5) == "female")) {
     total_mujeres++
  }
}

   //con esto, que incluye una doble condición de muerto y clase, cuento los fallecidos por clase
   for (var b = 0; b < data.getRowCount(); b++) {
      if ((data.get(b, 1) == 0) && (data.get(b, 2) == 3)) {
         muertos_tercera++
      } else if ((data.get(b, 1) == 0) && (data.get(b, 2) == 2)) {
         muertos_segunda++
      } else if ((data.get(b, 1) == 0) && (data.get(b, 2) == 1)) {
         muertos_primera++
    }
   }
   //todo esto se imprime en su consola de JavaScript
   print("En el Titanic viajaban " + data.getRowCount() + " pasajeros.")
   print("Eran " + total_primera + " pasajeros los que viajaban en la primera clase, de ellos fallecieron " + muertos_primera + ".");
   print("Eran " + total_segunda + " pasajeros los que viajaban en la segunda clase, de ellos fallecieron " + muertos_segunda + ".");
   print("Eran " + total_tercera + " pasajeros los que viajaban en la tercera clase, de ellos fallecieron " + muertos_tercera + ".");
   print("Iban " + total_mujeres + " mujeres a bordo. De ellas fallecieron " + mujeres_muertas + ".");
   print("Del total de fallecidas, " + muertas_muj_primera + " iban en primera clase, " + muertas_muj_segunda + " iban en segunda clase y " + muertas_muj_tercera + " en la tercera.")
   print("Iban " + total_hombres + " hombres a bordo. De ellos fallecieron " + hombres_muertos + ".");
   print("Del total de fallecidos, " + muertos_hom_primera + " iban en primera clase, " + muertos_hom_segunda + " iban en primera clase y " + muertos_hom_tercera + " en la tercera.")

   //esto dibuja los círculos blancos, del total de pasajeros.
   fill(255);
   ellipse((width / 4), (height / 2), (total_primera / 3), (total_primera / 3));
   ellipse((width / 4 * 2), (height / 2), (total_segunda / 3), (total_segunda / 3));
   ellipse((width / 4 * 3), (height / 2), (total_tercera / 3), (total_tercera / 3));
   //estos dibuja los círculos negros, de total de facellecidos.
   fill(0);
   ellipse((width / 4), (height / 2), (muertos_primera / 3), (muertos_primera / 3));
   ellipse((width / 4 * 2), (height / 2), (muertos_segunda / 3), (muertos_segunda / 3));
   ellipse((width / 4 * 3), (height / 2), (muertos_tercera / 3), (muertos_tercera / 3));
}
