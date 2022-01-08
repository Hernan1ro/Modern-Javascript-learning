// New binding

function Auto(model, color) {
  this.modelo = model;
  this.color = color;
}

const auto = new Auto("Camaro", "Negro");

console.log(auto);

// Window binding

window.color = "negro";
function hola() {
  console.log(color);
}

hola();
