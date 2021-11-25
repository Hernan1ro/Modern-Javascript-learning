import {
  nombreCliente,
  ahorro,
  mostrarInformacio,
  tieneSaldo,
  Cliente,
} from "./cliente.js";

console.log(nombreCliente, ahorro);

console.log(mostrarInformacio(nombreCliente, ahorro));
tieneSaldo(ahorro);

const cliente = new Cliente(nombreCliente, ahorro);
console.log(cliente);
console.log(cliente.mostrarInformacio());
