const carrito = [
  { nombre: "Monitor de 29 ", precio: "4 dolares" },
  { nombre: "Monitor de pulgadas", precio: "8 dolares" },
  { nombre: "Monitor 29 pulgadas", precio: "6 dolares" },
  { nombre: "de 29 pulgadas", precio: "1 dolares" },
  { nombre: "29 pulgadas", precio: "32 dolares" },
];

for (let i = 0; i < carrito.length; i++) {
  console.log(carrito[i].precio);
}
const nuevoArreglo = carrito.map((producto) => {
  return `${producto.nombre} y ${producto.precio}`;
});
carrito.forEach((producto) => {
  console.log(`${producto.nombre} y ${producto.precio}`);
});

console.log(nuevoArreglo);
