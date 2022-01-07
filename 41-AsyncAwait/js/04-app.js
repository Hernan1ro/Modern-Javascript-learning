function descargarNuevosClientes() {
  return new Promise((resolve) => {
    console.log("descargando nuevos clientes...");
    setTimeout(() => {
      resolve("Los clientes fueron descargados");
    }, 5000);
  });
}

function descargarNuevosPedidos() {
  return new Promise((resolve) => {
    console.log("descargando nuevos pedidos...");
    setTimeout(() => {
      resolve("Pedidos descargados");
    }, 3000);
  });
}

const app = async () => {
  try {
    const respuesta = await Promise.all([
      descargarNuevosClientes(),
      descargarNuevosPedidos(),
    ]);
    console.log(respuesta);
  } catch (error) {
    console.log(error);
  }
};

app();
