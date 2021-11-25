// funcion IIFE

// (function () {
//   console.log("Desde in IIFE");
//   window.nombreCliente = "Hernan";
// })();

export const nombreCliente = "Hernan";
export const ahorro = 200;

export function mostrarInformacio(nombre, ahorro) {
  return `Cliente: ${nombre} - Ahorro: ${ahorro}`;
}
export function tieneSaldo(ahorro) {
  if (ahorro > 0) {
    console.log("Si tiene saldo");
  } else {
    console.log("No tiene saldo, trabaje vago");
  }
}
export class Cliente {
  constructor(nombre, ahorro) {
    this.nombre = nombre;
    this.ahorro = ahorro;
  }
  mostrarInformacio() {
    return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`;
  }
}

export default function nuevaFuncion() {
  console.log("Este es el export default");
}
