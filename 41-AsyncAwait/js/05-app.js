const url = "https://picsum.photos/list";

document.addEventListener("DOMContentLoaded", obtenerDatos);

function obtenerDatos() {
  fetch(url)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
}

async function obtenerDatos1() {
  try {
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
}

obtenerDatos1();
