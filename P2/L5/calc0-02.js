console.log("Ejecutando JS...");

display = document.getElementById("display")
boton1 = document.getElementById("boton1")
suma = document.getElementById("suma")
igual = document.getElementById("igual")
clear = document.getElementById("clear")

// -- Insertar digito 1
boton1.onclick = (ev) => {
  display.innerHTML += ev.target.value;
}

//-- Insertar digito 2
boton2.onclick = (ev) => {
  display.innerHTML += ev.target.value;
}

//-- Insertar simbolo de sumar
suma.onclick = (ev) => {
  display.innerHTML += ev.target.value;
}

//-- Evaluar la expresion
igual.onclick = () => {
  display.innerHTML = eval(display.innerHTML);
}

//-- Poner a cero la expresion
clear.onclick = () => {
  display.innerHTML = "0";
}
