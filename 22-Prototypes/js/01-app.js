const cliente = {
  nombre: "juan",
  saldo: 500,
};

console.log(cliente);

function Cliente(nombre, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;
}

const juan = new Cliente("Hernan", 1000);
console.log(juan);
