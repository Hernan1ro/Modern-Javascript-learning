// Probar dos valores

function suma(a, b) {
  return a + b;
}
function resta(a, b) {
  return a - b;
}

let resultado = suma(2, 2);

let esperado = 3;

expected(4).toBe(3);

resultado = resta(10, 5);
esperado = 5;
expected(esperado).toBe(5);

function expected(esperado) {
  return {
    toBe(resultado) {
      if (resultado != esperado) {
        console.error("Hay un error");
      } else {
        console.log("La prueba pasó correctamente");
      }
    },
    toEqual(resultado) {
      if (resultado != esperado) {
        console.error("Hay un error");
      } else {
        console.log("La prueba pasó correctamente");
      }
    },
  };
}
