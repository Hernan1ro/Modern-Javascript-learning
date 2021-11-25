function crearIterador(carrito) {
  let i = 0;
  return {
    siguiente: () => {
      const fin = i >= carrito.length;
      // console.log(carrito[i++]);
      const valor = !fin ? carrito[i++] : undefined;
      return {
        i,
        fin,
        valor,
      };
    },
  };
}

const carrito = ["producto", "producto2", "producto3"];

//Utilizar el iterador

const recorrerCarrito = crearIterador(carrito);

console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
