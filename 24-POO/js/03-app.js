//Herencia
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

class Empresa extends Cliente {
  constructor(nombre, saldo, numero, categoria) {
    super(nombre, saldo);
    this.numero = numero;
    this.categoria = categoria;
  }
  static saludo() {
    return "bienvenido al cajero empresas";
  }
  mostrarInformacion() {
    return `Cliente: ${this.nombre}, Saldo: ${this.saldo}, Numero: ${this.numero}, Categoria: ${this.categoria}`;
  }
}

const hernan2 = new Empresa("Hernan", 4000, 32212341234, "development");

console.log(hernan2.mostrarInformacion());

console.log(Cliente.saludo());
console.log(Empresa.saludo());
