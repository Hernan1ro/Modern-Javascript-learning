const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celula7r", precio: 700 },
];

meses.forEach((mes) => {
  console.log(mes);
});

const result = meses.includes("Enero");
console.log(result);

const arregloObjetos = carrito.some((producto) => {
  return producto.nombre === "Celular";
});

console.log(arregloObjetos);

const existe = meses.some((mes) => {
  return mes === "Enero";
});

console.log(existe);
