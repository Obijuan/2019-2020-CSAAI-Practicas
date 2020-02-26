console.log("Ejecutando JS...");

const botones = document.getElementsByClassName("digito")

for (i=0; i<botones.length; i++) {
  console.log("Boton " + i+ "--> Valor: " + botones[i].value);
}
