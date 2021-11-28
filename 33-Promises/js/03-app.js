const aplicarDescuento = new Promise((resolve, reject) => {
  const descuento = true;
  if (descuento) {
    resolve("Descuento aplicado");
  } else {
    reject("No se pudo aplicar el descuento");
  }
});

aplicarDescuento
  .then((resultado) => {
    descuento(resultado);
  })
  .catch((error) => console.log(error));
console.log(aplicarDescuento);

function descuento(mensaje) {
  console.log(mensaje);
}

// 3 valores posibles
// fulfilled - El promise se cumplió
// rejected - El promise no se complió
// Pending  - El primise no se ha cumplido pero tampoco se ha rechazado
