console.log("Ejecutando JS...");

//----- Obtener elemento de video y configurarlo
const videoMain = document.getElementById("videoMain")
videoMain.width=400;  //-- Tamaño de la pantalla de video
videoMain.height=200;
const video1 = document.getElementById("video1")
video1.width=200;  //-- Tamaño de la pantalla de video
video1.height=100;

//-- Imagen estática a mostrar cuando el video no
//-- ha arrancado
videoMain.poster="https://github.com/myTeachingURJC/2019-2020-CSAAI/raw/master/L10/test.png";
video1.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4"
//video1.play();

//-- Obtener los botones
const play = document.getElementById("play")
const stop = document.getElementById("stop")

//-- Función de retrollamada del botón de ver
play.onclick = () => {
  console.log("Click!");
  videoMain.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4"
  videoMain.play();
};

//-- Funcion de retrollamada del boton de parar
stop.onclick = () => {
  videoMain.pause();

  //-- Quitar la fuente de video, para que se muestre la
  //-- imagen definida en el atributo poster
  videoMain.src=null;
}
