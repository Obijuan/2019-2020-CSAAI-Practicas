console.log("Ejecutando JS...");

//----- Obtener elemento de video y configurarlo
const emision = document.getElementById("emision");
const video1 = document.getElementById("video1");
const video2 = document.getElementById("video2");
const video3 = document.getElementById("video3");


//-- Obtener los botones
const play = document.getElementById("play")
const src1 = document.getElementById("src1")
const src2 = document.getElementById("src2")
const src3 = document.getElementById("src3")


//-- Función de retrollamada del botón de ver
play.onclick = () => {
  console.log("Click!");

  video1.play();
  video2.play();
  video3.play();
  emision.play();
  emision.src = video1.src;
  emision.currentTime = video1.currentTime;
};

//-- Funcion de retrollamada del boton de parar
src1.onclick = () => {
  emision.src = video1.src;
  emision.currentTime = video1.currentTime;
  //video1.pause();

  //-- Quitar la fuente de video, para que se muestre la
  //-- imagen definida en el atributo poster
  //video1.src=null;
}

//-- Funcion de retrollamada del boton de parar
src2.onclick = () => {
  emision.src = video2.src;
  emision.currentTime = video2.currentTime;
  //video1.pause();

  //-- Quitar la fuente de video, para que se muestre la
  //-- imagen definida en el atributo poster
  //video1.src=null;
}

//-- Funcion de retrollamada del boton de parar
src3.onclick = () => {
  emision.src = video3.src;
  emision.currentTime = video3.currentTime;
}
