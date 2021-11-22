const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celula7r", precio: 700 },
];

const meses2 = [...meses, "Agosto"];
console.log(meses2);

const producto = { nombre: "Disco duro", precio: 300 };

const producto2 = [...carrito, producto];

console.log(producto2);
