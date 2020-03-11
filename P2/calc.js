console.log("Ejecutando JS.......");

const display = document.getElementById("display");
const suma = document.getElementById("suma");
const igual = document.getElementById("igual");
clear = document.getElementById("clear")
let digitos = document.getElementsByClassName("digito");

//-- Estados de la calculadora
const ESTADO = {
  INIT: 0,
  OP1: 1,
  OPERATION: 2,
  OP2: 4,
}

//-- Variable de estado
let estado = ESTADO.INIT;

for (i=0; i<digitos.length; i++) {
  console.log(digitos[i]);
  digitos[i].onclick = (ev) => {
    number(ev.target.value)
    console.log(ev.target.value);
  }
}

//-- Ha llegado un dígito
function number(num)
{
  //-- Segun el estado hacemos una cosa u otra
  if (estado == ESTADO.INIT) {
    display.innerHTML = num;
    estado = ESTADO.OP1;
  } else if (estado == ESTADO.OP1 || estado == ESTADO.OP2 || estado == ESTADO.OPERATION) {
    display.innerHTML += num;
    if (estado == ESTADO.OPERATION) {
      estado = ESTADO.OP2;
    }
  }
}

suma.onclick = () => {
  console.log("Suma....");
  if (estado == ESTADO.OP1) {
    display.innerHTML += "+";
    estado = ESTADO.OPERATION;
  }
}

igual.onclick = () => {
  console.log("Igual");
  if (estado == ESTADO.OP2) {
    display.innerHTML = eval(display.innerHTML);
    estado = ESTADO.INIT;
  }
}

//-- Reset
clear.onclick = () => {
  display.innerHTML = "0";
  estado == ESTADO.INIT;
}
