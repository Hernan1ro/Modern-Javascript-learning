const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celula7r", precio: 700 },
];

const resultado = carrito.every((producto) => producto.precio < 1000);

console.log(resultado);

const resultado2 = carrito.some((producto) => producto.precio === 100);

console.log(resultado2);
