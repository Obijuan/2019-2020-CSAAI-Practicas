
//-- Pintar todos los objetos en el canvas
function draw() {

  //-- Dibujar la Bola
  bola.draw();

  //-- Dibujar las raquetas
  raqI.draw();
  raqD.draw();

  //--------- Dibujar la red
  ctx.beginPath();

  //-- Estilo de la linea: discontinua
  //-- Trazos de 10 pixeles, y 10 de separacion
  ctx.setLineDash([10, 10]);
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 2;
  //-- Punto superior de la linea. Su coordenada x está en la mitad
  //-- del canvas
  ctx.moveTo(canvas.width/2, 0);

  //-- Dibujar hasta el punto inferior
  ctx.lineTo(canvas.width/2, canvas.height);
  ctx.stroke();

  //------ Dibujar el tanteo
  ctx.font = "100px Arial";
  ctx.fillStyle = "white";
  ctx.fillText(puntosI, 180, 80);
  ctx.fillText(puntosD, 340, 80);
}

function colision(bola, raq)
{
  //-- Comprobar si hay colisión con la raqueta izquierda
  if (bola.x >= raq.x && bola.x <=(raq.x + raq.width) &&
      bola.y >= raq.y && bola.y <=(raq.y + raq.height)) {
    return true;
  }
}

//---- Bucle principal de la animación
function animacion()
{

  //-- Actualizar la raqueta con la velocidad actual
  raqI.update();
  raqD.update();

  //-- Comprobar si la bola ha alcanzado el límite derecho
  //-- Si es así, se cambia de signo la velocidad, para
  // que "rebote" y vaya en el sentido opuesto
  if (bola.x >= canvas.width) {
    //-- Hay colisión. Cambiar el signo de la bola
    bola.vx = bola.vx * -1;

    //-- Punto para el jugador izquierdo
    puntosI += 1;
  }

  //-- Si la bola alcanza el límite izquierdo
  if (bola.x <= bola.size) {
    //-- Hay colisión. Cambiar el signo de la bola
    bola.vx = bola.vx * -1;

    //-- Punto para el jugador derecho
    puntosD += 1;
  }

  //-- Rebote en las paredes superiores e inferiores
  if (bola.y <= bola.size || bola.y >= canvas.height) {
    //-- Hay colisión. Cambiar el signo de la bola
    bola.vy = bola.vy * -1;
  }

  //-- Comprobar la solicion de la bola con cada una de las raquetas
  [raqI, raqD].forEach(raq => {
     if (colision(bola, raq)) {
       bola.vx = bola.vx * -1;
       bola.vy = raq.v;
     }
  });

  //-- Actualizar coordenada x de la bola, en funcion de
  //-- su velocidad
  bola.update()

  //-- Borrar la pantalla
  ctx.clearRect(0,0, canvas.width, canvas.height);

  //-- Dibujar el nuevo frame
  draw();
}

//-- Obtener el objeto canvas
const canvas = document.getElementById("canvas");

//-- Obtener el contexto para pintar en el canvas
const ctx = canvas.getContext("2d");

//-- Crear la bola
const bola = new Bola(ctx);

//-- Crear las raquetas
const raqI = new Raqueta(ctx, 50, 100, "q", "a");
const raqD = new Raqueta(ctx, 540, 300, "ArrowUp", "ArrowDown");

//-- Tanteo
let puntosI = 0;
let puntosD = 0;

//-- Arrancar la animación
setInterval(()=>{
  animacion();
},16);

//-- Retrollamada de las teclas
window.onkeydown = (e) => {

  //-- Comprobar las teclas de cada raqueta
  [raqI, raqD].forEach(raq => {
    switch(e.key) {
      case raq.tecla_up:
        raq.v = raq.v_ini * -1;
        return;
      case raq.tecla_down:
        raq.v = raq.v_ini;
        return;
    }
  });

  //-- Comprobar resto de teclas
  switch (e.key) {
    case " ":
      //-- Llevar bola a su posicion incicial
      bola.init();

      //-- Darle velocidad
      bola.vx = bola.vx_ini;
      bola.vy = raqI.v;


    default:
  }
}

//-- Retrollamada de la liberacion de teclas
window.onkeyup = (e) => {

  //-- Comprobar si la liberacion es de las raquetas
  //-- Si es así, se pone su velocidad a 0
  [raqI, raqD].forEach((raq, i) => {
    if (e.key == raq.tecla_up || e.key == raq.tecla_down){
      //-- Quitar velocidad de la raqueta
      raq.v = 0;
    }
  });
}
