// Simulando una llamada de API
function descargarClientes() {
  return new Promise((resolve, reject) => {
    const error = false;

    setTimeout(() => {
      if (!error) {
        resolve("El listado de clientes se descargó correctamente");
      } else {
        reject("Error en la conexión");
      }
    }, 3000);
  });
}

// async await

const ejecutar = async () => {
  try {
    console.log("I'm badass");
    const respuesta = await descargarClientes();
    console.log("Im the goat");
    console.log(respuesta);
  } catch (error) {
    console.log(error);
  }
};

ejecutar();
