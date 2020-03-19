//-- Objeto raqueta
class Raqueta
{
  constructor(ctx, x_ini, y_ini, tecla_up, tecla_down) {

    //-- Guardar el contexto
    this.ctx = ctx;

    //-- Constante: Tamaño de la raqueta
    this.width = 10;
    this.height = 40;

    //-- Constante: Posicion inicial
    this.x_ini = x_ini;
    this.y_ini = y_ini;

    //-- Constante: Velocidad
    this.v_ini = 3;

    //-- Velocidad (variable)
    this.v = 0;

    //-- Inicializar la raqueta a su posicion inicial
    this.init();

    //-- Definir las teclas
    this.tecla_up = tecla_up;
    this.tecla_down = tecla_down;
  }

  //-- Inicializar la raqueta a su posicion original
  init()
  {
    this.x = this.x_ini;
    this.y = this.y_ini;
  }

  //-- Actualizar la posición de la raqueta
  update()
  {
    this.y += this.v;
  }

  //-- Dibujar la raqueta
  draw()
  {
    //------- Dibujar las raquetas
    this.ctx.beginPath();
    this.ctx.fillStyle='white';

    //-- Raqueta izquierda
    this.ctx.rect(this.x, this.y, this.width, this.height);

    //-- Pintar!
    this.ctx.fill();
  }

}
