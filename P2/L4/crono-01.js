//-- Cronometro
console.log("Ejecuitando JS...");

//-- Elementos de la gui
const gui = {
  display : document.getElementById("display"),
  start : document.getElementById("start"),
  stop : document.getElementById("stop"),
}

//-- Objeto cronometro
const crono = {

  //-- Elemento donde mostrar el cronometro
  display : gui.display,

  //-- Tiempo
  cent : 0,  //-- Centesimas
  seg: 0,    //-- Segundos
  min: 0,    //-- Minutos

  //-- Temporizador
  timer : null,

  //-- Funcion que se ejecuta cada centesima
  tic : function() {

    //-- Incrementar en una centesima
    this.cent += 1;

    //-- 100 centésimas hacen 1 segundo
    if (this.cent == 100) {
      this.seg += 1;
      this.cent = 0;
    }

    //-- 60 segundos hacen un minuto
    if (this.seg == 60) {
      this.min = 1;
      this.seg = 0;
    }

    //-- Mostrar el valor actual
    this.display.innerHTML = this.min + ":" + this.seg + ":" + this.cent
  },

  start : function() {
    if (!this.timer) {
      //-- Lanzamos el temporizador
      this.timer = setInterval(()=>{this.tic()}, 10);
    }
  },

  stop : function() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

}

//-- Arranque del cronometro
gui.start.onclick = () => {
  console.log("Start!!");
  crono.start();
}

//-- Detener el cronómetro
gui.stop.onclick = () => {
  console.log("Stop!");
  crono.stop();
}
