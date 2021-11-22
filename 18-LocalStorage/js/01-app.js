localStorage.setItem("nombre", "Hernan");
// sessionStorage.setItem("nombre", "Hernan");
const producto = {
  nombre: "Televisor de 20 pulgadas",
  precio: 300,
};

// console.log(producto);
const stringProducto = JSON.stringify(producto);
console.log(stringProducto);

localStorage.setItem("producto", stringProducto);
