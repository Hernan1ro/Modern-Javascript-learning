// No son iterables, mantienen las propiedades del objeto en privado
// Solo aceptan objetos
const producto = {
  idProducto: 10,
};

const weakmap = new WeakMap();

weakmap.set(producto, "Monitor");

//Verificar si existe un elemento en el weakmap
console.log(weakmap.has(producto));
// Obtener un elemento del weakmap
console.log(weakmap.get(producto));

// Borrar un elemento del weakmap
console.log(weakmap.delete(producto));

console.log(weakmap);
// No puedes saber el tamaño en un weakmap
console.log(weakmap.size);
