// Module pattern

// Modern syntax

const mostrarCliente = (nombre) => {
  console.log(nombre);
};

export default mostrarCliente;

// Previus syntax

const modulo1 = (function () {
  const nombre = "Hernan";

  function hola() {
    console.log("hola");
  }

  return {
    nombre,
    hola,
  };
})();
