console.log("Ejecutando JS...");

display = document.getElementById("display")
boton1 = document.getElementById("boton1")
suma = document.getElementById("suma")
igual = document.getElementById("igual")
clear = document.getElementById("clear")

boton1.onclick = () => {
  display.innerHTML += "1";
}

boton2.onclick = () => {
  display.innerHTML += "2";
}

suma.onclick = () => {
  display.innerHTML += "+";
}

igual.onclick = () => {
  display.innerHTML = eval(display.innerHTML);
}

clear.onclick = () => {
  display.innerHTML = "0";
}
