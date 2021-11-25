import {
  nombreCliente,
  ahorro,
  mostrarInformacio,
  tieneSaldo,
  Cliente,
} from "./cliente.js";
import { Empresa } from "./empresa.js";

console.log(nombreCliente, ahorro);

console.log(mostrarInformacio(nombreCliente, ahorro));
tieneSaldo(ahorro);

const cliente = new Cliente(nombreCliente, ahorro);
console.log(cliente);
console.log(cliente.mostrarInformacio());

// Importar empresa
const empresa = new Empresa("Hernan", 100, "Webdevelopment");

console.log(empresa);
console.log(empresa.mostrarInformacio());
