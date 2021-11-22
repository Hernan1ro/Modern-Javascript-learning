class Cliente {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }
}

const hernan = new Cliente("Hernan", 400);
console.log(hernan);
// console.log("Hola papu");

const Cliente2 = class {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }
};

const hernan2 = new Cliente2("Lina", 4599);

console.log(hernan2);
