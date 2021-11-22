class Cliente {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }
  mostrarInformacion() {
    return `Cliente: ${this.nombre}, Saldo: ${this.saldo}`;
  }
  static saludo() {
    return "Bienvenido al cajero";
  }
}

const hernan = new Cliente("Hernan", 400);
console.log(hernan);
console.log(hernan.mostrarInformacion());
console.log(Cliente.saludo());
// console.log("Hola papu");

const Cliente2 = class {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }
  mostrarInformacion() {
    return `Cliente: ${this.nombre}, Saldo: ${this.saldo}`;
  }
  static saludo() {
    return "Bienvenido al cajero";
  }
};

const hernan2 = new Cliente2("Lina", 4599);

console.log(hernan2);
