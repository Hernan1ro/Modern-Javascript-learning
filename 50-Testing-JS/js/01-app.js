// Probar dos valores

function suma(a, b) {
  return a + b;
}

let resultado = suma(2, 2);

let esperado = 3;

if (resultado != esperado) {
  console.log("Hay un error");
} else {
  console.log("La prueba pasó correctamente");
}
