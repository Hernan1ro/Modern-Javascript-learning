// Generador

function* crearGenerador() {
  yield 1;
  yield "Hernan";
  yield 2;
}

const iterador = crearGenerador();

console.log(iterador);
console.log(iterador.next().value);
console.log(iterador.next().done);
console.log(iterador.next().value);
console.log(iterador);
console.log(iterador.next());

// Generador para carrito de compras

function* generadorCarrito(carrito) {
  for (let i = 0; i < carrito.length; i++) {
    yield carrito[i];
  }
}

const carrito = ["producto1", "producto2", "producto3"];

const iterador2 = generadorCarrito(carrito);

console.log(iterador2.next());
console.log(iterador2.next());
console.log(iterador2.next());
console.log(iterador2.next());
