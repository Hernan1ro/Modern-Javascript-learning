function Cliente(nombre, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function () {
  let tipo;
  if (this.saldo > 10000) {
    tipo = "Gold";
  } else if (this.saldo > 5000) {
    tipo = "Platinum";
  } else {
    tipo = "Normal";
  }
  return tipo;
};

Cliente.prototype.nombreClienteSaldo = function () {
  return `Nombre: ${this.nombre}, Saldo:${
    this.saldo
  }, Tipo de cliente: ${this.tipoCliente()}`;
};

Cliente.prototype.retirarSaldo = function (retira) {
  this.saldo -= retira;
};

function Persona(nombre, saldo, telefono) {
  Cliente.call(this, nombre, saldo);
  this.telefono = telefono;
}
// Deben crearse los prototypes antes de instanciarlos para evitar errores

Persona.prototype = Object.create(Cliente.prototype);
Persona.prototype.constructor = Cliente;
// Instanciando

const Hernan = new Persona("Hernán", 9000000, 3225183270);

console.log(Hernan);

console.log(Hernan.nombreClienteSaldo());

Persona.prototype.mostrarTelefono = function () {
  return `El telefono de ${this.nombre} es: ${this.telefono}`;
};

console.log(Hernan.mostrarTelefono());
