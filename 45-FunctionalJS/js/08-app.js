// Closures

const obtenerCliente = () => {
  const nombre = "Hernan";

  function mostrarNombre() {
    console.log(nombre);
  }

  return mostrarNombre;
};

const mostrar = obtenerCliente();

mostrar();
