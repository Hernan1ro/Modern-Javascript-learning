const cargarJsonBtn = document.querySelector("#cargarJSON");

cargarJsonBtn.addEventListener("click", obtenerDatos);

function obtenerDatos() {
  const url = "data/empleado.json";
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      mostrarHtml(response);
    });
}

function mostrarHtml({ empresa, id, nombre, trabajo }) {
  const contenido = document.querySelector(".contenido");
  contenido.innerHTML = `
    <p>${nombre}</p>
    <p>${id}</p>
    <p>${empresa}</p>
    <p>${trabajo}</p>
  `;
}
