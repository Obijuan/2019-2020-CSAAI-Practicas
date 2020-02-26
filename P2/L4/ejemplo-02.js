console.log("Ejecutando JS...");

// -- Acceder al párrafo de prueba
const test = document.getElementById('test');

//-- Funcion de retrollamada
test.onclick = () => {
  console.log("Click!");

  //-- Cambiar el color de fondo
  //-- Si no tenia color asignado, poner amarillo
  if (test.style.backgroundColor=="") {
    test.style.backgroundColor = "yellow";

  //-- Ya tiene color: quitarselo
  } else {
    test.style.backgroundColor = "";
  }
}
