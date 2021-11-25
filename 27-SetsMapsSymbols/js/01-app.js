// los sets no almacenan valores duplicados y son iterables
const carrito = new Set();
//Añaadir productos al carrito
carrito.add("Camisas");
carrito.add("Camisas2");
carrito.add("Camisas3");
carrito.add("Camisas4");

console.log(carrito);
// saber cuantos elementos hay
console.log(carrito.size);
// Verificar si un elemento existe dentro del arreglo
console.log(carrito.has("Camisas"));
// Comprobar y borrar al mismo tiempo
console.log("pudo borrar la camisa?: ", carrito.delete("Camisas"));
console.log(carrito);
// Iterabilidad
carrito.forEach((articulo, index, pertenece) => {
  // console.log(articulo);
  console.log(index);
  // console.log(pertenece);
});
// vaciar todos los elementos

carrito.clear();
console.log(carrito);

// Ejemplo de uso;

// Eliminar del arreglo los números repetidos
const numeros = [1, 2, 3, 4, 5, 1, 2];

const noDuplicados = new Set(numeros);
// Nuevo array sin duplicados
console.log(noDuplicados);
