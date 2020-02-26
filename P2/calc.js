console.log("Ejecutando JS.......");

const display = document.getElementById("display");
const suma = document.getElementById("suma");
const igual = document.getElementById("igual");
botones = document.getElementsByClassName("digito");

const ESTADO = {
  INIT: 0,
  OP1: 1,
  OPERATION: 2,
  OP2_INIT: 3,
  OP2: 4,
}

//-- Variable de estado
let estado = ESTADO.INIT;

for (i=0; i<botones.length; i++) {
  console.log(botones[i]);
  botones[i].onclick = (ev) => {
    number(ev.target.value)
    console.log(ev.target.value);
  }
}

function number(num)
{
  //-- Segun el estado hacemos una cosa u otra
  if (estado == ESTADO.INIT) {
    display.innerHTML = num;
    estado = ESTADO.OP1;
  } else if (estado == ESTADO.OP1 || estado == ESTADO.OP2 || estado == ESTADO.OP2_INIT) {
    display.innerHTML += num;
    if (estado == ESTADO.OP2_INIT) {
      estado = ESTADO.OP2;
    }
  }
}

suma.onclick = () => {
  console.log("Suma....");
  if (estado == ESTADO.OP1) {
    display.innerHTML += "+";
    estado = ESTADO.OP2_INIT;
  }
}

igual.onclick = () => {
  console.log("Igual");
  if (estado == ESTADO.OP2) {
    display.innerHTML = eval(display.innerHTML);
    estado = ESTADO.INIT;
  }
}
