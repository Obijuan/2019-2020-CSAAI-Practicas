console.log("Ejecutando JS...");

const botones = document.getElementsByClassName("digito")

//-- Función de retrollamada de los botones
//-- botones de la clase dígito
function digito(value)
{
  console.log("Valor: " + value);
}

for (i=0; i<botones.length; i++) {

  //-- Establecer la funcion de llamada del boton i
  //-- El parámetro ev.target contiene el boton
  //-- que ha recibido el click
  botones[i].onclick = (ev) => {
    digito(ev.target.value)
  }
}
