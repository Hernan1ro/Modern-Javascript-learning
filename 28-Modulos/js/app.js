import expFunction, {
  nombreCliente as clienteNombre,
  ahorro,
  mostrarInformacio,
  tieneSaldo,
  Cliente,
} from "./cliente.js";
import { Empresa } from "./empresa.js";

console.log(clienteNombre, ahorro);

console.log(mostrarInformacio(clienteNombre, ahorro));
tieneSaldo(ahorro);

const cliente = new Cliente(clienteNombre, ahorro);
console.log(cliente);
console.log(cliente.mostrarInformacio());

// Importar empresa
const empresa = new Empresa("Hernan", 100, "Webdevelopment");

console.log(empresa);
console.log(empresa.mostrarInformacio());

expFunction();
