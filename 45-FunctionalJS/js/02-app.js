const suma = (a, b) => console.log(a + b);

const multiplicar = (a, b) => console.log(a * b);

const sumarOMultiplicar = (fn) => fn(10, 20);

sumarOMultiplicar(suma);
sumarOMultiplicar(multiplicar);
