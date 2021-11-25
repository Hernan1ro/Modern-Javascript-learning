// Symbols and their caracteristics
const sym = Symbol("1");
const sym2 = Symbol("1");

if (sym === sym2) {
  console.log("Son iguales");
} else {
  console.log("son diferentes");
}

// Los symbols no son iguales nunca
console.log(Symbol() === Symbol());

const nombre = Symbol();
const apellido = Symbol();

const persona = {};
// Agregar nombre y apellido como llaves del objeto
persona[nombre] = "Hernan";
persona[apellido] = "Mercado";
persona.tipoCliente = "Premiun";
persona.saldo = 500;

console.log(persona);
// Para acceder a las propiedades del objeto;
// wrong way
console.log(persona.nombre);
// Right way
console.log(persona[nombre]);

// Las propiedades definidas por un Symbol no son iterables
for (let i in persona) {
  console.log(i);
}
//Solo va imprimir en consola tipo de cliente y el saldo

// Añadir una descripción del Symbol

const nombreCliente = Symbol("Nombre del cliente");
const cliente = {};

cliente[nombreCliente] = "Pedro";

console.log(cliente);
// Para acceder a pedro
console.log(cliente[nombreCliente]);
console.log(nombreCliente);
