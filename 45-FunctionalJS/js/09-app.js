const suma = (a, b, c) => {
  return a + b + c;
};

const partial = (a) => (b, c) => suma(a, b, c);

const primerNumero = partial(5);
const resultado = primerNumero(4, 5);

const partial2 = (a) => (b) => (c) => suma(a, b, c);

const resultado2 = partial2(1)(2)(3);

console.log(suma(1, 3, 3));
console.log(resultado);
console.log(resultado2);
