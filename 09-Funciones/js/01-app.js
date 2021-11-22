const carrito = [
  { producto: "televisor", precio: "4012 pesos" },
  { producto: "lavadora", precio: "409 pesos" },
  { producto: "carro", precio: "400 pesos" },
  { producto: "lavadora", precio: "20 pesos" },
  { producto: "radio", precio: "80 pesos" },
];

const nuevoArray1 = carrito.forEach(function (producto) {
  return `Producto: ${producto.producto} - Precio: ${producto.precio}`;
});
const nuevoArray2 = carrito.map(function (producto) {
  return `Producto: ${producto.producto} - Precio: ${producto.precio}`;
});

console.log(nuevoArray1);
console.log(nuevoArray2);
